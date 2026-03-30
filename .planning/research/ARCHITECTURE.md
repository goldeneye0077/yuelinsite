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
[Next.js App Router]
   |-- [Locale Routing: /zh, /en]
   |-- [Page Layouts + Sections]
   |-- [Metadata / Sitemap / SEO]
   |
   +--> [Content Layer]
   |      |-- company.ts
   |      |-- product-categories.ts
   |      |-- solutions.ts
   |      |-- messages/zh.json
   |      +-- messages/en.json
   |
   +--> [Inquiry Layer]
          |-- Zod validation
          |-- Server Action / Route Handler
          +-- Email delivery or form service
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Locale routing | 处理中英文路径、默认语言与切换逻辑 | `app/[locale]/...` + `next-intl` |
| Content layer | 承载公司信息、产品分类、解决方案、品牌合作、表单字段配置 | `src/content/*.ts` 或 `*.json` |
| Page sections | 复用官网各页面版块，如 hero、产品栅格、品牌合作、CTA | `src/components/sections/*` |
| Shared UI | 承载按钮、标题、卡片、导航、页脚、语言切换器等 | `src/components/ui/*` |
| Inquiry layer | 接收、校验并转发询盘信息 | Server Action 或 Route Handler |
| SEO layer | 管理页面 title、description、OG、sitemap、robots | `generateMetadata`, metadata files |

## Recommended Project Structure

```text
src/
|-- app/
|   |-- [locale]/
|   |   |-- layout.tsx           # locale root layout
|   |   |-- page.tsx             # homepage
|   |   |-- products/
|   |   |-- solutions/
|   |   |-- brands/
|   |   |-- support/
|   |   |-- about/
|   |   `-- contact/
|   |-- sitemap.ts               # sitemap generation
|   `-- robots.ts                # robots config
|-- components/
|   |-- sections/                # page-level sections
|   |-- layout/                  # header/footer/nav
|   `-- ui/                      # shared primitives
|-- content/
|   |-- company.ts               # company profile and address
|   |-- products.ts              # category tree and product cards
|   |-- solutions.ts             # solutions content
|   |-- brands.ts                # partner brand content
|   `-- support.ts               # service/support content
|-- i18n/
|   |-- routing.ts               # locale configuration
|   `-- request.ts               # next-intl wiring
|-- messages/
|   |-- zh.json
|   `-- en.json
|-- lib/
|   |-- metadata.ts              # shared seo helpers
|   |-- schema.ts                # zod schemas
|   `-- utils.ts
|-- actions/
|   `-- inquiry.ts               # inquiry server action
public/
|-- images/
|-- downloads/
`-- icons/
```

### Structure Rationale

- **`app/[locale]/`:** 让路由天然按语言分段，后续新增页面和 metadata 更清晰。
- **`content/` 与 `messages/` 分离:** 结构化业务数据和纯翻译文案分开，便于维护。
- **`sections/` 组件化:** 官网页面高度依赖版块复用，拆 section 比按页面复制更稳。
- **`actions/` 独立:** 表单逻辑不应散落在页面组件里，便于后续切换邮件或 CRM 接入。

## Architectural Patterns

### Pattern 1: Content-Driven Pages

**What:** 页面主要由结构化内容配置驱动，而不是把文本硬编码在组件里。  
**When to use:** 企业官网、产品站、多语言站点。  
**Trade-offs:** 前期多写一点结构定义，但后续维护成本显著降低。

**Example:**
```typescript
export const companyProfile = {
  zh: { name: '深圳市跃鳞科技有限公司' },
  en: { name: 'Shenzhen Yuelin Technology Co., Ltd.' }
}
```

### Pattern 2: Server-First Rendering

**What:** 页面默认走服务端组件，仅在必要处使用客户端组件。  
**When to use:** 品牌官网、SEO 页面、内容站。  
**Trade-offs:** 交互代码要更克制，但能获得更好的首屏性能与 SEO。

**Example:**
```typescript
export default async function HomePage() {
  const data = await getHomeContent()
  return <HomeSections data={data} />
}
```

### Pattern 3: Locale-Segmented Routing

**What:** 通过 `/zh/...` 与 `/en/...` 维持稳定、可索引的双语路径。  
**When to use:** 需要双语 SEO 和路径一致性的企业官网。  
**Trade-offs:** 页面目录会多一层，但可维护性更高。

## Data Flow

### Request Flow

```text
[User visits /en/products]
    -> [locale route]
    -> [load translations + product content]
    -> [render layout + page sections]
    -> [inject metadata]
    -> [send HTML]
```

### State Management

```text
Static content
    -> loaded on server
    -> rendered to sections

Form state
    -> optional client component
    -> validate with zod
    -> submit to server action
```

### Key Data Flows

1. **Page rendering flow:** locale route -> content lookup -> section composition -> metadata generation -> response
2. **Inquiry flow:** user input -> client/server validation -> email/form service -> success or failure feedback

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1k visits/day | 纯前台结构 + CDN + 本地内容源即可 |
| 1k-100k visits/day | 优化图片、缓存、表单速率限制、日志与监控 |
| 100k+ visits/day | 考虑把内容管理、搜索和表单线索接入拆分成独立服务 |

### Scaling Priorities

1. **First bottleneck:** 图片和首屏体积，先通过 `next/image`、静态资源规范化和 section 精简解决。
2. **Second bottleneck:** 内容更新流程，如果更新频率升高，再引入 CMS 或后台编辑链路。

## Anti-Patterns

### Anti-Pattern 1: 在组件里直接写死双语文案

**What people do:** 在 JSX 中直接塞中文，然后再用条件判断补英文。  
**Why it's wrong:** 页面一多就会难以维护，也不利于统一 SEO。  
**Do this instead:** 统一使用 locale 路由 + message 文件 + 结构化内容源。

### Anti-Pattern 2: 所有页面都做成客户端组件

**What people do:** 为了省事全站加 `use client`。  
**Why it's wrong:** 企业官网最看重首屏、SEO 和稳定输出，这会徒增 JS 体积。  
**Do this instead:** 默认服务端组件，只有表单和必要交互才客户端化。

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Resend or mail provider | Server Action / Route Handler | 用于留言表单投递 |
| Analytics | Script or framework integration | 首版可后置，避免过早复杂化 |
| Map service | Embedded map or static map link | 联系页可后续补充 |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| `content` -> `sections` | direct imports | 适合首版静态和半静态内容 |
| `messages` -> UI text | `next-intl` hooks/helpers | 避免直接访问原始 JSON |
| `contact form` -> `actions` | form submission | 要统一校验和错误反馈 |

## Sources

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js 国际化指南](https://nextjs.org/docs/app/guides/internationalization)
- [Next.js Forms 指南](https://nextjs.org/docs/app/guides/forms)
- [Next.js Image 组件文档](https://nextjs.org/docs/app/api-reference/components/image)
- [Next.js generateMetadata 文档](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [next-intl 官网](https://next-intl.dev/)

---
*Architecture research for: bilingual industrial corporate website*
*Researched: 2026-03-30*
