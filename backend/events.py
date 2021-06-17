from typing import Callable

from fastapi import FastAPI
from loguru import logger

from backend.config import settings


def create_start_app_handler(app: FastAPI) -> Callable:
    async def start_app() -> None:
        logger.opt(colors=True).info(
            f"Swagger API Documentaion: <blue><underline>http://127.0.0.1:{settings.PORT}/docs</underline></blue>"
        )
        logger.opt(colors=True).info(
            f"ReDoc API Documentaion: <blue><underline>http://127.0.0.1:{settings.PORT}/redoc</underline></blue>"
        )

    return start_app


def create_stop_app_handler(app: FastAPI) -> Callable:
    @logger.catch
    async def stop_app() -> None:
        pass

    return stop_app