import io
import traceback
from contextlib import redirect_stdout

from fastapi import APIRouter, Body

from backend.models import InputCode

route = APIRouter()


@route.post("")
def execute(input: InputCode = Body(..., embed=True)):
    with io.StringIO() as f:
        with redirect_stdout(f):
            try:
                exec(input.source)
            except Exception:
                return traceback.format_exc()
        result = f.getvalue()
    return result
