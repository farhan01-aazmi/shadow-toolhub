"""
AGENT SCOUT: USA Market Trend Discovery
Uses free DuckDuckGo search to find high-CPC keyword opportunities
and competitor content gaps for Nevy.in tools.
"""
import requests
import json
from config import HIGH_CPC_NICHES, SITE_URL


def search_duckduckgo(query: str, max_results: int = 5) -> list[dict]:
    """Free search via DuckDuckGo Instant Answer API."""
    url = "https://api.duckduckgo.com/"
    params = {
        "q": query,
        "format": "json",
        "no_redirect": 1,
        "no_html": 1,
        "skip_disambig": 1,
    }
    try:
        resp = requests.get(url, params=params, timeout=10)
        data = resp.json()
        results = []
        # Parse related topics for keyword ideas
        for topic in data.get("RelatedTopics", [])[:max_results]:
            if "Text" in topic:
                results.append({
                    "text": topic["Text"],
                    "url": topic.get("FirstURL", ""),
                })
        return results
    except Exception as e:
        print(f"  [Scout] DuckDuckGo error: {e}")
        return []


def find_content_gaps() -> list[dict]:
    """
    Scan high-CPC niches and find topics where Nevy.in
    can create authoritative content.
    """
    print("\n[AGENT SCOUT] Scanning USA Market Trends...")
    opportunities = []

    for niche in HIGH_CPC_NICHES:
        query = f"{niche} free online tool 2026"
        results = search_duckduckgo(query)

        # Check if Nevy.in already ranks
        nevy_present = any(SITE_URL in r.get("url", "") for r in results)

        opportunities.append({
            "niche": niche,
            "query": query,
            "competitor_count": len(results),
            "nevy_ranking": nevy_present,
            "top_competitor": results[0]["url"] if results else "N/A",
            "gap_score": 10 if not nevy_present else 3,  # Higher = more opportunity
        })

    # Sort by gap score (highest opportunity first)
    opportunities.sort(key=lambda x: x["gap_score"], reverse=True)

    print(f"  [Scout] Found {len(opportunities)} opportunities.")
    for opp in opportunities[:5]:
        status = "RANKED" if opp["nevy_ranking"] else "GAP"
        print(f"    [{status}] {opp['niche']} (Score: {opp['gap_score']})")

    return opportunities


def get_trending_topics() -> list[str]:
    """
    Return a list of blog topics based on high-CPC gaps.
    These are formatted as article titles for Agent Architect.
    """
    gaps = find_content_gaps()
    topics = []

    topic_templates = [
        "The Complete US Guide to {niche}: Privacy, Security & Best Practices in 2026",
        "Why Americans Are Switching to Client-Side {niche} Tools (Data Privacy Alert)",
        "{niche}: How Free Online Tools Are Replacing Expensive Software in the US",
        "CCPA Compliance and {niche}: What Every US Business Needs to Know",
        "5 Hidden Benefits of Using Browser-Based {niche} (No Upload Required)",
    ]

    for gap in gaps:
        if not gap["nevy_ranking"]:  # Only create content for gaps
            niche_title = gap["niche"].title()
            for template in topic_templates[:2]:  # 2 articles per gap
                topics.append(template.format(niche=niche_title))

    print(f"\n  [Scout] Generated {len(topics)} article topics for Architect.")
    return topics[:25]  # Cap at 25 as per directive


if __name__ == "__main__":
    topics = get_trending_topics()
    print("\n--- ARTICLE TOPICS FOR ARCHITECT ---")
    for i, t in enumerate(topics, 1):
        print(f"  {i}. {t}")
