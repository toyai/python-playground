from pydantic import BaseModel


class InputCode(BaseModel):
    source: str
