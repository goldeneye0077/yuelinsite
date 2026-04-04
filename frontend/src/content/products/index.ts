import {
  fiberSensorVisuals,
  type FiberSensorVisual,
} from '../media/referenceAssets'
import {
  familyGroupReferenceVisuals,
  type ProductGroupReferenceVisual,
} from '../media/familyGroupReferenceVisuals'
import { projectLineVisuals } from '../media/projectLineVisuals'
import {
  industrialSensorReferenceVisuals,
} from '../media/industrialSensorReferenceVisuals'
import { buildLocalePath, type Locale } from '../../i18n/locales'
import { enProductTaxonomy } from './en'
import { zhProductTaxonomy } from './zh'
import type {
  ProductFamily,
  ProductFamilyKey,
  RepresentativeProduct,
} from './types'

const productTaxonomyMap = {
  zh: zhProductTaxonomy,
  en: enProductTaxonomy,
}

const groupReferenceVisuals = {
  ...industrialSensorReferenceVisuals,
  ...familyGroupReferenceVisuals,
}

const productFamilyDisplayCopyMap: Partial<
  Record<
    ProductFamilyKey,
    {
      summary: Record<Locale, string>
      useCase: Record<Locale, string>
    }
  >
> = {
  'linear-guides-and-modules': {
    summary: {
      zh: '围绕直线导向、模组执行与精密定位建立一套更适合项目沟通的产品目录，便于客户先按结构方案筛选，再进入具体系列。',
      en: 'Built around linear guidance, actuator modules, and precision positioning so buyers can screen structure options first and move into the right series next.',
    },
    useCase: {
      zh: '面向设备传动定位、搬运模组升级、工装改造与自动化直线机构选型场景。',
      en: 'For motion positioning, transfer-module upgrades, tooling revamps, and linear-axis selection in automation equipment.',
    },
  },
  'pneumatic-components': {
    summary: {
      zh: '围绕执行、控制与配气建立气动元器件目录，适合客户按动作机构、阀控方式和配管结构快速锁定方向。',
      en: 'Organized around actuation, valve control, and air distribution so customers can quickly narrow the right pneumatic route by motion type and piping structure.',
    },
    useCase: {
      zh: '面向夹紧、搬运、切换控制、气源处理与真空取放等自动化执行场景。',
      en: 'For clamping, transfer motion, directional control, air preparation, and vacuum pick-and-place scenarios.',
    },
  },
}

const projectLineDisplayCopyMap: Record<
  string,
  {
    summary: Record<Locale, string>
    application: Record<Locale, string>
    inquiryHint: Record<Locale, string>
    highlights: Record<Locale, string[]>
  }
