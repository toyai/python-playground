import os
from functools import lru_cache
from typing import List

from pydantic import BaseSettings

PR_NUMBER = os.getenv("HEROKU_PR_NUMBER")
PROD_SITE_NAME = os.getenv("PG_FRONTEND_SITE_NAME")
CUSTOM_DOMAIN_URL = os.getenv("CUSTOM_DOMAIN_URL")


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
    ALLOWED_HOSTS: List[str] = [
        f"https://{PROD_SITE_NAME}.netlify.app",
        "http://localhost:3000",
    ]
    if PR_NUMBER:
        ALLOWED_HOSTS.append(
            f"https://deploy-preview-{PR_NUMBER}--{PROD_SITE_NAME}.netlify.app"
        )
    if CUSTOM_DOMAIN_URL:
        ALLOWED_HOSTS.append(CUSTOM_DOMAIN_URL)


@lru_cache()
def get_settings():
    return Settings()


settings = get_settings()
