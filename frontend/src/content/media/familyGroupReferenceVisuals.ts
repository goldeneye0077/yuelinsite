import type { Locale } from '../../i18n/locales'

import laserEs200 from '../../assets/reference/family-groups/laser-es200.png'
import laserEs201zb from '../../assets/reference/family-groups/laser-es201zb.png'
import laserEst from '../../assets/reference/family-groups/laser-est.png'
import laserEst4 from '../../assets/reference/family-groups/laser-est4.png'
import laserTlr from '../../assets/reference/family-groups/laser-tlr.png'
import lockSds from '../../assets/reference/family-groups/lock-sds.png'
import lockSds04 from '../../assets/reference/family-groups/lock-sds04.png'
import lockSds05 from '../../assets/reference/family-groups/lock-sds05.png'
import relayDms from '../../assets/reference/family-groups/relay-dms.png'
import relayMs1 from '../../assets/reference/family-groups/relay-ms1.png'
import relaySr1 from '../../assets/reference/family-groups/relay-sr1.png'
import safetyHal from '../../assets/reference/family-groups/safety-hal.png'
import safetyH3el from '../../assets/reference/family-groups/safety-h3el.png'
import safetyH3tl from '../../assets/reference/family-groups/safety-h3tl.png'
import safetyRld from '../../assets/reference/family-groups/safety-rld.png'

type LocalizedText = Record<Locale, string>

export type ProductGroupReferenceVisual = {
  id: string
  title: LocalizedText
  seriesCode: LocalizedText
  imageSrc: string
  imageAlt: LocalizedText
  sourceUrl: string
}

export const familyGroupReferenceVisuals: Record<
  string,
  ProductGroupReferenceVisual[]
