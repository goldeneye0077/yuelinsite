# Feature Research

**Domain:** Bilingual industrial corporate website
**Researched:** 2026-03-30
**Confidence:** HIGH

## Feature Landscape

### Table Stakes (Users Expect These)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| 首页品牌总览 | 工业客户会先判断公司是否专业可信 | MEDIUM | 需要首屏定位、优势、核心产品、品牌合作、CTA |
| 双语导航与页面切换 | 国际化展示和英文资料已是常见企业站要求 | MEDIUM | 不只是切按钮，还要有中英文路径与文案体系 |
| 产品中心与清晰分类 | 采购和技术人员会先看产品线是否匹配需求 | HIGH | 一级分类 + 工业传感器二级分类是核心信息架构 |
| 解决方案页面 | 系统集成商和终端客户更关心“能解决什么” | MEDIUM | 至少要把工业自动化、软件开发、技术集成讲清楚 |
| 服务与支持 | 工业客户普遍会评估售前售后响应能力 | LOW | 可先从技术支持、目录申请、常见服务能力开始 |
| 关于我们 / 联系我们 | 企业资质、办公地址、联系方式是信任底线 | LOW | 地址已知，其余信息可占位并后补 |
| 在线询盘/留言入口 | 企业站不仅展示，还要承接商机 | MEDIUM | 页内 CTA + 联系页表单双入口较稳妥 |
| 响应式体验 | 工业采购与管理层也常在手机上初筛供应商 | MEDIUM | 重点保证导航、产品分类、联系入口可用 |
| 浅色/深色主题切换 | 企业客户常在办公室大屏和夜间设备环境中浏览信息 | MEDIUM | 主题不应只是换背景色，图表、按钮和文本层级都要同步 |
| SEO 基础能力 | 企业官网需要被搜索发现 | MEDIUM | title、description、结构化路径、sitemap、双语元信息 |

### Differentiators (Competitive Advantage)

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| 按行业/按用途的解决方案组织 | 比单纯列产品更容易形成业务理解 | MEDIUM | 可借鉴参考站“按行业/按用途/应用案例”的组织方式 |
| 品牌合作与授权信任模块 | 能强化“供应能力 + 渠道能力 + 资质可信度” | LOW | 华怡丰、Panasonic、SICK、AirTAC、Mindman 应明确展示 |
| 资料下载与目录申请 | 对工业客户价值很高，能直接带来线索 | MEDIUM | 首版可先做占位和申请入口 |
| 精准询盘引导 | 比单一“联系我们”更利于转化 | MEDIUM | 在首页、产品页、方案页设置不同 CTA 语义 |
| 双语 SEO 友好路径 | 英文版不仅是翻译，更是对外展示入口 | MEDIUM | 建议中英文分别有独立路径与 metadata |
| 视觉层面的工业科技感品牌表达 | 能拉开与普通模板站差距 | MEDIUM | logo 已具科技感，页面风格应专业、克制、可信 |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| 注册/登录/会员中心 | 参考站点可能带有该能力 | 与首版品牌展示目标不一致，增加大量无关复杂度 | 先只做询盘表单和直接联系方式 |
| 在线商城/购物车 | 似乎能直接卖货 | 工业产品询价和选型通常并非标准电商流程 | 以“咨询/索取目录/联系销售”为主 |
| 空壳新闻中心 | 很多企业站默认加 | 没有持续内容供给时会显得站点不活跃 | 先做品牌、产品、方案和支持内容 |
| 过度炫技动效和大视频首屏 | 看起来“高级” | 容易拖慢首屏、损伤可信度、增加维护成本 | 用高质量静态视觉和克制动效表达品牌 |
| 一上来就做复杂后台 CMS | 似乎方便运营 | 当前资料不全，前期更需要稳定信息架构和前台体验 | 先用结构化本地内容源，二期再评估 CMS |

## Feature Dependencies

```text
双语架构
  -> requires -> 内容模型
  -> requires -> 路由策略

产品中心
  -> requires -> 产品分类树
  -> requires -> 产品卡片/详情内容结构

询盘表单
  -> requires -> 联系方式策略
  -> requires -> 服务端投递或第三方表单服务

资料下载
  -> requires -> 文件资产管理
  -> requires -> 合规的资料占位与后续替换流程
```

### Dependency Notes

