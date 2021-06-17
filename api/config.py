import logging
import os
import sys
from enum import Enum
from functools import lru_cache
from typing import List, Tuple

from loguru import logger
from pydantic import BaseSettings

from api.loggings import InterceptHandler


class Environment(str, Enum):
    DEVELOPMENT = "dev"
    PRODUCTION = "prod"


class Settings(BaseSettings):
    ENV: Environment = Environment.DEVELOPMENT
    
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
    PORT: int = 8000
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
    
    # Logging
    LOGGER_LEVEL: int = logging.DEBUG if ENV == "dev" else logging.INFO
    LOGGERS: Tuple[str, str] = ("uvicorn.asgi", "uvicorn.access")
    
    class Config:
        env_file = os.path.join(os.pardir, ".env")
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings():
    return Settings()


settings = get_settings()

logging.getLogger().handlers = [InterceptHandler()]
for logger_name in settings.LOGGERS:
    logging_logger = logging.getLogger(logger_name)
    logging_logger.handlers = [InterceptHandler(level=settings.LOGGER_LEVEL)]

logger.configure(handlers=[{"sink": sys.stderr, "level": settings.LOGGER_LEVEL}])