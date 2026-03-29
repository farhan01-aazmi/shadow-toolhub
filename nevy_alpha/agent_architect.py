"""
AGENT ARCHITECT: Authority Content Generator
Uses Groq (FREE Llama-3 70B) to generate 1,500+ word expert articles
optimized for AdSense approval and USA high-CPC traffic.
"""
import os
import json
import re
from datetime import datetime
from groq import Groq
from config import GROQ_API_KEY, GROQ_MODEL, ARTICLE_MIN_WORDS, SITE_NAME


# Initialize Groq client
client = None
if GROQ_API_KEY and GROQ_API_KEY != "YOUR_GROQ_API_KEY_HERE":
    client = Groq(api_key=GROQ_API_KEY)


SYSTEM_PROMPT = f"""You are an expert content writer for {SITE_NAME}, a privacy-first online tool hub.
Your articles must:
- Be written in American English (use "optimize", "analyze", "color" etc.)
- Target US audiences with references to US laws (CCPA, COPPA), IRS forms, US state regulations
- Be 1,500+ words minimum
- Include H2 and H3 headings for SEO structure
- Include a FAQ section at the end with 3-5 questions
- Reference {SITE_NAME} tools naturally (not spammy)
- Focus on data privacy, security benefits, and client-side processing
- Use professional but accessible tone
- Include actionable "How-To" sections
- Never use placeholder text or lorem ipsum
- Format output as valid JSON with keys: title, slug, excerpt, tags, content (HTML)
"""


def generate_article(topic: str) -> dict | None:
    """Generate a full authority article using Groq/Llama-3."""
    if not client:
        print("  [Architect] ERROR: Groq API key not configured. Set it in config.py")
        return None

    print(f"\n[AGENT ARCHITECT] Writing: {topic}")

    user_prompt = f"""Write a comprehensive, SEO-optimized article about: "{topic}"

The article MUST be at least 1,500 words. Include:
1. An engaging introduction explaining why this matters to US users
2. Detailed "How-To" guide section with step-by-step instructions
3. A "Security & Privacy Benefits" section mentioning client-side processing
4. A "US Compliance" section referencing CCPA and relevant US regulations
5. A "Comparison" section (Free tools vs Paid alternatives)
6. FAQ section with 5 questions and detailed answers
7. A conclusion with a call-to-action to try {SITE_NAME}

Return ONLY valid JSON (no markdown, no code blocks) with these keys:
- "title": SEO-optimized title (under 60 chars)
- "slug": URL-friendly slug
- "excerpt": Meta description (150-160 chars)
- "tags": array of 5-8 relevant keywords
- "content": Full HTML content with h2, h3, p, ul, li tags
"""

    try:
        response = client.chat.completions.create(
            model=GROQ_MODEL,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            temperature=0.7,
            max_tokens=8000,
        )

        raw = response.choices[0].message.content.strip()

        # Clean potential markdown wrapping
        if raw.startswith("```"):
            raw = re.sub(r"^```(?:json)?\s*", "", raw)
            raw = re.sub(r"\s*```$", "", raw)

        article = json.loads(raw)

        # Validate minimum word count
        content_text = re.sub(r"<[^>]+>", "", article.get("content", ""))
        word_count = len(content_text.split())

        if word_count < ARTICLE_MIN_WORDS:
            print(f"  [Architect] WARNING: Article only {word_count} words (min: {ARTICLE_MIN_WORDS})")

        article["word_count"] = word_count
        article["generated_at"] = datetime.now().isoformat()

        print(f"  [Architect] Generated: \"{article['title']}\" ({word_count} words)")
        return article

    except json.JSONDecodeError as e:
        print(f"  [Architect] JSON Parse Error: {e}")
        print(f"  [Architect] Raw output (first 200 chars): {raw[:200]}")
        return None
    except Exception as e:
        print(f"  [Architect] Error: {e}")
        return None


def save_article(article: dict, output_dir: str) -> str | None:
    """Save generated article as a JSON file for the Next.js blog system."""
    if not article:
        return None

    os.makedirs(output_dir, exist_ok=True)
    slug = article.get("slug", "untitled")
    filepath = os.path.join(output_dir, f"{slug}.json")

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(article, f, indent=2, ensure_ascii=False)

    print(f"  [Architect] Saved: {filepath}")
    return filepath


def batch_generate(topics: list[str], output_dir: str) -> list[str]:
    """Generate multiple articles from a list of topics."""
    print(f"\n[AGENT ARCHITECT] Batch generating {len(topics)} articles...")
    saved_files = []

    for i, topic in enumerate(topics, 1):
        print(f"\n--- Article {i}/{len(topics)} ---")
        article = generate_article(topic)
        if article:
            path = save_article(article, output_dir)
            if path:
                saved_files.append(path)

    print(f"\n[AGENT ARCHITECT] Batch complete: {len(saved_files)}/{len(topics)} articles saved.")
    return saved_files


if __name__ == "__main__":
    test_topic = "The Complete US Guide to Image Compression: Privacy, Security & Best Practices in 2026"
    article = generate_article(test_topic)
    if article:
        save_article(article, "./test_output")
