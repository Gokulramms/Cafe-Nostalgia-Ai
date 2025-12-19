# AI Agent Workflow

This system uses an **agent-based architecture**, not a single LLM call.

## Step-by-Step Flow

1. User asks a natural language question
2. Planner analyzes intent and time range
3. Query Builder generates ShopifyQL
4. Validator checks query safety
5. Shopify Client fetches data
6. Forecast service predicts future trends
7. Explainer converts results into business language
8. Confidence service assigns reliability score

## Why Agent-Based?
- Clear reasoning
- Easier debugging
- Predictable behavior
- Production-ready design

This approach avoids black-box AI behavior.
