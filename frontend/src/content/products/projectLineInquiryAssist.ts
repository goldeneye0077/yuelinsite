import type { Locale } from '../../i18n/locales'

type InquiryAssistField = {
  label: Record<Locale, string>
  detail: Record<Locale, string>
}

type InquiryAssistSeed = {
  specSummary: Record<Locale, string>
  templateIntro: Record<Locale, string>
  templateClosing: Record<Locale, string>
  fields: InquiryAssistField[]
}

const inquiryAssistSeeds: Record<string, InquiryAssistSeed> = {
  'linear-guides': {
    specSummary: {
      zh: '建议先把行程、负载、精度和安装环境整理成一页规格备注，再进入询盘沟通。',
      en: 'Collect the stroke, load, accuracy, and mounting environment into a short spec note before sending the inquiry.',
    },
    templateIntro: {
      zh: '您好，我们正在评估线性滑轨方案，项目情况如下：',
      en: 'Hello, we are evaluating a linear guide solution for the following project:',
    },
    templateClosing: {
      zh: '请结合以上信息，推荐适合的系列、规格和安装建议。',
      en: 'Please recommend the suitable series, size, and installation suggestions based on the above.',
    },
    fields: [
      {
        label: {
          zh: '行程与导轨总长',
          en: 'Travel and overall rail length',
        },
        detail: {
          zh: '说明有效行程、导轨总长和预留安装区间。',
          en: 'State the required stroke, overall rail length, and the mounting envelope available.',
        },
      },
      {
        label: {
          zh: '负载重量与重心',
          en: 'Payload and center of gravity',
        },
        detail: {
          zh: '补充工件重量、偏载情况，以及是否存在悬臂安装。',
          en: 'Include payload, offset load conditions, and whether there is any cantilever mounting.',
        },
      },
      {
        label: {
          zh: '定位精度与重复性',
          en: 'Accuracy and repeatability',
        },
        detail: {
          zh: '如果有精度要求，建议同时写明允许偏差和节拍。',
          en: 'If accuracy matters, list the acceptable deviation and the cycle tempo together.',
        },
      },
      {
        label: {
          zh: '安装方向与防护环境',
          en: 'Mounting direction and environment',
        },
        detail: {
          zh: '标明水平、垂直或侧装，并说明粉尘、油污、静音等要求。',
          en: 'Clarify whether the rail is horizontal, vertical, or side-mounted and note dust, oil, or low-noise requirements.',
        },
      },
    ],
  },
  'slide-modules': {
    specSummary: {
      zh: '如果有现有设备图或模组安装位置，建议在第一轮询盘中一起提交。',
      en: 'If you have a current machine drawing or module mounting position, include it in the first inquiry round.',
    },
    templateIntro: {
      zh: '您好，我们在评估滑台模组，项目背景如下：',
      en: 'Hello, we are evaluating a slide module for the following project:',
    },
    templateClosing: {
      zh: '请推荐适合的模组结构、规格和安装建议。',
      en: 'Please recommend the suitable module structure, size, and installation advice.',
    },
    fields: [
      {
        label: {
          zh: '有效行程与节拍',
          en: 'Effective stroke and cycle time',
        },
        detail: {
          zh: '说明每次往返的有效行程、单循环时间和目标速度。',
          en: 'State the working stroke, one full cycle time, and the target speed.',
        },
      },
      {
        label: {
          zh: '负载与偏载',
          en: 'Load and offset load',
        },
        detail: {
          zh: '补充负载重量、重心位置以及是否存在偏心安装。',
          en: 'Include payload, center of gravity, and whether the module is offset-loaded.',
        },
      },
      {
        label: {
          zh: '电机安装与控制方式',
          en: 'Motor mounting and control method',
        },
        detail: {
          zh: '说明电机方向、控制方式和感应器需求。',
          en: 'Clarify motor orientation, control method, and sensor requirement.',
        },
      },
      {
        label: {
          zh: '防护与拖链需求',
          en: 'Protection and cable-chain needs',
        },
        detail: {
          zh: '标明是否需要防护罩、拖链或防尘设计。',
          en: 'Note whether protective covers, cable chain, or dust protection are required.',
        },
      },
    ],
  },
  'ball-screw-modules': {
    specSummary: {
      zh: '如果是垂直安装、压装或高刚性工位，建议在询盘开头就说明。',
      en: 'If the axis is vertical, press-fit related, or needs stronger rigidity, say so at the very start.',
    },
    templateIntro: {
      zh: '您好，我们正在评估丝杆模组，项目需求如下：',
      en: 'Hello, we are evaluating a ball screw module for the following requirement:',
    },
    templateClosing: {
      zh: '请推荐适合的丝杆模组系列、导程和驱动配置。',
      en: 'Please recommend the suitable screw module series, lead, and drive configuration.',
    },
    fields: [
      {
        label: {
          zh: '定位精度与重复性',
          en: 'Positioning accuracy and repeatability',
        },
        detail: {
          zh: '说明目标精度、允许偏差和重复定位要求。',
          en: 'State the target accuracy, allowable deviation, and repeat-positioning requirement.',
        },
      },
      {
        label: {
          zh: '推力与负载',
          en: 'Thrust and payload',
        },
        detail: {
          zh: '补充推力需求、负载重量以及是否存在外部导向。',
          en: 'Include required thrust, payload, and whether external guidance exists.',
        },
      },
      {
        label: {
          zh: '速度与工作频率',
          en: 'Speed and working frequency',
        },
        detail: {
          zh: '写明移动速度、启停频率和单班次工作时长。',
          en: 'List moving speed, start-stop frequency, and working duration per shift.',
        },
      },
      {
        label: {
          zh: '安装方向与空间',
          en: 'Mounting direction and envelope',
        },
        detail: {
          zh: '说明水平、垂直或倾斜安装，以及电机和联轴器布置空间。',
          en: 'Clarify horizontal, vertical, or inclined mounting and the motor-coupling envelope available.',
        },
      },
    ],
  },
  'belt-driven-modules': {
    specSummary: {
      zh: '如果是门型结构或双轴联动，建议把整体结构关系一并写明。',
      en: 'If the setup is gantry style or dual-axis linked, include the full structure relationship too.',
    },
    templateIntro: {
      zh: '您好，我们在评估皮带模组方案，项目情况如下：',
      en: 'Hello, we are evaluating a belt-driven module for the following project:',
    },
    templateClosing: {
      zh: '请推荐适合的皮带模组系列、结构方式和驱动建议。',
      en: 'Please recommend the suitable belt module series, structure, and drive suggestion.',
    },
    fields: [
      {
        label: {
          zh: '总行程与节拍',
          en: 'Total stroke and cycle',
        },
        detail: {
          zh: '说明有效行程、加减速要求和目标节拍。',
          en: 'State the effective stroke, acceleration-deceleration expectation, and target cycle.',
        },
      },
      {
        label: {
          zh: '最高速度与负载',
          en: 'Top speed and load',
        },
        detail: {
          zh: '补充最高速度、负载重量和重心位置。',
          en: 'Include top speed, payload, and the load center of gravity.',
        },
      },
      {
        label: {
          zh: '同步与联动',
          en: 'Synchronization and linkage',
        },
        detail: {
          zh: '如需双轴同步或门型结构，请一并说明。',
          en: 'If dual-axis sync or gantry-style linkage is required, mention it explicitly.',
        },
      },
      {
        label: {
          zh: '支撑与拖链布局',
          en: 'Support and cable-chain layout',
        },
        detail: {
          zh: '标明支撑方式、拖链位置和检修空间要求。',
          en: 'Note the support method, cable-chain position, and maintenance clearance needed.',
        },
      },
    ],
  },
  'positioning-stages': {
    specSummary: {
      zh: '如果和视觉、治具或多轴机构联动，也建议把系统关系一起说明。',
      en: 'If the stage links with vision, fixtures, or a multi-axis system, include that system context too.',
    },
    templateIntro: {
      zh: '您好，我们在评估定位平台方案，需求如下：',
      en: 'Hello, we are evaluating a positioning stage for the following requirement:',
    },
    templateClosing: {
      zh: '请推荐适合的定位平台结构、驱动方式和控制建议。',
      en: 'Please recommend the suitable stage structure, drive method, and control advice.',
    },
    fields: [
      {
        label: {
          zh: '轴数与行程组合',
          en: 'Axis count and travel combination',
        },
        detail: {
          zh: '说明单轴、双轴或多轴平台，以及各轴目标行程。',
          en: 'State whether it is a single-axis, dual-axis, or multi-axis stage and list the travel of each axis.',
        },
      },
      {
        label: {
          zh: '分辨率与精度要求',
          en: 'Resolution and accuracy target',
        },
        detail: {
          zh: '补充分辨率、重复性和定位偏差要求。',
          en: 'Include required resolution, repeatability, and positioning tolerance.',
        },
      },
      {
        label: {
          zh: '台面尺寸与负载',
          en: 'Table size and payload',
        },
        detail: {
          zh: '说明台面尺寸、工装重量和上部机构关系。',
          en: 'Share the table size, fixture weight, and relationship to the upper assembly.',
        },
      },
      {
        label: {
          zh: '控制与传感配合',
          en: 'Control and sensing integration',
        },
        detail: {
          zh: '标明是否需要视觉校正、原点、限位或外部传感器联动。',
          en: 'Clarify whether vision correction, homing, limits, or external sensor linkage is required.',
        },
      },
    ],
  },
  cylinders: {
    specSummary: {
      zh: '如果已有设备图或现用气缸型号，也建议在第一轮沟通里一并提供。',
      en: 'If you have a machine drawing or current cylinder model, include that in the first round as well.',
    },
    templateIntro: {
      zh: '您好，我们正在评估气缸方案，需求如下：',
      en: 'Hello, we are evaluating a cylinder solution for the following requirement:',
    },
    templateClosing: {
      zh: '请推荐适合的气缸系列、附件和安装建议。',
      en: 'Please recommend the suitable cylinder series, accessories, and installation advice.',
    },
    fields: [
      {
        label: {
          zh: '缸径与行程',
          en: 'Bore and stroke',
        },
        detail: {
          zh: '说明目标缸径、有效行程和动作频次。',
          en: 'State the target bore size, effective stroke, and actuation frequency.',
        },
      },
      {
        label: {
          zh: '安装方式与空间',
          en: 'Mounting style and space',
        },
        detail: {
          zh: '说明法兰、耳环、脚座等安装方式，以及周边空间限制。',
          en: 'Clarify flange, clevis, foot-mount, or other mounting style and the surrounding space limits.',
        },
      },
      {
        label: {
          zh: '工作压力与负载',
          en: 'Working pressure and load',
        },
        detail: {
          zh: '补充使用压力、推拉负载和速度要求。',
          en: 'Include working pressure, push-pull load, and speed expectation.',
        },
      },
      {
        label: {
          zh: '感应器与缓冲要求',
          en: 'Sensor and cushioning needs',
        },
        detail: {
          zh: '标明是否需要磁性开关、缓冲结构或防尘设计。',
          en: 'Note whether magnetic switches, cushioning, or dust protection are required.',
        },
      },
    ],
  },
  'solenoid-valves': {
    specSummary: {
      zh: '如果计划做阀岛或集中配气，建议在第一轮询盘中直接说明。',
      en: 'If the design uses manifolds or centralized air supply, say so in the first inquiry round.',
    },
    templateIntro: {
      zh: '您好，我们正在评估电磁阀方案，需求如下：',
      en: 'Hello, we are evaluating a solenoid valve solution for the following requirement:',
    },
    templateClosing: {
      zh: '请推荐适合的电磁阀系列、安装方式和替换建议。',
      en: 'Please recommend the suitable valve series, mounting method, and replacement advice.',
    },
    fields: [
      {
        label: {
          zh: '阀位机能',
          en: 'Valve function type',
        },
        detail: {
          zh: '说明需要二位五通、三位五通或其他机能形式。',
          en: 'Clarify whether the valve should be 5/2, 5/3, or another function type.',
        },
      },
      {
        label: {
          zh: '接口口径与流量',
          en: 'Port size and flow',
        },
        detail: {
          zh: '补充管径、接口口径和预期流量要求。',
          en: 'Include tube size, port specification, and the expected flow demand.',
        },
      },
      {
        label: {
          zh: '电压与控制',
          en: 'Voltage and control',
        },
        detail: {
          zh: '说明线圈电压、控制方式和接线条件。',
          en: 'State the coil voltage, control method, and wiring conditions.',
        },
      },
      {
        label: {
          zh: '安装与维护空间',
          en: 'Mounting and service space',
        },
        detail: {
          zh: '标明独立安装、底板安装或阀岛集中安装方式。',
          en: 'Clarify whether the valve is standalone, sub-base mounted, or manifold mounted.',
        },
      },
    ],
  },
  'air-preparation': {
    specSummary: {
      zh: '如果已有空压系统参数或柜内空间图，建议在询盘时一并提供。',
      en: 'If you already have compressor-system data or cabinet dimensions, include them with the inquiry.',
    },
    templateIntro: {
      zh: '您好，我们正在评估气源处理方案，需求如下：',
      en: 'Hello, we are evaluating an air preparation solution for the following requirement:',
    },
    templateClosing: {
      zh: '请推荐适合的气源处理组合和安装建议。',
      en: 'Please recommend the suitable air preparation combination and installation advice.',
    },
    fields: [
      {
        label: {
          zh: '进气压力与接口',
          en: 'Inlet pressure and interface',
        },
        detail: {
          zh: '说明进气压力范围、接口规格和安装位置。',
          en: 'State the inlet pressure range, interface specification, and mounting position.',
        },
      },
      {
        label: {
          zh: '过滤与调压要求',
          en: 'Filtration and regulation needs',
        },
        detail: {
          zh: '补充过滤精度、目标输出压力和是否需要润滑。',
          en: 'Include filtration accuracy, target outlet pressure, and whether lubrication is required.',
        },
      },
      {
        label: {
          zh: '维护频率与排水',
          en: 'Maintenance interval and draining',
        },
        detail: {
          zh: '说明维护节奏，以及是否需要自动排水或排污。',
          en: 'Clarify service interval and whether automatic draining or purge is needed.',
        },
      },
      {
        label: {
          zh: '柜内空间与安装方式',
          en: 'Cabinet space and mounting method',
        },
        detail: {
          zh: '标明柜内预留空间、安装方向和检修空间。',
          en: 'Note the available cabinet space, mounting direction, and service clearance.',
        },
      },
    ],
  },
  'fittings-and-tubing': {
    specSummary: {
      zh: '如有现用接头照片或现场布管示意，建议在询盘里一起发送。',
      en: 'If you have photos of the current fittings or a routing sketch, include them in the inquiry.',
    },
    templateIntro: {
      zh: '您好，我们正在评估接头与管件方案，需求如下：',
      en: 'Hello, we are evaluating fittings and tubing for the following requirement:',
    },
    templateClosing: {
      zh: '请推荐适合的接头、管材和标准化配管建议。',
      en: 'Please recommend the suitable fittings, tubing, and standardized routing suggestions.',
    },
    fields: [
      {
        label: {
          zh: '管径与螺纹规格',
          en: 'Tube size and thread spec',
        },
        detail: {
          zh: '说明管外径、螺纹规格和连接端形式。',
          en: 'State the tube outer diameter, thread specification, and connection-end type.',
        },
      },
      {
        label: {
          zh: '布管方向与空间',
          en: 'Routing direction and space',
        },
        detail: {
          zh: '补充直通、弯头、三通或分流需求，以及转角空间。',
          en: 'Include whether straight, elbow, tee, or branch fitting is needed and the turning space available.',
        },
      },
      {
        label: {
          zh: '管材要求',
          en: 'Tubing material requirement',
        },
        detail: {
          zh: '说明是否需要耐油、耐弯折、耐磨或阻燃管材。',
          en: 'Clarify whether oil-resistant, flex-rated, wear-resistant, or flame-retardant tubing is required.',
        },
      },
      {
        label: {
          zh: '维护与替换便利性',
          en: 'Service and replacement convenience',
        },
        detail: {
          zh: '标明是否需要快速拆装、颜色区分或长度统一管理。',
          en: 'Note whether quick replacement, color coding, or standardized cut lengths are required.',
        },
      },
    ],
  },
  'vacuum-components': {
    specSummary: {
      zh: '如果已有吸盘位置示意、工件照片或节拍要求，建议在第一轮询盘里一并说明。',
      en: 'If you already have a cup layout sketch, workpiece photo, or cycle target, include them in the first inquiry round.',
    },
    templateIntro: {
      zh: '您好，我们正在评估真空元件方案，需求如下：',
      en: 'Hello, we are evaluating vacuum components for the following requirement:',
    },
    templateClosing: {
      zh: '请推荐适合的真空发生器、吸盘和监测配置。',
      en: 'Please recommend the suitable ejector, suction cup, and monitoring setup.',
    },
    fields: [
      {
        label: {
          zh: '工件材质与表面状态',
          en: 'Workpiece material and surface condition',
        },
        detail: {
          zh: '说明纸箱、金属、玻璃或片材等材质，以及表面平整度。',
          en: 'State whether the workpiece is carton, metal, glass, sheet material, and describe its surface flatness.',
        },
      },
      {
        label: {
          zh: '吸附面积与重量',
          en: 'Suction area and weight',
        },
        detail: {
          zh: '补充可吸附面积、工件重量和取放姿态。',
          en: 'Include the available suction area, workpiece weight, and pickup orientation.',
        },
      },
      {
        label: {
          zh: '节拍与真空源方案',
          en: 'Cycle time and vacuum-source strategy',
        },
        detail: {
          zh: '说明节拍要求，以及偏向集中真空还是分散式真空发生器。',
          en: 'Clarify the cycle time and whether the design prefers centralized vacuum or distributed ejectors.',
        },
      },
      {
        label: {
          zh: '过滤与监测需求',
          en: 'Filtration and monitoring needs',
        },
        detail: {
          zh: '标明是否需要过滤器、真空开关或报警联动。',
          en: 'Note whether filters, vacuum switches, or alarm linkage are required.',
        },
      },
    ],
  },
}

