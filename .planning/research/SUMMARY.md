# Project Research Summary

**Project:** 跃鳞科技企业官网
**Domain:** Bilingual industrial corporate website
**Researched:** 2026-03-30
**Confidence:** HIGH

## Executive Summary

这是一个典型的工业企业官网项目，但它并不是“做几个页面”这么简单。研究结果很明确：这类网站的成败不主要取决于炫技视觉，而取决于是否能用清晰的产品结构、可信的企业信息、稳定的双语架构、可切换的主题系统和明确的询盘入口，让客户快速理解公司能力并产生联系意愿。

在实现路径上，当前最稳的方案不再是纯前端或 Next.js 方向，而是围绕你已固定的技术栈去做一套“薄后端 + 强前台表达”的架构：React + Vite 负责品牌页面、交互和主题系统，FastAPI + PostgreSQL 负责询盘接口、内容配置边界和后续扩展，Docker Compose 统一开发与部署环境。这样既保留官网首版的轻量感，也能为后续演进预留边界。

关键风险也很集中：如果双语结构后补、产品分类先糊后改、主题系统只做表面切换、或后端一开始就做得过重，项目会很快进入返工或节奏失控。路线图必须先解决平台和结构问题，再做内容承载和转化闭环。

## Key Findings

### Recommended Stack

推荐方案已经由产品决策锁定为 `Python 3.11 + FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL` 的后端，以及 `React + Vite + React Query + React Router + VChart` 的前端，部署采用 Docker Compose。这个组合的关键不在于“是否最像营销站模板”，而在于它能让官网在品牌展示、双语表达、主题切换、询盘闭环和后续后台扩展之间保持平衡。

**Core technologies:**
- **React + Vite**: 前端页面组织、开发体验和构建交付
- **React Router**: 中英文页面结构、产品树与多级路由承载
- **TanStack Query**: 内容/API 获取、缓存与异步状态管理
- **FastAPI + PostgreSQL**: 询盘和内容配置的服务端边界
- **VChart**: 用于少量高质量图表，而不是把官网做成仪表盘

### Expected Features

研究结果显示，这类工业企业官网的“必需项”非常稳定，差异主要体现在内容组织、信任表达和体验完整度上。

**Must have (table stakes):**
- 首页品牌定位与核心 CTA - 用户需要快速判断公司是否值得联系
- 双语导航与核心页面 - 这是明确业务要求，也是对外展示基础
- 浅色/深色主题切换 - 这是明确体验要求，会直接影响视觉系统与图表
- 产品中心与清晰分类 - 这是采购和技术用户最核心的浏览路径
- 解决方案、服务支持、关于我们、联系我们 - 这是理解业务能力和建立信任的基础
- 在线询盘/留言入口 - 品牌展示必须承接转化

**Should have (competitive):**
- 品牌合作与授权信任模块 - 能显著提升可信度
- 按行业/按用途的解决方案组织 - 更贴近工业客户理解方式
- 资料下载与目录申请 - 对工业客户非常有价值

**Defer (v2+):**
- 新闻中心/内容营销体系 - 没有持续运营能力时不该先做
- CMS 后台内容管理 - 当前优先级低于前台结构稳定
- 复杂选型器/产品对比工具 - 需要更完整业务规则支撑

### Architecture Approach

推荐架构是“前端内容驱动 + 薄后端 API + 统一主题 token + Compose 编排”。这意味着首页、产品页、方案页和关于页应由结构化内容与可复用 section 驱动，后端主要负责询盘与后续扩展边界，而浅色/深色主题要在组件、图表和全局样式上同步生效。

**Major components:**
1. **Frontend App Shell** - 负责 React Router 路由、页面结构和 section 复用
2. **Theme & Visualization Layer** - 负责浅深色 token 与 VChart 的主题联动
3. **API Layer** - 负责询盘提交、内容配置与后续后台扩展边界
4. **Persistence Layer** - 负责 PostgreSQL 持久化与 Alembic 迁移演进
5. **Deployment Layer** - 负责 Docker Compose 多容器运行环境

### Critical Pitfalls

