import json
import os
from functools import lru_cache
from typing import List

from pydantic import BaseSettings

PR_NUMBER = os.getenv("HEROKU_PR_NUMBER")
PROD_SITE_NAME = os.getenv("PG_FRONTEND_SITE_NAME")
CUSTOM_DOMAIN_URL = os.getenv("CUSTOM_DOMAIN_URL")

with open("package.json", "r") as pkg:
    VERSION = json.load(pkg)["version"]


class Settings(BaseSettings):
    # Version
    VERSION: str = VERSION

    # App
    PROJECT_NAME: str = "Python Playground"
    DEBUG: bool = False
    API_PREFIX: str = "/api/playground"
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
