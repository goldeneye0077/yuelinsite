# Stack Research

**Domain:** Bilingual industrial corporate website
**Researched:** 2026-03-30
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Python | 3.11 | 后端运行时 | 这是项目已锁定的运行时版本，生态成熟且与 FastAPI、SQLAlchemy 2、Alembic 配合稳定 |
| FastAPI | 0.125.x | 官网 API、询盘接口、后续后台扩展边界 | 官方 release notes 显示当前仍在 0.x 主线，但对现代 Python 类型系统和 OpenAPI 支持成熟，适合轻量后端服务 |
| SQLAlchemy | 2.0.x | ORM、数据库会话和查询模型 | 官方 2.0 文档与教程已明确把 `select()` 风格作为标准路径，适合新项目 |
| Alembic | 1.17.x | 数据库迁移管理 | 作为 SQLAlchemy 官方迁移工具，适合持续演进表结构 |
| PostgreSQL | 16.x | 持久化存储 | 对结构化业务数据、询盘存储和后续扩展都足够稳定，适合 Docker Compose 场景 |
| React | 19.2.x | 前端 UI 基础 | 当前 React 主线版本，适合现代组件模型与主题化 UI |
| Vite | 8.x | 前端开发与构建工具 | Vite 官方已在 2026-03 发布 8.0，适合 React 项目的开发体验和生产构建 |
| React Router | 7.x | 前端路由与多页面信息架构 | 官方当前文档主线已进入 v7，适合官网多级页面与布局组织 |
| TanStack Query | 5.x | 服务端数据获取与缓存 | 官方当前 React 文档主线是 v5，适合前端消费 FastAPI 内容与询盘接口 |
| VChart | 1.x | 解决方案或能力展示中的数据可视化 | 官方文档支持 React 生态与主题切换，适合在工业官网中少量使用高质量图表 |
| Docker Compose | Compose Spec / V2 | 前后端与数据库的本地和部署编排 | Docker 官方将 Compose 作为多容器应用的标准定义方式，适合这个项目的固定部署要求 |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Pydantic Settings | 2.x | 环境变量与后端配置管理 | 用于分离开发、测试和生产配置 |
| psycopg | 3.x | PostgreSQL 驱动 | 配合 SQLAlchemy 2 使用 PostgreSQL |
| react-i18next | latest stable | 中英文国际化文案管理 | 当双语文案需要系统化管理时使用 |
| react-hook-form + zod | latest stable | 表单状态与前后端一致校验 | 用于询盘表单和资料申请表单 |
| react-helmet-async | latest stable | 前端 metadata 管理 | 用于 React + Vite 路线下的页面标题、描述与 SEO 补强 |
| @visactor/react-vchart | latest stable | React 中的 VChart 组件封装 | 用于少量高质量图表模块的实现 |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Ruff | Python 静态检查与格式化 | 适合 FastAPI 项目保持后端代码整洁 |
| Pytest | 后端测试 | 重点覆盖接口、表单提交流程和配置逻辑 |
| ESLint | 前端静态检查 | React + Vite 项目的基础质量门槛 |
| Playwright | 关键路径回归 | 适合验证中英文切换、明暗主题切换和表单提交流程 |

## Installation

