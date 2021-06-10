from config import Settings, settings
from fastapi import FastAPI
from routes import route as api_router
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import PlainTextResponse


def get_application(settings: Settings = settings) -> FastAPI:
    application = FastAPI(
        title=settings.PROJECT_NAME,
        debug=settings.DEBUG,
        version=settings.VERSION,
        default_response_class=PlainTextResponse,
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
