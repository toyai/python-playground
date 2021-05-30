import contextlib
import sys
from io import StringIO

from fastapi import APIRouter

route = APIRouter()


@contextlib.contextmanager
def stdoutIO(stdout=None):
    old = sys.stdout
    if stdout is None:
        stdout = StringIO()
    sys.stdout = stdout
    yield stdout
    sys.stdout = old


@route.post("/")
def index(source: str):
    with stdoutIO() as s:
        try:
            exec(source)
        except Exception as e:
            raise e
        result = s.getvalue()
    return result
