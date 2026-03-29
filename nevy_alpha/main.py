"""
NEVY-ALPHA: Multi-Agent SEO Engine
===================================
Autonomous system that runs three agents in sequence:
  1. SCOUT  — Discovers USA market trends & content gaps
  2. ARCHITECT — Generates 1,500+ word authority articles via Groq/Llama-3
  3. DOCTOR — Audits the site for 404s, redirect chains, and errors

Usage:
  python main.py              # Run all agents once
  python main.py --scout      # Run only scout
  python main.py --architect  # Run only architect
  python main.py --doctor     # Run only doctor
"""
import sys
import os
from datetime import datetime

from agent_scout import get_trending_topics
from agent_architect import batch_generate
from agent_doctor import run_full_audit, print_report
from config import BLOG_OUTPUT_DIR


def run_scout():
    """Phase 1: Discover content opportunities."""
    print("\n" + "=" * 60)
    print("  PHASE 1: AGENT SCOUT - USA Market Intelligence")
    print("=" * 60)
    topics = get_trending_topics()
    return topics


def run_architect(topics: list[str]):
    """Phase 2: Generate authority content."""
    print("\n" + "=" * 60)
    print("  PHASE 2: AGENT ARCHITECT - Content Factory")
    print("=" * 60)

    # Resolve output directory relative to project root
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_dir = os.path.join(project_root, BLOG_OUTPUT_DIR)

    saved = batch_generate(topics, output_dir)
    return saved


def run_doctor():
    """Phase 3: Audit site health."""
    print("\n" + "=" * 60)
    print("  PHASE 3: AGENT DOCTOR - Health Audit")
    print("=" * 60)
    results = run_full_audit()
    print_report(results)
    return results


def main():
    start = datetime.now()
    print("\n" + "#" * 60)
    print(f"  NEVY-ALPHA v1.0 — Multi-Agent SEO Engine")
    print(f"  Started: {start.strftime('%Y-%m-%d %H:%M:%S')}")
    print("#" * 60)

    args = sys.argv[1:]

    if "--scout" in args:
        run_scout()
    elif "--architect" in args:
        topics = run_scout()
        run_architect(topics)
    elif "--doctor" in args:
        run_doctor()
    else:
        # Full pipeline
        topics = run_scout()
        run_architect(topics)
        run_doctor()

    elapsed = (datetime.now() - start).total_seconds()
    print(f"\n[COMPLETE] Total runtime: {elapsed:.1f}s")
    print(f"[NEXT RUN] Schedule this script to run every 24 hours for continuous optimization.")


if __name__ == "__main__":
    main()
