import io
import traceback
from contextlib import redirect_stdout

from fastapi import APIRouter, Body

from backend.models import InputCode

route = APIRouter()
input = Body(...)


@route.post("/")
def index(input: InputCode = input):
    with io.StringIO() as f:
        with redirect_stdout(f):
            try:
                exec(input.source)
            except Exception:
                return traceback.format_exc()
        result = f.getvalue()
    return result
