# Project Research Summary

**Project:** 跃鳞科技企业官网
**Domain:** Bilingual industrial corporate website
**Researched:** 2026-03-30
**Confidence:** HIGH

## Executive Summary

这是一个典型的工业企业官网项目，但它并不是“做几个页面”这么简单。研究结果很明确：这类网站的成败不主要取决于炫技视觉，而取决于是否能用清晰的产品结构、可信的企业信息、稳定的双语架构和明确的询盘入口，让客户快速理解公司能力并产生联系意愿。

在实现路径上，最稳的方案是采用以 Next.js App Router 为核心的服务端优先架构，先把中英文路由、内容模型、产品分类和核心页面骨架搭起来，再逐步补强询盘闭环、SEO、资料下载和性能优化。对于当前资料尚不完整的项目状态，这比一开始就接 CMS 或做复杂后台更合理。

关键风险也很集中：如果双语结构后补、产品分类先糊后改、信任信息只做口号不做事实支撑，项目会很快进入返工。路线图必须先解决结构问题，再做内容承载和转化闭环。

## Key Findings

### Recommended Stack

推荐使用 Next.js 16.x + React 19.2.x + TypeScript 5.9 + Tailwind CSS 4.x + next-intl 4.x 的组合。这个方案对双语路径、SEO 元数据、静态/半静态渲染、图片优化和后续表单扩展都足够成熟，而且能保持官网所需的性能与可维护性平衡。

**Core technologies:**
- **Next.js**: 路由、SEO、静态生成、表单扩展 - 适合企业官网的服务端优先交付
- **next-intl**: 中英文文案与路径管理 - 适合多语言且 SEO 友好的站点
- **Tailwind CSS**: 快速搭建设计系统 - 适合 section 驱动的品牌官网
- **Zod**: 校验表单和内容结构 - 适合资料不全但要先建稳定内容模型的项目

### Expected Features

研究结果显示，这类工业企业官网的“必需项”非常稳定，差异主要体现在内容组织和信任表达上。

**Must have (table stakes):**
- 首页品牌定位与核心 CTA - 用户需要快速判断公司是否值得联系
- 双语导航与核心页面 - 这是明确业务要求，也是对外展示基础
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

推荐架构是“路由分语言、内容做结构化、页面按 section 组装、交互尽量服务端优先”。这意味着首页、产品页、方案页和关于页都应由结构化内容驱动，而不是在 JSX 里到处硬编码文本。这样既利于双语，也利于后续补充真实资料。

**Major components:**
1. **Locale Routing** - 负责 `/zh` 与 `/en` 语义路径和语言切换
2. **Content Layer** - 负责公司信息、产品分类、解决方案、品牌合作和支持内容
3. **Inquiry Layer** - 负责留言表单、校验、投递与反馈
4. **SEO Layer** - 负责 metadata、sitemap、robots 和双语搜索可见性

### Critical Pitfalls

1. **双语结构后补** - 必须在 Phase 1 就把中英文架构定住
2. **产品 taxonomy 不稳定** - 必须在 Phase 2 把 5 个一级类和工业传感器二级类定清楚
3. **信任信息过空** - 必须在品牌与内容阶段显式布置合作品牌、地址、服务与企业信息
4. **表单只有样子没有闭环** - 必须在询盘阶段完成真正可验证的提交链路
5. **视觉过重拖垮体验** - 必须在收尾阶段做性能与移动端校验

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation & Bilingual IA
**Rationale:** 双语和内容结构是一切页面工作的前置条件。  
**Delivers:** 技术基座、语言路由、设计 tokens、全站导航与页面骨架。  
**Addresses:** 双语能力、基础 SEO、全站布局。  
**Avoids:** 双语后补返工。

### Phase 2: Product Center Architecture
**Rationale:** 产品中心是工业官网的核心信息骨架，应早于大规模内容装修。  
**Delivers:** 5 个一级分类、工业传感器二级分类、产品中心页面模型。  
**Uses:** 内容结构与可扩展产品数据模型。  
**Implements:** 核心产品信息架构。

### Phase 3: Brand & Corporate Story
**Rationale:** 在骨架稳定后建立品牌可信度与企业形象。  
**Delivers:** 首页、关于我们、品牌合作、公司简介、地址与信任模块。  
**Addresses:** 品牌展示主目标和企业可信度。

### Phase 4: Solutions & Service Support
**Rationale:** 面向集成商和终端客户，必须把“能解决什么”说清楚。  
**Delivers:** 工业自动化解决方案、软件开发、技术集成、服务与支持页。  
**Addresses:** 方案表达和服务能力承接。

### Phase 5: Inquiry & Conversion
**Rationale:** 品牌展示要有商机承接闭环。  
**Delivers:** 联系我们页、在线留言/询盘表单、资料下载/目录申请入口。  
**Addresses:** 询盘转化和资料申请。

### Phase 6: SEO, Performance & Launch Readiness
**Rationale:** 企业官网在上线前必须完成搜索可见性、性能和细节校验。  
**Delivers:** metadata、sitemap、图片优化、移动端体验、无障碍和回归检查。  
**Addresses:** 上线质量与搜索表现。

### Phase Ordering Rationale

- 先做双语和内容模型，是为了避免所有后续页面返工。
- 产品中心要早于品牌与方案内容，因为它决定导航与页面深度。
- 询盘与下载放在内容成熟后做，能避免先接表单再返修字段和入口位置。
- SEO 与性能放到最后统一收口，更接近真实上线质量。

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2:** 产品 taxonomy 与具体分类命名可能仍需结合真实资料微调
- **Phase 5:** 如果要接企业邮箱、CRM 或更强防 spam，需补充表单投递方案研究

Phases with standard patterns (skip research-phase):
- **Phase 1:** Next.js 双语与官网基础架构已有成熟范式
- **Phase 6:** 企业官网的 SEO 与性能检查路径较标准

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | 已用官方文档与发布信息确认主线技术选择 |
| Features | HIGH | 用户目标明确，参考站与品牌站点特征稳定 |
| Architecture | HIGH | 这是成熟的多语言企业官网模式 |
| Pitfalls | HIGH | 风险集中且高度可预判 |

**Overall confidence:** HIGH

### Gaps to Address

- 真实产品图片、资质、品牌授权图、联系方式尚未到位，需要以占位内容先设计结构
- 工业传感器二级分类可以先按参考站同步，后续再结合实际产品做裁剪
- 英文文案目前只有基础方向，正式上线前需要统一润色

## Sources

### Primary (HIGH confidence)
- [Next.js 官网与文档](https://nextjs.org/docs/app)
- [Next.js 国际化指南](https://nextjs.org/docs/app/guides/internationalization)
- [Next.js Forms 指南](https://nextjs.org/docs/app/guides/forms)
- [React Versions](https://react.dev/versions)
- [TypeScript 下载页](https://www.typescriptlang.org/download/)
- [next-intl 官网](https://next-intl.dev/)
- [Tailwind CSS 兼容性文档](https://tailwindcss.com/docs/compatibility)

### Secondary (MEDIUM confidence)
- [华怡丰产品中心](https://www.hyfcn.com/product.html)
- [华怡丰关于我们](https://www.hyfcn.com/about.html)
- [华怡丰服务与支持](https://www.hyfcn.com/service.html)
- [Panasonic Automation Controls Support](https://industry.panasonic.com/ap/en/service)

---
*Research completed: 2026-03-30*
*Ready for roadmap: yes*
