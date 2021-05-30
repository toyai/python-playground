import sys
from io import StringIO
import contextlib
from fastapi import APIRouter, Body


route = APIRouter()

@contextlib.contextmanager
def stdoutIO(stdout=None):
    old = sys.stdout
    if stdout is None:
        stdout = StringIO()
    sys.stdout = stdout
    yield stdout
    sys.stdout = old


@route.put('/')
def index(source: str):
    with stdoutIO() as s:
        try:
            exec(source)
        except Exception as e:
            raise e
        result = s.getvalue()
    return result