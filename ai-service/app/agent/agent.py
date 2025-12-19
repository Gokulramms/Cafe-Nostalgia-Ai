from app.agent.planner import decide_plan
from app.agent.explainer import explain_result
from app.agent.query_builder import enrich_context
from app.agent.validator import validate_answer
from app.agent.safety import safety_check
from app.services.llm_client import call_gemini
from app.services.confidence import score_confidence


def run_agent(question: str, context: dict):
    """
    Production-grade AI Agent
    """

    # 0️⃣ Safety first
    safety_check(question)

    # 1️⃣ Decide intent
    plan = decide_plan(question, context)

    # 2️⃣ Tool-based enrichment
    enriched_context = enrich_context(plan, context)

    # 3️⃣ LLM reasoning
    llm_result = call_gemini(
        question=question,
        context=enriched_context,
        plan=plan
    )

    # 4️⃣ Validate AI output
    validated_answer = validate_answer(llm_result, enriched_context)

    # 5️⃣ Explanation + confidence
    reasoning = explain_result(plan, enriched_context)
    confidence = score_confidence(enriched_context, validated_answer)

    return {
        "answer": validated_answer,
        "reasoning": reasoning,
        "confidence": confidence
    }