- **双语架构 requires 内容模型:** 如果先直接在组件里写死中文，再补英文会导致全站返工。
- **产品中心 requires 产品分类树:** 产品展示页的分页、导航和二级类目都依赖先把分类体系定清楚。
- **询盘表单 requires 联系方式策略:** 需要先明确邮件投递、电话展示、地址展示和表单字段策略。
- **资料下载 requires 文件资产管理:** 没有真实资料前应先占位，不要在代码里散落伪链接。

## MVP Definition

### Launch With (v1)

- [ ] 首页品牌总览与核心 CTA - 这是品牌展示和商机承接的主入口
- [ ] 中英文双语路由与核心页面 - 这是明确业务要求
- [ ] 浅色/深色主题系统 - 这是明确体验要求，也影响设计 token 和图表风格
- [ ] 产品中心一级分类与工业传感器二级分类 - 这是官网的信息骨架
- [ ] 解决方案、品牌合作、服务与支持、关于我们 - 这是客户理解业务能力的关键内容
- [ ] 联系我们与在线询盘表单 - 这是从展示走向转化的必要闭环
- [ ] 响应式布局与基础 SEO - 这是官网能上线可用的基本门槛

### Add After Validation (v1.x)

- [ ] 资料下载/目录申请 - 当真实资料整理到位后接入
- [ ] 资质认证/品牌授权详情页 - 当图文素材准备充分后接入
- [ ] 行业案例/应用案例页 - 当能提供更具体案例内容时接入
- [ ] 站内搜索 - 当内容体量达到需要时再加

### Future Consideration (v2+)

- [ ] CMS 后台内容管理 - 当市场团队需要高频独立更新时再做
- [ ] 多语言扩展到更多语种 - 先验证中英文即可
- [ ] 更复杂的选型器或产品对比工具 - 需要真实业务规则支持后再评估
- [ ] 新闻中心/内容营销体系 - 需要稳定运营资源后再纳入

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| 双语架构 | HIGH | MEDIUM | P1 |
| 明暗主题系统 | HIGH | MEDIUM | P1 |
| 首页品牌总览 | HIGH | MEDIUM | P1 |
| 产品中心分类体系 | HIGH | HIGH | P1 |
| 解决方案页 | HIGH | MEDIUM | P1 |
| 关于我们/联系我们 | HIGH | LOW | P1 |
| 在线询盘表单 | HIGH | MEDIUM | P1 |
| 资料下载 | MEDIUM | MEDIUM | P2 |
| 行业案例 | MEDIUM | MEDIUM | P2 |
| 资质与品牌授权详情 | MEDIUM | LOW | P2 |
| 新闻中心 | LOW | MEDIUM | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Competitor A | Competitor B | Our Approach |
|---------|--------------|--------------|--------------|
| 产品中心 | 华怡丰采用多级产品导航，工业传感器分类细 | Panasonic 支持页以产品组 + 支持入口组织内容 | 我们采用 5 个一级类，并把工业传感器做成清晰二级树 |
| 解决方案 | 华怡丰按行业/按用途/按产品应用案例组织 | Panasonic 更偏产品支持和应用方向 | 我们先聚焦工业自动化、软件开发、技术集成，再预留行业扩展 |
| 服务与支持 | 华怡丰单独提供目录申请和资源中心 | Panasonic 强调技术支持、标准、分销渠道 | 我们首版突出技术支持、目录申请占位、询盘引导 |
| 国际化 | 华怡丰提供中英文切换 | Panasonic 多区域多语言较成熟 | 我们首版用中英文完整路径和文案结构，避免“假英文页” |
| 转化入口 | 参考站以联系电话、联系页为主 | Panasonic 支持页有明确 Contact Us | 我们会把 CTA 分布到首页、产品页、方案页和联系页 |

## Sources

- [华怡丰产品中心](https://www.hyfcn.com/product.html)
- [华怡丰关于我们](https://www.hyfcn.com/about.html)
- [华怡丰服务与支持](https://www.hyfcn.com/service.html)
- [华怡丰联系我们](https://www.hyfcn.com/contact.html)
- [Panasonic Automation Controls Support](https://industry.panasonic.com/ap/en/service)
- [Panasonic Sensors for Factory Automation](https://industry.panasonic.eu/products/automation-devices-solutions/sensors-factory-automation)

---
*Feature research for: bilingual industrial corporate website*
*Researched: 2026-03-30*