> = {
  'linear-guides': {
    summary: {
      zh: '用于设备导向、重复定位与滑座支撑，适合先确认载荷、精度与安装基准。',
      en: 'Used for guidance, repeat positioning, and carriage support when load, accuracy, and mounting datums need to be confirmed early.',
    },
    application: {
      zh: '适合包装、搬运、装配与检测设备中的直线导向和基础定位机构。',
      en: 'Fits linear guidance and baseline positioning inside packaging, transfer, assembly, and inspection equipment.',
    },
    inquiryHint: {
      zh: '建议提交行程、负载、安装方向、运行速度，以及是否需要预压、防尘或静音要求。',
      en: 'Share travel, load, mounting direction, running speed, and whether preload, dust protection, or lower-noise operation is required.',
    },
    highlights: {
      zh: [
        '适合先从导轨宽度、滑块数量和安装基准快速判断结构方向。',
        '对重复定位、运行平顺性和维护周期有要求的项目更容易先锁定方案。',
        '后续可继续补充长度、精度等级、材质与安装尺寸图。',
      ],
      en: [
        'A practical starting point for comparing rail width, carriage count, and datum style.',
        'Works well for projects that care about repeatability, smooth running, and maintenance interval.',
        'Ready for later enrichment with length, accuracy grade, material, and mounting drawings.',
      ],
    },
  },
  'slide-modules': {
    summary: {
      zh: '适合单轴搬运、夹治具进退与紧凑型执行单元，便于快速确认行程和电机方向。',
      en: 'Fits single-axis transfer, fixture advance-retract motion, and compact actuator units where travel and motor orientation matter first.',
    },
    application: {
      zh: '适合自动上下料、移载、顶升与工位切换等需要成套直线执行单元的场景。',
      en: 'Fits auto loading, transfer, lift, and station-switching tasks that need packaged linear actuator units.',
    },
    inquiryHint: {
      zh: '建议先说明有效行程、节拍、安装空间、电机安装方向，以及是否需要防护罩或拖链。',
      en: 'Start with effective stroke, cycle time, installation space, motor orientation, and whether covers or cable chain support are needed.',
    },
    highlights: {
      zh: [
        '更适合先区分紧凑型、标准型和高刚性模组的路线。',
        '便于同时确认电机安装、感应器布线和整机安装空间。',
        '后续可进一步补充负载曲线、允许偏载和维护方式。',
      ],
      en: [
        'Helps separate compact, standard, and higher-rigidity module routes early.',
        'Useful for aligning motor mounting, sensor routing, and overall machine space at the same time.',
        'Can later be expanded with load curves, offset-load limits, and maintenance notes.',
      ],
    },
  },
  'ball-screw-modules': {
    summary: {
      zh: '偏向高精度定位与较高推力场景，适合关注重复精度、速度与刚性。',
      en: 'Leans toward higher-precision positioning and stronger thrust requirements where repeatability and structural rigidity are key.',
    },
    application: {
      zh: '适合压装进给、精密对位、测量平台与对重复精度要求较高的直线机构。',
      en: 'Fits press-fit feeding, precision alignment, measurement platforms, and linear axes that need stronger repeatability.',
    },
    inquiryHint: {
      zh: '请优先提供定位精度、推力、速度、安装方向，以及是否存在垂直负载或外部导向。',
      en: 'Lead with positioning accuracy, thrust, speed, mounting direction, and whether vertical load or external guidance is involved.',
    },
    highlights: {
      zh: [
        '适合先区分标准滚珠丝杆模组与高精度定位模组的应用路线。',
        '对推力、定位精度与结构刚性同时有要求的项目更容易快速收敛。',
        '后续可继续补充导程、丝杆直径、防护等级与电机匹配建议。',
      ],
      en: [
        'Makes it easier to separate standard ball-screw modules from higher-precision positioning routes.',
        'A strong fit for projects that need thrust, positioning accuracy, and rigidity together.',
        'Ready for later detail on lead, screw diameter, protection rating, and motor pairing.',
      ],
    },
  },
  'belt-driven-modules': {
    summary: {
      zh: '适合长行程、高节拍搬运和门型结构应用，优先判断速度、行程与同步要求。',
      en: 'Fits long-travel, higher-speed transfer motion and gantry-style layouts where stroke, speed, and synchronization lead the discussion.',
    },
    application: {
      zh: '适合长距离移载、往返搬运、门型机构与节拍优先的自动化工位。',
      en: 'Fits longer-distance transfer, shuttle handling, gantry structures, and automation stations where cycle time comes first.',
    },
    inquiryHint: {
      zh: '建议先提交总行程、最高速度、负载重心、安装姿态，以及是否需要双轴同步或拖链布局。',
      en: 'Share total stroke, top speed, load center of gravity, mounting orientation, and whether dual-axis synchronization or cable-chain routing is required.',
    },
    highlights: {
      zh: [
        '适合先比较高速型与长行程型皮带模组的结构差异。',
        '便于提前确认张紧方式、支撑结构和电缆拖链路线。',
        '后续可继续补充重复定位能力、最大悬臂和维护周期。',
      ],
      en: [
        'Helps compare higher-speed and long-stroke belt module structures early.',
        'Useful for confirming belt tensioning, support structure, and cable-chain path up front.',
        'Can later be refined by repeatability, maximum cantilever, and service interval.',
      ],
    },
  },
  'positioning-stages': {
    summary: {
      zh: '面向精密对位、视觉校正与多轴组合平台，便于先沟通轴数、台面尺寸与控制方式。',
      en: 'Supports precision alignment, vision correction, and multi-axis platform concepts where axis count and table size need early alignment.',
    },
    application: {
      zh: '适合精密贴合、视觉补偿、治具微调和多轴联动定位平台场景。',
      en: 'Fits precision alignment, vision compensation, fixture fine-tuning, and multi-axis positioning platforms.',
    },
    inquiryHint: {
      zh: '建议说明轴数、分辨率、台面尺寸、负载重量，以及是否需要手动微调或电动控制。',
      en: 'Start with axis count, resolution, table size, payload, and whether manual trim or motorized control is required.',
    },
    highlights: {
      zh: [
        '适合先区分单轴平台和多轴组合平台的配置方向。',
        '有助于提前确认台面尺寸、行程组合与控制接口。',
        '后续可继续补充限位、原点、视觉治具接口与防护方案。',
      ],
      en: [
        'Helps separate single-axis stages from multi-axis platform configurations earlier.',
        'Useful for confirming table size, travel combination, and control interface early.',
        'Can later be extended with limits, home position, vision-fixture interfaces, and guarding notes.',
      ],
    },
  },
  cylinders: {
    summary: {
      zh: '覆盖标准、薄型与导杆结构，适合先确认缸径、行程、安装方式和缓冲需求。',
      en: 'Covers standard, slim, and guided structures so bore, stroke, mounting, and cushioning needs can be clarified first.',
    },
    application: {
      zh: '适合夹紧、推出、压紧、搬运与治具动作等常见气动执行工位。',
      en: 'Fits common pneumatic actuation such as clamping, pushing, pressing, transfer, and fixture motion.',
    },
    inquiryHint: {
      zh: '建议先说明缸径、行程、安装方式、使用压力，以及是否需要磁性开关、缓冲或防尘结构。',
      en: 'Lead with bore size, stroke, mounting style, working pressure, and whether magnetic switches, cushioning, or dust protection are needed.',
    },
    highlights: {
      zh: [
        '适合先比较标准、薄型和导杆三类典型气缸结构。',
        '便于同步确认安装附件、感应器布线和使用压力范围。',
        '后续可继续补充推力估算、速度控制与寿命建议。',
      ],
      en: [
        'A practical way to compare standard, slim, and guided cylinder structures side by side.',
        'Makes it easier to align mounting accessories, switch routing, and working-pressure range.',
        'Ready for later enrichment with force estimates, speed control, and lifecycle guidance.',
      ],
    },
  },
  'solenoid-valves': {
    summary: {
      zh: '面向换向控制和阀岛集成，便于快速判断阀位机能、电压规格与接口口径。',
      en: 'Built for directional switching and manifold control, making it easier to compare function type, voltage, and port size early.',
    },
    application: {
      zh: '适合设备动作切换、多工位集中配气与成套阀岛控制场景。',
      en: 'Fits machine motion switching, centralized multi-station air supply, and manifold control layouts.',
    },
    inquiryHint: {
      zh: '建议说明阀位机能、接口口径、电压规格、安装方式，以及是否需要阀岛集中管理。',
      en: 'Share function type, port size, voltage, mounting style, and whether manifold-based centralized management is required.',
    },
    highlights: {
      zh: [
        '适合先判断单阀、多联阀组还是手动阀的配置方向。',
        '便于提前确认接线方式、底板结构和维护更换空间。',
        '后续可继续补充流量、响应速度和防护等级。',
      ],
      en: [
        'Helps decide between single valves, manifolds, and manual valve routes early.',
        'Useful for aligning wiring method, base structure, and maintenance clearance.',
        'Can later be refined by flow capacity, response time, and protection rating.',
      ],
    },
  },
  'air-preparation': {
    summary: {
      zh: '围绕过滤、减压、润滑与压力监测展开，适合先明确进气品质和维护策略。',
      en: 'Covers filtration, pressure regulation, lubrication, and pressure monitoring where inlet quality and service intervals matter.',
    },
    application: {
      zh: '适合空压系统前端调压、配气柜处理和现场用气品质管理。',
      en: 'Fits front-end air regulation, cabinet-side preparation, and on-site compressed-air quality control.',
    },
    inquiryHint: {
      zh: '建议先说明进气压力、接口规格、安装空间，以及是否需要排水、排污或油雾功能。',
      en: 'Start with inlet pressure, port specification, installation space, and whether draining, purge, or lubrication is required.',
    },
    highlights: {
      zh: [
        '适合先区分过滤减压阀、三联件和独立压力表的搭配方式。',
        '便于提前确认柜内空间和维护换芯频率。',
        '后续可继续补充过滤精度、压力稳定范围和材质要求。',
      ],
      en: [
        'Helps separate filter regulators, FRL units, and standalone gauges as working combinations.',
        'Useful for checking cabinet space and maintenance cartridge interval ahead of time.',
        'Ready for later detail on filtration accuracy, pressure stability, and material requirements.',
      ],
    },
  },
  'fittings-and-tubing': {
    summary: {
      zh: '用于现场配管、分流转接与快插连接，便于先统一管径、螺纹和安装空间。',
      en: 'Supports routing, branching, and quick connections so tube size, thread standard, and installation space can be unified early.',
    },
    application: {
      zh: '适合设备现场配管、气路延伸、转接分流和标准化维护管理。',
      en: 'Fits machine-side piping, pneumatic extension, branch distribution, and standardized maintenance planning.',
    },
    inquiryHint: {
      zh: '建议先说明管径、螺纹规格、弯折空间，以及是否需要耐油、耐弯折或阻燃管材。',
      en: 'Lead with tube size, thread specification, bend radius, and whether oil-resistant, flex-rated, or flame-retardant tubing is needed.',
    },
    highlights: {
      zh: [
        '适合先把快插接头、PU 管和分气接头拆开判断。',
        '便于同步现场走管方向和维修替换便利性。',
        '后续可继续补充颜色管理、长度清单和特殊材质版本。',
      ],
      en: [
        'Helps evaluate push-in fittings, PU tube, and branch connectors separately first.',
        'Makes it easier to align routing direction and replacement convenience on site.',
        'Can later be extended with color coding, cut-length lists, and specialty materials.',
      ],
    },
  },
  'vacuum-components': {
    summary: {
      zh: '面向吸附搬运与负压控制，适合先沟通工件材质、吸附面积和真空源布局。',
      en: 'Prepared for suction transfer and negative-pressure control where workpiece material, suction area, and vacuum layout need early discussion.',
    },
    application: {
      zh: '适合纸箱上料、片材抓取、真空搬运与轻量化取放场景。',
      en: 'Fits carton feeding, sheet pickup, vacuum transfer, and lightweight pick-and-place scenarios.',
    },
    inquiryHint: {
      zh: '建议先提供工件材质、表面平整度、节拍，以及是否需要分散式真空或集中真空源。',
      en: 'Share workpiece material, surface flatness, cycle time, and whether distributed or centralized vacuum is preferred.',
    },
    highlights: {
      zh: [
        '适合先比较真空发生器、吸盘和过滤器三类典型构成。',
        '便于提前判断吸附面积、负压稳定性和安装接口。',
        '后续可继续补充吸盘材质、过滤精度和报警监测。',
      ],
      en: [
        'Helps compare ejectors, suction cups, and vacuum filters as a working set.',
        'Useful for confirming suction area, vacuum stability, and interface choice earlier.',
        'Ready for later enrichment with cup material, filtration accuracy, and alarm monitoring.',
      ],
    },
  },
}

