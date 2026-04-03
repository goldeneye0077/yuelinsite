import type { Locale } from '../../i18n/locales'

import accessoryOccable from '../../assets/reference/industrial-sensors/accessory-oc-cable.png'
import capacitiveCsCylinder from '../../assets/reference/industrial-sensors/capacitive-cs-cylinder.png'
import capacitiveCsLevel from '../../assets/reference/industrial-sensors/capacitive-cs-level.png'
import capacitiveCsfFlat from '../../assets/reference/industrial-sensors/capacitive-csf-flat.png'
import codeReaderIcrh from '../../assets/reference/industrial-sensors/code-reader-icrh.png'
import codeReaderIcrs from '../../assets/reference/industrial-sensors/code-reader-icrs.png'
import colorCr5h from '../../assets/reference/industrial-sensors/color-cr5h.png'
import colorCr7 from '../../assets/reference/industrial-sensors/color-cr7.png'
import colorLua from '../../assets/reference/industrial-sensors/color-lua.png'
import contactCts from '../../assets/reference/industrial-sensors/contact-cts.png'
import contactCts2 from '../../assets/reference/industrial-sensors/contact-cts2.png'
import displacementEsm2 from '../../assets/reference/industrial-sensors/displacement-esm2.png'
import displacementHlm from '../../assets/reference/industrial-sensors/displacement-hlm.png'
import inductivePc from '../../assets/reference/industrial-sensors/inductive-pc.png'
import inductivePs from '../../assets/reference/industrial-sensors/inductive-ps.png'
import inductivePspt from '../../assets/reference/industrial-sensors/inductive-pspt.png'
import magneticCylinderSwitch from '../../assets/reference/industrial-sensors/magnetic-cylinder-switch.png'
import photoelectricLs100 from '../../assets/reference/industrial-sensors/photoelectric-ls100.png'
import photoelectricLs200 from '../../assets/reference/industrial-sensors/photoelectric-ls200.png'
import photoelectricLsd from '../../assets/reference/industrial-sensors/photoelectric-lsd.png'
import pressureDnp2 from '../../assets/reference/industrial-sensors/pressure-dnp2.png'
import pressureDnpwc from '../../assets/reference/industrial-sensors/pressure-dnpwc.png'
import slotLu65 from '../../assets/reference/industrial-sensors/slot-lu65.png'
import slotLu67 from '../../assets/reference/industrial-sensors/slot-lu67.png'
import slotLu68 from '../../assets/reference/industrial-sensors/slot-lu68.png'
import ultrasonicUsc from '../../assets/reference/industrial-sensors/ultrasonic-usc.png'
import ultrasonicUsdb from '../../assets/reference/industrial-sensors/ultrasonic-usdb.png'
import visionIscC from '../../assets/reference/industrial-sensors/vision-isc-c.png'

type LocalizedText = Record<Locale, string>

export type IndustrialSensorReferenceVisual = {
  id: string
  title: LocalizedText
  seriesCode: LocalizedText
  imageSrc: string
  imageAlt: LocalizedText
  sourceUrl: string
}

export const industrialSensorReferenceVisuals: Record<
  string,
  IndustrialSensorReferenceVisual[]
