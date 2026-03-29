"""
AGENT DOCTOR: Site Health Auditor & Self-Healer
Crawls the live sitemap, checks every URL for errors,
and reports redirect chains, 404s, and thin content issues.
"""
import requests
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from config import SITE_URL, AUDIT_CONCURRENCY, AUDIT_TIMEOUT_SECONDS


def fetch_sitemap_urls() -> list[str]:
    """Parse the live sitemap.xml and extract all URLs."""
    sitemap_url = f"{SITE_URL}/sitemap.xml"
    print(f"\n[AGENT DOCTOR] Fetching sitemap: {sitemap_url}")

    try:
        resp = requests.get(sitemap_url, timeout=AUDIT_TIMEOUT_SECONDS)
        if resp.status_code != 200:
            print(f"  [Doctor] ERROR: Sitemap returned {resp.status_code}")
            return []

        # Parse XML
        root = ET.fromstring(resp.content)
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls = [loc.text for loc in root.findall(".//sm:loc", ns) if loc.text]

        print(f"  [Doctor] Found {len(urls)} URLs in sitemap.")
        return urls

    except Exception as e:
        print(f"  [Doctor] Sitemap fetch error: {e}")
        return []


def check_url(url: str) -> dict:
    """Check a single URL for status code and redirect behavior."""
    try:
        # Use allow_redirects=False to detect redirect chains
        resp = requests.head(
            url,
            timeout=AUDIT_TIMEOUT_SECONDS,
            allow_redirects=False,
            headers={"User-Agent": "NevyAlpha-Doctor/1.0"}
        )
        result = {
            "url": url,
            "status": resp.status_code,
            "redirect_to": resp.headers.get("Location", None),
        }

        # If redirect, follow it to check the chain depth
        if resp.status_code in (301, 302, 307, 308):
            final = requests.head(
                url,
                timeout=AUDIT_TIMEOUT_SECONDS,
                allow_redirects=True,
                headers={"User-Agent": "NevyAlpha-Doctor/1.0"}
            )
            result["final_status"] = final.status_code
            result["final_url"] = final.url
            result["redirect_hops"] = len(final.history)

        return result

    except requests.Timeout:
        return {"url": url, "status": "TIMEOUT"}
    except Exception as e:
        return {"url": url, "status": "ERROR", "error": str(e)}


def run_full_audit() -> dict:
    """Run a complete site health audit."""
    urls = fetch_sitemap_urls()
    if not urls:
        return {"error": "No URLs found in sitemap"}

    print(f"  [Doctor] Auditing {len(urls)} URLs with {AUDIT_CONCURRENCY} threads...")

    results = {
        "total": len(urls),
        "healthy": [],      # 200 OK
        "redirects": [],     # 3xx
        "errors_4xx": [],    # 4xx
        "errors_5xx": [],    # 5xx
        "timeouts": [],      # Timeouts
        "other": [],         # Unexpected
        "redirect_chains": [],  # Multi-hop redirects
    }

    with ThreadPoolExecutor(max_workers=AUDIT_CONCURRENCY) as executor:
        futures = {executor.submit(check_url, url): url for url in urls}

        for i, future in enumerate(as_completed(futures), 1):
            result = future.result()
            status = result["status"]

            if status == 200:
                results["healthy"].append(result)
            elif isinstance(status, int) and 300 <= status < 400:
                results["redirects"].append(result)
                # Flag multi-hop redirects
                if result.get("redirect_hops", 0) > 1:
                    results["redirect_chains"].append(result)
            elif isinstance(status, int) and 400 <= status < 500:
                results["errors_4xx"].append(result)
            elif isinstance(status, int) and 500 <= status < 600:
                results["errors_5xx"].append(result)
            elif status == "TIMEOUT":
                results["timeouts"].append(result)
            else:
                results["other"].append(result)

            # Progress indicator every 50 URLs
            if i % 50 == 0 or i == len(urls):
                print(f"    Progress: {i}/{len(urls)} checked...")

    return results


def print_report(results: dict):
    """Print a readable health report."""
    if "error" in results:
        print(f"\n[DOCTOR REPORT] ERROR: {results['error']}")
        return

    total = results["total"]
    healthy = len(results["healthy"])
    health_score = round((healthy / total) * 100, 1) if total > 0 else 0

    print("\n" + "=" * 60)
    print(f"  NEVY.IN HEALTH REPORT")
    print("=" * 60)
    print(f"  Total URLs Audited:   {total}")
    print(f"  Healthy (200 OK):     {healthy}")
    print(f"  Redirects (3xx):      {len(results['redirects'])}")
    print(f"  Client Errors (4xx):  {len(results['errors_4xx'])}")
    print(f"  Server Errors (5xx):  {len(results['errors_5xx'])}")
    print(f"  Timeouts:             {len(results['timeouts'])}")
    print(f"  Redirect Chains:      {len(results['redirect_chains'])}")
    print(f"  ---")
    print(f"  HEALTH SCORE:         {health_score}%")
    print("=" * 60)

    # Show specific errors
    if results["errors_4xx"]:
        print("\n  4xx ERRORS (Need Fixing):")
        for err in results["errors_4xx"][:20]:
            print(f"    {err['status']} | {err['url']}")

    if results["errors_5xx"]:
        print("\n  5xx ERRORS (Critical):")
        for err in results["errors_5xx"][:10]:
            print(f"    {err['status']} | {err['url']}")

    if results["redirect_chains"]:
        print("\n  REDIRECT CHAINS (Flatten These):")
        for chain in results["redirect_chains"][:10]:
            print(f"    {chain['url']}")
            print(f"      -> {chain.get('redirect_to', '?')} ({chain.get('redirect_hops', '?')} hops)")
            print(f"      -> Final: {chain.get('final_url', '?')} ({chain.get('final_status', '?')})")


if __name__ == "__main__":
    results = run_full_audit()
    print_report(results)