const groupCopyMap: Record<
  string,
  {
    application: Record<Locale, string>
    inquiryHint: Record<Locale, string>
    highlights: Record<Locale, string[]>
  }
> = {
  'linear-guides': {
    application: {
      zh: '适合设备直线导向、重复定位与中等载荷搬运工位。',
      en: 'Fits straight-line guidance, repeat positioning, and medium-load transfer stations.',
    },
    inquiryHint: {
      zh: '沟通时先说明行程、负载、安装方向，以及是否需要防尘、预压或高速运行。',
      en: 'Start with travel, load, mounting direction, and whether dust protection, preload, or higher speed is required.',
    },
    highlights: {
      zh: [
        '先判断导轨宽度、滑块数量和安装基准，能更快缩小范围。',
        '适合对重复定位、运行平顺性和维护周期有要求的工位。',
        '后续可继续补充长度、精度等级和安装尺寸图。',
      ],
      en: [
        'Confirm rail width, carriage count, and datum faces early to narrow selection faster.',
        'Well suited to stations that care about repeatability, smooth running, and maintenance interval.',
        'Ready for later enrichment with length, accuracy grade, and mounting drawings.',
      ],
    },
  },
  'slide-modules': {
    application: {
      zh: '适合单轴搬运、夹治具进退与紧凑型直线运动单元。',
      en: 'Fits single-axis transfer, fixture advance-retract tasks, and compact linear motion units.',
    },
    inquiryHint: {
      zh: '优先说明行程、节拍、安装空间，以及是否需要电机侧预留或防护罩。',
      en: 'Lead with travel, cycle time, mounting space, and whether motor-side clearance or protective covers are needed.',
    },
    highlights: {
      zh: [
        '更适合先判断紧凑型、标准型还是高刚性模组路线。',
        '便于同步确认电机安装方向与感应器布线空间。',
        '后续可继续补充负载曲线和允许偏载说明。',
      ],
      en: [
        'Helps decide quickly between compact, standard, and higher-rigidity module paths.',
        'Makes it easier to align motor orientation and sensor cable clearance.',
        'Can later be expanded with load curves and offset-load guidance.',
      ],
    },
  },
  'ball-screw-modules': {
    application: {
      zh: '适合高精度定位、压装进给和需要较高重复性的直线机构。',
      en: 'Fits high-precision positioning, press-fit feeding, and linear axes that need stronger repeatability.',
    },
    inquiryHint: {
      zh: '建议先说明定位精度、推力、速度和是否存在垂直安装或外部导向。',
      en: 'Clarify positioning accuracy, thrust, speed, and whether vertical mounting or external guidance is involved.',
    },
    highlights: {
      zh: [
        '更利于先区分标准滚珠丝杆与高精度定位模组的路线。',
        '适合需要兼顾推力、定位精度和结构刚性的工位。',
        '后续可继续补充导程、丝杆直径和防护等级。',
      ],
      en: [
        'Makes it easier to separate standard screw modules from higher-precision positioning paths.',
        'Good for stations that need thrust, positioning accuracy, and structural rigidity together.',
        'Ready for later detail on lead, screw diameter, and protection rating.',
      ],
    },
  },
  'belt-driven-modules': {
    application: {
      zh: '适合长行程搬运、高速往返与节拍优先的输送定位场景。',
      en: 'Fits long-stroke transfer, high-speed shuttle motion, and cycle-time-first positioning scenarios.',
    },
    inquiryHint: {
      zh: '沟通时请先说明总行程、最高速度、负载重心，以及是否需要同步多轴。',
      en: 'Share total stroke, top speed, load center of gravity, and whether multi-axis synchronization is required.',
    },
    highlights: {
      zh: [
        '适合先比较高速型与长行程型皮带模组的结构差异。',
        '便于提前确认张紧结构、支撑方式和线缆拖链路线。',
        '后续可继续补充重复定位与最大悬臂条件。',
      ],
      en: [
        'Helps compare higher-speed and longer-stroke belt module structures early.',
        'Useful for aligning tensioning layout, support method, and cable-chain path.',
        'Can later be refined by repeatability and maximum cantilever condition.',
      ],
    },
  },
  'positioning-stages': {
    application: {
      zh: '适合精密对位、视觉校正、工装微调与多轴组合定位平台。',
      en: 'Fits precision alignment, vision correction, fixture fine-tuning, and multi-axis positioning platforms.',
    },
    inquiryHint: {
      zh: '优先说明轴数、分辨率、平台尺寸，以及是否需要手动微调或电动控制。',
      en: 'Start with axis count, resolution, platform size, and whether manual trim or motorized control is needed.',
    },
    highlights: {
      zh: [
        '更适合先区分单轴平台和多轴组合平台的结构方向。',
        '有助于提前确认负载面尺寸、行程组合和安装基准。',
        '后续可继续补充限位、原点和视觉治具接口。',
      ],
      en: [
        'Helps separate single-axis stages from multi-axis platform structures earlier.',
        'Useful for confirming top-surface size, travel combination, and mounting datums.',
        'Ready for later addition of limits, home position, and vision-fixture interfaces.',
      ],
    },
  },
  cylinders: {
    application: {
      zh: '适合夹紧、推出、搬运与治具动作等常规气动执行场景。',
      en: 'Fits common pneumatic actuation such as clamping, pushing, transfer, and fixture motion.',
    },
    inquiryHint: {
      zh: '请先说明缸径、行程、安装形式，以及是否需要磁性开关或缓冲结构。',
      en: 'Start with bore size, stroke, mounting style, and whether magnetic switches or cushioning are needed.',
    },
    highlights: {
      zh: [
        '适合先比较标准、薄型和导杆三类典型气缸结构。',
        '便于同步确认安装耳环、法兰与感应器布线空间。',
        '后续可继续补充使用压力范围和推力估算。',
      ],
      en: [
        'Helps compare standard, compact, and guided cylinder structures side by side.',
        'Makes it easier to align clevis, flange, and switch-routing requirements.',
        'Can later be extended with working-pressure range and force estimates.',
      ],
    },
  },
  'solenoid-valves': {
    application: {
      zh: '适合气路换向控制、多工位集中配气与设备动作节拍管理。',
      en: 'Fits pneumatic directional control, centralized multi-station air supply, and machine motion timing.',
    },
    inquiryHint: {
      zh: '沟通时先说明阀位机能、接口口径、电压规格，以及是否需要阀岛集中安装。',
      en: 'Clarify function type, port size, voltage, and whether manifold-style centralized mounting is required.',
    },
    highlights: {
      zh: [
        '更适合先判断单阀、多联阀组还是手动阀的配置方向。',
        '便于提前确认接线方式、安装底板和维护更换空间。',
        '后续可继续补充流量、响应速度和 IP 防护信息。',
      ],
      en: [
        'Helps decide between single valves, manifolds, and manual valve routes early.',
        'Useful for aligning wiring, sub-base choice, and service clearance.',
        'Ready for later flow, response-time, and IP-rating detail.',
      ],
    },
  },
  'air-preparation': {
    application: {
      zh: '适合压缩空气过滤、稳压、润滑与前端气源品质管理。',
      en: 'Fits compressed-air filtration, pressure regulation, lubrication, and upstream air-quality control.',
    },
    inquiryHint: {
      zh: '优先说明进气压力、接口规格、安装空间，以及是否需要排水、排污或油雾功能。',
      en: 'Lead with inlet pressure, port spec, mounting space, and whether draining, purge, or lubrication is required.',
    },
    highlights: {
      zh: [
        '适合先区分过滤减压阀、三联件和独立压力表的搭配方式。',
        '便于提前确认配气柜空间和维护换芯频率。',
        '后续可继续补充过滤精度和压力稳定范围。',
      ],
      en: [
        'Helps separate filter regulators, FRL units, and standalone gauge combinations.',
        'Useful for checking cabinet space and maintenance cartridge intervals early.',
        'Can later be refined by filtration accuracy and pressure-stability range.',
      ],
    },
  },
  'fittings-and-tubing': {
    application: {
      zh: '适合现场气路布线、快速接驳、转接分流与管径统一管理。',
      en: 'Fits field pneumatic routing, quick connection, split distribution, and tube-size standardization.',
    },
    inquiryHint: {
      zh: '先说明管径、接口螺纹、弯折空间，以及是否需要耐油、耐弯折或阻燃管材。',
      en: 'Start with tube size, thread spec, bend radius, and whether oil-resistant, flex-rated, or flame-retardant tubing is needed.',
    },
    highlights: {
      zh: [
        '适合先把快插接头、PU 管和分气接头拆开判断。',
        '便于同步现场布管方向和维修替换便利性。',
        '后续可继续补充颜色管理、长度清单和特殊材质版本。',
      ],
      en: [
        'Helps evaluate push-in fittings, PU tube, and branch connectors separately first.',
        'Makes it easier to align routing direction and maintenance replacement access.',
        'Ready for later color coding, cut-length lists, and specialty material options.',
      ],
    },
  },
  'vacuum-components': {
    application: {
      zh: '适合吸附搬运、纸箱上料、片材抓取与轻量化真空取放场景。',
      en: 'Fits suction transfer, carton feeding, sheet pickup, and lightweight vacuum pick-and-place work.',
    },
    inquiryHint: {
      zh: '建议先说明工件材质、表面平整度、节拍，以及是否需要分散式真空或集中真空源。',
      en: 'Clarify workpiece material, surface flatness, cycle time, and whether distributed or centralized vacuum is preferred.',
    },
    highlights: {
      zh: [
        '适合先比较真空发生器、吸盘和过滤器三类典型构成。',
        '便于提前判断吸附面积、负压稳定性和安装接口。',
        '后续可继续补充吸盘材质、过滤精度和报警监测。',
      ],
      en: [
        'Helps compare ejectors, suction cups, and vacuum filters as a working set.',
        'Useful for confirming suction area, vacuum stability, and interface choice earlier.',
        'Can later be expanded with cup material, filtration accuracy, and alarm monitoring.',
      ],
    },
  },
  'photoelectric-sensors': {
    application: {
      zh: '适合产线有无检测、到位确认、计数分拣与一般反射型目标检测。',
      en: 'Fits object presence checks, in-position confirmation, counting, and general reflective-target detection.',
    },
    inquiryHint: {
      zh: '建议先说明检测距离、工件表面材质，以及是否需要背景抑制或窄光斑。',
      en: 'Start with sensing distance, target surface material, and whether background suppression or a narrow beam is needed.',
    },
    highlights: {
      zh: [
        '适合作为光电检测项目的首轮选型样本。',
        '便于先判断安装空间、光轴方向与输出接口。',
        '后续可继续补齐支架、接插件与更细分型号。',
      ],
      en: [
        'A practical first sample set for photoelectric detection projects.',
        'Helps confirm mounting space, beam direction, and output interface early.',
        'Ready for later enrichment with brackets, connectors, and finer model splits.',
      ],
    },
  },
  'displacement-sensors': {
    application: {
      zh: '适合高差、厚度、间隙、平面度与定位偏差这类精密位移测量场景。',
      en: 'Suited to precision displacement work such as height, thickness, gap, flatness, and positioning deviation checks.',
    },
    inquiryHint: {
      zh: '沟通时优先说明量程、重复精度要求、被测表面材质和安装距离。',
      en: 'Lead with measurement range, repeatability target, surface material, and mounting distance.',
    },
    highlights: {
      zh: [
        '更适合对量程与精度要求已经比较明确的项目。',
        '方便先锁定测量窗口、触发节拍和控制系统接口。',
        '后续可继续细化采样速度、输出方式和安装支架。',
      ],
      en: [
        'Best for projects with clearer range and accuracy expectations.',
        'Helps align measurement window, trigger tempo, and controller interface early.',
        'Can later be refined by sampling speed, output mode, and mounting hardware.',
      ],
    },
  },
  'slot-sensors': {
    application: {
      zh: '适合引脚、边缘、缺口、小件通过与包装片材定位这类槽型检测工位。',
      en: 'Fits slot-based stations for lead, edge, notch, small-part pass-through, and sheet-position checks.',
    },
    inquiryHint: {
      zh: '建议先说明槽宽需求、安装方向、工件通过节拍和线缆出线方式。',
      en: 'Clarify slot width, mounting direction, part pass-through tempo, and cable-routing preference first.',
    },
    highlights: {
      zh: [
        '更利于快速比较不同槽宽和接线结构。',
        '可先判断是连接器型、内置连接器还是电缆型更合适。',
        '后续可继续补充外形尺寸图和支架配套。',
      ],
      en: [
        'Makes it easier to compare slot widths and wiring structures.',
        'Helps decide between connector, built-in connector, and cable versions early.',
        'Ready for later expansion with dimensional drawings and bracket kits.',
      ],
    },
  },
  'color-and-label-sensors': {
    application: {
      zh: '适合颜色识别、色标定位、标签边缘判断与包装物料切换检测。',
      en: 'Suited to color recognition, mark positioning, label-edge judgment, and packaging material changeover checks.',
    },
    inquiryHint: {
      zh: '沟通时可先说明被测颜色数量、背景材质、运动速度以及安装距离。',
      en: 'Share the number of target colors, background material, line speed, and mounting distance up front.',
    },
    highlights: {
      zh: [
        '适合作为颜色和标签识别工位的代表样本集。',
        '方便先确认是否偏向颜色识别、色标检测还是标签透光检测。',
        '后续可继续补充光斑尺寸、示教方式和报警逻辑。',
      ],
      en: [
        'A good representative set for color and label recognition stations.',
        'Helps distinguish whether the station leans toward color, mark, or label-through sensing.',
        'Can later be extended with spot size, teach method, and alarm logic details.',
      ],
    },
  },
  'inductive-proximity-sensors': {
    application: {
      zh: '适合金属工件接近检测、夹具位置反馈、限位确认与节拍触发。',
      en: 'Fits metal-target proximity checks, fixture position feedback, limit confirmation, and tempo triggering.',
    },
    inquiryHint: {
      zh: '建议先说明目标金属材质、安装螺纹规格、检测距离和是否存在焊渣或油污。',
      en: 'Start with target metal type, thread size, sensing distance, and whether weld slag or oil contamination is present.',
    },
    highlights: {
      zh: [
        '更适合做金属目标检测的首轮结构判断。',
        '便于先比较环形、经济型和圆柱型等典型形态。',
        '后续可继续细化屏蔽型、非屏蔽型和特殊防护需求。',
      ],
      en: [
        'Well suited for the first structural pass on metal-target detection.',
        'Makes it easy to compare ring, economy, and cylindrical form factors.',
        'Can later be refined by shielded, unshielded, and special protection needs.',
      ],
    },
  },
  'capacitive-proximity-sensors': {
    application: {
      zh: '适合液位、非金属物料、包装片材和容器存在检测等电容式应用。',
      en: 'Fits capacitive use cases such as liquid level, non-metal material presence, packaging sheets, and container detection.',
    },
    inquiryHint: {
      zh: '沟通时先说明介质类型、容器材质、安装方式和现场湿度或腐蚀环境。',
      en: 'Clarify media type, container material, mounting method, and humidity or corrosive conditions first.',
    },
    highlights: {
      zh: [
        '适合作为液位和非金属检测场景的代表样本。',
        '方便快速比较管道型、扁平型和圆柱型结构。',
        '后续可继续补耐腐蚀规格和动作距离细分。',
      ],
      en: [
        'A strong sample set for liquid-level and non-metal sensing scenarios.',
        'Makes it easy to compare pipe, flat, and cylindrical structures quickly.',
        'Can later be expanded with corrosion-resistant specs and sensing-distance detail.',
      ],
    },
  },
  'industrial-code-readers': {
    application: {
      zh: '适合条码、二维码、追溯码采集，以及产线固定读取和手持补扫场景。',
      en: 'Fits barcode, QR, and traceability code capture for both fixed line reading and handheld backup scanning.',
    },
    inquiryHint: {
      zh: '建议先说明码制类型、读取距离、目标节拍，以及是固定式还是手持式工位。',
      en: 'Start with code type, reading distance, line tempo, and whether the station is fixed or handheld.',
    },
    highlights: {
      zh: [
        '把固定式和手持式读码能力并列展示，更方便判断项目方向。',
        '适合先确认读取距离、安装高度和现场照明条件。',
        '后续可继续补镜头配置、触发方式和通信协议。',
      ],
      en: [
        'Shows fixed and handheld code-reading paths side by side for quicker direction setting.',
        'Helps confirm reading distance, mounting height, and ambient lighting early.',
        'Can later be extended with lens, trigger, and communication details.',
      ],
    },
  },
  'vision-sensors': {
    application: {
      zh: '适合轻量视觉检测、外观判断、到位确认和 OK/NG 分类工位。',
      en: 'Fits lightweight visual inspection, appearance judgment, in-position confirmation, and OK/NG classification stations.',
    },
    inquiryHint: {
      zh: '沟通时请优先说明检测节拍、样本差异、光源条件和是否需要边缘计算。',
      en: 'Lead with inspection tempo, sample variation, lighting conditions, and whether edge processing is needed.',
    },
    highlights: {
      zh: [
        '适合作为视觉判断型工位的切入样本。',
        '便于先确认视野范围、安装高度和触发逻辑。',
        '后续可继续细化算法任务、镜头视角和光源搭配。',
      ],
      en: [
        'A practical starting sample for vision-led inspection stations.',
        'Helps align field of view, mounting height, and trigger logic early.',
        'Can later be refined by algorithm task, lens angle, and lighting pairing.',
      ],
    },
  },
  'pressure-sensors': {
    application: {
      zh: '适合气路、真空回路与工艺压力监测等需要稳定反馈的压力场景。',
      en: 'Suited to pneumatic lines, vacuum circuits, and process pressure monitoring that requires stable feedback.',
    },
    inquiryHint: {
      zh: '建议先说明介质类型、压力范围、接口规格，以及是否需要耐腐蚀或防水等级。',
      en: 'Clarify media type, pressure range, port specification, and whether corrosion or waterproof protection is required.',
    },
    highlights: {
      zh: [
        '把双数显与耐腐蚀两类方向清晰分开，便于快速判断。',
        '适合先锁定接口规格、量程和安装位置。',
        '后续可继续补精度等级、响应速度和报警输出逻辑。',
      ],
      en: [
        'Separates dual-display and corrosion-resistant paths clearly for fast triage.',
        'Helps lock in port spec, range, and mounting position early.',
        'Can later be extended with accuracy class, response time, and alarm-output logic.',
      ],
    },
  },
  'ultrasonic-sensors': {
    application: {
      zh: '适合透明物、薄片材、双张检测与一般距离感测场景。',
      en: 'Fits transparent targets, thin-sheet handling, double-sheet detection, and general distance sensing.',
    },
    inquiryHint: {
      zh: '沟通时优先说明目标材质、测距范围、工件宽度以及是否有单双张判断需求。',
      en: 'Start with target material, sensing range, part width, and whether single/double-sheet judgment is needed.',
    },
    highlights: {
      zh: [
        '更适合作为透明、薄片类工件的补充检测方案。',
        '方便先判断常规超声波还是单双张检测结构更匹配。',
        '后续可继续补安装支架、波束角和响应节拍。',
      ],
      en: [
        'Useful as a complementary sensing option for transparent or thin-sheet targets.',
        'Helps decide between standard ultrasonic sensing and double-sheet inspection early.',
        'Can later be refined with bracket, beam angle, and response-tempo details.',
      ],
    },
  },
  'contact-sensors': {
    application: {
      zh: '适合接触式尺寸检测、压入深度确认、轮廓跟踪与位移反馈场景。',
      en: 'Fits contact-based dimension checks, press-fit depth confirmation, contour tracking, and displacement feedback.',
    },
    inquiryHint: {
      zh: '建议先说明接触压力、行程范围、安装方向和被测件表面状态。',
      en: 'Clarify contact force, stroke range, mounting direction, and target surface condition first.',
    },
    highlights: {
      zh: [
        '适合对接触式检测和位移反馈并行比较。',
        '便于先判断行程、安装位与重复接触工况。',
        '后续可继续补探头形式、寿命指标和防护等级。',
      ],
      en: [
        'Good for comparing contact inspection and displacement-feedback paths side by side.',
        'Helps confirm stroke, mounting position, and repeat-contact conditions early.',
        'Can later be enriched with probe style, lifecycle, and protection ratings.',
      ],
    },
  },
  'magnetic-sensors': {
    application: {
      zh: '适合气缸行程反馈、夹具开合确认与磁感触发工位。',
      en: 'Fits cylinder stroke feedback, clamp open/close confirmation, and magnetically triggered stations.',
    },
    inquiryHint: {
      zh: '建议先说明气缸型号、槽型结构、输出方式和布线空间。',
      en: 'Start with cylinder model, slot structure, output type, and wiring space.',
    },
    highlights: {
      zh: [
        '适合作为气缸磁性反馈工位的基础样本。',
        '方便先确认安装槽型、动作位置和控制接口。',
        '后续可继续补细分安装件和配套连接线。',
      ],
      en: [
        'A practical baseline sample for cylinder magnetic feedback stations.',
        'Helps confirm slot type, actuation position, and controller interface early.',
        'Can later be extended with mounting accessories and matching cables.',
      ],
    },
  },
  accessories: {
    application: {
      zh: '适合在传感器项目里同步确认连接线、接插件与现场布线方式。',
      en: 'Fits early confirmation of cabling, connectors, and field wiring alongside sensor projects.',
    },
    inquiryHint: {
      zh: '沟通时先说明接口规格、线长需求、弯折空间和现场防护等级。',
      en: 'Clarify connector spec, cable length, bend space, and required field protection first.',
    },
    highlights: {
      zh: [
        '把配件从主传感器页里单独提出，方便补齐整套清单。',
        '适合先同步接口规格和走线方式，减少后期返工。',
        '后续可继续补更多接插件和延长线规格。',
      ],
      en: [
        'Pulls accessories into a dedicated lane so the full bill can be aligned earlier.',
        'Helps synchronize connector specs and routing before late-stage rework.',
        'Ready for later expansion with more connector and extension-cable options.',
      ],
    },
  },
  'light-curtains-and-area-sensors': {
    application: {
      zh: '适合危险区域防护、作业区进入检测、AGV 避障和区域计数。',
      en: 'Fits hazardous-area protection, work-zone entry detection, AGV obstacle avoidance, and area counting.',
    },
    inquiryHint: {
      zh: '建议先说明防护高度、光轴间距、安装位置，以及是设备防护还是移动设备避障。',
      en: 'Start with protection height, beam spacing, mounting position, and whether the use case is machine guarding or mobile obstacle avoidance.',
    },
    highlights: {
      zh: [
        '覆盖光幕、区域检测与激光扫描三类安全防护路径。',
        '适合先判断现场安全范围、检测距离和输出联锁方式。',
        '后续可继续补安全等级、控制器接线和支架配置。',
      ],
      en: [
        'Covers light curtains, area sensing, and laser scanning in one safety lane.',
        'Helps confirm safety coverage, detection distance, and interlock output early.',
        'Can later be expanded with safety level, controller wiring, and bracket details.',
      ],
    },
  },
  'safety-door-lock-switches': {
    application: {
      zh: '适合自动化设备防护门锁定、门位状态监控和人员进入互锁场景。',
      en: 'Fits protective-door locking, door-status monitoring, and personnel entry interlock scenarios on automation equipment.',
    },
    inquiryHint: {
      zh: '沟通时优先说明门型结构、锁定力需求、复位方式和安全回路架构。',
      en: 'Clarify door structure, required locking force, reset method, and safety-circuit architecture first.',
    },
    highlights: {
      zh: [
        '适合先区分标准门锁、小型门开关与高强度系列门锁。',
        '便于快速比较锁定力、安装方向和编码方式。',
        '后续可继续补钥匙结构、诊断信号和接线图。',
      ],
      en: [
        'Helps separate standard locks, compact switches, and higher-strength lock families early.',
        'Makes it easy to compare holding force, mounting direction, and coding method.',
        'Can later be extended with actuator style, diagnostics, and wiring drawings.',
      ],
    },
  },
  'safety-relay-and-non-contact-switches': {
    application: {
      zh: '适合安全回路切断、门位非接触检测、门磁监控与状态可视化。',
      en: 'Fits safety-circuit shutdown, non-contact door detection, magnetic door monitoring, and status visualization.',
    },
    inquiryHint: {
      zh: '建议先说明所需安全功能、回路数量、门数规模，以及是否需要串联诊断。',
      en: 'Start with required safety function, number of circuits, number of doors, and whether serial diagnostics are needed.',
    },
    highlights: {
      zh: [
        '把安全继电器、非接触门开关和门磁检测分开展示，更便于选型。',
        '适合先确认是做安全回路控制，还是门位状态采集。',
        '后续可继续补控制器适配、联锁逻辑和布线方式。',
      ],
      en: [
        'Separates safety relays, non-contact door switches, and magnetic door sensing for faster selection.',
        'Helps decide whether the job centers on circuit control or door-status acquisition.',
        'Can later be refined by controller compatibility, interlock logic, and wiring method.',
      ],
    },
  },
  'laser-ranging': {
    application: {
      zh: '适合长距离测距、物流定位、料框到位检测和一般激光点位确认。',
      en: 'Fits long-range distance sensing, logistics positioning, tote arrival confirmation, and general laser spot verification.',
    },
    inquiryHint: {
      zh: '沟通时先说明检测距离、目标表面反射情况、通信接口和安装空间。',
      en: 'Clarify sensing distance, target reflectivity, communication interface, and mounting space first.',
    },
    highlights: {
      zh: [
        '把测距、通用激光和背景抑制激光并排展示，便于快速判断。',
        '适合先锁定量程、光斑、安装角度和通信方式。',
        '后续可继续补精度、重复性和固定支架方案。',
      ],
      en: [
        'Shows ranging, general laser, and background-suppression laser paths side by side.',
        'Helps lock in range, spot size, mounting angle, and communication mode early.',
        'Can later be extended with accuracy, repeatability, and mounting-bracket detail.',
      ],
    },
  },
  'tof-laser-sensors': {
    application: {
      zh: '适合中远距离高速检测、物流分拣、非标自动化和空间避障。',
      en: 'Fits mid-to-long distance high-speed sensing, logistics sorting, custom automation, and spatial obstacle avoidance.',
    },
    inquiryHint: {
      zh: '建议先说明检测频率、最大距离、输出形式，以及现场是否有强环境光干扰。',
      en: 'Start with sensing frequency, maximum range, output type, and whether strong ambient light is present.',
    },
    highlights: {
      zh: [
        '适合对 TOF 检测节拍和量程有明确要求的项目。',
        '方便先比较标准 TOF 与全金属 TOF 的安装和性能差异。',
        '后续可继续补 RS485、开关量和协议适配说明。',
      ],
      en: [
        'Works well for projects with clearer TOF tempo and range demands.',
        'Makes it easy to compare standard and full-metal TOF variants.',
        'Can later be enriched with RS485, switching, and protocol compatibility details.',
      ],
    },
  },
  'laser-displacement': {
    application: {
      zh: '适合高精度距离、厚度、轮廓与装配间隙测量场景。',
      en: 'Fits high-precision distance, thickness, contour, and assembly-gap measurement scenarios.',
    },
    inquiryHint: {
      zh: '沟通时优先说明精度要求、量程范围、目标材质和控制器接口。',
      en: 'Lead with accuracy target, range, target material, and controller interface.',
    },
    highlights: {
      zh: [
        '适合对精度、稳定性和体积都有要求的测量任务。',
        '方便快速比较微型位移与高精度位移两种路径。',
        '后续可继续细化重复精度、采样率和模拟量或总线输出。',
      ],
      en: [
        'Fits measurement tasks that demand accuracy, stability, and compact size together.',
        'Makes it easy to compare micro and high-precision displacement paths.',
        'Can later be refined by repeatability, sample rate, and analog or bus output.',
      ],
    },
  },
}

