# Pitfalls Research

**Domain:** Bilingual industrial corporate website
**Researched:** 2026-03-30
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: 先做页面，后补双语结构

**What goes wrong:**  
中文页面先跑起来，英文版后补时发现文案、路径、SEO 和组件都要返工。

**Why it happens:**  
很多企业站会把“翻译”理解成上线后的内容补充，而不是信息架构层面的要求。

**How to avoid:**  
第一阶段就建立 `locale routing + messages + structured content` 体系，中文和英文同时规划。

**Warning signs:**  
组件里出现大量中文硬编码；语言切换只换按钮、不换路径；英文页开始靠复制中文页。

**Phase to address:**  
Phase 1

---

### Pitfall 2: 产品中心结构太浅，无法支撑后续扩展

**What goes wrong:**  
产品页只有简单列表，采购和技术人员无法快速定位品类，后续也难接真实资料。

**Why it happens:**  
团队往往先追求“先有个产品页”，忽略工业品站点对分类树和筛选路径的依赖。

**How to avoid:**  
先固定 5 个一级类，并把工业传感器二级类一次整理清楚，再设计导航与页面结构。

**Warning signs:**  
同一产品既放首页又放列表但没有统一分类；导航命名和页面标题不一致；无法说明某类产品的归属。

**Phase to address:**  
Phase 2

---

### Pitfall 3: 品牌站看起来完整，但信任信息很空

**What goes wrong:**  
页面视觉上很满，但客户找不到地址、合作品牌、资质、支持方式、联系方式等关键信任点。

**Why it happens:**  
容易把注意力放在首页视觉而忽视工业客户的决策依据。

**How to avoid:**  
在首页、关于我们、品牌合作、联系页、支持页中明确布置信任模块，即使资料暂缺也要留结构。

**Warning signs:**  
只有“我们很专业”这类口号，没有事实支撑；合作品牌没有统一展示位；联系页内容单薄。

**Phase to address:**  
Phase 3 and Phase 4

---

### Pitfall 4: 有留言表单，但没有转化逻辑

**What goes wrong:**  
用户能提交表单，但字段设计不合理、投递不可靠、没有成功反馈，也没有反垃圾措施。

**Why it happens:**  
把表单当作页面元素，而不是完整的业务闭环。

**How to avoid:**  
使用服务端校验、明确字段最小集合、加入基础防 spam 机制，并设计成功/失败反馈。

**Warning signs:**  
表单没有校验；提交后无提示；所有页面都只有一个模糊的“联系我们”按钮。

**Phase to address:**  
Phase 5

---

### Pitfall 5: 工业企业官网做成重动画模板站

**What goes wrong:**  
首屏很花，但加载慢、信息密度低、移动端不稳定，最终既不专业也不利于 SEO。

**Why it happens:**  
企业站常被套用通用营销模板，而工业客户更重视信息清晰度和可信度。

**How to avoid:**  
采用克制的动效、明确的信息层级、性能优先的图片和结构化 section。

**Warning signs:**  
首页用大视频做主视觉；轮播过多；图片和动效明显压过文本信息。