export function getProjectLineInquiryAssist(
  locale: Locale,
  groupSlug: string,
  groupName: string,
) {
  const seed = inquiryAssistSeeds[groupSlug]

  if (!seed) {
    return null
  }

  return {
    sectionEyebrow: locale === 'zh' ? '询盘辅助' : 'Inquiry support',
    sectionTitle:
      locale === 'zh'
        ? `先把 ${groupName} 的关键规格准备清楚`
        : `Prepare the key specs for ${groupName} first`,
    sectionSummary:
      locale === 'zh'
        ? '这一层不是正式参数表，而是帮助客户和销售在第一轮沟通里快速对齐关键信息，减少来回确认。'
        : 'This is not a full specification sheet yet. It helps customers and sales align the key inputs in the first conversation and reduce back-and-forth.',
    specTitle: locale === 'zh' ? '建议先准备的规格信息' : 'Specs to prepare first',
    specSummary: seed.specSummary[locale],
    specFields: seed.fields.map((field) => ({
      label: field.label[locale],
      detail: field.detail[locale],
    })),
    inquiryCtaLabel:
      locale === 'zh' ? '按规格表发起询盘' : 'Start inquiry with spec sheet',
    templateTitle: locale === 'zh' ? '推荐提问模板' : 'Recommended inquiry template',
    templateSummary:
      locale === 'zh'
        ? '可直接复制到联系页或发给销售，再按你的项目补充参数。'
        : 'Copy this into the contact form or send it to sales, then replace the placeholders with your project details.',
    templateLines: [
      seed.templateIntro[locale],
      ...seed.fields.map((field, index) => `${index + 1}. ${field.label[locale]}:`),
      seed.templateClosing[locale],
    ],
    copyLabel: locale === 'zh' ? '复制提问模板' : 'Copy template',
    copySuccessTitle: locale === 'zh' ? '提问模板已复制' : 'Template copied',
    copySuccessDescription:
      locale === 'zh'
        ? '可以直接粘贴到询盘说明里，再补充你的项目参数。'
        : 'You can paste it into the inquiry message and add the project details next.',
    copyErrorTitle:
      locale === 'zh' ? '复制失败，请手动复制' : 'Copy failed, please copy manually',
  }
}
