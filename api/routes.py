import io
from contextlib import redirect_stdout

from fastapi import APIRouter, Body

from api.models import InputCode

route = APIRouter()
input = Body(..., media_type="text/plain", embed=True, alias="input")


@route.post("/")
def index(input: InputCode = input):
    f = io.StringIO()
    with redirect_stdout(f):
        try:
            exec(input.source)
        except Exception as e:
            raise e
    out = f.getvalue()
    return out