export const productFamilyKeys: ProductFamilyKey[] = [
  'industrial-sensors',
  'safety-protection-sensors',
  'laser-ranging-sensors',
  'linear-guides-and-modules',
  'pneumatic-components',
]

export function getProductTaxonomy(locale: Locale) {
  return productTaxonomyMap[locale]
}

export function normalizeProductFamilyKey(
  value?: string | null,
): ProductFamilyKey | null {
  if (!value) {
    return null
  }

  return productFamilyKeys.includes(value as ProductFamilyKey)
    ? (value as ProductFamilyKey)
    : null
}

export function getProductFamily(locale: Locale, key: ProductFamilyKey) {
  return getProductTaxonomy(locale).categories.find((category) => category.key === key)
}

export function getProductFamilyDisplaySummary(
  locale: Locale,
  family: ProductFamily,
) {
  return productFamilyDisplayCopyMap[family.key]?.summary[locale] ?? family.summary
}

export function getProductFamilyDisplayUseCase(
  locale: Locale,
  family: ProductFamily,
) {
  return productFamilyDisplayCopyMap[family.key]?.useCase[locale] ?? family.useCase
}

export function getProductGroupDisplaySummary(
  locale: Locale,
  group: ProductFamily['groups'][number],
) {
  return projectLineDisplayCopyMap[group.slug]?.summary[locale] ?? group.summary
}