> = {
  'light-curtains-and-area-sensors': [
    {
      id: 'safety-h3el',
      title: {
        zh: '基础型光幕传感器',
        en: 'Base light curtains',
      },
      seriesCode: {
        zh: 'H3EL 系列',
        en: 'H3EL Series',
      },
      imageSrc: safetyH3el,
      imageAlt: {
        zh: '华怡丰 H3EL 系列基础型光幕传感器',
        en: 'Huayifeng H3EL base light curtain',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/52.html',
    },
    {
      id: 'safety-h3tl',
      title: {
        zh: '超薄型光幕传感器',
        en: 'Ultra-thin light curtains',
      },
      seriesCode: {
        zh: 'H3TL 系列',
        en: 'H3TL Series',
      },
      imageSrc: safetyH3tl,
      imageAlt: {
        zh: '华怡丰 H3TL 系列超薄型光幕传感器',
        en: 'Huayifeng H3TL ultra-thin light curtain',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/53.html',
    },
    {
      id: 'safety-hal',
      title: {
        zh: '超薄型区域传感器',
        en: 'Ultra-thin area sensors',
      },
      seriesCode: {
        zh: 'HAL 系列',
        en: 'HAL Series',
      },
      imageSrc: safetyHal,
      imageAlt: {
        zh: '华怡丰 HAL 系列超薄型区域传感器',
        en: 'Huayifeng HAL ultra-thin area sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/54.html',
    },
    {
      id: 'safety-rld',
      title: {
        zh: '激光雷达扫描仪',
        en: 'Laser scanners',
      },
      seriesCode: {
        zh: 'RLD 系列',
        en: 'RLD Series',
      },
      imageSrc: safetyRld,
      imageAlt: {
        zh: '华怡丰 RLD 系列激光雷达扫描仪',
        en: 'Huayifeng RLD laser scanner',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/73.html',
    },
  ],
  'safety-door-lock-switches': [
    {
      id: 'lock-sds',
      title: {
        zh: '安全门锁开关',
        en: 'Safety door lock switches',
      },
      seriesCode: {
        zh: 'SDS 系列',
        en: 'SDS Series',
      },
      imageSrc: lockSds,
      imageAlt: {
        zh: '华怡丰 SDS 系列安全门锁开关',
        en: 'Huayifeng SDS safety door lock switch',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/55.html',
    },
    {
      id: 'lock-sds05',
      title: {
        zh: '小型安全门开关',
        en: 'Compact safety door switches',
      },
      seriesCode: {
        zh: 'SDS05 系列',
        en: 'SDS05 Series',
      },
      imageSrc: lockSds05,
      imageAlt: {
        zh: '华怡丰 SDS05 系列小型安全门开关',
        en: 'Huayifeng SDS05 compact safety door switch',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/92.html',
    },
    {
      id: 'lock-sds04',
      title: {
        zh: 'RDS04 系列安全门锁开关',
        en: 'RDS04 safety door lock series',
      },
      seriesCode: {
        zh: 'SDS04 系列',
        en: 'SDS04 Series',
      },
      imageSrc: lockSds04,
      imageAlt: {
        zh: '华怡丰 SDS04 系列安全门锁开关',
        en: 'Huayifeng SDS04 safety door lock switch',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/87.html',
    },
  ],
  'safety-relay-and-non-contact-switches': [
    {
      id: 'relay-sr1',
      title: {
        zh: '安全继电器',
        en: 'Safety relays',
      },
      seriesCode: {
        zh: 'SR1 系列',
        en: 'SR1 Series',
      },
      imageSrc: relaySr1,
      imageAlt: {
        zh: '华怡丰 SR1 系列安全继电器',
        en: 'Huayifeng SR1 safety relay',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/93.html',
    },
    {
      id: 'relay-ms1',
      title: {
        zh: '非接触式安全门开关',
        en: 'Non-contact safety door switches',
      },
      seriesCode: {
        zh: 'MS1 系列',
        en: 'MS1 Series',
      },
      imageSrc: relayMs1,
      imageAlt: {
        zh: '华怡丰 MS1 系列非接触式安全门开关',
        en: 'Huayifeng MS1 non-contact safety door switch',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/86.html',
    },
    {
      id: 'relay-dms',
      title: {
        zh: '门磁开关',
        en: 'Door magnetic switches',
      },
      seriesCode: {
        zh: 'DMS 系列',
        en: 'DMS Series',
      },
      imageSrc: relayDms,
      imageAlt: {
        zh: '华怡丰 DMS 系列门磁开关',
        en: 'Huayifeng DMS door magnetic switch',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/85.html',
    },
  ],
  'laser-ranging': [
    {
      id: 'laser-tlr',
      title: {
        zh: '激光测距传感器',
        en: 'Laser ranging sensors',
      },
      seriesCode: {
        zh: 'TLR 系列',
        en: 'TLR Series',
      },
      imageSrc: laserTlr,
      imageAlt: {
        zh: '华怡丰 TLR 系列激光测距传感器',
        en: 'Huayifeng TLR laser ranging sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/90.html',
    },
    {
      id: 'laser-es200',
      title: {
        zh: '激光传感器',
        en: 'Laser sensors',
      },
      seriesCode: {
        zh: 'ES200 系列',
        en: 'ES200 Series',
      },
      imageSrc: laserEs200,
      imageAlt: {
        zh: '华怡丰 ES200 系列激光传感器',
        en: 'Huayifeng ES200 laser sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/22.html',
    },
    {
      id: 'laser-es201zb',
      title: {
        zh: '背景抑制激光传感器',
        en: 'Background suppression laser sensors',
      },
      seriesCode: {
        zh: 'ES201-ZB 系列',
        en: 'ES201-ZB Series',
      },
      imageSrc: laserEs201zb,
      imageAlt: {
        zh: '华怡丰 ES201-ZB 系列背景抑制激光传感器',
        en: 'Huayifeng ES201-ZB background suppression laser sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/23.html',
    },
  ],
  'tof-laser-sensors': [
    {
      id: 'laser-est4',
      title: {
        zh: 'TOF 全金属激光传感器',
        en: 'TOF full-metal laser sensors',
      },
      seriesCode: {
        zh: 'EST-4 系列',
        en: 'EST-4 Series',
      },
      imageSrc: laserEst4,
      imageAlt: {
        zh: '华怡丰 EST-4 系列 TOF 全金属激光传感器',
        en: 'Huayifeng EST-4 TOF full-metal laser sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/98.html',
    },
    {
      id: 'laser-est',
      title: {
        zh: 'TOF 激光传感器',
        en: 'TOF laser sensors',
      },
      seriesCode: {
        zh: 'EST 系列',
        en: 'EST Series',
      },
      imageSrc: laserEst,
      imageAlt: {
        zh: '华怡丰 EST 系列 TOF 激光传感器',
        en: 'Huayifeng EST TOF laser sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/76.html',
    },
  ],
}
