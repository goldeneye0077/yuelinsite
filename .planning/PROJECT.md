# 跃鳞科技企业官网

## What This Is

这是深圳市跃鳞科技有限公司的企业形象官网，面向设备制造商、系统集成商和终端工厂采购客户，集中展示公司的工业传感器产品、解决方案、合作品牌、服务能力与企业形象。网站以品牌展示为主，同时兼顾获取询盘与留资，首版支持中文与英文双语，并以清晰、专业、可信的工业科技风格建立客户信任。

## Core Value

让潜在客户能够快速理解跃鳞科技卖什么、能解决什么问题、为什么值得联系，并顺畅发起咨询。

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] 建立完整的企业官网信息架构，覆盖首页、产品中心、解决方案、品牌合作、服务与支持、关于我们、联系我们等核心栏目
- [ ] 产品中心采用 5 个一级分类，并在工业传感器下同步参考站点的细分子类，形成清晰的产品浏览结构
- [ ] 支持中文与英文双语版本，并保证主要导航、核心页面和询盘入口具备双语表达能力
- [ ] 提供浅色与深色两套主题，并保证核心页面、图表和转化入口在两种主题下都清晰可用
- [ ] 官网首页突出品牌定位、核心优势、主打产品、合作品牌与咨询转化入口
- [ ] 提供在线留言/询盘表单、联系方式与地址信息，支持品牌展示场景下的客户转化
- [ ] 预留资料下载、品牌授权/资质展示等模块的位置，以支持后续补充真实资料

### Out of Scope

- 电商下单、购物车、在线支付 - 当前官网以品牌展示与询盘转化为主，不做交易闭环
- 会员注册/登录体系 - 参考站存在账号系统，但不属于本项目首版核心目标
- 多语言扩展到中文/英文以外语种 - 首版明确只做中英文，避免翻译与维护成本扩大
- 完整新闻资讯运营体系 - 可预留入口或占位，但首版不以高频内容运营为核心
- ERP/CRM/库存等后台业务系统 - 本阶段只建设官网前台与必要表单转化能力

## Context

- 公司名称为深圳市跃鳞科技有限公司，主营方向为工业传感器及工业自动化相关产品与服务
- 目标客户覆盖设备制造商、系统集成商和终端工厂采购，网站需要同时兼顾品牌可信度与商务转化效率
- 用户已指定核心产品一级分类为：工业传感器、安全防护传感器、激光测距传感器、线性滑轨及模组、气动元器件
- 工业传感器类目需参考 [华怡丰产品中心](https://www.hyfcn.com/product.html) 的子类结构，当前可同步的二级方向包括：光纤传感器、光电/激光传感器、位移测量传感器、槽型光电传感器、颜色传感器、标签传感器、电感式接近传感器、电容式接近传感器、安全/区域传感器、安全门锁开关、工业读码器、图像识别传感器、压力传感器、超声波传感器、接触传感器、磁性传感器、配件
- 解决方案栏目已明确包含：工业自动化解决方案、软件开发、技术集成
- 品牌合作栏目已明确包含：华怡丰 Huayifeng、松下 Panasonic、西克 Sick、亚德客 AirTAC、金器 Mindman
- 地址已提供为：深圳市南山区粤海街道科技园社区科苑路 8 号讯美科技广场 3 号楼
- Logo 已提供，视觉上呈现蓝色科技、动势上扬、偏工业与创新感的品牌气质，后续视觉设计应围绕“专业、可靠、现代、国际化”展开
- UI 风格方向固定为 `Precision Industrial`：以深海蓝、钢灰、冷白为主色体系，辅以少量琥珀橙作为 CTA 与关键信息强调；浅色模式偏“工程目录册”，深色模式偏“工业控制室”
- 首页首屏应采用海报式强视觉锚点而非模板化卡片栅格，品牌名、产品方向和 CTA 的层级必须明显优先于装饰元素
- 视觉系统应保持克制，优先使用大版面分区、线性分隔、留白、裁切图像与少量高质量动效，不走“发光科技模板”路线
- 技术栈已固定为：后端 Python 3.11 + FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL，前端 React + Vite + React Query + React Router + VChart
- 部署方式已固定为 Docker Compose，后续项目结构和环境变量设计需围绕多容器本地开发与上线展开
- 页面体验已明确要求支持浅色与深色两套主题，主题切换需要覆盖核心页面与图表表现
- 现阶段除 logo 与地址外，其余电话、邮箱、资质证书、品牌授权图、产品图片等资料暂未提供，需先以结构化占位方式规划

## Constraints

- **Language**: 首版必须支持中文与英文 - 这是明确的业务要求，影响信息架构、内容模型与前端路由设计
- **Tech Stack**: 前后端与部署栈已明确固定 - 后续规划与实现不再围绕 Next.js 或纯静态站方案展开
- **Deployment**: 使用 Docker Compose 组织前端、后端和数据库 - 本地开发、测试与上线环境需保持一致性
- **Theme System**: 页面必须支持浅色/深色主题切换 - 设计 token、组件样式与图表主题都需要统一考虑
- **Business Goal**: 品牌展示优先，兼顾询盘留资 - 页面内容与 CTA 设计应首先服务信任建立，其次服务转化
- **Content Source**: 产品分类需参考指定站点结构 - 工业传感器子类需要与参考站保持足够一致，降低内容整理成本
- **Asset Availability**: 当前仅有 logo 与地址等少量基础资料 - 页面需要支持占位内容与后续快速替换
- **Audience Coverage**: 需同时覆盖三类客户 - 文案与页面结构必须兼顾采购决策、技术理解与解决方案表达
- **Brand Tone**: 网站风格需体现工业科技企业形象 - 不应走电商平台或过度营销风格路线
- **Art Direction**: 视觉方向采用 Precision Industrial - 首页与品牌页必须优先体现“精密、冷静、可信”的工业美学

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 官网定位为企业形象官网而非电商站 | 用户核心诉求是介绍公司并建立专业形象，同时承接询盘 | - Pending |
| 首版支持中文与英文双语 | 用户明确要求多语言版，且工业客户有国际展示需求 | - Pending |
| 产品中心采用“5 个一级类 + 工业传感器细分子类”结构 | 既满足业务自定义分类，又能借鉴成熟站点的信息组织方式 | - Pending |
| 首版包含在线留言/询盘表单、资料下载/目录申请、品牌授权/资质展示占位 | 有利于兼顾转化、资料承接与信任建设 | - Pending |
| 目标受众同时覆盖设备制造商、系统集成商、终端工厂采购 | 用户已明确三类客户都要覆盖，信息架构需兼容不同决策视角 | - Pending |
| 技术栈固定为 React + Vite 前端与 FastAPI + PostgreSQL 后端 | 用户已明确指定前后端与部署栈，后续实现需围绕这一组合规划 | - Pending |
| 视觉方向采用 Precision Industrial | 需要避免常见蓝色模板站，建立更贴近工业传感器业务的品牌识别 | - Pending |
| 首版提供浅色与深色两套主题 | 用户明确要求可切换主题，视觉系统和图表都需要响应主题变化 | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone**:
1. Full review of all sections
2. Core Value check -> still the right priority?
3. Audit Out of Scope -> reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-30 after initialization*