export function buildProductFamilyPath(locale: Locale, key: ProductFamilyKey) {
  return `${buildLocalePath(locale, 'products')}/${key}`
}

export function getProductGroup(
  locale: Locale,
  familyKey: ProductFamilyKey,
  slug: string,
) {
  return getProductFamily(locale, familyKey)?.groups.find((group) => group.slug === slug)
}

export function normalizeProductGroupSlug(
  locale: Locale,
  familyKey: ProductFamilyKey,
  value?: string | null,
) {
  if (!value) {
    return null
  }

  const family = getProductFamily(locale, familyKey)
  return family?.groups.some((group) => group.slug === value) ? value : null
}

export function buildProductGroupPath(
  locale: Locale,
  familyKey: ProductFamilyKey,
  slug: string,
) {
  return `${buildProductFamilyPath(locale, familyKey)}/${slug}`
}

export function getIndustrialSensorFamily(locale: Locale) {
  return getProductFamily(locale, 'industrial-sensors')
}

export function normalizeIndustrialSensorGroupSlug(
  locale: Locale,
  value?: string | null,
) {
  return normalizeProductGroupSlug(locale, 'industrial-sensors', value)
}

export function getIndustrialSensorGroup(locale: Locale, slug: string) {
  return getProductGroup(locale, 'industrial-sensors', slug)
}

