"""
Direct article generation for 5 high-value topics.
Bypasses Scout to guarantee content output.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from agent_architect import generate_article, save_article

TOPICS = [
    "The Complete US Guide to Online Image Compression: Privacy, Security & Best Practices in 2026",
    "How Free Loan Calculators Are Replacing Expensive Financial Software in the US",
]

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "lib", "blog", "authority")

if __name__ == "__main__":
    print(f"Generating {len(TOPICS)} authority articles...")
    print(f"Output: {OUTPUT_DIR}\n")
    
    for i, topic in enumerate(TOPICS, 1):
        print(f"\n{'='*50}")
        print(f"Article {i}/{len(TOPICS)}")
        print(f"{'='*50}")
        article = generate_article(topic)
        if article:
            save_article(article, OUTPUT_DIR)
        else:
            print(f"  FAILED: {topic}")
    
    print("\nDone!")
