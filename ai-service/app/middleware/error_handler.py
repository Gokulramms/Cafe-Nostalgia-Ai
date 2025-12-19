from fastapi import Request
from fastapi.responses import JSONResponse


async def ai_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=400,
        content={
            "error": "AI_PROCESSING_ERROR",
            "message": str(exc)
        }
    )
