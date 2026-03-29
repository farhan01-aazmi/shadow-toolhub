# ======================================================================
# NEVY-ALPHA CONFIGURATION
# All API keys and settings in one place.
# ======================================================================

SITE_URL = "https://www.nevy.in"
SITE_NAME = "Nevy.in"

# --- FREE AI Brain (Groq Cloud - Llama 3) ---
# Get your FREE key: https://console.groq.com/keys
GROQ_API_KEY = "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"
GROQ_MODEL = "llama-3.3-70b-versatile"

# --- Content Settings ---
ARTICLE_MIN_WORDS = 1500
THIN_CONTENT_THRESHOLD = 300  # Pages below this word count get enriched

# --- USA Market Focus ---
TARGET_GEO = "US"
TARGET_LANGUAGE = "en-US"
HIGH_CPC_NICHES = [
    "tax filing tools",
    "passport photo resize online",
    "mortgage calculator USA",
    "currency converter USD",
    "crypto tax calculator",
    "image compressor for email",
    "PDF merge tool free",
    "loan EMI calculator",
    "meta tag generator SEO",
    "word count checker",
]

# --- Blog Output Path (relative to project root) ---
BLOG_OUTPUT_DIR = "src/lib/blog/authority"

# --- Crawl Audit Settings ---
AUDIT_CONCURRENCY = 5
AUDIT_TIMEOUT_SECONDS = 10
