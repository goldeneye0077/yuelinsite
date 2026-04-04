import type { Locale } from '../../i18n/locales'

import airPreparation from '../../assets/reference/project-lines/air-preparation.svg'
import ballScrewModules from '../../assets/reference/project-lines/ball-screw-modules.svg'
import beltDrivenModules from '../../assets/reference/project-lines/belt-driven-modules.svg'
import cylinders from '../../assets/reference/project-lines/cylinders.svg'
import fittingsAndTubing from '../../assets/reference/project-lines/fittings-and-tubing.svg'
import linearGuides from '../../assets/reference/project-lines/linear-guides.svg'
import positioningStages from '../../assets/reference/project-lines/positioning-stages.svg'
import slideModules from '../../assets/reference/project-lines/slide-modules.svg'
import solenoidValves from '../../assets/reference/project-lines/solenoid-valves.svg'
import vacuumComponents from '../../assets/reference/project-lines/vacuum-components.svg'

type LocalizedText = Record<Locale, string>

export type ProjectLineVisual = {
  imageSrc: string
  imageAlt: LocalizedText
}

export const projectLineVisuals: Record<string, ProjectLineVisual> = {
  'linear-guides': {
    imageSrc: linearGuides,
    imageAlt: {
      zh: '线性滑轨产品线示意图',
      en: 'Illustration for linear guide products',
    },
  },
  'slide-modules': {
    imageSrc: slideModules,
    imageAlt: {
      zh: '滑台模组产品线示意图',
      en: 'Illustration for slide module products',
    },
  },
  'ball-screw-modules': {
    imageSrc: ballScrewModules,
    imageAlt: {
      zh: '丝杆模组产品线示意图',
      en: 'Illustration for ball screw module products',
    },
  },
  'belt-driven-modules': {
    imageSrc: beltDrivenModules,
    imageAlt: {
      zh: '皮带模组产品线示意图',
      en: 'Illustration for belt driven module products',
    },
  },
  'positioning-stages': {
    imageSrc: positioningStages,
    imageAlt: {
      zh: '定位平台产品线示意图',
      en: 'Illustration for positioning stage products',
    },
  },
  cylinders: {
    imageSrc: cylinders,
    imageAlt: {
      zh: '气缸产品线示意图',
      en: 'Illustration for cylinder products',
    },
  },
  'solenoid-valves': {
    imageSrc: solenoidValves,
    imageAlt: {
      zh: '电磁阀产品线示意图',
      en: 'Illustration for solenoid valve products',
    },
  },
  'air-preparation': {
    imageSrc: airPreparation,
    imageAlt: {
      zh: '气源处理产品线示意图',
      en: 'Illustration for air preparation products',
    },
  },
  'fittings-and-tubing': {
    imageSrc: fittingsAndTubing,
    imageAlt: {
      zh: '接头与管件产品线示意图',
      en: 'Illustration for fittings and tubing products',
    },
  },
  'vacuum-components': {
    imageSrc: vacuumComponents,
    imageAlt: {
      zh: '真空元件产品线示意图',
      en: 'Illustration for vacuum component products',
    },
  },
}