1. **双语结构后补** - 必须在 Phase 1 就把中英文路由和文案结构定住
2. **主题切换只换背景** - 必须在 Phase 1 就建立成体系的浅深色 token
3. **产品 taxonomy 不稳定** - 必须在产品阶段把 5 个一级类和工业传感器二级类定清楚
4. **表单只有样子没有闭环** - 必须在询盘阶段完成真正可验证的前后端链路
5. **后端过度工程化** - 必须始终让 FastAPI 后端围绕官网核心能力保持克制

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Platform Foundation & Theme Shell
**Rationale:** 前后端脚手架、Docker Compose、双语路由和主题系统是一切页面工作的前置条件。  
**Delivers:** React + Vite 前端底座、FastAPI 后端底座、Compose 编排、语言路由、设计 token、浅深色主题和全站导航骨架。  
**Addresses:** 双语能力、主题能力、开发与部署一致性。  
**Avoids:** 双语后补、主题后补和后端结构失控。

### Phase 2: Brand Story & Corporate Presence
**Rationale:** 在基础壳层稳定后建立品牌可信度与企业形象。  
**Delivers:** 首页、关于我们、合作信任模块、公司简介、地址与品牌表达。  
**Addresses:** 品牌展示主目标和企业可信度。

### Phase 3: Product Center & Taxonomy
**Rationale:** 产品中心是工业官网的核心信息骨架。  
**Delivers:** 5 个一级分类、工业传感器二级分类、产品页结构与代表产品内容。  
**Uses:** 已建立的双语、主题和内容结构。  
**Implements:** 核心产品信息架构。

### Phase 4: Solutions, Brands & Support
**Rationale:** 面向集成商和终端客户，必须把“能解决什么”说清楚。  
**Delivers:** 工业自动化解决方案、软件开发、技术集成、品牌合作、服务支持。  
**Addresses:** 方案表达和合作生态承接。

### Phase 5: Inquiry & Launch Readiness
**Rationale:** 品牌展示要有商机承接闭环，并完成前后端与部署层面的上线准备。  
**Delivers:** 联系我们页、在线留言/询盘表单、Compose 运行闭环、主题与响应式校验。  
**Addresses:** 询盘转化、部署一致性和上线质量。

### Phase Ordering Rationale

- 先做前后端基础、双语和主题系统，是为了避免所有后续页面返工。
- 产品中心要早于方案和支持内容，因为它决定导航与页面深度。
- 询盘放在内容成熟后做，能避免先接表单再返修字段和入口位置。
- Compose 与主题一致性在上线前统一收口，更接近真实交付状态。

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3:** 产品 taxonomy 与具体分类命名可能仍需结合真实资料微调
- **Phase 5:** 如果要接企业邮箱、CRM 或更强防 spam，需补充表单投递方案研究

Phases with standard patterns (skip research-phase):
- **Phase 1:** React + Vite + FastAPI 的分层基座属于成熟工程模式
- **Phase 5:** 企业官网的 QA 与 Compose 上线检查路径较标准

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | 技术栈已由用户明确固定，且相关官方文档成熟 |
| Features | HIGH | 用户目标明确，参考站与品牌站点特征稳定 |
| Architecture | HIGH | 这是成熟的前后端分离企业官网模式 |
| Pitfalls | HIGH | 风险集中且高度可预判 |

**Overall confidence:** HIGH

### Gaps to Address

- 真实产品图片、资质、品牌授权图、联系方式尚未到位，需要以占位内容先设计结构
- 工业传感器二级分类可以先按参考站同步，后续再结合实际产品做裁剪
- 英文文案目前只有基础方向，正式上线前需要统一润色
- 主题细节需要在真实视觉设计阶段进一步校准，尤其是深色模式下的工业质感控制

## Sources

### Primary (HIGH confidence)
- [FastAPI Release Notes](https://fastapi.tiangolo.com/release-notes/)
- [SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/20/)
- [Alembic Changelog](https://alembic.sqlalchemy.org/en/latest/changelog.html)
- [React Versions](https://react.dev/versions)
- [Vite 8 Announcement](https://vite.dev/blog/announcing-vite8)
- [React Router Home](https://reactrouter.com/home)
- [TanStack Query React Docs](https://tanstack.com/query/latest/docs/react/)
- [VChart Theme Customization](https://www.visactor.io/vchart/guide/tutorial_docs/Theme/Customize_Theme)
- [Docker Compose Guide](https://docs.docker.com/guides/docker-compose/)

### Secondary (MEDIUM confidence)
- [华怡丰产品中心](https://www.hyfcn.com/product.html)
- [华怡丰关于我们](https://www.hyfcn.com/about.html)
- [华怡丰服务与支持](https://www.hyfcn.com/service.html)
- [Panasonic Automation Controls Support](https://industry.panasonic.com/ap/en/service)

---
*Research completed: 2026-03-30*
*Ready for roadmap: yes*
