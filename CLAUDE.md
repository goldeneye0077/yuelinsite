<!-- GSD:project-start source:PROJECT.md -->
## Project

**跃鳞科技企业官网**

这是深圳市跃鳞科技有限公司的企业形象官网，面向设备制造商、系统集成商和终端工厂采购客户，集中展示公司的工业传感器产品、解决方案、合作品牌、服务能力与企业形象。网站以品牌展示为主，同时兼顾获取询盘与留资，首版支持中文与英文双语，并以清晰、专业、可信的工业科技风格建立客户信任。

**Core Value:** 让潜在客户能够快速理解跃鳞科技卖什么、能解决什么问题、为什么值得联系，并顺畅发起咨询。

### Constraints

- **Language**: 首版必须支持中文与英文 - 这是明确的业务要求，影响信息架构、内容模型与前端路由设计
- **Business Goal**: 品牌展示优先，兼顾询盘留资 - 页面内容与 CTA 设计应首先服务信任建立，其次服务转化
- **Content Source**: 产品分类需参考指定站点结构 - 工业传感器子类需要与参考站保持足够一致，降低内容整理成本
- **Asset Availability**: 当前仅有 logo 与地址等少量基础资料 - 页面需要支持占位内容与后续快速替换
- **Audience Coverage**: 需同时覆盖三类客户 - 文案与页面结构必须兼顾采购决策、技术理解与解决方案表达
- **Brand Tone**: 网站风格需体现工业科技企业形象 - 不应走电商平台或过度营销风格路线
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
### Core Technologies
| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js | 16.1.x | 官网应用框架、路由、SEO、构建输出 | 官方文档已以 App Router 为主线，适合内容型站点、国际化路由、元数据管理与后续表单扩展 |
| React | 19.2.x patched | UI 组件与渲染基础 | Next.js 16 基于 React 最新能力，React 官方当前主版本为 19.2，适合以服务端优先方式构建页面 |
| TypeScript | 5.9 | 类型安全、内容模型约束、长期维护 | 官方当前版本为 5.9，适合为双语内容、产品数据结构和表单输入建立稳定约束 |
| Tailwind CSS | 4.x | 设计系统落地、响应式样式、快速搭建页面 | 官方 v4 面向现代浏览器，适合企业官网这类以布局、节奏、组件一致性为主的前端项目 |
| next-intl | 4.5.x | 中英文国际化、路由本地化、文案管理 | 官方站点与发布记录显示其已覆盖 Next.js App Router 与 Next.js 16 场景，适合 SEO 友好的双语官网 |
### Supporting Libraries
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| zod | 4.x | 表单与内容结构校验 | 用于询盘表单、联系方式、产品数据与双语内容结构校验 |
| resend | latest stable | 询盘邮件投递 | 当首版需要把留言表单发送到企业邮箱时使用 |
| @hookform/resolvers | latest stable | 表单校验桥接 | 如果后续需要更复杂的前端交互表单，再配合 React Hook Form 使用 |
| react-hook-form | 7.x | 客户端增强型表单交互 | 仅在留言表单需要复杂交互、即时验证和更细表单状态控制时引入 |
### Development Tools
| Tool | Purpose | Notes |
|------|---------|-------|
| ESLint | 静态检查 | 使用 Next.js 默认规则集即可起步 |
| Prettier | 统一格式 | 保持多语言 JSON、内容配置和组件风格一致 |
| Lighthouse | 性能与 SEO 基线检查 | 企业官网首版应重点关注 LCP、CLS、SEO 与 Accessibility |
| Playwright | 回归与关键流程检查 | 适合验证中英文切换、产品页跳转、表单提交流程 |
## Installation
# Core
# Optional for inquiry delivery
# Optional for richer form UX
# Dev dependencies
## Alternatives Considered
| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Next.js 16.x | Astro | 如果官网几乎完全静态、没有服务端表单需求、也不打算很快扩展多语言和内容逻辑，Astro 会更轻 |
| next-intl 4.x | Next.js 原生最小化 i18n 方案 | 如果只做极少量文案切换且不需要路径本地化与系统化消息管理，可以先用原生最小实现 |
| Tailwind CSS 4.x | CSS Modules + 自定义样式体系 | 如果设计稿极其克制、组件数量少、且团队更偏传统样式组织方式时可考虑 |
| 本地结构化内容文件 | Headless CMS | 如果后续需要市场团队高频改内容、多人协作编辑，再考虑 CMS，不建议 v1 直接上 |
## What NOT to Use
| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Create React App | React 官方已不推荐新项目使用，且对 SEO、路由、服务端能力不友好 | Next.js |
| 纯客户端国际化切换 | 会削弱 SEO、首屏可见内容和路由一致性 | 基于 Next.js 路由的服务端优先国际化 |
| v1 就引入重型 CMS 和数据库后台 | 当前资料不齐，首版以结构化占位和快速落地更重要 | 本地内容源，后续再平滑迁移 |
| 大量依赖第三方页面构建器 | 会让组件质量、性能和双语维护失控 | 自建可复用 section/component 体系 |
## Stack Patterns by Variant
- 使用 Next.js App Router + 静态生成
- 联系方式直接展示，表单先接第三方服务
- 因为这样上线更快、维护成本更低
- 使用 Next.js Route Handler 或 Server Action + Zod + Resend
- 因为可以把验证、投递、错误反馈和安全控制放在统一服务端边界
- 保留当前内容模型
- 二期再接 Headless CMS 或内部资料后台
- 因为先把前台结构做稳定，比先做后台更有价值
## Version Compatibility
| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| next@16.1.x | react@19.2.x | Next.js 16 官方基于 React 最新能力，注意使用补丁版本规避 2025 年披露的 RSC 安全问题 |
| next@16.1.x | next-intl@4.4+ | next-intl 发布记录明确提到对 Next.js 16 的适配 |
| typescript@5.9 | next@16.1.x | 当前官方推荐组合，适合 App Router 与现代 tsconfig 初始化 |
| tailwindcss@4.x | modern browsers | 官方兼容说明要求现代浏览器，适合企业官网面向主流桌面与移动设备的场景 |
## Sources
- [Next.js 官网](https://nextjs.org/) - 确认当前主版本已进入 16 系列
- [Next.js App Router 文档](https://nextjs.org/docs/app) - 确认 App Router 为当前主线架构
- [Next.js 国际化指南](https://nextjs.org/docs/app/guides/internationalization) - 确认服务端优先国际化路由方案
- [Next.js generateMetadata 文档](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) - 确认 SEO 元数据能力
- [Next.js Forms 指南](https://nextjs.org/docs/app/guides/forms) - 确认表单与 Server Action 路径
- [Next.js 静态导出指南](https://nextjs.org/docs/app/guides/static-exports) - 确认静态部署可行性
- [Next.js Image 组件文档](https://nextjs.org/docs/app/api-reference/components/image) - 确认图片优化与安全配置
- [Next.js 16 升级指南](https://nextjs.org/docs/app/guides/upgrading/version-16) - 确认 16 代更新主线
- [React Versions](https://react.dev/versions) - 确认当前 React 主版本为 19.2
- [React 19.2 发布说明](https://react.dev/blog/2025/10/01/react-19-2) - 确认 React 19.2 为当前版本线
- [React 安全公告](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components) - 确认应使用已修补的 19.2.x 补丁版本
- [TypeScript 下载页](https://www.typescriptlang.org/download/) - 确认当前最新版本为 5.9
- [TypeScript 5.9 发布说明](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html) - 确认当前版本特性
- [next-intl 官网](https://next-intl.dev/) - 确认其支持 App Router、静态渲染与国际化路由
- [next-intl Releases](https://github.com/amannn/next-intl/releases) - 确认 4.x 系列与 Next.js 16 适配信息
- [Zod 官网](https://zod.dev/packages/zod) - 确认 Zod 4 已稳定
- [Tailwind CSS 兼容性文档](https://tailwindcss.com/docs/compatibility) - 确认 v4 面向现代浏览器
- [Tailwind CSS Releases](https://github.com/tailwindlabs/tailwindcss/releases) - 确认 4.x 为当前稳定主线
- [Resend 文档](https://resend.com/docs) - 确认可作为邮件投递方案
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
