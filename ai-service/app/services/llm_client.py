import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY not found in environment")

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro",
    generation_config={
        "temperature": 0.4,
        "top_p": 0.9,
        "max_output_tokens": 1024
    }
)


def call_gemini(question: str, context: dict, plan: str) -> str:
    """
    Gemini NEVER fetches data.
    It only reasons on provided context.
    """

    prompt = build_prompt(question, context, plan)

    response = model.generate_content(prompt)

    return response.text.strip()


def build_prompt(question: str, context: dict, plan: str) -> str:
    return f"""
You are a senior data analyst AI.

PLAN:
{plan}

BUSINESS DATA (JSON):
{context}

TASK:
Answer the following question using ONLY the data provided.
Explain insights clearly and concisely.

QUESTION:
{question}
"""
