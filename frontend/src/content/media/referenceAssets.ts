import buildingExterior from '../../assets/reference/building-exterior.jpg'
import officeWorker from '../../assets/reference/company/office-worker.jpg'
import fiberDualDisplay from '../../assets/reference/fiber-dual-display.png'
import fiberEconomyDigital from '../../assets/reference/fiber-economy-digital.png'
import fiberUnits from '../../assets/reference/fiber-units.png'
import sceneConveyorDetection from '../../assets/reference/scene-conveyor-detection.jpg'
import sceneGateInspection from '../../assets/reference/scene-gate-inspection.jpg'
import sceneProductionLine from '../../assets/reference/scene-production-line.jpg'
import type { Locale } from '../../i18n/locales'

export const siteReferenceImages = {
  homeHero: {
    src: sceneProductionLine,
    alt: {
      zh: '自动化产线中的工业传感工作场景',
      en: 'Industrial sensing scene on an automated production line',
    },
  },
  homePoster: {
    src: officeWorker,
    alt: {
      zh: '现代办公室内正在工作的白领人员',
      en: 'White-collar professional working inside a modern office',
    },
  },
  aboutHero: {
    src: buildingExterior,
    alt: {
      zh: '现代商务科技办公楼外立面',
      en: 'Exterior of a modern business-tech office building',
    },
  },
  solutionsHero: {
    src: sceneGateInspection,
    alt: {
      zh: '安全检测与物流识别场景',
      en: 'Safety inspection and logistics sensing scenario',
    },
  },
  supportHero: {
    src: sceneConveyorDetection,
    alt: {
      zh: '产线检测与通过识别场景',
      en: 'Conveyor line detection and pass-through sensing scenario',
    },
  },
  partnersHero: {
    src: sceneProductionLine,
    alt: {
      zh: '多工位产线中的传感与检测协同场景',
      en: 'Multi-station production line with coordinated sensing and inspection',
    },
  },
  productCenterHero: {
    src: fiberDualDisplay,
    alt: {
      zh: '工业传感器实物图',
      en: 'Physical product shot of an industrial sensor',
    },
  },
  industrialSensorsFamily: {
    src: sceneConveyorDetection,
    alt: {
      zh: '传感器在输送与检测工位中的应用场景',
      en: 'Sensors applied to conveying and inspection workstations',
    },
  },
  contactHero: {
    src: buildingExterior,
    alt: {
      zh: '现代科技企业办公与接待环境',
      en: 'Modern business-tech office and reception environment',
    },
  },
} as const

export type FiberSensorVisual = {
  id: string
  title: Record<Locale, string>
  seriesCode: Record<Locale, string>
  imageSrc: string
  imageAlt: Record<Locale, string>
  summary: Record<Locale, string>
  application: Record<Locale, string>
  highlights: Record<Locale, string[]>
  inquiryHint: Record<Locale, string>
  sourceUrl: string
}

