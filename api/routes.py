import io
import traceback
from contextlib import redirect_stdout

from fastapi import APIRouter, Body

from api.models import InputCode

route = APIRouter()
input = Body(...)


@route.post("/")
def index(input: InputCode = input):
    f = io.StringIO()
    with redirect_stdout(f):
        try:
            exec(input.source)
        except Exception:
            return traceback.format_exc()
    out = f.getvalue()
    f.close()
    return out
