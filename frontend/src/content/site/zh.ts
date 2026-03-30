import type { SiteContent } from './types'

export const zhSiteContent: SiteContent = {
  locale: 'zh',
  meta: {
    brandName: '跃鳞科技',
    companyName: '深圳市跃鳞科技有限公司',
    switchLabel: {
      zh: '切换到中文',
      en: 'Switch to English',
    },
    trackLabel: '基础能力轨道',
  },
  navigation: [
    { key: 'home', label: '首页' },
    { key: 'products', label: '产品中心' },
    { key: 'solutions', label: '解决方案' },
    { key: 'support', label: '服务与支持' },
    { key: 'about', label: '关于我们' },
    { key: 'contact', label: '联系我们' },
  ],
  foundationTracks: [
    {
      label: '前端',
      value: 'React + Vite',
      detail: '为双语企业官网准备好可扩展的客户端骨架。',
    },
    {
      label: '后端',
      value: 'FastAPI + PostgreSQL',
      detail: '先锁定健康检查、站点数据 contract 与未来迁移路径。',
    },
    {
      label: '基础设施',
      value: 'Docker Compose',
      detail: '本地开发和后续上线验证共用一套启动入口。',
    },
  ],
  home: {
    eyebrow: 'Phase 01 · 双语路由与 Contract 基线',
    title: 'Shenzhen Yuelin Technology',
    summary: '正在构建面向工业传感器与自动化业务的双语官网底盘。',
    description:
      '当前阶段先锁定中文、英文镜像路由和基础数据模型，后续主题壳层与内容页可以直接接入。',
    statusLabel: '基础状态',
    statusItems: [
      '双语路由结构已经进入实现阶段',
      '站点 bootstrap contract 正在对齐',
      '主题与共享导航将在下一计划接入',
    ],
  },
  productCenter: {
    title: '产品中心 / Product Center',
    summary: '五大产品方向将通过统一的双语路由结构呈现。',
    description:
      '工业传感器、安全防护传感器、激光测距传感器、线性滑轨及模组、气动元器件会在后续阶段按分类展开。',
  },
  solutions: {
    title: '解决方案 / Solutions',
    summary: '工业自动化、软件开发与技术集成将使用同一套站点结构承载。',
    description:
      '这一页当前作为结构占位，后续会补齐应用场景、服务范围和转化入口。',
  },
  support: {
    title: '服务与支持 / Support',
    summary: '资料下载、目录申请和技术支持路径会挂在统一支持页。',
    description:
      '现阶段先锁定路由和内容模型，后续再补齐真实资料、说明书和支持流程。',
  },
  about: {
    title: '关于我们 / About',
    summary: '企业介绍、地址信息与品牌信任内容将保持中英文镜像结构。',
    description:
      '当前已确认公司名称与深圳地址，后续将补充更完整的品牌表达和资质占位。',
  },
  contact: {
    title: '联系我们 / Contact',
    summary: '询盘入口会从首页、产品页与解决方案页汇入统一 contact 路由。',
    description:
      'Phase 01 先建立 contact 路由和 API contract，真实询盘表单持久化安排在 Phase 5。',
  },
}
