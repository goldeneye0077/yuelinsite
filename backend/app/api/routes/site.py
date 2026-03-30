from fastapi import APIRouter, Query

from app.schemas.site import (
    FooterGroup,
    NavigationItem,
    SiteBootstrapResponse,
    ThemeOption,
)

router = APIRouter(tags=['site'])

ZH_COMPANY_NAME = '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8'
ZH_BRAND_NAME = '\u8dc3\u9cde\u79d1\u6280'
ZH_ADDRESS = (
    '\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u9053\u79d1\u6280\u56ed'
    '\u793e\u533a\u79d1\u82d1\u8def 8 \u53f7\u8baf\u7f8e\u79d1\u6280\u5e7f\u573a 3 \u53f7\u697c'
)

EN_COMPANY_NAME = 'Shenzhen Yuelin Technology Co., Ltd.'
EN_BRAND_NAME = 'Yuelin Technology'
EN_ADDRESS = '3rd Building, Xunmei Tech Plaza, 8 Keyuan Road, Nanshan, Shenzhen'


def build_nav_items(locale: str, labels: dict[str, str]) -> list[NavigationItem]:
    return [
        NavigationItem(key='home', label=labels['home'], href=f'/{locale}'),
        NavigationItem(key='products', label=labels['products'], href=f'/{locale}/products'),
        NavigationItem(
            key='solutions', label=labels['solutions'], href=f'/{locale}/solutions'
        ),
        NavigationItem(key='support', label=labels['support'], href=f'/{locale}/support'),
        NavigationItem(key='about', label=labels['about'], href=f'/{locale}/about'),
        NavigationItem(key='contact', label=labels['contact'], href=f'/{locale}/contact'),
    ]


@router.get('/site/bootstrap', response_model=SiteBootstrapResponse)
def get_site_bootstrap(locale: str = Query(default='zh')):
    normalized_locale = 'en' if locale == 'en' else 'zh'

    if normalized_locale == 'zh':
        company_name = ZH_COMPANY_NAME
        brand_name = ZH_BRAND_NAME
        address = ZH_ADDRESS
        footer_titles = (
            '\u6838\u5fc3\u680f\u76ee',
            '\u8054\u7cfb\u65b9\u5f0f',
        )
        nav_labels = {
            'home': '\u9996\u9875',
            'products': '\u4ea7\u54c1\u4e2d\u5fc3',
            'solutions': '\u89e3\u51b3\u65b9\u6848',
            'support': '\u670d\u52a1\u4e0e\u652f\u6301',
            'about': '\u5173\u4e8e\u6211\u4eec',
            'contact': '\u8054\u7cfb\u6211\u4eec',
        }
        theme_labels = (
            '\u6d45\u8272',
            '\u6df1\u8272',
        )
    else:
        company_name = EN_COMPANY_NAME
        brand_name = EN_BRAND_NAME
        address = EN_ADDRESS
        footer_titles = ('Core Sections', 'Contact')
        nav_labels = {
            'home': 'Home',
            'products': 'Product Center',
            'solutions': 'Solutions',
            'support': 'Support',
            'about': 'About',
            'contact': 'Contact',
        }
        theme_labels = ('Light', 'Dark')

    nav_items = build_nav_items(normalized_locale, nav_labels)
    footer_groups = [
        FooterGroup(title=footer_titles[0], items=nav_items[:4]),
        FooterGroup(
            title=footer_titles[1],
            items=[
                NavigationItem(
                    key='address',
                    label=address,
                    href=f'/{normalized_locale}/contact',
                )
            ],
        ),
    ]

    return SiteBootstrapResponse(
        locale=normalized_locale,
        supportedLocales=['zh', 'en'],
        companyName=company_name,
        brandName=brand_name,
        address=address,
        navItems=nav_items,
        footerGroups=footer_groups,
        themeOptions=[
            ThemeOption(key='light', label=theme_labels[0]),
            ThemeOption(key='dark', label=theme_labels[1]),
        ],
    )