export function buildIndustrialSensorGroupPath(locale: Locale, slug: string) {
  return buildProductGroupPath(locale, 'industrial-sensors', slug)
}

function buildFiberSensorProducts(locale: Locale, status: string) {
  return fiberSensorVisuals.map((item) => ({
    id: item.id,
    title: item.title[locale],
    summary: item.summary[locale],
    highlights: item.highlights[locale],
    focus: item.application[locale],
    inquiryHint: item.inquiryHint[locale],
    status,
    seriesCode: item.seriesCode[locale],
    application: item.application[locale],
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt[locale],
    sourceUrl: item.sourceUrl,
  }))
}

function buildVisualSummary(
  locale: Locale,
  item: FiberSensorVisual | ProductGroupReferenceVisual,
  groupName: string,
) {
  if (locale === 'zh') {
    return `${item.title.zh} 作为 ${groupName} 下的代表系列，适合先确认安装空间、检测节拍和控制接口。`
  }

  return `${item.title.en} acts as a representative series inside ${groupName}, helping teams confirm mounting space, sensing tempo, and controller interface first.`
}

function buildReferenceProducts(
  locale: Locale,
  status: string,
  family: ProductFamily,
  groupSlug: string,
) {
  const group = getProductGroup(locale, family.key, groupSlug)
  const visuals = groupReferenceVisuals[groupSlug]
  const copy = groupCopyMap[groupSlug]

  if (!group || !visuals || visuals.length === 0 || !copy) {
    return []
  }

  return visuals.map((item) => ({
    id: item.id,
    title: item.title[locale],
    summary: buildVisualSummary(locale, item, group.name),
    highlights: copy.highlights[locale],
    focus: copy.application[locale] || family.useCase,
    inquiryHint: copy.inquiryHint[locale],
    status,
    seriesCode: item.seriesCode[locale],
    application: copy.application[locale],
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt[locale],
    sourceUrl: item.sourceUrl,
  }))
}

