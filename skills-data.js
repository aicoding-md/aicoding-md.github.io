window.SKILLS = [
  {
    slug: "extreme-performance-rendering",
    title: "极致性能工程：120fps 渲染架构",
    level: "Expert",
    time: "高优先级",
    category: "性能工程",
    summary:
      "用于 AI 代理处理高帧率渲染与掉帧治理任务，聚焦离屏渲染、光栅化优化、GPU 加速和低端机复杂动画稳定性。",
    overview:
      "当任务涉及长列表卡顿、复杂动画掉帧、滚动撕裂或低端 Android 机型渲染不稳定时，触发此 skill。目标是让 AI 从渲染架构层定位瓶颈，并输出可执行的优化方案或代码修改。",
    trigger: [
      "用户明确提到掉帧、卡顿、滚动撕裂、动画不流畅",
      "问题集中在低端 Android 机型或高频交互页面",
      "任务需要从渲染链路而不是普通样式优化入手"
    ],
    inputs: [
      "目标页面或组件的代码结构与渲染方式",
      "复现步骤、设备范围、性能录屏或监控指标",
      "当前动画、列表、滚动和图层相关实现细节"
    ],
    constraints: [
      "先定位主瓶颈，再给优化建议，避免泛化罗列技巧",
      "优先采用稳定、可维护的方案，不默认引入高复杂度改造",
      "必须给出低端机降级路径和验证方式",
      "不能只以高端设备表现作为优化成功标准"
    ],
    workflow: [
      "拆解问题场景，确认设备范围、触发条件和用户感知问题",
      "判断瓶颈位于布局、绘制、脚本调度还是资源层",
      "输出分阶段优化方案，包括渲染策略、降级方案和验收指标"
    ],
    outputs: [
      "瓶颈归因说明与优先级列表",
      "具体优化建议、关键改造点或补丁代码",
      "验证方法、监控指标和风险说明"
    ],
    tools: [
      "Chrome DevTools Performance",
      "Layers / Rendering 面板",
      "虚拟列表与分片渲染策略",
      "OffscreenCanvas / requestAnimationFrame / 合成层优化"
    ],
    snippet: `const frameBudget = 1000 / 120;\n\nfunction scheduleChunk(renderChunk) {\n  requestAnimationFrame((start) => {\n    while (performance.now() - start < frameBudget) {\n      if (!renderChunk()) break;\n    }\n  });\n}`
  },
  {
    slug: "tti-wasm-dual-end",
    title: "极致性能工程：TTI、Wasm 与双端性能对齐",
    level: "Expert",
    time: "高优先级",
    category: "性能工程",
    summary:
      "用于 AI 代理处理 TTI 深潜、计算下沉和跨端 Bridge 性能问题，覆盖 DevTools/Systrace、Wasm 落地与双端性能对齐。",
    overview:
      "当用户提到页面可交互时间长、主线程被阻塞、复杂计算拖慢 UI，或 Flutter/RN 与 Native 通信耗时过高时，触发此 skill。重点是帮助 AI 判断问题属于加载、计算还是桥接损耗，并选择合适的运行时优化方案。",
    trigger: [
      "任务要求优化 TTI、首个可交互时间或主线程长任务",
      "场景涉及图像处理、加解密、图表计算等重计算逻辑",
      "项目包含 RN、Flutter、Hybrid 或 Native Bridge 通信性能问题"
    ],
    inputs: [
      "性能剖析结果、长任务记录或主线程 flame chart",
      "相关计算模块代码、加载链路与依赖结构",
      "跨端通信方式、调用频次和序列化数据规模"
    ],
    constraints: [
      "必须先证明瓶颈所在，再决定是否引入 Wasm 或 JSI",
      "Wasm 仅用于高计算密度且边界清晰的模块",
      "预加载策略需要说明收益与额外成本",
      "跨端方案必须考虑调用频率、线程模型和维护复杂度"
    ],
    workflow: [
      "拆分加载、解析、执行、计算和桥接链路，识别最重阶段",
      "判断是通过减计算、延后加载、预加载还是切换运行时解决",
      "输出技术方案、收益预期、风险和验证埋点"
    ],
    outputs: [
      "TTI 或 Bridge 损耗分析结论",
      "Wasm、预加载、通信裁剪或 JSI 方案建议",
      "性能验收指标与落地注意事项"
    ],
    tools: [
      "Chrome DevTools Performance",
      "Android Systrace / Perfetto",
      "Rust/C++ -> Wasm",
      "JSI / Bridge profiling"
    ],
    snippet: `const loadChartEngine = async () => {\n  const mod = await import("./chart-engine.wasm");\n  return mod.computeSeries(inputData);\n};`
  },
  {
    slug: "ai-native-context-engineering",
    title: "AI 原生研发：Context Engineering 与私有知识库",
    level: "Advanced",
    time: "默认启用",
    category: "AI-Native",
    summary:
      "用于 AI 代理构建和使用高质量上下文，适合 RAG、私有知识库、代码问答和配置生成等任务。",
    overview:
      "当任务要求 AI 理解私有代码库、读取规范、基于历史实现生成配置或回答项目相关问题时，触发此 skill。目标是组织可靠上下文，减少幻觉，并让输出严格贴合现有代码和约束。",
    trigger: [
      "任务依赖私有代码库、内部规范或项目历史实现",
      "用户希望 AI 先检索再作答，而不是直接生成",
      "输出需要与现有组件、配置或架构保持一致"
    ],
    inputs: [
      "相关代码目录、规范文档、接口文档或历史案例",
      "任务目标、输出格式和必须遵守的项目约束",
      "可用的检索范围、知识源优先级和可信度判断标准"
    ],
    constraints: [
      "上下文应短而准，禁止大段无差别拼接文档",
      "回答必须显式受限于检索结果和现有约束",
      "若检索不足，应说明缺口而不是凭空补全",
      "必须优先引用权威知识源和最近实现"
    ],
    workflow: [
      "识别任务依赖的知识源和权威文档",
      "设计切片、召回和上下文组织方式",
      "基于召回结果输出受约束答案，并记录失败样本"
    ],
    outputs: [
      "检索上下文设计与召回策略",
      "可复用的 Prompt 约束模板",
      "带依据的生成结果或问答输出"
    ],
    tools: [
      "RAG / embedding 检索",
      "代码切片与 metadata 标注",
      "结构化 prompt 模板",
      "评估集与失败样本回归"
    ],
    snippet: `const retrievalContext = [\n  "当前模块 schema",\n  "同目录历史实现",\n  "团队代码规范",\n  "相关 API 文档"\n].join("\\n\\n");`
  },
  {
    slug: "ai-native-nlui-review",
    title: "AI 原生研发：NLUI 建模与 AI Code Review",
    level: "Advanced",
    time: "按需触发",
    category: "AI-Native",
    summary:
      "用于 AI 代理处理自然语言配置、状态机转换和 AI Code Review 任务，适合复杂表单、配置平台与 PR 审查流程。",
    overview:
      "当任务涉及把自然语言需求转成结构化配置，或需要在静态规则之外做更深层的代码逻辑审查时，触发此 skill。它帮助 AI 把意图识别、状态机建模、自定义规则和 LLM 审查组合成稳定工作流。",
    trigger: [
      "任务要求自然语言生成表单、流程或业务配置",
      "用户希望将团队规范接入自动化 Code Review",
      "场景需要从规则审查延伸到语义与逻辑层审查"
    ],
    inputs: [
      "自然语言需求描述、领域对象和目标结构",
      "现有状态流、表单 schema 或业务规则",
      "PR diff、团队规范、自定义 lint 规则或 AST 信息"
    ],
    constraints: [
      "先定义领域意图与状态图，再处理自然语言映射",
      "规则引擎优先兜底确定性问题，LLM 负责补充语义检查",
      "高风险结论必须保留可解释依据和人工复核入口",
      "需要控制误报，避免输出不可执行的审查结论"
    ],
    workflow: [
      "将输入需求抽象为意图、事件和状态转换",
      "用规则引擎发现确定性问题，再用 LLM 做语义审查",
      "输出结构化配置或分级审查报告"
    ],
    outputs: [
      "意图模型、状态流或配置结构",
      "Lint 规则建议与 AI Review 结论",
      "按风险分级的审查结果和人工复核提示"
    ],
    tools: [
      "状态机建模",
      "AST 分析 / ESLint 自定义规则",
      "LLM Review prompt",
      "Diff 解析与风险分级"
    ],
    snippet: `type Intent = "create_form" | "add_rule" | "update_layout";\n\ntype Transition = {\n  intent: Intent;\n  nextState: string;\n};`
  },
  {
    slug: "dynamic-lowcode-sdui",
    title: "动态化与低代码：SDUI 高阶实践",
    level: "Architect",
    time: "高优先级",
    category: "动态化",
    summary:
      "用于 AI 代理处理 Server-Driven UI、协议设计和动态化发版相关任务，适合需要 JSON 驱动渲染的多端项目。",
    overview:
      "当任务要求后端下发 JSON 协议实现动态页面、缩短发版链路或解决 App 审核周期限制时，触发此 skill。重点是让 AI 从协议演进、兼容、灰度与回滚的视角设计系统，而不是只输出渲染代码。",
    trigger: [
      "任务涉及 JSON 协议渲染、动态页面或运营搭建平台",
      "用户希望通过配置变更替代频繁客户端发版",
      "项目需要处理多端共享协议、灰度和回滚"
    ],
    inputs: [
      "目标页面结构、业务组件清单和端能力边界",
      "当前协议定义、版本策略和灰度发布要求",
      "监控、回滚、权限和埋点方面的系统约束"
    ],
    constraints: [
      "协议设计优先考虑版本兼容和异常兜底",
      "组件映射必须受白名单和 schema 约束",
      "灰度、权限、实验参数应尽量在协议层统一表达",
      "必须考虑调试、监控和回滚，不可只关注渲染成功"
    ],
    workflow: [
      "明确协议边界、组件能力和运行时职责",
      "设计 schema、版本演进、灰度与回滚机制",
      "输出多端渲染映射、治理规则和风险控制建议"
    ],
    outputs: [
      "SDUI 协议草案或 schema 设计",
      "渲染层映射方案和版本兼容策略",
      "灰度、监控、回滚和异常治理方案"
    ],
    tools: [
      "JSON Schema / Zod",
      "组件注册表与白名单",
      "灰度发布机制",
      "动态化观测与回滚系统"
    ],
    snippet: `{\n  "type": "hero-banner",\n  "props": {\n    "title": "限时活动",\n    "image": "/assets/banner.png"\n  }\n}`
  },
  {
    slug: "dynamic-lowcode-dsl-ai",
    title: "动态化与低代码：DSL 设计与端上智能",
    level: "Architect",
    time: "按需触发",
    category: "动态化",
    summary:
      "用于 AI 代理设计业务 DSL、多端配置运行时和端上智能策略，适合低代码平台、流程编排和轻量预测场景。",
    overview:
      "当任务要求设计配置语言、实现一次配置多端运行，或利用 TensorFlow.js、CoreML 做轻量用户行为预测时，触发此 skill。核心目标是让 AI 输出具备表达力、可维护性和可回退机制的 DSL 与运行体系。",
    trigger: [
      "任务涉及页面 DSL、流程编排 DSL 或多端配置协议",
      "用户要求 H5、小程序、App 共用同一份配置",
      "项目希望在端上做轻量智能预测或资源预判"
    ],
    inputs: [
      "业务规则、领域模型和目标平台差异",
      "现有组件能力、运行时实现和配置格式",
      "端上智能任务目标、延迟预算和回退要求"
    ],
    constraints: [
      "DSL 优先表达高频共性，避免一开始覆盖所有边缘场景",
      "多端运行时必须清晰区分编译层、解释层和平台差异边界",
      "端上 AI 只用于轻量预测，不引入不必要的重模型复杂度",
      "所有智能决策必须可关闭、可回退、可监控"
    ],
    workflow: [
      "识别 DSL 的表达范围、目标平台和复用边界",
      "设计语法、运行模型和多端映射方式",
      "评估端上智能收益，并补充回退与观测机制"
    ],
    outputs: [
      "DSL 语法草案与运行时模型",
      "多端映射策略与平台差异处理方式",
      "端上智能接入建议、风险和监控点"
    ],
    tools: [
      "DSL AST / parser 设计",
      "编译或解释执行引擎",
      "TensorFlow.js / CoreML",
      "策略开关与观测埋点"
    ],
    snippet: `page {\n  section hero {\n    component Banner\n    visibleWhen user.isNew\n  }\n}`
  },
  {
    slug: "modern-stack-cross-platform",
    title: "现代栈与跨端架构：协议统一到 Next.js 16+",
    level: "Advanced",
    time: "默认启用",
    category: "现代栈",
    summary:
      "用于 AI 代理处理多端统一协议、HarmonyOS 适配、Next.js 16+、Server Components、Streaming 与 Edge Functions 相关任务。",
    overview:
      "当任务横跨多端协议设计、跨端框架选型、Server Components、流式渲染或边缘函数部署时，触发此 skill。目标是让 AI 输出整条链路的方案，而不是只给局部代码片段。",
    trigger: [
      "任务覆盖 H5、App、小程序、鸿蒙等多个运行端",
      "用户要求优化首屏 SEO、Streaming 或边缘渲染方案",
      "项目需要在 Next.js 现代能力与跨端架构之间做组合设计"
    ],
    inputs: [
      "目标平台列表、渲染方式和数据获取需求",
      "现有技术栈、部署环境和缓存策略",
      "平台差异、原生能力需求和 SEO 目标"
    ],
    constraints: [
      "先定义统一协议，再讨论具体框架与渲染落点",
      "Server Components、Streaming 与缓存策略必须联动设计",
      "边缘函数仅用于适合低延迟拼装的场景，不滥用",
      "新平台适配要优先打通关键闭环，避免一次性铺太大"
    ],
    workflow: [
      "识别平台范围、渲染模式和数据流",
      "设计统一协议、技术选型和部署架构",
      "补充平台差异、缓存策略和实施优先级"
    ],
    outputs: [
      "多端协议抽象和技术选型建议",
      "Next.js 16+ / RSC / Streaming / Edge 应用方案",
      "兼容风险、缓存设计和适配路径说明"
    ],
    tools: [
      "Next.js 16+",
      "Server Components / Streaming",
      "Edge Functions",
      "跨端协议抽象与平台适配层"
    ],
    snippet: `export default async function Page() {\n  const data = await getDashboardData();\n  return <DashboardShell data={data} />;\n}`
  },
  {
    slug: "engineering-excellence",
    title: "质量与工程化：回放测试、FinOps 与 TS 5.x",
    level: "Architect",
    time: "默认启用",
    category: "工程卓越",
    summary:
      "用于 AI 代理处理回放测试、FinOps、Vite 构建治理和 TypeScript 5.x 强类型约束等工程卓越任务。",
    overview:
      "当任务涉及线上复杂流程回归验证、构建与流量成本治理，或需要为大型 JSON 配置建立强类型约束时，触发此 skill。目标是让 AI 输出低风险、低成本、强约束的交付方案。",
    trigger: [
      "任务要求复杂业务流的自动化回放或回归测试",
      "用户关注包体积、CDN 流量、构建耗时或前端成本",
      "项目需要为 JSON 配置建立高强度 TypeScript 类型保护"
    ],
    inputs: [
      "关键业务流程、录制样本或线上流量特征",
      "构建产物、依赖图、CDN 指标和成本数据",
      "配置 schema、类型定义和当前类型系统痛点"
    ],
    constraints: [
      "优先治理高风险业务流和高成本来源",
      "成本治理必须结合持续监控，不能只做一次性瘦身",
      "TypeScript 设计应服务正确性与开发体验，而不是纯技术炫技",
      "所有质量门禁都应尽量前移到 CI、预发和灰度阶段"
    ],
    workflow: [
      "识别最高风险业务流、最高成本来源或最脆弱配置边界",
      "设计回放、监控、构建治理和类型约束方案",
      "输出实施优先级、门禁策略和长期治理建议"
    ],
    outputs: [
      "回放测试、成本治理或类型系统设计方案",
      "关键监控指标、自动化门禁和流程建议",
      "可执行的构建优化、类型约束或验证补丁"
    ],
    tools: [
      "影子流量录制与回放",
      "Vite 构建分析",
      "CDN / bundle 监控",
      "TypeScript 5.x 泛型与 satisfies"
    ],
    snippet: `const pageSchema = {\n  type: "table",\n  columns: ["id", "name"]\n} as const satisfies PageConfig;`
  }
];
