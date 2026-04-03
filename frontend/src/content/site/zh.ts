import type { SiteContent } from './types'

export const zhSiteContent: SiteContent = {
  locale: 'zh',
  meta: {
    brandName: '\u8dc3\u9cde\u79d1\u6280',
    companyName: '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8',
    crossLocaleCompanyName: 'Shenzhen Yuelin Technology Co., Ltd.',
    brandLine: '\u5de5\u4e1a\u4f20\u611f\u4e0e\u81ea\u52a8\u5316\u96c6\u6210',
    switchLabel: {
      zh: '\u4e2d\u6587',
      en: 'English',
    },
    trackLabel: '\u57fa\u7840\u80fd\u529b\u8f68\u9053',
    themeLabel: '\u754c\u9762\u4e3b\u9898',
    lightLabel: '\u6d45\u8272',
    darkLabel: '\u6df1\u8272',
    menuLabel: '\u6253\u5f00\u5bfc\u822a',
    closeMenuLabel: '\u5173\u95ed\u5bfc\u822a',
  },
  navigation: [
    { key: 'home', label: '\u9996\u9875' },
    { key: 'products', label: '\u4ea7\u54c1\u4e2d\u5fc3' },
    { key: 'solutions', label: '\u89e3\u51b3\u65b9\u6848' },
    { key: 'partners', label: '\u54c1\u724c\u5408\u4f5c' },
    { key: 'support', label: '\u670d\u52a1\u4e0e\u652f\u6301' },
    { key: 'about', label: '\u5173\u4e8e\u6211\u4eec' },
    { key: 'contact', label: '\u8054\u7cfb\u6211\u4eec' },
  ],
  foundationTracks: [
    {
      label: '\u524d\u7aef',
      value: 'React + Vite',
      detail:
        '\u4e3a\u53cc\u8bed\u4f01\u4e1a\u5b98\u7f51\u51c6\u5907\u597d\u53ef\u6269\u5c55\u7684\u5ba2\u6237\u7aef\u9aa8\u67b6\u3002',
    },
    {
      label: '\u540e\u7aef',
      value: 'FastAPI + PostgreSQL',
      detail:
        '\u5148\u9501\u5b9a\u5065\u5eb7\u68c0\u67e5\u3001\u7ad9\u70b9\u5951\u7ea6\u548c\u540e\u7eed\u8fc1\u79fb\u8fb9\u754c\u3002',
    },
    {
      label: '\u90e8\u7f72',
      value: 'Docker Compose',
      detail:
        '\u672c\u5730\u5f00\u53d1\u548c\u4e0a\u7ebf\u9a8c\u8bc1\u5171\u7528\u4e00\u5957\u542f\u52a8\u5165\u53e3\u3002',
    },
  ],
  home: {
    eyebrow: '\u5de5\u4e1a\u4f20\u611f\u4e0e\u81ea\u52a8\u5316\u96c6\u6210',
    title: '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8',
    summary:
      '\u4e3a\u8bbe\u5907\u5236\u9020\u5546\u3001\u7cfb\u7edf\u96c6\u6210\u5546\u548c\u7ec8\u7aef\u5de5\u5382\u5ba2\u6237\u63d0\u4f9b\u5de5\u4e1a\u4f20\u611f\u3001\u4ea7\u7ebf\u81ea\u52a8\u5316\u4e0e\u6280\u672f\u96c6\u6210\u4e00\u4f53\u5316\u652f\u6301\u3002',
    description:
      '\u8dc3\u9cde\u79d1\u6280\u7acb\u8db3\u6df1\u5733\uff0c\u805a\u7126\u5de5\u4e1a\u4f20\u611f\u5668\u3001\u5b89\u5168\u9632\u62a4\u3001\u6fc0\u5149\u6d4b\u8ddd\u3001\u7ebf\u6027\u6ed1\u8f68\u6a21\u7ec4\u548c\u6c14\u52a8\u5143\u5668\u4ef6\uff0c\u540c\u65f6\u63d0\u4f9b\u8f6f\u4ef6\u5f00\u53d1\u4e0e\u6280\u672f\u96c6\u6210\u670d\u52a1\u3002',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: '\u67e5\u770b\u4ea7\u54c1\u7ed3\u6784',
    statusLabel: '\u670d\u52a1\u5bf9\u8c61',
    statusItems: [
      '\u8bbe\u5907\u5236\u9020\u5546\uff1a\u9009\u578b\u3001\u8054\u52a8\u548c\u4ea7\u7ebf\u611f\u6d4b',
      '\u7cfb\u7edf\u96c6\u6210\u5546\uff1a\u63a7\u5236\u8def\u5f84\u3001\u63a5\u53e3\u914d\u5408\u548c\u5b9e\u65bd\u5355\u5143',
      '\u7ec8\u7aef\u5de5\u5382\u5ba2\u6237\uff1a\u7a33\u5b9a\u4f9b\u5e94\u3001\u6280\u672f\u652f\u6301\u4e0e\u54cd\u5e94\u4ea4\u4ed8',
    ],
    visualLabel: '\u5b9e\u9645 logo \u4e0e\u5de5\u4e1a\u6d41\u7ebf\u951a\u70b9',
    strengthsTitle: '\u6838\u5fc3\u80fd\u529b',
    strengths: [
      {
        title: '\u4ea7\u54c1\u9009\u578b\u4e0e\u7ec4\u5408',
        detail:
          '\u56f4\u7ed5\u5de5\u4e1a\u4f20\u611f\u3001\u5b89\u5168\u9632\u62a4\u4e0e\u8fd0\u52a8\u90e8\u4ef6\uff0c\u7ed9\u51fa\u66f4\u8d34\u8fd1\u8bbe\u5907\u73b0\u573a\u7684\u914d\u7f6e\u5efa\u8bae\u3002',
      },
      {
        title: '\u8f6f\u4ef6\u5f00\u53d1\u4e0e\u6280\u672f\u96c6\u6210',
        detail:
          '\u4ece\u611f\u6d4b\u4fe1\u53f7\u63a5\u5165\u3001\u6570\u636e\u5904\u7406\u5230\u7cfb\u7edf\u534f\u540c\uff0c\u63d0\u4f9b\u9762\u5411\u81ea\u52a8\u5316\u9879\u76ee\u7684\u96c6\u6210\u8def\u5f84\u3002',
      },
      {
        title: '\u8be2\u76d8\u54cd\u5e94\u4e0e\u9879\u76ee\u914d\u5408',
        detail:
          '\u5c06\u54c1\u724c\u5c55\u793a\u3001\u9009\u578b\u6c9f\u901a\u548c\u9879\u76ee\u8ddf\u8fdb\u4e32\u8054\u5728\u4e00\u6761\u8def\u5f84\u91cc\uff0c\u51cf\u5c11\u524d\u671f\u6c9f\u901a\u6210\u672c\u3002',
      },
    ],
    directionsTitle: '\u4e3b\u8981\u4e1a\u52a1\u4e0e\u4ea7\u54c1\u65b9\u5411',
    directions: [
      {
        title: '\u5de5\u4e1a\u4f20\u611f\u5668',
        detail:
          '\u57fa\u4e8e\u53c2\u8003\u7ad9\u7ec4\u7ec7\u5149\u7535\u3001\u4f4d\u79fb\u3001\u8d85\u58f0\u6ce2\u3001\u538b\u529b\u3001\u78c1\u6027\u7b49\u5b50\u7c7b\u3002',
      },
      {
        title: '\u5b89\u5168\u9632\u62a4\u4f20\u611f\u5668',
        detail:
          '\u670d\u52a1\u4ea7\u7ebf\u5b89\u5168\u9632\u62a4\u3001\u533a\u57df\u68c0\u6d4b\u548c\u5b89\u5168\u95e8\u9501\u573a\u666f\u3002',
      },
      {
        title: '\u6fc0\u5149\u6d4b\u8ddd\u4f20\u611f\u5668',
        detail:
          '\u8986\u76d6\u975e\u63a5\u89e6\u6d4b\u8ddd\u3001\u4f4d\u79fb\u68c0\u6d4b\u548c\u9ad8\u7cbe\u5ea6\u5b9a\u4f4d\u573a\u666f\u3002',
      },
      {
        title: '\u7ebf\u6027\u6ed1\u8f68\u53ca\u6a21\u7ec4',
        detail:
          '\u4e3a\u8fd0\u52a8\u5355\u5143\u3001\u5b9a\u4f4d\u6a21\u7ec4\u548c\u88c5\u5907\u7ed3\u6784\u5347\u7ea7\u63d0\u4f9b\u57fa\u7840\u90e8\u4ef6\u3002',
      },
      {
        title: '\u6c14\u52a8\u5143\u5668\u4ef6',
        detail:
          '\u8865\u9f50\u6267\u884c\u673a\u6784\u4e0e\u63a7\u5236\u5355\u5143\uff0c\u4e0e\u4f20\u611f\u4e0e\u7cfb\u7edf\u96c6\u6210\u65b9\u5411\u5f62\u6210\u95ed\u73af\u3002',
      },
    ],
    partnersTitle: '\u54c1\u724c\u5408\u4f5c',
    partnersSummary:
      '\u4ee5\u5408\u4f5c\u54c1\u724c\u7cfb\u7edf\u4e0e\u81ea\u6709\u4e1a\u52a1\u8868\u8fbe\u5e76\u884c\u7684\u65b9\u5f0f\uff0c\u5efa\u7acb\u66f4\u53ef\u9760\u7684\u9879\u76ee\u4fe1\u4efb\u611f\u3002',
    partners: [
      {
        name: '\u534e\u6021\u4e30 Huayifeng',
        detail:
          '\u4f5c\u4e3a\u53c2\u8003\u4ea7\u54c1\u4f53\u7cfb\u7684\u4e3b\u8981\u6765\u6e90\uff0c\u5e2e\u52a9\u5feb\u901f\u5bf9\u9f50\u5de5\u4e1a\u4f20\u611f\u5206\u7c7b\u7ed3\u6784\u3002',
      },
      {
        name: '\u677e\u4e0b Panasonic',
        detail:
          '\u5f3a\u5316\u7cbe\u5bc6\u611f\u6d4b\u4e0e\u81ea\u52a8\u5316\u54c1\u724c\u8ba4\u77e5\uff0c\u63d0\u5347\u56fd\u9645\u5316\u6c14\u8d28\u3002',
      },
      {
        name: '\u897f\u514b Sick',
        detail:
          '\u5bf9\u5e94\u5de5\u4e1a\u4f20\u611f\u3001\u5b89\u5168\u68c0\u6d4b\u548c\u667a\u80fd\u5236\u9020\u7c7b\u573a\u666f\u8bed\u5883\u3002',
      },
      {
        name: '\u4e9a\u5fb7\u5ba2 AirTAC',
        detail:
          '\u4e0e\u6c14\u52a8\u5143\u5668\u4ef6\u4e1a\u52a1\u65b9\u5411\u5bf9\u5e94\uff0c\u62c9\u8fd1\u88c5\u5907\u7aef\u5e94\u7528\u8bed\u5883\u3002',
      },
      {
        name: '\u91d1\u5668 Mindman',
        detail:
          '\u8865\u8db3\u6267\u884c\u673a\u6784\u4e0e\u7cfb\u7edf\u96c6\u6210\u5c42\u9762\u7684\u54c1\u724c\u5408\u4f5c\u9884\u671f\u3002',
      },
    ],
    profileTitle: '\u516c\u53f8\u7b80\u4ecb',
    profileSummary:
      '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8\u7acb\u8db3\u6df1\u5733\uff0c\u805a\u7126\u5de5\u4e1a\u4f20\u611f\u5668\u4e0e\u5de5\u4e1a\u81ea\u52a8\u5316\u76f8\u5173\u4ea7\u54c1\u53ca\u6280\u672f\u670d\u52a1\u3002',
    profileBody:
      '\u516c\u53f8\u9762\u5411\u667a\u80fd\u5236\u9020\u573a\u666f\uff0c\u63d0\u4f9b\u5de5\u4e1a\u4f20\u611f\u5668\u3001\u5b89\u5168\u9632\u62a4\u4f20\u611f\u5668\u3001\u6fc0\u5149\u6d4b\u8ddd\u4f20\u611f\u5668\u3001\u7ebf\u6027\u6ed1\u8f68\u53ca\u6a21\u7ec4\u3001\u6c14\u52a8\u5143\u5668\u4ef6\uff0c\u4ee5\u53ca\u8f6f\u4ef6\u5f00\u53d1\u4e0e\u6280\u672f\u96c6\u6210\u670d\u52a1\uff0c\u81f4\u529b\u4e8e\u4ee5\u7a33\u5b9a\u4f9b\u5e94\u3001\u4e13\u4e1a\u652f\u6301\u548c\u9ad8\u6548\u54cd\u5e94\u63d0\u5347\u5ba2\u6237\u7684\u4ea7\u7ebf\u6548\u7387\u3002',
    profileFacts: [
      {
        label: '\u529e\u516c\u5730\u70b9',
        value:
          '\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u9053\u79d1\u6280\u56ed\u793e\u533a\u79d1\u82d1\u8def 8 \u53f7\u8baf\u7f8e\u79d1\u6280\u5e7f\u573a 3 \u53f7\u697c',
      },
      {
        label: '\u4e3b\u8981\u65b9\u5411',
        value:
          '\u5de5\u4e1a\u4f20\u611f\u5668 \uff5c \u89e3\u51b3\u65b9\u6848 \uff5c \u8f6f\u4ef6\u5f00\u53d1 \uff5c \u6280\u672f\u96c6\u6210',
      },
      {
        label: '\u5408\u4f5c\u65b9\u5f0f',
        value:
          '\u9009\u578b\u54a8\u8be2 \uff5c \u9879\u76ee\u914d\u5408 \uff5c \u6280\u672f\u652f\u6301',
      },
    ],
    assuranceTitle: '\u8d44\u8d28\u4e0e\u6388\u6743\u5c55\u793a',
    assuranceSummary:
      '\u9996\u9875\u5148\u628a\u8d44\u6599\u9f50\u5907\u5ea6\u3001\u6388\u6743\u7ed3\u6784\u548c\u4ea4\u4ed8\u8bc1\u660e\u4f4d\u7f6e\u6536\u675f\u6210\u53ef\u9605\u8bfb\u7684\u4f01\u4e1a\u53f0\u8d26\uff0c\u8ba9\u5de5\u4e1a\u5ba2\u6237\u5148\u770b\u5230\u4fe1\u4efb\u6846\u67b6\u3002',
    assuranceSignals: [
      {
        label: '\u8d44\u8d28\u6863\u6848',
        title: '\u4f01\u4e1a\u8d44\u6599\u5c55\u793a\u4f4d\u5df2\u9884\u7559',
        detail:
          '\u53ef\u540e\u7eed\u8865\u5165\u8425\u4e1a\u8d44\u8d28\u3001\u4f53\u7cfb\u8ba4\u8bc1\u3001\u4f01\u4e1a\u80fd\u529b\u8bc1\u660e\u7b49\u5185\u5bb9\uff0c\u8ba9\u9996\u5c4f\u5c31\u5bf9\u5916\u4f20\u8fbe\u8d44\u6599\u9f50\u5907\u5ea6\u3002',
      },
      {
        label: '\u6388\u6743\u7ba1\u7406',
        title: '\u54c1\u724c\u6388\u6743\u7ed3\u6784\u5df2\u5efa\u7acb',
        detail:
          '\u5408\u4f5c\u54c1\u724c\u7684\u6388\u6743\u56fe\u3001\u4ee3\u7406\u8bf4\u660e\u548c\u76f8\u5173\u58f0\u660e\u53ef\u6309\u54c1\u724c\u5206\u533a\u8865\u5145\uff0c\u51cf\u5c11\u540e\u7eed\u91cd\u65b0\u6539\u7248\u6210\u672c\u3002',
      },
      {
        label: '\u9879\u76ee\u8bc1\u660e',
        title: '\u4ea4\u4ed8\u4e0e\u6848\u4f8b\u6750\u6599\u53ef\u6301\u7eed\u589e\u8865',
        detail:
          '\u4ece\u9879\u76ee\u622a\u56fe\u3001\u5e94\u7528\u8bf4\u660e\u5230\u884c\u4e1a\u6848\u4f8b\uff0c\u90fd\u53ef\u5728\u73b0\u6709\u4f4d\u7f6e\u4e0a\u5e73\u6ed1\u8865\u5165\uff0c\u4fdd\u6301\u9996\u9875\u53d9\u4e8b\u8fde\u8d2f\u3002',
      },
    ],
    processTitle: '\u9879\u76ee\u914d\u5408\u8282\u594f',
    processSummary:
      '\u552e\u524d\u8def\u5f84\u88ab\u538b\u7f29\u6210\u4e09\u6bb5\uff1a\u5148\u786e\u8ba4\u573a\u666f\uff0c\u518d\u5bf9\u9f50\u578b\u53f7\u4e0e\u63a5\u53e3\uff0c\u6700\u540e\u8fdb\u5165\u8be2\u76d8\u8ddf\u8fdb\u3002',
    processSteps: [
      {
        step: '01',
        title: '\u786e\u8ba4\u611f\u6d4b\u573a\u666f',
        detail:
          '\u5148\u56f4\u7ed5\u8bbe\u5907\u7c7b\u578b\u3001\u68c0\u6d4b\u76ee\u6807\u3001\u5b89\u88c5\u6761\u4ef6\u548c\u73b0\u573a\u9650\u5236\u6765\u6536\u6574\u9700\u6c42\u8fb9\u754c\u3002',
      },
      {
        step: '02',
        title: '\u5bf9\u9f50\u578b\u53f7\u4e0e\u63a5\u53e3',
        detail:
          '\u57fa\u4e8e\u9009\u578b\u7ed3\u679c\u8fdb\u4e00\u6b65\u5bf9\u9f50\u54c1\u724c\u504f\u597d\u3001\u8f93\u51fa\u65b9\u5f0f\u3001\u96c6\u6210\u63a5\u53e3\u548c\u4ea4\u4ed8\u8303\u56f4\u3002',
      },
      {
        step: '03',
        title: '\u8fdb\u5165\u8be2\u76d8\u4e0e\u9879\u76ee\u8ddf\u8fdb',
        detail:
          '\u5c06\u524d\u671f\u8ba8\u8bba\u6536\u675f\u5230\u8be2\u76d8\u5165\u53e3\uff0c\u65b9\u4fbf\u540e\u7eed\u8fdb\u5165\u5546\u52a1\u6c9f\u901a\u3001\u9001\u6837\u6216\u96c6\u6210\u914d\u5408\u3002',
      },
    ],
    finalCtaTitle: '\u8ba9\u6c9f\u901a\u4ece\u9879\u76ee\u573a\u666f\u5f00\u59cb',
    finalCtaBody:
      '\u4f60\u53ef\u4ee5\u76f4\u63a5\u544a\u8bc9\u6211\u4eec\u8bbe\u5907\u578b\u53f7\u3001\u611f\u6d4b\u573a\u666f\u6216\u96c6\u6210\u9700\u6c42\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u9879\u76ee\u9636\u6bb5\u5339\u914d\u5408\u9002\u7684\u4ea7\u54c1\u4e0e\u6280\u672f\u8def\u5f84\u3002',
  },
  productCenter: {
    title: '\u4ea7\u54c1\u4e2d\u5fc3 / Product Center',
    summary:
      '\u4ee5\u4e94\u5927\u4e00\u7ea7\u5206\u7c7b\u4e3a\u4e3b\u8f74\uff0c\u540c\u6b65\u5c55\u5f00\u5de5\u4e1a\u4f20\u611f\u5668\u4e8c\u7ea7\u5b50\u7c7b\u3002',
    description:
      '\u5de5\u4e1a\u4f20\u611f\u5668\u3001\u5b89\u5168\u9632\u62a4\u4f20\u611f\u5668\u3001\u6fc0\u5149\u6d4b\u8ddd\u4f20\u611f\u5668\u3001\u7ebf\u6027\u6ed1\u8f68\u53ca\u6a21\u7ec4\u3001\u6c14\u52a8\u5143\u5668\u4ef6\u5c06\u6309\u7167\u53cc\u8bed\u7ed3\u6784\u7ee7\u7eed\u5b8c\u5584\u3002',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: '\u8fd4\u56de\u9996\u9875',
  },
  solutions: {
    title: '解决方案 / Solutions',
    summary:
      '围绕工业自动化解决方案、软件开发与技术集成三条主线，帮助客户把产品选型、控制逻辑与项目落地串成同一条路径。',
    description:
      '本页先建立双语解决方案框架，让设备制造商、系统集成商和终端工厂客户都能快速判断适配场景、服务边界与沟通入口。',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: '查看产品中心',
  },
  partners: {
    title: '品牌合作 / Partners',
    summary: '把合作品牌、授权资料和项目协同能力整理成更像业务入口的合作页面。',
    description:
      '这一页不再只是品牌名单，而是把品牌角色、资料支持、合作说明和后续沟通动作放进同一条阅读路径。',
    primaryCta: '发起合作咨询',
    secondaryCta: '查看解决方案',
  },
  solutionsPage: {
    eyebrow: '解决方案与实施路径',
    heroSummary:
      '从工业传感器选型到软件联动与现场集成，跃鳞科技把项目沟通压缩成更适合工业客户阅读的三条服务主线。',
    heroDescription:
      '这一页不只解释我们能做什么，还会告诉客户应该从哪条路线开始、下一步应该点向哪里、以及如果需求继续扩展该如何顺滑切换到下一条主线。',
    coverageTitle: '适配客户与项目阶段',
    coverageSummary:
      '无论是新设备开发、既有产线改造，还是需要把传感、执行与控制系统串起来的项目，都可以先从这里判断合作边界。',
    coverageItems: [
      {
        label: '设备制造商',
        title: '面向新机开发与选型联动',
        detail:
          '适合需要同步考虑传感器、执行元件、接口方式与出厂稳定性的设备项目。',
      },
      {
        label: '系统集成商',
        title: '面向接口梳理与实施配合',
        detail:
          '适合需要明确控制路径、信号接入、品牌偏好与交付边界的集成项目。',
      },
      {
        label: '终端工厂',
        title: '面向产线升级与替换补强',
        detail:
          '适合围绕检测工位、定位单元、安全防护或改造节拍展开的应用需求。',
      },
    ],
    trackNavLabel: '解决方案主线导航',
    tracksTitle: '三条解决方案主线',
    tracksSummary:
      '先快速判断路线，再进入对应主线的服务范围、价值和行动入口，减少工业客户在第一轮沟通里来回切换信息。',
    tracks: [
      {
        anchor: 'industrial-automation',
        step: '01',
        title: '工业自动化解决方案',
        summary:
          '把传感、执行、控制和产线节拍放在同一条实施路径里，减少前期沟通割裂感。',
        scenarioTitle: '适用场景',
        scenario:
          '适用于新设备开发、检测工位搭建、单机升级、产线改造和安全补强等自动化项目。',
        scopeTitle: '服务范围',
        scope: [
          '传感器、气动元件、线性模组等方案组合建议',
          '围绕检测、定位、安全与动作联动的接口梳理',
          '按设备结构与现场条件提供实施配合建议',
        ],
        valueTitle: '预期价值',
        value: [
          '减少前期选型与集成沟通成本',
          '让设备端与控制端更早对齐实施边界',
          '为后续送样、报价和落地验证创造明确入口',
        ],
        actionTitle: '适合先从场景沟通切入',
        actionBody:
          '如果你已经明确设备类型、检测对象或改造目标，可以直接把现场条件带进沟通，我们会先收敛自动化路径。',
        primaryCta: {
          label: '沟通自动化场景',
          section: 'contact',
        },
        secondaryCta: {
          label: '查看相关产品方向',
          section: 'products',
        },
        transition: {
          label: '继续延伸',
          title: '当现场动作需要进一步连到软件层',
          detail:
            '如果项目不只需要硬件与接口，还要把状态、告警或过程数据继续带到软件界面，下一步通常会转入软件开发主线。',
          ctaLabel: '转到软件开发',
          targetId: 'software-development',
        },
      },
      {
        anchor: 'software-development',
        step: '02',
        title: '软件开发',
        summary:
          '把现场信号、逻辑处理和上位交互放到同一套可沟通的软件路径中。',
        scenarioTitle: '适用场景',
        scenario:
          '适用于需要数据采集、状态监控、工位逻辑、基础可视化或轻量业务联动的自动化配套项目。',
        scopeTitle: '服务范围',
        scope: [
          '现场信号整理与软件逻辑拆分',
          '围绕监控、参数、告警与流程做轻量功能规划',
          '配合既有自动化项目完成基础界面或数据处理需求',
        ],
        valueTitle: '预期价值',
        value: [
          '让项目从硬件选型延伸到软件协同',
          '减少传感数据与现场逻辑之间的断层',
          '让客户更早看到从检测到可用信息的闭环',
        ],
        actionTitle: '适合先从数据与流程说明开始',
        actionBody:
          '如果你已经知道要采什么信号、看什么状态、让谁使用界面，软件开发路线可以帮助我们更快划清功能边界。',
        primaryCta: {
          label: '沟通软件需求',
          section: 'contact',
        },
        secondaryCta: {
          label: '查看服务与支持',
          section: 'support',
        },
        transition: {
          label: '继续延伸',
          title: '当软件方案还要落回多品牌设备与接口协同',
          detail:
            '如果项目同时涉及既有系统、合作品牌、执行单元和现场布置，下一步通常会转入技术集成主线来统一边界。',
          ctaLabel: '转到技术集成',
          targetId: 'technical-integration',
        },
      },
      {
        anchor: 'technical-integration',
        step: '03',
        title: '技术集成',
        summary:
          '把品牌、接口、执行单元与实施边界整合成可推进的项目协同路径。',
        scenarioTitle: '适用场景',
        scenario:
          '适用于多品牌混用、系统对接复杂、现场条件多约束或需要长期技术配合的集成型项目。',
        scopeTitle: '服务范围',
        scope: [
          '围绕合作品牌与现有系统进行接口协调',
          '结合现场条件梳理布置、联动与替换方案',
          '在选型、验证、交付之间保持连续技术沟通',
        ],
        valueTitle: '预期价值',
        value: [
          '帮助项目团队更快统一接口与品牌策略',
          '降低方案切换和现场返工风险',
          '让商务沟通与技术实施保持同一节奏',
        ],
        actionTitle: '适合先从系统边界与品牌条件说起',
        actionBody:
          '如果现场已经存在多品牌设备、接口限制或交付节奏压力，技术集成路线更适合先把协同边界谈清楚。',
        primaryCta: {
          label: '沟通集成边界',
          section: 'contact',
        },
        secondaryCta: {
          label: '查看产品中心',
          section: 'products',
        },
        transition: {
          label: '继续延伸',
          title: '当路线已经判断清楚，下一步先看品牌合作怎么嵌进项目',
          detail:
            '技术集成往往不仅取决于接口本身，也取决于合作品牌和自有业务边界如何一起落地，所以更适合先看品牌合作生态再进入正式咨询。',
          ctaLabel: '跳到品牌合作生态',
          targetId: 'partner-ecosystem',
        },
      },
    ],
    partnershipTitle: '品牌合作生态，不是单独的 logo 墙',
    partnershipSummary:
      '这些合作品牌会被放进项目生态里解释，而不是脱离业务场景单独陈列。重点是让客户看懂：跃鳞科技的自有业务、合作品牌的加成能力，以及多品牌协同交付可以同时成立。',
    partnershipModesTitle: '品牌合作如何被表达',
    partnershipModesSummary:
      '这一组内容既要建立信任，也要说清工作方式：哪些能力由跃鳞科技直接承接，哪些品牌用于强化感测、安全、气动或集成语境，以及多品牌项目如何保持可读。',
    partnershipModes: [
      {
        title: '先突出跃鳞科技，再补足合作品牌语境',
        detail:
          '官网主体仍然是跃鳞科技的产品与方案表达，合作品牌则用来说明项目所处的工业生态，而不是喧宾夺主。',
      },
      {
        title: '每个品牌都对应真实项目层级',
        detail:
          '品牌信息必须落回选型参考、精密感测、安全检测、气动执行或系统协同这些具体层级，避免只剩下品牌陈列。',
      },
      {
        title: '多品牌项目也要读得明白',
        detail:
          '让客户理解选型、替换和集成过程可以同时包含跃鳞科技交付与品牌侧要求，而不是被迫包装成单一品牌故事。',
      },
    ],
    partnerTrackLabel: '关联主线',
    partnerBrands: [
      {
        label: '参考体系',
        name: '华怡丰 Huayifeng',
        detail:
          '作为产品分类与选型逻辑的重要参考来源，帮助客户更快把工业传感器目录和实际应用场景对上。',
        projectRole:
          '更适合出现在项目早期，帮助客户快速判断传感分类、选型范围和目录结构。',
        relatedTrack: '工业自动化解决方案',
      },
      {
        label: '精密感测',
        name: '松下 Panasonic',
        detail:
          '强化官网在精密感测与国际化表达上的可信度，适合承接对稳定检测与品牌认知要求更高的设备项目。',
        projectRole:
          '更适合用于强调定位、检测精度和出口型设备沟通中的感测信任度。',
        relatedTrack: '工业自动化解决方案',
      },
      {
        label: '安全与检测',
        name: '西克 Sick',
        detail:
          '让工业传感、安全检测和智能制造场景之间的关联更自然，补强技术集成语境下的专业度。',
        projectRole:
          '更适合用于同时涉及检测深度、安全逻辑和工业场景可信度的项目沟通。',
        relatedTrack: '技术集成',
      },
      {
        label: '气动执行',
        name: '亚德客 AirTAC',
        detail:
          '代表执行端和设备端部件层，让自动化方案不只停留在传感，还能自然过渡到动作机构与工位节拍。',
        projectRole:
          '更适合出现在传感与气缸、气动动作、设备替换或工位联动一起讨论的项目里。',
        relatedTrack: '工业自动化解决方案',
      },
      {
        label: '系统协同',
        name: '金器 Mindman',
        detail:
          '补足执行单元与系统协同预期，尤其适合放进多品牌、多部件层同时协作的集成型项目叙事。',
        projectRole:
          '更适合用于执行单元协同、长期集成配合或多层组件共同落地的项目说明。',
        relatedTrack: '技术集成',
      },
    ],
    coordinationTitle: '前期沟通建议',
    coordinationSummary:
      '如果项目还没有完整规格书，先准备下面这些信息就够用了。',
    coordinationItems: [
      {
        title: '设备与工位边界',
        detail:
          '说明设备类型、检测对象、节拍要求和安装限制，能更快缩小方案范围。',
      },
      {
        title: '接口与控制条件',
        detail:
          '提前同步 PLC、IO、通讯方式、软件联动或执行元件接口，后续更容易判断实施复杂度。',
      },
      {
        title: '交付目标与时间点',
        detail:
          '无论是送样、替换、验证还是整段产线升级，只要先讲清节点，就能更早进入有效沟通。',
      },
    ],
    processTitle: '方案推进节奏',
    processSummary:
      '解决方案页不是单纯展示能力，而是把沟通路径讲明白：先确认场景，再对齐边界，最后进入商务与实施跟进。',
    processSteps: [
      {
        step: '01',
        title: '确认场景与目标',
        detail:
          '围绕检测对象、动作关系、安全要求和现场限制收敛问题定义。',
      },
      {
        step: '02',
        title: '对齐产品、软件与集成边界',
        detail:
          '根据方案方向判断需要的传感器、执行元件、软件逻辑与协同接口。',
      },
      {
        step: '03',
        title: '进入询盘与后续配合',
        detail:
          '当方向明确后，再推进报价、送样、验证计划或项目实施安排。',
      },
    ],
    finalCtaTitle: '如果你已经有场景，下一步就该进入沟通',
    finalCtaBody:
      '告诉我们设备类型、检测目标、控制方式或改造目的，我们会先按最合适的解决方案方向帮你收敛路径。',
  },
  support: {
    title: '服务与支持 / Support',
    summary:
      '产品目录申请、资料获取与技术配合现在都收束到同一条支持路径里。',
    description:
      '这页会像工业服务台一样组织内容：先告诉客户能申请什么、资料准备到哪一步、以及技术支持应该如何进入下一步沟通。',
    primaryCta: 'Request Support / 获取支持',
    secondaryCta: '查看产品中心',
  },
  supportPage: {
    eyebrow: '服务与支持路径',
    heroSummary:
      '服务与支持页把选型后的问题收成一条更清楚的路线：哪些资料现在就能申请、哪些文件还处于预留状态、技术问题该怎样进入下一步沟通。',
    heroDescription:
      '它不再只是一个“联系我们”的替代页，而是一个更像工业服务目录的入口，让客户能先判断资料、目录和项目协同应该走哪条支持路径。',
    quickPanelTitle: '快速支持视图',
    quickPanelSummary:
      '客户打开这页时，应该一眼看清三件事：目录能否申请、资料是否在准备、技术沟通能否直接开始。',
    quickPanelItems: [
      {
        label: '目录入口',
        title: '产品目录申请路径已经明确',
        detail:
          '客户不需要在多个栏目里来回找入口，可以直接从支持页进入目录申请与产品梳理路径。',
      },
      {
        label: '资料状态',
        title: '下载资料会带着准备状态一起说明',
        detail:
          '说明书、手册和相关技术文件后续可以直接补入，不需要重新推翻页面结构。',
      },
      {
        label: '技术响应',
        title: '支持路径会贴着真实项目问题展开',
        detail:
          '围绕选型、接口、替换条件和项目节点组织支持，而不是做成空泛的售后公告栏。',
      },
    ],
    capabilityTitle: '支持能力',
    capabilitySummary:
      '这里要表达的是持续项目配合，而不是被动售后，因此内容会优先围绕项目推进所需的支持方式展开。',
    capabilities: [
      {
        title: '选型跟进与替换建议',
        detail:
          '适合客户已经知道设备场景，但还需要继续缩小传感器、气动元件或线性模组范围的情况。',
      },
      {
        title: '围绕集成条件的技术配合',
        detail:
          '适合问题已经涉及 IO、通讯、现场约束或某个部件如何衔接更大实施路径的项目。',
      },
      {
        title: '辅助决策的资料准备',
        detail:
          '适合客户在正式询盘或报价前，先需要目录、资料占位或文件准备确认的场景。',
      },
    ],
    guidanceTitle: '什么情况下应该先看这页',
    guidanceSummary:
      '支持页的职责不是把所有问题压成同一个表单，而是把客户引到最合适的下一步。',
    guidanceItems: [
      {
        title: '需要目录或资料时先从这里进入',
        detail:
          '如果客户先想确认产品目录、技术文件占位或下一步可提供哪些资料，支持页应该是第一站。',
      },
      {
        title: '需要技术澄清时也先从这里进入',
        detail:
          '如果问题围绕型号匹配、替换边界或现场条件，这里应该像技术协同入口，而不是一个死板的留言页。',
      },
      {
        title: '明确后再平滑转入正式咨询',
        detail:
          '一旦资料需求、项目条件或支持边界清楚了，就应该自然进入下一步咨询与配合。',
      },
    ],
    resourceTitle: '资料与申请台',
    resourceSummary:
      '这里会明确告诉客户哪些内容可以现在申请，哪些仍是占位入口，避免支持页看起来像空栏目。',
    resources: [
      {
        label: '目录申请',
        status: '可直接进入',
        title: '产品目录申请',
        detail:
          '适合客户先需要一个按产品族和应用方向整理的总览，再决定后续是否进入型号和集成沟通。',
        deliverable:
          '预期结果：获得分类级目录、建立选型对话基础，并能顺畅转入产品中心或后续咨询。',
        primaryCta: {
          label: '申请产品目录',
          section: 'contact',
        },
        secondaryCta: {
          label: '查看产品中心',
          section: 'products',
        },
      },
      {
        label: '资料占位',
        status: '已预留入口',
        title: '说明书与技术资料获取',
        detail:
          '适合客户先确认说明书、手册或相关技术文件是否能通过支持路径准备与提供。',
        deliverable:
          '预期结果：确认资料准备状态、建立文件获取路径，并明确下一步沟通方式。',
        primaryCta: {
          label: '申请技术资料',
          section: 'contact',
        },
        secondaryCta: {
          label: '查看解决方案',
          section: 'solutions',
        },
      },
      {
        label: '协同受理',
        status: '引导式入口',
        title: '项目支持受理',
        detail:
          '适合需求已经超出单一文件，需要把型号、接口、时间点和实施配合一起带入支持讨论的项目。',
        deliverable:
          '预期结果：明确支持边界、整理项目信息，并进入更准确的技术跟进路径。',
        primaryCta: {
          label: '发起支持受理',
          section: 'contact',
        },
        secondaryCta: {
          label: '返回解决方案',
          section: 'solutions',
        },
      },
    ],
    processTitle: '支持响应节奏',
    processSummary:
      '支持页需要把下一步讲清楚：先提出需求，再确认资料或协同类型，最后进入真正的后续动作。',
    processSteps: [
      {
        step: '01',
        title: '提交需求边界',
        detail:
          '先说明产品族、设备场景或需要的文件类型，让支持请求从一开始就被收敛。',
      },
      {
        step: '02',
        title: '确认资料或技术配合类型',
        detail:
          '判断下一步是目录分享、技术文件准备，还是更广义的项目协同支持。',
      },
      {
        step: '03',
        title: '进入正确的后续路径',
        detail:
          '一旦支持方向清楚，就可以继续进入咨询、报价、送样或更深入的技术沟通。',
      },
    ],
    finalCtaTitle: '如果支持需求已经明确，现在就可以进入申请路径',
    finalCtaBody:
      '告诉我们你需要的资料类型、设备场景或协同问题，我们会先帮你收敛出最快有价值的下一步。',
  },
  about: {
    title: '\u5173\u4e8e\u6211\u4eec / About',
    summary:
      '\u4f01\u4e1a\u4ecb\u7ecd\u3001\u54c1\u724c\u4fe1\u4efb\u4e0e\u8054\u7cfb\u4fe1\u606f\u5c06\u4fdd\u6301\u4e2d\u82f1\u6587\u955c\u50cf\u7ed3\u6784\u3002',
    description:
      '\u516c\u53f8\u7b80\u4ecb\u4f1a\u805a\u7126\u5de5\u4e1a\u4f20\u611f\u4e0e\u81ea\u52a8\u5316\u670d\u52a1\uff0c\u5730\u5740\u3001\u6388\u6743\u4e0e\u8d44\u8d28\u5148\u7559\u51fa\u7edf\u4e00\u5c55\u793a\u4f4d\u7f6e\u3002',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: '\u8fd4\u56de\u9996\u9875',
  },
  aboutPage: {
    eyebrow: '\u5173\u4e8e\u8dc3\u9cde\u79d1\u6280',
    heroSummary:
      '\u4ece\u5de5\u4e1a\u4f20\u611f\u3001\u7ec4\u4ef6\u9009\u578b\u5230\u81ea\u52a8\u5316\u96c6\u6210\u8def\u5f84\uff0c\u6211\u4eec\u7528\u66f4\u7a33\u5b9a\u7684\u4f9b\u5e94\u4e0e\u66f4\u52a1\u5b9e\u7684\u6280\u672f\u652f\u6301\u5e2e\u5ba2\u6237\u63a8\u8fdb\u9879\u76ee\u3002',
    heroDescription:
      '\u8fd9\u4e2a\u9875\u9762\u4f1a\u628a\u516c\u53f8\u7b80\u4ecb\u3001\u529e\u516c\u5730\u70b9\u3001\u4e1a\u52a1\u65b9\u5411\u3001\u5408\u4f5c\u54c1\u724c\u548c\u8d44\u8d28\u9884\u7559\u7edf\u4e00\u6536\u675f\u5728\u4e00\u8d77\uff0c\u8ba9\u5ba2\u6237\u80fd\u5feb\u901f\u5efa\u7acb\u5bf9\u4f01\u4e1a\u7684\u4fe1\u4efb\u611f\u3002',
    companyTitle: '\u516c\u53f8\u4ecb\u7ecd',
    companyParagraphs: [
      '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8\u7acb\u8db3\u6df1\u5733\uff0c\u805a\u7126\u5de5\u4e1a\u4f20\u611f\u5668\u4e0e\u5de5\u4e1a\u81ea\u52a8\u5316\u76f8\u5173\u4ea7\u54c1\u53ca\u6280\u672f\u670d\u52a1\uff0c\u9762\u5411\u8bbe\u5907\u5236\u9020\u5546\u3001\u7cfb\u7edf\u96c6\u6210\u5546\u548c\u7ec8\u7aef\u5de5\u5382\u5ba2\u6237\u63d0\u4f9b\u66f4\u6e05\u6670\u7684\u9009\u578b\u548c\u96c6\u6210\u8def\u5f84\u3002',
      '\u516c\u53f8\u4e1a\u52a1\u56f4\u7ed5\u5de5\u4e1a\u4f20\u611f\u5668\u3001\u5b89\u5168\u9632\u62a4\u4f20\u611f\u5668\u3001\u6fc0\u5149\u6d4b\u8ddd\u4f20\u611f\u5668\u3001\u7ebf\u6027\u6ed1\u8f68\u53ca\u6a21\u7ec4\u3001\u6c14\u52a8\u5143\u5668\u4ef6\uff0c\u540c\u65f6\u63d0\u4f9b\u8f6f\u4ef6\u5f00\u53d1\u4e0e\u6280\u672f\u96c6\u6210\u670d\u52a1\uff0c\u5e2e\u52a9\u5ba2\u6237\u63d0\u5347\u8bbe\u5907\u81ea\u52a8\u5316\u80fd\u529b\u4e0e\u4ea7\u7ebf\u8fd0\u884c\u6548\u7387\u3002',
    ],
    factsTitle: '\u57fa\u672c\u4fe1\u606f',
    facts: [
      {
        label: '\u516c\u53f8\u5168\u79f0',
        value: '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8',
      },
      {
        label: '\u529e\u516c\u5730\u5740',
        value:
          '\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u9053\u79d1\u6280\u56ed\u793e\u533a\u79d1\u82d1\u8def 8 \u53f7\u8baf\u7f8e\u79d1\u6280\u5e7f\u573a 3 \u53f7\u697c',
      },
      {
        label: '\u670d\u52a1\u5bf9\u8c61',
        value:
          '\u8bbe\u5907\u5236\u9020\u5546 \uff5c \u7cfb\u7edf\u96c6\u6210\u5546 \uff5c \u7ec8\u7aef\u5de5\u5382\u5ba2\u6237',
      },
      {
        label: '\u4e1a\u52a1\u65b9\u5411',
        value:
          '\u5de5\u4e1a\u4f20\u611f\u5668 \uff5c \u89e3\u51b3\u65b9\u6848 \uff5c \u8f6f\u4ef6\u5f00\u53d1 \uff5c \u6280\u672f\u96c6\u6210',
      },
    ],
    trustTitle: '\u4fe1\u4efb\u4e0e\u914d\u5408\u65b9\u5f0f',
    trustSummary:
      '\u5bf9\u4e8e\u5de5\u4e1a\u5ba2\u6237\u6765\u8bf4\uff0c\u53ef\u9760\u7684\u4f9b\u5e94\u54cd\u5e94\u3001\u6e05\u6670\u7684\u9009\u578b\u8def\u5f84\u548c\u53ef\u914d\u5408\u7684\u9879\u76ee\u8282\u594f\uff0c\u6bd4\u7a7a\u6cdb\u7684\u54c1\u724c\u53e3\u53f7\u66f4\u91cd\u8981\u3002',
    trustItems: [
      {
        title: '\u7a33\u5b9a\u4f9b\u5e94\u4e0e\u9009\u578b\u6c9f\u901a',
        detail:
          '\u4f18\u5148\u56f4\u7ed5\u5b9e\u9645\u573a\u666f\u548c\u4ea7\u54c1\u578b\u53f7\u5c55\u5f00\u6c9f\u901a\uff0c\u907f\u514d\u4ec5\u505c\u7559\u5728\u5bbd\u6cdb\u5ba3\u4f20\u5c42\u9762\u3002',
      },
      {
        title: '\u53ef\u5bf9\u63a5\u7684\u6280\u672f\u96c6\u6210',
        detail:
          '\u4ece\u611f\u6d4b\u4fe1\u53f7\u3001\u6267\u884c\u673a\u6784\u5230\u8f6f\u4ef6\u8def\u5f84\uff0c\u4fdd\u6301\u5bf9\u9879\u76ee\u5b9e\u65bd\u7684\u914d\u5408\u80fd\u529b\u3002',
      },
      {
        title: '\u4e2d\u82f1\u6587\u53cc\u8bed\u5c55\u793a',
        detail:
          '\u4fbf\u4e8e\u56fd\u5185\u6c9f\u901a\u4e0e\u56fd\u9645\u5316\u4e1a\u52a1\u573a\u666f\u5bf9\u5916\u8868\u8fbe\uff0c\u4fdd\u6301\u540c\u4e00\u5957\u4f01\u4e1a\u53d9\u4e8b\u7ed3\u6784\u3002',
      },
    ],
    partnersTitle: '\u5408\u4f5c\u54c1\u724c',
    partnersSummary:
      '\u54c1\u724c\u5408\u4f5c\u4e0d\u53ea\u662f logo \u5217\u8868\uff0c\u800c\u662f\u7528\u6765\u8bf4\u660e\u6211\u4eec\u80fd\u5bf9\u63a5\u7684\u4f20\u611f\u3001\u5b89\u5168\u3001\u6c14\u52a8\u548c\u96c6\u6210\u751f\u6001\u8303\u56f4\u3002',
    qualificationsTitle: '\u8d44\u8d28\u4e0e\u6388\u6743\u9884\u7559',
    qualificationsSummary:
      '\u5f53\u524d\u5148\u4ee5\u7ed3\u6784\u5316\u9884\u7559\u5f62\u5f0f\u627f\u63a5\u8d44\u8d28\u8bc1\u4e66\u3001\u54c1\u724c\u6388\u6743\u548c\u4f01\u4e1a\u80fd\u529b\u6750\u6599\uff0c\u4fbf\u4e8e\u540e\u7eed\u5feb\u901f\u66ff\u6362\u4e3a\u771f\u5b9e\u5185\u5bb9\u3002',
    qualifications: [
      {
        title: '\u4f01\u4e1a\u8d44\u8d28',
        detail: '\u9884\u7559\u8425\u4e1a\u8d44\u8d28\u3001\u4f53\u7cfb\u8ba4\u8bc1\u3001\u9879\u76ee\u8bc1\u660e\u7b49\u5c55\u793a\u4f4d\u7f6e\u3002',
        status: '\u5f85\u8865\u5145',
      },
      {
        title: '\u54c1\u724c\u6388\u6743',
        detail: '\u9884\u7559\u5408\u4f5c\u54c1\u724c\u6388\u6743\u56fe\u3001\u4ee3\u7406\u8d44\u6599\u6216\u76f8\u5173\u8bf4\u660e\u4f4d\u7f6e\u3002',
        status: '\u5f85\u8865\u5145',
      },
      {
        title: '\u4ea4\u4ed8\u7ecf\u9a8c',
        detail: '\u9884\u7559\u9879\u76ee\u6848\u4f8b\u3001\u670d\u52a1\u6d41\u7a0b\u6216\u884c\u4e1a\u5e94\u7528\u5b9e\u7ee9\u8865\u5145\u4f4d\u7f6e\u3002',
        status: '\u5f85\u8865\u5145',
      },
    ],
    authorizationTitle: '\u6388\u6743\u4e0e\u8d44\u6599\u51c6\u5907\u5ea6',
    authorizationSummary:
      '\u8fd9\u4e9b\u677f\u5757\u4f1a\u5728\u540e\u7eed\u7528\u6765\u6536\u5f55\u771f\u5b9e\u6750\u6599\uff0c\u4f46\u73b0\u5728\u5df2\u7ecf\u5148\u628a\u6388\u6743\u3001\u8d44\u8d28\u3001\u9879\u76ee\u8bc1\u660e\u7684\u6536\u7eb3\u7ed3\u6784\u7acb\u4f4f\u4e86\u3002',
    authorizationItems: [
      {
        label: '\u54c1\u724c\u6388\u6743',
        title: '\u6309\u54c1\u724c\u5206\u533a\u6536\u7eb3\u6388\u6743\u6750\u6599',
        detail:
          '\u53ef\u4e3a Panasonic\u3001Sick\u3001AirTAC\u3001Mindman \u7b49\u5408\u4f5c\u54c1\u724c\u9884\u7559\u72ec\u7acb\u6750\u6599\u69fd\uff0c\u540e\u7eed\u76f4\u63a5\u66ff\u6362\u4e3a\u771f\u5b9e\u56fe\u6587\u3002',
      },
      {
        label: '\u4f01\u4e1a\u8d44\u6599',
        title: '\u516c\u53f8\u5408\u89c4\u4e0e\u80fd\u529b\u6587\u4ef6\u5206\u5c42\u5c55\u793a',
        detail:
          '\u53ef\u8865\u5165\u8425\u4e1a\u8d44\u8d28\u3001\u4f53\u7cfb\u8bc1\u4e66\u3001\u7ec4\u7ec7\u4ecb\u7ecd\u548c\u80fd\u529b\u6750\u6599\uff0c\u4fdd\u6301\u5916\u90e8\u9605\u8bfb\u8def\u5f84\u6e05\u6670\u3002',
      },
      {
        label: '\u9879\u76ee\u8bc1\u660e',
        title: '\u4ea4\u4ed8\u622a\u56fe\u3001\u6848\u4f8b\u8bf4\u660e\u548c\u5e94\u7528\u884c\u4e1a\u53ef\u540c\u6b65\u8865\u5165',
        detail:
          '\u5185\u5bb9\u589e\u957f\u540e\u4e0d\u9700\u91cd\u5199\u9875\u9762\u7ed3\u6784\uff0c\u53ea\u9700\u66f4\u6362\u7d20\u6750\u5373\u53ef\u8fde\u7eed\u5b8c\u5584\u4fe1\u4efb\u5c42\u3002',
      },
    ],
    deliveryTitle: '\u4ea4\u4ed8\u914d\u5408\u8def\u5f84',
    deliverySummary:
      '\u5bf9\u5916\u5c55\u793a\u4e0d\u53ea\u8981\u8bf4\u4ea7\u54c1\u548c\u54c1\u724c\uff0c\u8fd8\u8981\u8bf4\u6e05\u695a\u6211\u4eec\u600e\u4e48\u4ece\u9700\u6c42\u8ba8\u8bba\u8d70\u5230\u9879\u76ee\u8ddf\u8fdb\u3002',
    deliverySteps: [
      {
        step: '01',
        title: '\u786e\u8ba4\u573a\u666f\u4e0e\u9650\u5236\u6761\u4ef6',
        detail:
          '\u4ece\u8bbe\u5907\u73af\u5883\u3001\u68c0\u6d4b\u5bf9\u8c61\u3001\u5b89\u5168\u8981\u6c42\u548c\u7528\u6237\u73b0\u573a\u8fb9\u754c\u51fa\u53d1\uff0c\u907f\u514d\u53ea\u8c08\u7c97\u7565\u6599\u53f7\u3002',
      },
      {
        step: '02',
        title: '\u5bf9\u9f50\u578b\u53f7\u3001\u63a5\u53e3\u4e0e\u96c6\u6210\u8303\u56f4',
        detail:
          '\u5c06\u4f20\u611f\u5668\u3001\u6267\u884c\u5355\u5143\u3001\u8f6f\u4ef6\u8def\u5f84\u548c\u6280\u672f\u96c6\u6210\u8303\u56f4\u653e\u5728\u540c\u4e00\u6b21\u6c9f\u901a\u91cc\u786e\u8ba4\u3002',
      },
      {
        step: '03',
        title: '\u8fdb\u5165\u5546\u52a1\u6c9f\u901a\u4e0e\u540e\u7eed\u8ddf\u8fdb',
        detail:
          '\u5f53\u4ea7\u54c1\u65b9\u5411\u548c\u914d\u5408\u8fb9\u754c\u660e\u786e\u540e\uff0c\u53ef\u76f4\u63a5\u8fdb\u5165\u8be2\u76d8\u3001\u62a5\u4ef7\u3001\u9001\u6837\u6216\u9879\u76ee\u8ba8\u8bba\u8def\u5f84\u3002',
      },
    ],
    finalCtaTitle: '\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u660e\u786e\u9879\u76ee\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f00\u59cb\u6c9f\u901a',
    finalCtaBody:
      '\u65e0\u8bba\u662f\u4ea7\u54c1\u9009\u578b\u3001\u7cfb\u7edf\u96c6\u6210\u8def\u5f84\uff0c\u8fd8\u662f\u4ea7\u7ebf\u81ea\u52a8\u5316\u914d\u5408\u9700\u6c42\uff0c\u90fd\u53ef\u4ee5\u5148\u4ece\u54a8\u8be2\u5165\u53e3\u5f00\u59cb\u3002',
  },
  contact: {
    title: '\u8054\u7cfb\u6211\u4eec / Contact',
    summary:
      '\u5c06\u4ea7\u54c1\u5174\u8da3\u3001\u65b9\u6848\u6c9f\u901a\u548c\u9879\u76ee\u8be2\u76d8\u6c47\u5165\u540c\u4e00\u4e2a\u8054\u7cfb\u5165\u53e3\u3002',
    description:
      '\u8054\u7cfb\u9875\u73b0\u5728\u5df2\u540c\u65f6\u627f\u63a5\u516c\u53f8\u4fe1\u606f\u3001\u7559\u8d44\u8868\u5355\u548c\u63d0\u4ea4\u53cd\u9988\uff0c\u4e0d\u518d\u505c\u5728\u5360\u4f4d contract\u3002',
    primaryCta: '\u53d1\u8d77\u8be2\u76d8',
    secondaryCta: '\u67e5\u770b\u670d\u52a1\u4e0e\u652f\u6301',
  },
  contactPage: {
    eyebrow: '\u8be2\u76d8\u5165\u53e3',
    heroSummary:
      '\u5f53\u4f60\u5df2\u7ecf\u6709\u57fa\u672c\u9879\u76ee\u65b9\u5411\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u63d0\u4ea4\u4f01\u4e1a\u4e0e\u9700\u6c42\u8fb9\u754c\uff0c\u8ba9\u540e\u7eed\u6c9f\u901a\u66f4\u5feb\u8fdb\u5165\u5b9e\u9645\u95ee\u9898\u3002',
    heroDescription:
      '\u8fd9\u4e2a\u9875\u9762\u7528\u6765\u627f\u63a5\u4ea7\u54c1\u9009\u578b\u3001\u89e3\u51b3\u65b9\u6848\u6c9f\u901a\u3001\u6280\u672f\u96c6\u6210\u8ddf\u8fdb\u4ee5\u53ca\u8d44\u6599\u7533\u8bf7\u3002\u5185\u5bb9\u8d8a\u5177\u4f53\uff0c\u540e\u7eed\u8fd4\u56de\u5c31\u8d8a\u5bb9\u6613\u76f4\u63a5\u5bf9\u4e0a\u9879\u76ee\u8282\u70b9\u3002',
    entryContextLabel: '\u5165\u53e3\u6765\u6e90',
    categoryContextLabel: '\u9ed8\u8ba4\u5206\u7c7b',
    quickPanelTitle: '\u76f4\u8fbe\u8054\u7cfb\u89c6\u56fe',
    quickPanelSummary:
      '\u8fd9\u4e2a\u9875\u9762\u50cf\u4e00\u4e2a\u5de5\u4e1a\u670d\u52a1\u53f0\uff1a\u516c\u53f8\u5750\u6807\u4fdd\u6301\u53ef\u89c1\uff0c\u9700\u6c42\u8303\u56f4\u53ef\u4ee5\u76f4\u63a5\u8bf4\u6e05\uff0c\u63d0\u4ea4\u540e\u4e5f\u4f1a\u8fdb\u5165\u771f\u5b9e\u540e\u7aef\u5165\u5e93\u3002',
    quickPanelItems: [
      {
        label: '\u529e\u516c\u5750\u6807',
        title: '\u6df1\u5733\u529e\u516c\u5730\u70b9\u4f1a\u4e00\u76f4\u4fdd\u6301\u5728\u8be2\u76d8\u9875\u4e2d',
        detail:
          '\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u9053\u79d1\u6280\u56ed\u793e\u533a\u79d1\u82d1\u8def 8 \u53f7\u8baf\u7f8e\u79d1\u6280\u5e7f\u573a 3 \u53f7\u697c\u3002',
      },
      {
        label: '\u54cd\u5e94\u8282\u594f',
        title: '\u8868\u5355\u7528\u6765\u5148\u5b8c\u6210\u5feb\u901f\u5206\u8bca\uff0c\u800c\u4e0d\u662f\u8ba9\u6c9f\u901a\u518d\u7ed5\u4e00\u5708',
        detail:
          '\u5148\u628a\u4ea7\u54c1\u65b9\u5411\u3001\u73b0\u573a\u573a\u666f\u6216\u96c6\u6210\u8fb9\u754c\u8bf4\u660e\uff0c\u540e\u7eed\u5c31\u80fd\u76f4\u63a5\u4ece\u5b9e\u9645\u9879\u76ee\u51fa\u53d1\u56de\u590d\u3002',
      },
      {
        label: '\u53d7\u7406\u8303\u56f4',
        title: '\u4ea7\u54c1\u3001\u65b9\u6848\u3001\u670d\u52a1\u8d44\u6599\u90fd\u53ef\u4ee5\u4ece\u8fd9\u91cc\u8fdb\u6765',
        detail:
          '\u65e0\u8bba\u662f\u5de5\u4e1a\u4f20\u611f\u5668\u9009\u578b\u3001\u81ea\u52a8\u5316\u914d\u5408\u3001\u6280\u672f\u96c6\u6210\u6c9f\u901a\uff0c\u8fd8\u662f\u8d44\u6599\u7533\u8bf7\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u8def\u5f84\u53d1\u8d77\u3002',
      },
    ],
    formTitle: '\u8be2\u76d8\u8868\u5355',
    formSummary:
      '\u5148\u7559\u4e0b\u57fa\u672c\u7684\u4f01\u4e1a\u4e0e\u9879\u76ee\u4fe1\u606f\uff0c\u5f53\u524d\u6d41\u7a0b\u4f1a\u5b9e\u9645\u5c06\u63d0\u4ea4\u5185\u5bb9\u5199\u5165\u540e\u7aef\uff0c\u5e76\u8fd4\u56de\u786e\u8ba4\u53cd\u9988\u3002',
    form: {
      companyNameLabel: '\u516c\u53f8\u540d\u79f0',
      companyNamePlaceholder: '\u5de5\u5382\u3001\u96c6\u6210\u5546\u6216\u9879\u76ee\u4e3b\u4f53',
      contactNameLabel: '\u8054\u7cfb\u4eba',
      contactNamePlaceholder: '\u9879\u76ee\u4e3b\u8981\u5bf9\u63a5\u4eba',
      emailLabel: '\u90ae\u7bb1',
      emailPlaceholder: 'name@example.com',
      phoneLabel: '\u7535\u8bdd',
      phonePlaceholder: '\u624b\u673a\u6216\u5ea7\u673a',
      interestCategoryLabel: '\u9700\u6c42\u7c7b\u578b',
      messageLabel: '\u9879\u76ee\u8bf4\u660e',
      messagePlaceholder:
        '\u7b80\u8981\u8bf4\u660e\u573a\u666f\u3001\u4ea7\u54c1\u65b9\u5411\u3001\u4ea7\u7ebf\u6761\u4ef6\u6216\u96c6\u6210\u8303\u56f4\u3002',
      submitLabel: '\u63d0\u4ea4\u8be2\u76d8',
      pendingLabel: '\u63d0\u4ea4\u4e2d...',
      requiredHint: '\u9996\u6b21\u53d7\u7406\u9700\u8981\u5b8c\u6574\u57fa\u672c\u4fe1\u606f\u3002',
      helperNote:
        '\u5982\u679c\u5df2\u77e5\u9053\u6599\u53f7\u3001\u68c0\u6d4b\u8ddd\u79bb\u3001\u5b89\u5168\u8fb9\u754c\u6216\u63a5\u53e3\u9700\u6c42\uff0c\u5efa\u8bae\u76f4\u63a5\u5199\u5728\u8fd9\u91cc\u3002',
      consentLabel: '\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f\u8dc3\u9cde\u79d1\u6280\u5904\u7406\u672c\u6b21\u54a8\u8be2\u4fe1\u606f',
      consentDetail:
        '\u63d0\u4ea4\u5185\u5bb9\u4ec5\u7528\u4e8e\u8ddf\u8fdb\u8be2\u76d8\u3001\u4ea7\u54c1\u9009\u578b\u6c9f\u901a\u4e0e\u76f8\u5173\u8d44\u6599\u53cd\u9988\u3002',
      successLabel: '\u5df2\u6210\u529f\u6536\u5230',
      errorLabel: '\u63d0\u4ea4\u5f02\u5e38',
      referenceLabel: '\u53c2\u8003\u7f16\u53f7',
    },
    categoryOptions: [
      { value: 'industrial-sensors', label: '\u5de5\u4e1a\u4f20\u611f\u5668' },
      { value: 'safety-protection-sensors', label: '\u5b89\u5168\u9632\u62a4\u4f20\u611f\u5668' },
      { value: 'laser-ranging-sensors', label: '\u6fc0\u5149\u6d4b\u8ddd\u4f20\u611f\u5668' },
      { value: 'linear-guides-modules', label: '\u7ebf\u6027\u6ed1\u8f68\u53ca\u6a21\u7ec4' },
      { value: 'pneumatic-components', label: '\u6c14\u52a8\u5143\u5668\u4ef6' },
      { value: 'industrial-automation-solution', label: '\u5de5\u4e1a\u81ea\u52a8\u5316\u89e3\u51b3\u65b9\u6848' },
      { value: 'software-development', label: '\u8f6f\u4ef6\u5f00\u53d1' },
      { value: 'technical-integration', label: '\u6280\u672f\u96c6\u6210' },
      { value: 'general-consultation', label: '\u7efc\u5408\u54a8\u8be2' },
    ],
    guidanceTitle: '\u63d0\u4ea4\u524d\u5efa\u8bae',
    guidanceSummary:
      '\u76f8\u6bd4\u7b3c\u7edf\u7684\u54c1\u724c\u8be2\u95ee\uff0c\u7b80\u77ed\u4f46\u5177\u4f53\u7684\u9879\u76ee\u63cf\u8ff0\u66f4\u5bb9\u6613\u88ab\u5feb\u901f\u5206\u6d3e\u3002',
    guidanceItems: [
      {
        title: '\u5148\u8bf4\u6e05\u8bbe\u5907\u6216\u4ea7\u7ebf\u8bed\u5883',
        detail:
          '\u53ef\u4ee5\u63d0\u53ca\u751f\u4ea7\u73af\u5883\u3001\u68c0\u6d4b\u5bf9\u8c61\u3001\u68c0\u6d4b\u8ddd\u79bb\u6216\u96c6\u6210\u4fa7\u8fb9\u754c\uff0c\u907f\u514d\u8be2\u76d8\u8131\u79bb\u5b9e\u9645\u4f7f\u7528\u6761\u4ef6\u3002',
      },
      {
        title: '\u5148\u786e\u5b9a\u5927\u81f4\u65b9\u5411',
        detail:
          '\u5373\u4f7f\u8fd8\u6ca1\u6709\u6700\u7ec8\u6599\u53f7\uff0c\u5148\u9009\u62e9\u4ea7\u54c1\u5927\u7c7b\u6216\u89e3\u51b3\u65b9\u5411\uff0c\u4e5f\u80fd\u660e\u663e\u7f29\u77ed\u540e\u7eed\u786e\u8ba4\u8def\u5f84\u3002',
      },
      {
        title: '\u5546\u52a1\u4e0e\u6280\u672f\u95ee\u9898\u53ef\u4ee5\u4e00\u8d77\u5199',
        detail:
          '\u5982\u679c\u4ea7\u54c1\u9009\u578b\u548c\u96c6\u6210\u914d\u5408\u662f\u540c\u4e00\u4e2a\u9879\u76ee\u95ee\u9898\uff0c\u5efa\u8bae\u5728\u4e00\u6b21\u63d0\u4ea4\u4e2d\u7edf\u4e00\u8bf4\u660e\u3002',
      },
    ],
    processTitle: '\u63d0\u4ea4\u4e4b\u540e\u4f1a\u53d1\u751f\u4ec0\u4e48',
    processSummary:
      '\u8be2\u76d8\u8868\u5355\u4e0d\u5e94\u8be5\u662f\u6d4f\u89c8\u7ec8\u70b9\uff0c\u800c\u662f\u4ece\u7f51\u7ad9\u95ee\u9898\u9605\u8bfb\u8fdb\u5165\u540e\u7eed\u6c9f\u901a\u7684\u8f7b\u91cf\u4ea4\u63a5\u70b9\u3002',
    processSteps: [
      {
        step: '01',
        title: '\u63d0\u4ea4\u5185\u5bb9\u4f1a\u7acb\u5373\u5165\u5e93',
        detail:
          '\u8be2\u76d8\u4f1a\u771f\u5b9e\u5199\u5165\u540e\u7aef\uff0c\u4e0d\u518d\u53ea\u505c\u7559\u5728 contract \u7ea7\u7684\u5360\u4f4d\u54cd\u5e94\u3002',
      },
      {
        step: '02',
        title: '\u6309\u7c7b\u578b\u4e0e\u573a\u666f\u5feb\u901f\u521d\u6b65\u5206\u6d3e',
        detail:
          '\u4ea7\u54c1\u5927\u7c7b\u3001\u89e3\u51b3\u65b9\u5411\u4e0e\u73b0\u573a\u63cf\u8ff0\u4f1a\u6210\u4e3a\u540e\u7eed\u8ddf\u8fdb\u7684\u7b2c\u4e00\u5c42\u5224\u65ad\u4f9d\u636e\u3002',
      },
      {
        step: '03',
        title: '\u8fdb\u5165\u5408\u9002\u7684\u4e0b\u4e00\u6b65\u6c9f\u901a',
        detail:
          '\u540e\u7eed\u53ef\u4ee5\u8fdb\u5165\u4ea7\u54c1\u786e\u8ba4\u3001\u8d44\u6599\u53cd\u9988\u3001\u62a5\u4ef7\u8ba8\u8bba\u6216\u66f4\u6df1\u4e00\u5c42\u7684\u6280\u672f\u96c6\u6210\u6c9f\u901a\u3002',
      },
    ],
    routingTitle: '\u5982\u679c\u9700\u6c42\u8fd8\u5728\u6210\u5f62\uff0c\u53ef\u4ee5\u5148\u56de\u5230\u76f8\u5173\u9875\u9762',
    routingSummary:
      '\u5982\u679c\u8fd8\u6ca1\u5230\u6b63\u5f0f\u7559\u8d44\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5148\u56de\u5230\u4ea7\u54c1\u3001\u89e3\u51b3\u65b9\u6848\u6216\u670d\u52a1\u9875\u7ee7\u7eed\u6d4f\u89c8\u3002',
    routingLinks: [
      { label: '\u67e5\u770b\u4ea7\u54c1\u4e2d\u5fc3', section: 'products' },
      { label: '\u67e5\u770b\u89e3\u51b3\u65b9\u6848', section: 'solutions' },
      { label: '\u6253\u5f00\u670d\u52a1\u4e0e\u652f\u6301', section: 'support' },
    ],
  },
  footer: {
    summary:
      '\u8dc3\u9cde\u79d1\u6280\u805a\u7126\u5de5\u4e1a\u4f20\u611f\u3001\u81ea\u52a8\u5316\u89e3\u51b3\u65b9\u6848\u4e0e\u6280\u672f\u96c6\u6210\uff0c\u4ee5\u54c1\u724c\u5c55\u793a\u4e3a\u4e3b\uff0c\u540c\u65f6\u4fdd\u7559\u8f7b\u91cf\u8be2\u76d8\u5165\u53e3\u3002',
    addressLabel: '\u516c\u53f8\u5730\u5740',
    address:
      '\u6df1\u5733\u5e02\u5357\u5c71\u533a\u7ca4\u6d77\u8857\u9053\u79d1\u6280\u56ed\u793e\u533a\u79d1\u82d1\u8def 8 \u53f7\u8baf\u7f8e\u79d1\u6280\u5e7f\u573a 3 \u53f7\u697c',
    inquiryLabel: '\u9884\u7559\u8be2\u76d8\u5165\u53e3',
    inquirySummary:
      '\u7559\u4e0b\u4ea7\u54c1\u578b\u53f7\u3001\u9879\u76ee\u573a\u666f\u6216\u96c6\u6210\u9700\u6c42\uff0c\u540e\u7eed\u9875\u9762\u4f1a\u5c06\u8fd9\u4e2a\u5165\u53e3\u5347\u7ea7\u4e3a\u5b8c\u6574\u8868\u5355\u3002',
    legal: '\u00a9 2026 Shenzhen Yuelin Technology Co., Ltd. All rights reserved.',
    groups: [
      {
        title: '\u7ad9\u70b9\u5bfc\u822a',
        items: [
          { label: '\u9996\u9875', section: 'home' },
          { label: '\u4ea7\u54c1\u4e2d\u5fc3', section: 'products' },
          { label: '\u89e3\u51b3\u65b9\u6848', section: 'solutions' },
        ],
      },
      {
        title: '\u670d\u52a1\u8def\u5f84',
        items: [
          { label: '\u670d\u52a1\u4e0e\u652f\u6301', section: 'support' },
          { label: '\u5173\u4e8e\u6211\u4eec', section: 'about' },
          { label: '\u8054\u7cfb\u6211\u4eec', section: 'contact' },
        ],
      },
    ],
  },
  placeholder: {
    eyebrow: '\u6863\u6848\u6b63\u5728\u7ec4\u7ec7',
    body:
      '\u5982\u679c\u4f60\u5df2\u6709\u4ea7\u54c1\u578b\u53f7\u3001\u9879\u76ee\u573a\u666f\u6216\u6280\u672f\u96c6\u6210\u9700\u6c42\uff0c\u53ef\u4ee5\u5148\u4ece\u54a8\u8be2\u5165\u53e3\u7559\u8d44\uff0c\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u9636\u6bb5\u8865\u8db3\u5bf9\u5e94\u7684\u8be6\u7ec6\u4fe1\u606f\u3002',
    factsSummary:
      '\u5728\u5bf9\u5e94\u680f\u76ee\u6b63\u5f0f\u5b8c\u6210\u524d\uff0c\u57fa\u672c\u4fe1\u606f\u3001\u529e\u516c\u5730\u70b9\u4e0e\u8be2\u76d8\u5165\u53e3\u4f1a\u4fdd\u6301\u5728\u540c\u4e00\u4e2a\u53ef\u89c1\u8303\u56f4\u5185\u3002',
    inquiryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    homeCta: '\u8fd4\u56de\u9996\u9875',
  },
}
