import type { Locale } from "../../i18n/locales";

import type { ProductFamilyKey } from "./types";

const familySummaries = {
  zh: {
    "industrial-sensors": "覆盖检测与识别方向，适合先从子类判断。",
    "safety-protection-sensors": "面向安全检测、区域防护与门锁场景。",
    "laser-ranging-sensors": "适合测距、位移检测与精密定位。",
    "linear-guides-and-modules": "对应结构运动、模组集成与定位平台。",
    "pneumatic-components": "用于动作执行、气路控制与常规配套。",
  } satisfies Record<ProductFamilyKey, string>,
  en: {
    "industrial-sensors":
      "A structured entry into sensing and identification, starting from the right subgroup.",
    "safety-protection-sensors":
      "Built for safeguarding, area monitoring, and interlock control.",
    "laser-ranging-sensors":
      "Focused on ranging, displacement inspection, and precision positioning.",
    "linear-guides-and-modules":
      "Supports linear motion assemblies, module integration, and positioning structures.",
    "pneumatic-components":
      "Covers actuation, air control, and standard pneumatic assemblies.",
  } satisfies Record<ProductFamilyKey, string>,
};

const familyUseCases = {
  zh: {
    "industrial-sensors": "适合设备开发、检测工位与产线改造。",
    "safety-protection-sensors": "适合安全补强、门禁联锁与区域检测。",
    "laser-ranging-sensors": "适合非接触测量和高精度定位。",
    "linear-guides-and-modules": "适合滑台、模组和结构升级。",
    "pneumatic-components": "适合气缸、阀岛与气源配套。",
  } satisfies Record<ProductFamilyKey, string>,
  en: {
    "industrial-sensors":
      "Used in equipment development, inspection stations, and production-line upgrades.",
    "safety-protection-sensors":
      "Used in safety upgrades, interlock systems, and guarded-area projects.",
    "laser-ranging-sensors":
      "Used in non-contact measurement and high-precision positioning.",
    "linear-guides-and-modules":
      "Used in slide assemblies, motion modules, and machine-structure upgrades.",
    "pneumatic-components":
      "Used in cylinder, valve-island, and air-preparation projects.",
  } satisfies Record<ProductFamilyKey, string>,
};

const groupSummaries: Record<Locale, Record<string, string>> = {
  zh: {
    "fiber-sensors": "适合小目标、高精度与窄空间检测。",
    "photoelectric-sensors": "适合到位、识别与通断检测。",
    "displacement-sensors": "适合位移、厚度与高度检测。",
    "slot-sensors": "适合标签、边缘与夹槽触发。",
    "color-and-label-sensors": "适合颜色、标签与标记识别。",
    "inductive-proximity-sensors": "适合金属到位与接近检测。",
    "capacitive-proximity-sensors": "适合液位与非金属接近检测。",
    "industrial-code-readers": "适合条码与二维码读取。",
    "vision-sensors": "适合轻量视觉识别与判定。",
    "pressure-sensors": "适合压力监测与耐腐蚀场景。",
    "ultrasonic-sensors": "适合透明体、液位与稳定测距。",
    "contact-sensors": "适合接触式检测与微小位移判断。",
    "magnetic-sensors": "适合气缸磁感应与位置反馈。",
    accessories: "用于连接、布线与安装配套。",
    "light-curtains-and-area-sensors": "适合区域防护与人员安全检测。",
    "safety-door-lock-switches": "适合门禁联锁与安全门状态控制。",
    "safety-relay-and-non-contact-switches": "适合安全回路、门磁与继电控制。",
    "laser-ranging": "适合非接触测距与通用激光检测。",
    "tof-laser-sensors": "适合远距、快速与复杂背景检测。",
    "laser-displacement": "适合高精度位移与厚度测量。",
    "linear-guides": "适合导向、滑移与精密直线运动。",
    "slide-modules": "适合滑台式动作单元与结构升级。",
    "ball-screw-modules": "适合高精度定位与重复运动。",
    "belt-driven-modules": "适合长行程与高速搬运。",
    "positioning-stages": "适合平台定位与多轴组合结构。",
    cylinders: "适合标准动作执行与直线推拉。",
    "solenoid-valves": "适合气路切换与执行控制。",
    "air-preparation": "适合过滤、减压与稳定供气。",
    "fittings-and-tubing": "适合连接、分流与气路布置。",
    "vacuum-components": "适合吸附搬运与负压控制。",
  },
  en: {
    "fiber-sensors":
      "For compact targets, fine alignment, and tight installation zones.",
    "photoelectric-sensors":
      "For presence checks, identification, and pass-fail sensing.",
    "displacement-sensors":
      "For displacement, thickness, and height inspection.",
    "slot-sensors": "Suitable for labels, edges, and slot-trigger scenarios.",
    "color-and-label-sensors": "For color, label, and mark recognition.",
    "inductive-proximity-sensors": "For metal presence and proximity sensing.",
    "capacitive-proximity-sensors": "For liquid level and non-metal detection.",
    "industrial-code-readers": "For barcode and QR code reading on the line.",
    "vision-sensors": "For lightweight visual inspection and recognition.",
    "pressure-sensors": "For pressure monitoring and corrosive environments.",
    "ultrasonic-sensors":
      "For transparent targets, liquid level, and stable ranging.",
    "contact-sensors": "For contact inspection and micro-displacement checks.",
    "magnetic-sensors": "For cylinder feedback and magnetic position sensing.",
    accessories: "For connection, wiring, and installation support.",
    "light-curtains-and-area-sensors":
      "For guarded areas and personnel safety detection.",
    "safety-door-lock-switches":
      "For interlocks and safety door status control.",
    "safety-relay-and-non-contact-switches":
      "For safety circuits, non-contact door sensing, and relay control.",
    "laser-ranging": "For non-contact ranging and general laser detection.",
    "tof-laser-sensors":
      "For longer range, fast response, and complex backgrounds.",
    "laser-displacement":
      "For high-precision displacement and thickness measurement.",
    "linear-guides": "For guiding, sliding, and precise linear motion.",
    "slide-modules": "For slide units and structure-level motion upgrades.",
    "ball-screw-modules": "For precise positioning and repeatable motion.",
    "belt-driven-modules": "For long travel and higher-speed transfer.",
    "positioning-stages": "For stage positioning and multi-axis structures.",
    cylinders: "For standard actuation and linear push-pull motion.",
    "solenoid-valves": "For air switching and actuation control.",
    "air-preparation":
      "For filtration, pressure control, and stable air supply.",
    "fittings-and-tubing": "For connection, splitting, and air routing.",
    "vacuum-components": "For suction handling and vacuum control.",
  },
};

export function getCompactFamilySummary(
  locale: Locale,
  familyKey: ProductFamilyKey,
) {
  return familySummaries[locale][familyKey];
}

export function getCompactFamilyUseCase(
  locale: Locale,
  familyKey: ProductFamilyKey,
) {
  return familyUseCases[locale][familyKey];
}

export function getCompactGroupSummary(locale: Locale, groupSlug: string) {
  return groupSummaries[locale][groupSlug];
}