function buildProjectLineSummary(
  locale: Locale,
  series: string,
  groupName: string,
) {
  if (locale === 'zh') {
    return `${series} 作为 ${groupName} 的代表系列展示，便于在项目初步阶段先确认结构方向、安装空间与配套接口。`
  }

  return `${series} is presented as a representative series within ${groupName}, making it easier to confirm structure direction, installation space, and interface fit during early project review.`
}

function buildProjectLineProducts(
  locale: Locale,
  status: string,
  family: ProductFamily,
  groupSlug: string,
) {
  const group = getProductGroup(locale, family.key, groupSlug)
  const visual = projectLineVisuals[groupSlug]
  const copy = projectLineDisplayCopyMap[groupSlug]

  if (!group || !visual || !copy) {
    return []
  }

  return group.series.map((series, index) => ({
    id: `${group.slug}-${index + 1}`,
    title: series,
    summary: buildProjectLineSummary(locale, series, group.name),
    highlights: copy.highlights[locale],
    focus: copy.application[locale] || family.useCase,
    inquiryHint: copy.inquiryHint[locale],
    status,
    seriesCode: series,
    application: copy.application[locale],
    imageSrc: visual.imageSrc,
    imageAlt:
      locale === 'zh'
        ? `${series} - ${visual.imageAlt.zh}`
        : `${series} - ${visual.imageAlt.en}`,
  }))
}