**Phase to address:**  
Phase 6

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| 组件里直接写文案 | 开发快 | 双语和 SEO 全部返工 | 仅限一次性原型，不适合正式项目 |
| 直接热链参考站图片 | 省素材整理时间 | 合规、稳定性和品牌一致性都有风险 | 不建议 |
| 产品数据散落多个页面文件 | 上手快 | 分类和更新很快失控 | 不建议 |
| 先用伪链接代替下载逻辑但不做占位说明 | 页面更快“看起来完成” | 用户体验混乱，后期难排查 | 仅在明确标记为占位时可短期接受 |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Inquiry email | 直接在客户端暴露投递逻辑或邮箱地址 | 用服务端 action/handler 统一接收和转发 |
| Remote images | 未配置严格来源，或未处理尺寸导致布局抖动 | 使用本地静态图优先，远程图则配置 `remotePatterns` 和明确尺寸 |
| i18n routing | 只翻译文案，不做路由与 metadata 区分 | 让 locale 参与路径、标题、描述与导航 |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| 大量未优化产品图 | 首屏慢、CLS 高 | 使用 `next/image`、静态导入、控制尺寸 | 图片列表和首页模块一多就明显恶化 |
| 过多客户端轮播/动画 | JS 包大、交互卡顿 | 只保留必要动效与少量客户端岛 | 中低端手机和弱网环境下最明显 |
| 首页塞太多版块 | 信息负担过重、LCP 上升 | 先做清晰的内容优先级，再做视觉包装 | 首页一旦超 8 到 10 个大 section 就容易失控 |

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| 表单无频率限制和防 spam | 被刷接口、邮箱被灌爆 | 增加 honeypot、速率限制和服务端校验 |
| 直接暴露真实邮箱文本 | 容易被采集 | 以表单为主，邮箱展示可做混淆或后置 |
| 未限制远程图片和下载资源 | 存在安全和稳定性问题 | 明确白名单、资源路径与内容来源 |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| 一级导航过深或命名不稳 | 用户不知道从哪里进入产品或方案 | 维持少量一级导航，产品页靠清晰二级结构承接 |
| 英文页只是中文机翻 | 国际客户会立刻失去信任 | 先控制范围，保证英文页核心信息质量 |
| 联系入口只放在页脚 | 转化效率低 | 在首页、产品、方案和联系页放置明确 CTA |
| 产品中心只有名称没有场景说明 | 采购难判断是否相关 | 分类页给出简短说明、代表产品和应用方向 |

## "Looks Done But Isn't" Checklist

- [ ] **双语站:** 不仅要能切语言，还要验证每个核心页面都有对应路径和 metadata
- [ ] **产品中心:** 不仅要有分类名，还要验证分类树、跳转关系和面包屑完整
- [ ] **联系页:** 不仅要有表单，还要验证提交流程、错误态和成功态
- [ ] **品牌合作:** 不仅要展示 logo，还要验证品牌命名、中英文一致性和版式可扩展
- [ ] **下载区:** 不仅要有入口，还要验证无资料时的占位提示和后续替换机制

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| 双语结构晚建 | HIGH | 先抽离文案与内容模型，再逐页回收硬编码 |
| 产品分类混乱 | HIGH | 重新整理产品 taxonomy，并统一所有导航和页面映射 |
| 表单闭环失效 | MEDIUM | 下线异常表单，切回直接联系，并补充服务端校验 |
| 首页过重 | MEDIUM | 精简 hero、移除重动画、重新压缩媒体资源 |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| 双语结构晚建 | Phase 1 | 中英文首页与核心路由均可独立访问 |
| 产品分类太浅 | Phase 2 | 产品导航与二级分类树完整可浏览 |
| 信任信息不足 | Phase 3 / Phase 4 | 首页和关于页都能提供明确企业事实信息 |
| 表单无闭环 | Phase 5 | 能完成一次真实提交流程并收到反馈 |
| 视觉过重 | Phase 6 | Lighthouse 性能与移动端体验达到可接受水平 |

## Sources

- [Next.js 国际化指南](https://nextjs.org/docs/app/guides/internationalization)
- [Next.js Forms 指南](https://nextjs.org/docs/app/guides/forms)
- [Next.js serverActions 配置文档](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions)
- [Next.js Image 组件文档](https://nextjs.org/docs/app/api-reference/components/image)
- [华怡丰产品中心](https://www.hyfcn.com/product.html)
- [华怡丰服务与支持](https://www.hyfcn.com/service.html)
- [Panasonic Automation Controls Support](https://industry.panasonic.com/ap/en/service)

---
*Pitfalls research for: bilingual industrial corporate website*
*Researched: 2026-03-30*
