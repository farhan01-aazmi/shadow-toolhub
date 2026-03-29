"""Quick test to verify Groq API connection and see raw output."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from groq import Groq
from config import GROQ_API_KEY, GROQ_MODEL

client = Groq(api_key=GROQ_API_KEY)

response = client.chat.completions.create(
    model=GROQ_MODEL,
    messages=[
        {"role": "user", "content": "Write a short 100-word paragraph about data privacy for US users. Reply with ONLY plain text, no JSON."}
    ],
    temperature=0.7,
    max_tokens=500,
)

print("=== RAW GROQ RESPONSE ===")
print(response.choices[0].message.content)
print("=== END ===")
