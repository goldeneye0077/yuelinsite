# Architecture Research

**Domain:** Bilingual industrial corporate website
**Researched:** 2026-03-30
**Confidence:** HIGH

## Standard Architecture

### System Overview

```text
[Browser]
   |
   v
[React + Vite Frontend]
   |-- [React Router: /zh, /en, /products, /solutions ...]
   |-- [Theme Layer: light / dark]
   |-- [VChart for selective data storytelling]
   |
   +--> [TanStack Query]
            |
            v
       [FastAPI Backend]
            |-- [Public content / config endpoints]
            |-- [Inquiry submission API]
            |-- [Health check / admin-ready extension points]
            |
            v
       [SQLAlchemy 2 + PostgreSQL]
            |
            v
         [Alembic]

[Docker Compose]
   |-- frontend
   |-- backend
   `-- db
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Frontend router | 组织中英文页面、产品树、方案页和联系页 | React Router nested routes |
| Theme layer | 管理浅色/深色主题 token 与全站样式切换 | CSS variables + React theme state |
| Content layer | 承载公司信息、产品分类、方案内容、合作品牌和支持信息 | 前端静态配置 + 后端配置接口 |
| Query layer | 获取站点内容、提交询盘、管理缓存与重试 | TanStack Query |
| API layer | 暴露询盘接口、站点配置接口和健康检查 | FastAPI routers |
| Persistence layer | 存储询盘与未来可扩展的站点数据 | SQLAlchemy 2 + PostgreSQL |
| Migration layer | 管理数据库结构演进 | Alembic |
| Deployment layer | 统一本地开发和部署编排 | Docker Compose |

## Recommended Project Structure

```text
frontend/
|-- src/
|   |-- app/                    # app bootstrap
|   |-- router/                 # route definitions
|   |-- pages/                  # top-level route pages
|   |-- sections/               # reusable page sections
|   |-- components/             # shared UI
|   |-- features/
|   |   |-- i18n/               # language setup
|   |   |-- theme/              # light/dark theme system
|   |   `-- inquiry/            # inquiry form UI logic
|   |-- lib/
|   |   |-- api/                # fetch client
|   |   |-- query/              # query client/config
|   |   `-- charts/             # VChart helpers
|   `-- content/                # structured fallback content
|-- public/
|-- vite.config.ts
`-- package.json

backend/
|-- app/
|   |-- api/                    # FastAPI routers
|   |-- core/                   # settings, security, app config
|   |-- db/                     # engine, session, base
|   |-- models/                 # SQLAlchemy models
|   |-- schemas/                # Pydantic schemas
|   |-- services/               # inquiry/content services
|   `-- main.py                 # app entrypoint
|-- alembic/
|-- alembic.ini
`-- pyproject.toml

compose.yaml
```

### Structure Rationale

- **`frontend/` 与 `backend/` 分离:** 当前栈明确是前后端分离，目录边界需要清晰。
- **`features/theme` 独立:** 明暗主题是明确需求，不能散落在页面细节里临时实现。
- **`features/i18n` 独立:** 双语与主题一样，属于全局能力而不是单页逻辑。
- **`services/` 放在 FastAPI 后端:** 让询盘逻辑、内容读取逻辑和未来后台能力有明确边界。

## Architectural Patterns

### Pattern 1: Content-Driven Frontend

**What:** 页面由结构化内容和可复用 section 驱动，而不是把全部文本与结构写死在页面组件里。  
**When to use:** 企业官网、多语言产品站、后续可能接后台的内容站。  
**Trade-offs:** 前期需要先定义内容结构，但后续维护和替换资料明显更稳。

**Example:**
```typescript
export const companyProfile = {
  zh: { name: '深圳市跃鳞科技有限公司' },
  en: { name: 'Shenzhen Yuelin Technology Co., Ltd.' }
}
```

### Pattern 2: Thin Backend, Clear API Boundary

**What:** 后端优先承担询盘、配置、健康检查和未来扩展边界，而不是把官网首版做成重后台系统。  
**When to use:** 品牌官网、展示站、轻业务闭环站点。  
**Trade-offs:** 初期后端能力克制，但更符合官网项目节奏。

