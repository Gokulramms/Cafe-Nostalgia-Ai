from pydantic import BaseModel
from typing import Optional

class AskResponse(BaseModel):
    answer: str
    reasoning: Optional[str]
    confidence: float
