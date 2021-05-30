from functools import lru_cache
from typing import List

from pydantic import BaseSettings


class Settings(BaseSettings):
    # Version
    MAJOR: int = 0
    MINOR: int = 1
    PATCH: str = ""
    SUFFIX: str = ""
    VERSION: str = f"{MAJOR}.{MINOR}.{PATCH}{SUFFIX}"

    # App
    PROJECT_NAME: str = "Python Playground"
    DEBUG: bool = False
    API_PREFIX: str = f"/api/v{MAJOR}"
    ALLOWED_HOSTS: List[str] = [""]


@lru_cache()
def get_settings():
    return Settings()


settings = get_settings()
