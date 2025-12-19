from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.schemas.request import AskRequest
from app.schemas.response import AskResponse
from app.agent.agent import run_agent
from app.middleware.error_handler import ai_exception_handler

app = FastAPI(title="AI Analytics Orchestrator")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    return await ai_exception_handler(request, exc)

@app.post("/ask", response_model=AskResponse)
def ask_question(req: AskRequest):
    try:
        result = run_agent(
            question=req.question,
            context=req.context
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