export const fiberSensorVisuals: FiberSensorVisual[] = [
  {
    id: 'fiber-economy-digital',
    title: {
      zh: '经济型数字光纤传感器',
      en: 'Economy digital fiber sensor',
    },
    seriesCode: {
      zh: 'FR-J20 系列',
      en: 'FR-J20 Series',
    },
    imageSrc: fiberEconomyDigital,
    imageAlt: {
      zh: '华怡丰 FR-J20 系列经济型数字光纤传感器',
      en: 'Huayifeng FR-J20 economy digital fiber sensor',
    },
    summary: {
      zh: '面向高速、稳定工件检测的基础型数字光纤放大器，适合先行完成选型方向确认。',
      en: 'A baseline digital fiber amplifier for high-speed, stable part detection and early selection alignment.',
    },
    application: {
      zh: '自动化设备工件有无检测、振动盘物料通过检测等。',
      en: 'Object presence checks on automation equipment and pass-through inspection on vibrating bowl feeders.',
    },
    highlights: {
      zh: [
        '支持窗口模式，可设定上限与下限基准值。',
        '具备基准值追踪能力，适合长期稳定检测。',
        '提供三种速度检测模式，最快可达 25μs。',
      ],
      en: [
        'Supports window mode with configurable upper and lower thresholds.',
        'Built for stable long-term detection with baseline tracking.',
        'Offers three sensing speeds with detection as fast as 25μs.',
      ],
    },
    inquiryHint: {
      zh: '适合先说明工件尺寸、安装空间和输出方式偏好。',
      en: 'Best discussed with target size, mounting space, and preferred output type.',
    },
    sourceUrl: 'https://www.hyfcn.com/product_list/66.html',
  },
  {
    id: 'fiber-dual-display',
    title: {
      zh: '多功能双数显光纤传感器',
      en: 'Dual-display fiber sensor',
    },
    seriesCode: {
      zh: 'FR 系列',
      en: 'FR Series',
    },
    imageSrc: fiberDualDisplay,
    imageAlt: {
      zh: '华怡丰 FR 系列多功能双数显光纤传感器',
      en: 'Huayifeng FR series dual-display fiber sensor',
    },
    summary: {
      zh: '双数显结构更适合需要现场快速调试与阈值观察的工位，适合作为升级型光纤检测方案。',
      en: 'The dual-display format suits stations that need quicker onsite tuning and threshold visibility.',
    },
    application: {
      zh: '自动化设备工件有无检测、振动盘物料通过检测等。',
      en: 'Object presence checks on automation equipment and material pass-through inspection on feeder systems.',
    },
    highlights: {
      zh: [
        '保留窗口模式的上下限设定能力。',
        '双数显更利于调试过程中的读数确认。',
        '同样支持高速检测与长期稳定追踪。',
      ],
      en: [
        'Keeps configurable upper and lower threshold windows.',
        'Dual displays make setup and reading confirmation easier.',
        'Maintains high-speed sensing and stable long-term tracking.',
      ],
    },
    inquiryHint: {
      zh: '适合沟通调试方式、显示偏好和现场观察要求。',
      en: 'Useful when discussing tuning workflow, display preference, and operator visibility.',
    },
    sourceUrl: 'https://www.hyfcn.com/product_list/14.html',
  },
  {
    id: 'fiber-units',
    title: {
      zh: '光纤元件',
      en: 'Fiber units',
    },
    seriesCode: {
      zh: 'F 系列',
      en: 'F Series',
    },
    imageSrc: fiberUnits,
    imageAlt: {
      zh: '华怡丰 F 系列光纤元件',
      en: 'Huayifeng F series fiber units',
    },
    summary: {
      zh: '用于与光纤放大器配合的检测单元，适合对安装尺寸、出光方式和特殊工况有要求的场景。',
      en: 'Fiber units that pair with fiber amplifiers for installations that need specific form factors or beam styles.',
    },
    application: {
      zh: '配合光纤放大器进行自动化设备工件有无检测等。',
      en: 'Used with fiber amplifiers for part-presence inspection on automation equipment.',
    },
    highlights: {
      zh: [
        '覆盖通用型到特殊型的多种产品阵容。',
        '多种尺寸可选，部分型号支持非标定制。',
        '光纤柔韧性更强，弯曲时光量衰减更小。',
      ],
      en: [
        'Covers both standard and special-use fiber unit options.',
        'Multiple sizes are available, with some support for custom builds.',
        'Engineered for easier bending with lower light-loss under flex.',
      ],
    },
    inquiryHint: {
      zh: '建议优先说明检测距离、出光方向和被测物尺寸。',
      en: 'Start with detection distance, beam direction, and target size requirements.',
    },
    sourceUrl: 'https://www.hyfcn.com/product_list/15.html',
  },
]

export function getLocalizedAlt(
  item: { alt: Record<Locale, string> },
  locale: Locale,
) {
  return item.alt[locale]
}
