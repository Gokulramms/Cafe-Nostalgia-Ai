from pydantic import BaseModel
from typing import Dict, Any, Optional

class AskRequest(BaseModel):
    question: str
    context: Optional[Dict[str, Any]] = {}
