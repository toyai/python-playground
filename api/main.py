from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from api.config import Settings, settings
from api.routes import route as api_router


def get_application(settings: Settings = settings) -> FastAPI:
    application = FastAPI(
        title=settings.PROJECT_NAME,
        debug=settings.DEBUG,
        version=settings.VERSION,
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