> = {
  'photoelectric-sensors': [
    {
      id: 'photoelectric-ls100',
      title: {
        zh: '小方型光电传感器',
        en: 'Small-format photoelectric sensors',
      },
      seriesCode: {
        zh: 'LS100 系列',
        en: 'LS100 Series',
      },
      imageSrc: photoelectricLs100,
      imageAlt: {
        zh: '华怡丰 LS100 系列小方型光电传感器',
        en: 'Huayifeng LS100 small-format photoelectric sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/16.html',
    },
    {
      id: 'photoelectric-ls200',
      title: {
        zh: '方型光电传感器',
        en: 'Standard photoelectric sensors',
      },
      seriesCode: {
        zh: 'LS200 系列',
        en: 'LS200 Series',
      },
      imageSrc: photoelectricLs200,
      imageAlt: {
        zh: '华怡丰 LS200 系列方型光电传感器',
        en: 'Huayifeng LS200 standard photoelectric sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/4.html',
    },
    {
      id: 'photoelectric-lsd',
      title: {
        zh: '扁平型光电传感器',
        en: 'Flat photoelectric sensors',
      },
      seriesCode: {
        zh: 'LSD 系列',
        en: 'LSD Series',
      },
      imageSrc: photoelectricLsd,
      imageAlt: {
        zh: '华怡丰 LSD 系列扁平型光电传感器',
        en: 'Huayifeng LSD flat photoelectric sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/17.html',
    },
  ],
  'displacement-sensors': [
    {
      id: 'displacement-esm2',
      title: {
        zh: '微型激光位移传感器',
        en: 'Micro laser displacement sensors',
      },
      seriesCode: {
        zh: 'ESM2 系列',
        en: 'ESM2 Series',
      },
      imageSrc: displacementEsm2,
      imageAlt: {
        zh: '华怡丰 ESM2 系列微型激光位移传感器',
        en: 'Huayifeng ESM2 micro laser displacement sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/28.html',
    },
    {
      id: 'displacement-hlm',
      title: {
        zh: '高精度激光位移传感器',
        en: 'High-precision laser displacement sensors',
      },
      seriesCode: {
        zh: 'HLM 系列',
        en: 'HLM Series',
      },
      imageSrc: displacementHlm,
      imageAlt: {
        zh: '华怡丰 HLM 系列高精度激光位移传感器',
        en: 'Huayifeng HLM high-precision laser displacement sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/29.html',
    },
  ],
  'slot-sensors': [
    {
      id: 'slot-lu68',
      title: {
        zh: '连接器型槽型光电传感器',
        en: 'Connector-type slot photoelectric sensors',
      },
      seriesCode: {
        zh: 'LU68 系列',
        en: 'LU68 Series',
      },
      imageSrc: slotLu68,
      imageAlt: {
        zh: '华怡丰 LU68 系列连接器型槽型光电传感器',
        en: 'Huayifeng LU68 connector-type slot photoelectric sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/31.html',
    },
    {
      id: 'slot-lu65',
      title: {
        zh: '内置连接器型槽型光电传感器',
        en: 'Built-in connector slot photoelectric sensors',
      },
      seriesCode: {
        zh: 'LU65 系列',
        en: 'LU65 Series',
      },
      imageSrc: slotLu65,
      imageAlt: {
        zh: '华怡丰 LU65 系列内置连接器型槽型光电传感器',
        en: 'Huayifeng LU65 built-in connector slot photoelectric sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/30.html',
    },
    {
      id: 'slot-lu67',
      title: {
        zh: '电缆型槽型光电传感器',
        en: 'Cable slot photoelectric sensors',
      },
      seriesCode: {
        zh: 'LU67 系列',
        en: 'LU67 Series',
      },
      imageSrc: slotLu67,
      imageAlt: {
        zh: '华怡丰 LU67 系列电缆型槽型光电传感器',
        en: 'Huayifeng LU67 cable slot photoelectric sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/2.html',
    },
  ],
  'color-and-label-sensors': [
    {
      id: 'color-cr7',
      title: {
        zh: '白光颜色传感器',
        en: 'White-light color sensors',
      },
      seriesCode: {
        zh: 'CR7 系列',
        en: 'CR7 Series',
      },
      imageSrc: colorCr7,
      imageAlt: {
        zh: '华怡丰 CR7 系列白光颜色传感器',
        en: 'Huayifeng CR7 white-light color sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/75.html',
    },
    {
      id: 'color-cr5h',
      title: {
        zh: '数字式色标传感器',
        en: 'Digital mark sensors',
      },
      seriesCode: {
        zh: 'CR5H 系列',
        en: 'CR5H Series',
      },
      imageSrc: colorCr5h,
      imageAlt: {
        zh: '华怡丰 CR5H 系列数字式色标传感器',
        en: 'Huayifeng CR5H digital mark sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/74.html',
    },
    {
      id: 'color-lua',
      title: {
        zh: '标签传感器',
        en: 'Label sensors',
      },
      seriesCode: {
        zh: 'LUA 系列',
        en: 'LUA Series',
      },
      imageSrc: colorLua,
      imageAlt: {
        zh: '华怡丰 LUA 系列标签传感器',
        en: 'Huayifeng LUA label sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/38.html',
    },
  ],
  'inductive-proximity-sensors': [
    {
      id: 'inductive-ps',
      title: {
        zh: '环形接近传感器',
        en: 'Ring proximity sensors',
      },
      seriesCode: {
        zh: 'PS 系列',
        en: 'PS Series',
      },
      imageSrc: inductivePs,
      imageAlt: {
        zh: '华怡丰 PS 系列环形接近传感器',
        en: 'Huayifeng PS ring proximity sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/39.html',
    },
    {
      id: 'inductive-pc',
      title: {
        zh: '经济型环形接近传感器',
        en: 'Economy ring proximity sensors',
      },
      seriesCode: {
        zh: 'PC 系列',
        en: 'PC Series',
      },
      imageSrc: inductivePc,
      imageAlt: {
        zh: '华怡丰 PC 系列经济型环形接近传感器',
        en: 'Huayifeng PC economy ring proximity sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/40.html',
    },
    {
      id: 'inductive-pspt',
      title: {
        zh: '圆柱型接近传感器',
        en: 'Cylindrical proximity sensors',
      },
      seriesCode: {
        zh: 'PS/PT 系列',
        en: 'PS/PT Series',
      },
      imageSrc: inductivePspt,
      imageAlt: {
        zh: '华怡丰 PS/PT 系列圆柱型接近传感器',
        en: 'Huayifeng PS/PT cylindrical proximity sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/44.html',
    },
  ],
  'capacitive-proximity-sensors': [
    {
      id: 'capacitive-cs-level',
      title: {
        zh: '管道液位型接近传感器',
        en: 'Pipe liquid-level capacitive sensors',
      },
      seriesCode: {
        zh: 'CS 系列',
        en: 'CS Series',
      },
      imageSrc: capacitiveCsLevel,
      imageAlt: {
        zh: '华怡丰 CS 系列管道液位型接近传感器',
        en: 'Huayifeng CS pipe liquid-level capacitive sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/47.html',
    },
    {
      id: 'capacitive-csf-flat',
      title: {
        zh: '扁平型电容接近传感器',
        en: 'Flat capacitive proximity sensors',
      },
      seriesCode: {
        zh: 'CSF 系列',
        en: 'CSF Series',
      },
      imageSrc: capacitiveCsfFlat,
      imageAlt: {
        zh: '华怡丰 CSF 系列扁平型电容接近传感器',
        en: 'Huayifeng CSF flat capacitive sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/49.html',
    },
    {
      id: 'capacitive-cs-cylinder',
      title: {
        zh: '圆柱型电容接近传感器',
        en: 'Cylindrical capacitive proximity sensors',
      },
      seriesCode: {
        zh: 'CS 系列',
        en: 'CS Series',
      },
      imageSrc: capacitiveCsCylinder,
      imageAlt: {
        zh: '华怡丰 CS 系列圆柱型电容接近传感器',
        en: 'Huayifeng CS cylindrical capacitive sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/62.html',
    },
  ],
  'industrial-code-readers': [
    {
      id: 'code-reader-icrs',
      title: {
        zh: '固定式工业读码器',
        en: 'Fixed industrial code readers',
      },
      seriesCode: {
        zh: 'ICR-S 系列',
        en: 'ICR-S Series',
      },
      imageSrc: codeReaderIcrs,
      imageAlt: {
        zh: '华怡丰 ICR-S 系列固定式工业读码器',
        en: 'Huayifeng ICR-S fixed industrial code reader',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/96.html',
    },
    {
      id: 'code-reader-icrh',
      title: {
        zh: '手持式工业读码器',
        en: 'Handheld industrial code readers',
      },
      seriesCode: {
        zh: 'ICR-H 系列',
        en: 'ICR-H Series',
      },
      imageSrc: codeReaderIcrh,
      imageAlt: {
        zh: '华怡丰 ICR-H 系列手持式工业读码器',
        en: 'Huayifeng ICR-H handheld industrial code reader',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/97.html',
    },
  ],
  'vision-sensors': [
    {
      id: 'vision-isc-c',
      title: {
        zh: '图像识别传感器',
        en: 'Vision sensors',
      },
      seriesCode: {
        zh: 'ISC-C 系列',
        en: 'ISC-C Series',
      },
      imageSrc: visionIscC,
      imageAlt: {
        zh: '华怡丰 ISC-C 系列图像识别传感器',
        en: 'Huayifeng ISC-C vision sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/89.html',
    },
  ],
  'pressure-sensors': [
    {
      id: 'pressure-dnp2',
      title: {
        zh: '双数显数字压力传感器',
        en: 'Dual-display digital pressure sensors',
      },
      seriesCode: {
        zh: 'DNP2 系列',
        en: 'DNP2 Series',
      },
      imageSrc: pressureDnp2,
      imageAlt: {
        zh: '华怡丰 DNP2 系列双数显数字压力传感器',
        en: 'Huayifeng DNP2 dual-display digital pressure sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/58.html',
    },
    {
      id: 'pressure-dnpwc',
      title: {
        zh: '防水耐腐蚀型压力传感器',
        en: 'Waterproof corrosion-resistant pressure sensors',
      },
      seriesCode: {
        zh: 'DNP-W/C 系列',
        en: 'DNP-W/C Series',
      },
      imageSrc: pressureDnpwc,
      imageAlt: {
        zh: '华怡丰 DNP-W/C 系列防水耐腐蚀型压力传感器',
        en: 'Huayifeng DNP-W/C waterproof corrosion-resistant pressure sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/82.html',
    },
  ],
  'ultrasonic-sensors': [
    {
      id: 'ultrasonic-usc',
      title: {
        zh: '圆柱型超声波传感器',
        en: 'Cylindrical ultrasonic sensors',
      },
      seriesCode: {
        zh: 'USC 系列',
        en: 'USC Series',
      },
      imageSrc: ultrasonicUsc,
      imageAlt: {
        zh: '华怡丰 USC 系列圆柱型超声波传感器',
        en: 'Huayifeng USC cylindrical ultrasonic sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/56.html',
    },
    {
      id: 'ultrasonic-usdb',
      title: {
        zh: '超声波单双张检测传感器',
        en: 'Ultrasonic single/double-sheet sensors',
      },
      seriesCode: {
        zh: 'USDB 系列',
        en: 'USDB Series',
      },
      imageSrc: ultrasonicUsdb,
      imageAlt: {
        zh: '华怡丰 USDB 系列超声波单双张检测传感器',
        en: 'Huayifeng USDB ultrasonic single/double-sheet sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/57.html',
    },
  ],
  'contact-sensors': [
    {
      id: 'contact-cts',
      title: {
        zh: '接触式传感器',
        en: 'Contact sensors',
      },
      seriesCode: {
        zh: 'CTS 系列',
        en: 'CTS Series',
      },
      imageSrc: contactCts,
      imageAlt: {
        zh: '华怡丰 CTS 系列接触式传感器',
        en: 'Huayifeng CTS contact sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/60.html',
    },
    {
      id: 'contact-cts2',
      title: {
        zh: '接触式位移传感器',
        en: 'Contact displacement sensors',
      },
      seriesCode: {
        zh: 'CTS2 系列',
        en: 'CTS2 Series',
      },
      imageSrc: contactCts2,
      imageAlt: {
        zh: '华怡丰 CTS2 系列接触式位移传感器',
        en: 'Huayifeng CTS2 contact displacement sensor',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/81.html',
    },
  ],
  'magnetic-sensors': [
   {
      id: 'magnetic-cylinder-switch',
      title: {
        zh: '气缸磁性开关',
        en: 'Cylinder magnetic switches',
      },
      seriesCode: {
        zh: '气缸磁性开关',
        en: 'Cylinder magnetic switch',
      },
      imageSrc: magneticCylinderSwitch,
      imageAlt: {
        zh: '华怡丰气缸磁性开关产品图',
        en: 'Huayifeng cylinder magnetic switch',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/84.html',
    },
  ],
  accessories: [
    {
      id: 'accessory-oc-cable',
      title: {
        zh: '电缆连接器',
        en: 'Cable connectors',
      },
      seriesCode: {
        zh: 'OC 系列',
        en: 'OC Series',
      },
      imageSrc: accessoryOccable,
      imageAlt: {
        zh: '华怡丰 OC 系列电缆连接器',
        en: 'Huayifeng OC cable connector',
      },
      sourceUrl: 'https://www.hyfcn.com/product_list/64.html',
    },
  ],
}
