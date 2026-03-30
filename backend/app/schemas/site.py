from typing import Literal

from pydantic import BaseModel


Locale = Literal['zh', 'en']


class NavigationItem(BaseModel):
    key: str
    label: str
    href: str


class FooterGroup(BaseModel):
    title: str
    items: list[NavigationItem]


class ThemeOption(BaseModel):
    key: Literal['light', 'dark']
    label: str


class SiteBootstrapResponse(BaseModel):
    locale: Locale
    supportedLocales: list[Locale]
    companyName: str
    brandName: str
    address: str
    navItems: list[NavigationItem]
    footerGroups: list[FooterGroup]
    themeOptions: list[ThemeOption]