```bash
# Backend
pip install "fastapi>=0.125,<0.126" "sqlalchemy>=2.0,<2.1" "alembic>=1.17,<1.18" "psycopg[binary]>=3,<4" "pydantic-settings>=2,<3"

# Frontend
npm install react react-dom react-router @tanstack/react-query @visactor/react-vchart @visactor/vchart react-i18next react-hook-form zod @hookform/resolvers react-helmet-async

# Frontend build
npm install -D vite typescript eslint
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| React + Vite | Next.js | 如果项目目标更偏 SSR/SSG 与搜索流量优先，Next.js 会更省 SEO 方案成本 |
| FastAPI | Django / Flask | 如果后续需要更重的后台管理和内建 CMS 倾向，可考虑 Django；但当前项目更适合轻量 API |
| TanStack Query | 手写 fetch + context | 如果网站几乎完全静态且无 API 状态缓存需求，可简化；但当前既然已有后端，Query 更稳 |
| PostgreSQL | SQLite | 仅原型期可考虑 SQLite；正式双容器部署与后续扩展更适合 PostgreSQL |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| SQLAlchemy 1.x 风格查询作为新代码主线 | 官方已将 2.0 风格作为标准，继续写旧风格会增加维护分裂 | SQLAlchemy 2.0 `select()` 风格 |
| 在 React 组件中直接散落硬编码双语文案 | 双语维护和后续内容更新会快速失控 | 统一 i18n 消息与结构化内容源 |
| 为官网首版引入过重的后台与 CMS | 当前更需要稳定前台体验和询盘链路，而不是复杂后台 | 先做薄后端 API + 结构化内容管理 |
| 把 VChart 用成 dashboard 主界面 | 企业官网不是数据平台，图表过多会稀释品牌信息 | 只在解决方案或能力说明处少量使用图表 |

## Stack Patterns by Variant

**If 首版只需要轻量内容与询盘闭环:**
- 前端通过 React Router 组织页面
- 后端仅提供询盘、内容配置和健康检查 API
- 因为这样能控制后端复杂度，避免官网项目过度工程化

**If 后续要加入简单内容管理:**
- 保持 FastAPI + PostgreSQL 数据模型清晰
- 再追加后台管理接口或管理端
- 因为当前固定栈已经为后续内容后台预留了演进空间

**If 需要在方案页展示能力数据:**
- 使用 VChart 做少量条形图、对比图或流程辅助图
- 跟随站点浅色/深色主题同步切换
- 因为这比堆叠数字卡片更有表现力，但不应喧宾夺主

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Python 3.11 | FastAPI 0.125.x | FastAPI 当前版本线支持现代 Python 特性，Python 3.11 是稳妥选择 |
| Python 3.11 | SQLAlchemy 2.0.x / Alembic 1.17.x | SQLAlchemy 2 和 Alembic 当前版本线都适合 Python 3.11 |
| React 19.2.x | Vite 8.x | Vite 当前主线适合 React 19 项目构建 |
| React 19.2.x | React Router 7.x | React Router 当前官方文档主线面向 React 18/19 |
| React 19.2.x | TanStack Query 5.x | TanStack Query 当前 React 文档主线为 v5 |
| VChart | 浅色/深色主题 | 官方文档支持注册与切换主题，可与全站主题系统联动 |

## Sources

- [Python 3.11 Documentation](https://docs.python.org/3.11/)
- [FastAPI Release Notes](https://fastapi.tiangolo.com/release-notes/)
- [FastAPI Version Guidance](https://fastapi.tiangolo.com/deployment/versions/)
- [SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/20/)
- [SQLAlchemy Unified Tutorial](https://docs.sqlalchemy.org/20/tutorial/index.html)
- [Alembic Changelog](https://alembic.sqlalchemy.org/en/latest/changelog.html)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [PostgreSQL 16 Documentation](https://www.postgresql.org/docs/16/)
- [React Versions](https://react.dev/versions)
- [Vite 8 Announcement](https://vite.dev/blog/announcing-vite8)
- [Vite Documentation](https://vite.dev/)
- [React Router Home](https://reactrouter.com/home)
- [React Router Library Installation](https://reactrouter.com/start/library/installation)
- [TanStack Query React Docs](https://tanstack.com/query/latest/docs/react/)
- [TanStack Query Home](https://tanstack.com/query/latest)
- [React VChart Docs](https://visactor.io/vchart/guide/tutorial_docs/Cross-terminal_and_Developer_Ecology/react)
- [VChart Theme Customization](https://www.visactor.io/vchart/guide/tutorial_docs/Theme/Customize_Theme)
- [Docker Compose Guide](https://docs.docker.com/guides/docker-compose/)
- [Compose File Reference](https://docs.docker.com/compose/compose-file/)
- [Use Compose in Production](https://docs.docker.com/compose/how-tos/production/)

---
*Stack research for: bilingual industrial corporate website*
*Researched: 2026-03-30*
