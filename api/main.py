import logging

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import PlainTextResponse

from api.config import Settings, settings
from api.routes import route as api_router

URL = "http://127.0.0.1:8000"
cyan = "\x1b[36m"
end = "\x1b[39m"

logger = logging.getLogger("uvicorn")


def show_api_docs():
    logger.info(f"Swagger API docs: {cyan}{URL}/docs{end}")
    logger.info(f"Redoc API docs: {cyan}{URL}/redoc{end}")


def get_application(settings: Settings = settings) -> FastAPI:
    application = FastAPI(
        title=settings.PROJECT_NAME,
        debug=settings.DEBUG,
        version=settings.VERSION,
        default_response_class=PlainTextResponse,
        on_startup=[show_api_docs],
    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_HOSTS or ["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    application.include_router(api_router, prefix=settings.API_PREFIX)

    return application


app = get_application()
