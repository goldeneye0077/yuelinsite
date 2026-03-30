from fastapi import APIRouter

from app.api.routes.inquiries import router as inquiries_router
from app.api.routes.site import router as site_router

api_router = APIRouter()
api_router.include_router(site_router)
api_router.include_router(inquiries_router)