**Example:**
```python
@router.post("/inquiries")
async def create_inquiry(payload: InquiryCreate, session: SessionDep):
    return await inquiry_service.create(session, payload)
```

### Pattern 3: Tokenized Theme System

**What:** 用统一 design tokens 驱动浅色/深色主题，而不是在组件中手写分散颜色判断。  
**When to use:** 有明确主题切换要求的网站。  
**Trade-offs:** 需要前期定义色板和语义 token，但后续所有组件与图表都能跟随。

## Data Flow

### Request Flow

```text
[User visits /en/products]
    -> [React Router route]
    -> [TanStack Query / local content lookup]
    -> [render sections]
    -> [apply active theme tokens]
    -> [optional API request to backend]
```

### State Management

```text
Theme state
    -> stored in UI preference
    -> mapped to CSS variables and chart theme

Server data
    -> fetched by TanStack Query
    -> cached in frontend
    -> rendered by route pages and sections
```

### Key Data Flows

1. **Page rendering flow:** route match -> locale content load -> section composition -> theme apply -> page render
2. **Inquiry flow:** user input -> frontend validation -> FastAPI API -> SQLAlchemy session -> PostgreSQL persistence -> success/error response

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1k visits/day | React + FastAPI + PostgreSQL in one Compose stack is sufficient |
| 1k-100k visits/day | 加入缓存、限流、日志与监控，优化静态资源和 API 热点 |
| 100k+ visits/day | 前端静态资源 CDN 化，后端水平拆分，数据库和内容服务独立扩容 |

### Scaling Priorities

1. **First bottleneck:** 前端首屏资源与图片体积，先靠资源压缩、按需图表和 section 精简解决。
2. **Second bottleneck:** 询盘接口与数据库连接管理，随后补连接池、限流和后台运维监控。

## Anti-Patterns

### Anti-Pattern 1: 为官网首版做过重后台

**What people do:** 一开始就把 CMS、权限、复杂管理后台和工作流全做进去。  
**Why it's wrong:** 会把官网项目拉成后台项目，稀释核心目标。  
**Do this instead:** 先做薄后端，只承载询盘和站点配置边界。

### Anti-Pattern 2: 主题切换只换背景色

**What people do:** 只做页面背景深浅切换，但按钮、图表、边界线和文本对比度没跟上。  
**Why it's wrong:** 最终浅深色都“不完整”，会显得很廉价。  
**Do this instead:** 用 token 驱动文本、边框、图表、CTA 和状态色的整体切换。

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Mail provider | FastAPI service layer | 用于留言表单通知 |
| Analytics | Frontend script / API | 可后置接入 |
| Map service | Contact page embed or link | 联系页可后续补充 |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| `frontend content` -> `pages/sections` | direct imports + query hydration | 首版可静态优先，后续再逐步 API 化 |
| `frontend inquiry` -> `backend api` | HTTP JSON | 前后端校验应保持一致 |
| `backend services` -> `db models` | service + repository style | 避免路由直接操作数据库 |
| `theme system` -> `VChart` | shared theme mapping | 图表主题必须跟随站点主题 |

## Sources

- [FastAPI Release Notes](https://fastapi.tiangolo.com/release-notes/)
- [SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/20/)
- [SQLAlchemy Unified Tutorial](https://docs.sqlalchemy.org/20/tutorial/index.html)
- [Alembic Changelog](https://alembic.sqlalchemy.org/en/latest/changelog.html)
- [React Router Home](https://reactrouter.com/home)
- [React Router Library Installation](https://reactrouter.com/start/library/installation)
- [TanStack Query React Docs](https://tanstack.com/query/latest/docs/react/)
- [React VChart Docs](https://visactor.io/vchart/guide/tutorial_docs/Cross-terminal_and_Developer_Ecology/react)
- [VChart Theme Customization](https://www.visactor.io/vchart/guide/tutorial_docs/Theme/Customize_Theme)
- [Docker Compose Guide](https://docs.docker.com/guides/docker-compose/)

---
*Architecture research for: bilingual industrial corporate website*
*Researched: 2026-03-30*