export function buildRepresentativeProducts(
  locale: Locale,
  familyKey: ProductFamilyKey,
  groupSlug: string,
): RepresentativeProduct[] {
  const taxonomy = getProductTaxonomy(locale)
  const family = getProductFamily(locale, familyKey)
  const group = getProductGroup(locale, familyKey, groupSlug)

  if (!taxonomy || !family || !group) {
    return []
  }

  if (familyKey === 'industrial-sensors' && groupSlug === 'fiber-sensors') {
    return buildFiberSensorProducts(locale, taxonomy.listingReadyLabel)
  }

  const referenceProducts = buildReferenceProducts(
    locale,
    taxonomy.listingReadyLabel,
    family,
    groupSlug,
  )

  if (referenceProducts.length > 0) {
    return referenceProducts
  }

  const projectLineProducts = buildProjectLineProducts(
    locale,
    taxonomy.listingReadyLabel,
    family,
    groupSlug,
  )

  if (projectLineProducts.length > 0) {
    return projectLineProducts
  }

  return group.series.map((series, index) => {
    const order = index + 1

    if (locale === 'zh') {
      return {
        id: `${group.slug}-${order}`,
        title: series,
        summary: `${series} 作为 ${group.name} 下的代表系列，适合先做选型沟通、安装空间判断和接口确认。`,
        highlights: [
          `聚焦 ${group.name} 的典型安装与检测节奏。`,
          `延续“${family.useCase}”这条应用主线。`,
          '后续可继续补型号、参数、图片和下载资料。',
        ],
        focus: family.useCase,
        inquiryHint: '沟通时可先说明检测对象、安装位置和现有控制接口。',
        status: taxonomy.listingReadyLabel,
      }
    }

    return {
      id: `${group.slug}-${order}`,
      title: series,
      summary: `${series} is treated as a representative series inside ${group.name}, ready for early selection discussions, mounting checks, and interface alignment.`,
      highlights: [
        `Focused on the core ${group.name.toLowerCase()} deployment path.`,
        `Stays aligned with ${family.useCase.toLowerCase()}.`,
        'Ready for later model, spec, image, and download enrichment.',
      ],
      focus: family.useCase,
      inquiryHint:
        'Start the discussion with the target object, mounting position, and current control interface.',
      status: taxonomy.listingReadyLabel,
    }
  })
}
