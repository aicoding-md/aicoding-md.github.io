window.SKILLS = [
  {
    slug: "extreme-performance-rendering",
    title: "极致性能工程：120fps 渲染架构",
    level: "Expert",
    time: "2-3 周突破",
    category: "性能工程",
    summary:
      "围绕 120fps 体验目标设计渲染链路，覆盖离屏渲染、光栅化优化、GPU 加速和低端安卓机上的复杂动画稳定性。",
    overview:
      "这项 skill 不再停留在普通性能优化，而是深入到渲染架构层。核心目标是在复杂列表、富交互页面和高频动画场景下，将卡顿、掉帧和主线程抖动压到最低，形成真正可复制的性能治理方案。",
    suitableFor: [
      "负责高频互动页面、交易终端或内容流应用的前端工程师",
      "需要治理低端 Android 机型卡顿问题的客户端或 Web 团队",
      "希望把性能优化做成架构能力而不是零散技巧的人"
    ],
    outcomes: [
      "掌握离屏渲染、图层拆分和 GPU 加速的适用边界",
      "能定位长列表、复杂动画和滚动场景的掉帧根因",
      "建立可复用的高帧率渲染优化策略"
    ],
    keyPoints: [
      "合理控制重排、重绘与图层数量，避免 GPU 过度占用",
      "为长列表接入虚拟化、分片渲染和主线程调度策略",
      "使用 OffscreenCanvas、requestAnimationFrame 和合成层优化复杂动画",
      "针对低端设备建立机型分级和降级渲染方案"
    ],
    projects: [
      "为复杂瀑布流或行情页设计 120fps 渲染基线",
      "重构一个掉帧严重的动画首页并输出优化对比报告",
      "搭建低端机专项性能巡检看板"
    ],
    steps: [
      "先用真实设备复现问题，再决定是布局瓶颈还是绘制瓶颈",
      "优先优化主线程最重的链路，而不是一次性改所有组件",
      "对高性能方案预留降级路径，保证不同机型体验稳定"
    ],
    snippet: `const frameBudget = 1000 / 120;\n\nfunction scheduleChunk(renderChunk) {\n  requestAnimationFrame((start) => {\n    while (performance.now() - start < frameBudget) {\n      if (!renderChunk()) break;\n    }\n  });\n}`
  },
  {
    slug: "tti-wasm-dual-end",
    title: "极致性能工程：TTI、Wasm 与双端性能对齐",
    level: "Expert",
    time: "2 周实战",
    category: "性能工程",
    summary:
      "从 TTI 深潜到 Wasm 落地，再到 Flutter/RN 与 Native 的通信损耗治理，建立完整的跨端性能优化认知。",
    overview:
      "高级性能工程不仅要看页面快不快，还要看什么时候真正可交互、计算密集逻辑是否该下沉，以及跨端桥接是否成为瓶颈。这个 skill 把 Web、Hybrid 和 Native 之间的性能问题放在同一套分析框架里。",
    suitableFor: [
      "在做 Hybrid、Flutter、RN 或多端容器的工程师",
      "需要把复杂计算迁移到更高性能运行时的团队",
      "想系统掌握 TTI 诊断与跨端通信优化的人"
    ],
    outcomes: [
      "能够用 DevTools 与 Systrace 定位主线程阻塞",
      "知道哪些逻辑适合下沉到 Rust 或 C++ 编译的 Wasm",
      "理解 Bridge、JSI 与底层渲染通道的性能差异"
    ],
    keyPoints: [
      "围绕 TTI 诊断脚本执行、资源竞争和长任务阻塞",
      "将加解密、图像处理、复杂图表计算迁移到 Wasm 模块",
      "通过行为预测做 Code Splitting v2 与智能预加载",
      "分析 RN Bridge、Flutter Channel 与 JSI 的调用损耗"
    ],
    projects: [
      "为图像压缩或加密逻辑做一版 Wasm 改造",
      "给关键路径接入用户行为预测预加载策略",
      "梳理 RN 或 Flutter 页面与 Native 通信的耗时链路"
    ],
    steps: [
      "先证明瓶颈确实在 JS 主线程或桥接层，再决定技术方案",
      "Wasm 只处理高计算密度逻辑，避免滥用增加复杂度",
      "跨端性能优化一定要结合埋点和真机剖析结果"
    ],
    snippet: `const loadChartEngine = async () => {\n  const mod = await import("./chart-engine.wasm");\n  return mod.computeSeries(inputData);\n};`
  },
  {
    slug: "ai-native-context-engineering",
    title: "AI 原生研发：Context Engineering 与私有知识库",
    level: "Advanced",
    time: "1-2 周落地",
    category: "AI-Native",
    summary:
      "围绕 RAG 构建高质量私有代码知识库，让 AI 真正理解项目约束、配置规范和历史实现，而不是只会生成表面代码。",
    overview:
      "AI 研发提效的关键不是模型本身，而是给模型什么上下文。这个 skill 聚焦于代码切片、文档清洗、知识召回和 Prompt 约束设计，让 AI 输出更稳定、更贴近团队真实工程环境。",
    suitableFor: [
      "正在做企业私有 AI 助手或代码问答系统的团队",
      "想让 AI 能理解项目规范、组件库和业务约束的工程师",
      "负责搭建研发效能平台的人"
    ],
    outcomes: [
      "会设计代码与文档的切片、索引和召回策略",
      "能为 AI 提供结构化上下文与清晰的边界约束",
      "提升 AI 生成配置、代码和解释的可用率"
    ],
    keyPoints: [
      "建立面向代码库的 chunking、embedding 和 metadata 体系",
      "把组件 API、规范文档、变更历史统一纳入检索上下文",
      "为不同任务设计不同的系统提示词与安全边界",
      "评估召回质量、答案命中率和错误类型分布"
    ],
    projects: [
      "为团队组件库建立一套 RAG 检索知识底座",
      "让 AI 能基于现有模板生成可落地的页面配置",
      "为配置生成场景设计命中率与可用率评估集"
    ],
    steps: [
      "优先补齐高价值知识源，再谈复杂 Agent 编排",
      "让召回上下文尽量短而准，不要无节制塞文档",
      "把评估集和失败案例沉淀成持续优化闭环"
    ],
    snippet: `const retrievalContext = [\n  "当前模块 schema",\n  "同目录历史实现",\n  "团队代码规范",\n  "相关 API 文档"\n].join("\\n\\n");`
  },
  {
    slug: "ai-native-nlui-review",
    title: "AI 原生研发：NLUI 建模与 AI Code Review",
    level: "Advanced",
    time: "2 周进阶",
    category: "AI-Native",
    summary:
      "把自然语言交互、状态机建模与 AI Review 串起来，让复杂 B 端表单和代码审查流程从工具层进入工程化阶段。",
    overview:
      "这项 skill 关注的是把 AI 深度接入研发流程。前半部分是把复杂配置和表单通过意图识别加状态机转换成可执行结构，后半部分是将自定义 Lint 与 LLM 逻辑审查结合起来，实现更有深度的自动化 Review。",
    suitableFor: [
      "在做智能配置平台、表单生成器或业务编排平台的团队",
      "想为代码审查加入逻辑检查和规范审计的工程师",
      "需要把 AI 变成真实生产工具而不是演示功能的人"
    ],
    outcomes: [
      "能够设计意图识别到状态机转换的 NLUI 流程",
      "会编写团队定制化 Lint 规则与规则诊断提示词",
      "建立 AI Review 的召回、分析和人工兜底机制"
    ],
    keyPoints: [
      "把自然语言输入转为结构化意图和领域事件",
      "用状态机描述复杂表单、审批流和配置过程",
      "把 AST 级静态分析结果输入 LLM 做更深层逻辑审计",
      "对 AI Review 结果做分级与误报控制"
    ],
    projects: [
      "做一个自然语言配置报表或表单的原型链路",
      "编写针对团队反模式的 ESLint 自定义规则",
      "把 PR Diff、规则命中和 LLM Review 汇总到同一面板"
    ],
    steps: [
      "先把领域状态建模清楚，再接自然语言入口",
      "AI Review 要先靠规则兜底，再逐步引入 LLM 推理",
      "高风险结论必须保留人工确认环节"
    ],
    snippet: `type Intent = "create_form" | "add_rule" | "update_layout";\n\ntype Transition = {\n  intent: Intent;\n  nextState: string;\n};`
  },
  {
    slug: "dynamic-lowcode-sdui",
    title: "动态化与低代码：SDUI 高阶实践",
    level: "Architect",
    time: "2-4 周沉淀",
    category: "动态化",
    summary:
      "通过后端下发 JSON 协议驱动页面渲染，实现秒级动态发版，降低 App 审核周期和多端重复发版成本。",
    overview:
      "Server-Driven UI 的难点不在于把 JSON 渲染出来，而在于协议稳定性、灰度控制、组件能力边界和线上回滚机制。这个 skill 会帮助你建立一套真正能支撑业务迭代的动态化体系。",
    suitableFor: [
      "负责活动平台、运营投放或超级 App 动态页面的团队",
      "需要跨端快速发版和灰度试验的产品线",
      "正在做低代码页面引擎或页面配置平台的人"
    ],
    outcomes: [
      "掌握 SDUI 协议设计、版本兼容和容错策略",
      "建立动态页面的组件映射、校验和灰度体系",
      "让 App、H5、小程序共享一套可演进的描述协议"
    ],
    keyPoints: [
      "用 schema 约束 JSON 协议并支持向后兼容",
      "建立组件白名单、回滚开关和配置校验机制",
      "将埋点、权限、实验参数纳入协议层统一处理",
      "处理动态化带来的调试、监控和异常恢复问题"
    ],
    projects: [
      "设计一套运营页 JSON 协议和渲染引擎",
      "为动态页面配置增加 schema 校验与回滚面板",
      "实现一套配置灰度发布和多版本兼容策略"
    ],
    steps: [
      "先定义协议和运行时边界，再扩展组件能力",
      "动态化能力越强，越要重视观测性和兜底机制",
      "协议设计优先考虑未来兼容而不是当前省字段"
    ],
    snippet: `{\n  "type": "hero-banner",\n  "props": {\n    "title": "限时活动",\n    "image": "/assets/banner.png"\n  }\n}`
  },
  {
    slug: "dynamic-lowcode-dsl-ai",
    title: "动态化与低代码：DSL 设计与端上智能",
    level: "Architect",
    time: "2 周深化",
    category: "动态化",
    summary:
      "为业务设计可扩展 DSL，实现多端同步运行，并引入 TensorFlow.js 或 CoreML 做端上智能决策，减少无效请求。",
    overview:
      "低代码平台真正的壁垒是抽象能力。你需要设计一门能表达业务结构、交互逻辑和数据依赖的 DSL，同时思考如何让端上具备轻量预测能力，在本地直接做个性化决策和预判。",
    suitableFor: [
      "在做页面搭建、业务编排或流程配置平台的团队",
      "需要一份配置跑多个端的前端架构师",
      "希望在端上做简单预测和智能分流的人"
    ],
    outcomes: [
      "能设计兼顾表达力和可维护性的前端 DSL",
      "会做 DSL 到 H5、小程序、App 的运行时映射",
      "理解端上轻量 AI 推断的可用场景与性能约束"
    ],
    keyPoints: [
      "为 DSL 建立节点、作用域、事件和依赖表达模型",
      "通过编译或解释执行让同一配置在多端复用",
      "使用 TensorFlow.js 或 CoreML 做行为预测与资源预判",
      "用端上智能减少无效 API 请求和重复渲染"
    ],
    projects: [
      "设计一个表单搭建 DSL 并跑通 H5 与小程序",
      "为首页推荐位增加端上点击预测试验",
      "把业务规则从硬编码迁移到配置 DSL"
    ],
    steps: [
      "DSL 先解决高频共性，再处理复杂边缘案例",
      "端上 AI 适合轻量决策，不适合承担大模型能力",
      "所有智能策略都要配合回退与可观测埋点"
    ],
    snippet: `page {\n  section hero {\n    component Banner\n    visibleWhen user.isNew\n  }\n}`
  },
  {
    slug: "modern-stack-cross-platform",
    title: "现代栈与跨端架构：协议统一到 Next.js 16+",
    level: "Advanced",
    time: "2 周体系化",
    category: "现代栈",
    summary:
      "从多端统一协议、HarmonyOS Next 适配，到 Next.js 16+、Server Components、Streaming 与 Edge Functions，建立面向未来的现代技术栈能力。",
    overview:
      "现代大前端不只是会一个框架，而是能够在多端与服务端渲染之间做体系化设计。这个 skill 连接跨端协议、渲染策略、边缘计算和 SEO 性能优化，让前端从页面开发者成长为整条链路的设计者。",
    suitableFor: [
      "在做 H5、App、小程序、鸿蒙多端协同的团队",
      "需要提升首屏、SEO 和流式交付体验的 Web 工程师",
      "想建立现代全栈前端视角的人"
    ],
    outcomes: [
      "理解 UniAppX、Flutter 等跨端方案的核心原理",
      "掌握 Server Components、Streaming 和边缘计算适用场景",
      "能为多端能力建立统一协议和兼容适配层"
    ],
    keyPoints: [
      "梳理跨端能力差异并抽象统一协议层",
      "利用 Next.js 16+ 做流式渲染和边缘函数下沉",
      "优化首屏 SEO、缓存和数据获取链路",
      "为 HarmonyOS Next 这类新平台预留原生适配能力"
    ],
    projects: [
      "把一个营销站改造成支持 Streaming 的 Next.js 应用",
      "设计一套跨 H5、小程序、App 的通用协议对象",
      "梳理鸿蒙适配过程中依赖的原生能力与桥接层"
    ],
    steps: [
      "先定义协议和渲染边界，再选具体跨端框架",
      "RSC 与 Streaming 要结合缓存策略一起设计",
      "新平台适配优先打通最小闭环，避免一次铺太大"
    ],
    snippet: `export default async function Page() {\n  const data = await getDashboardData();\n  return <DashboardShell data={data} />;\n}`
  },
  {
    slug: "engineering-excellence",
    title: "质量与工程化：回放测试、FinOps 与 TS 5.x",
    level: "Architect",
    time: "2-3 周沉淀",
    category: "工程卓越",
    summary:
      "把影子流量回放、前端成本优化、Vite 深度构建治理和 TypeScript 5.x 强类型约束组合起来，形成可持续交付体系。",
    overview:
      "工程卓越的重点不只是把代码写对，更是让系统可以低风险迭代、低成本运行。这个 skill 会覆盖线上流量回放、包体积与 CDN 成本治理，以及用 TypeScript 5.x 为大型 JSON 配置提供接近零错误的开发体验。",
    suitableFor: [
      "负责中大型 B 端平台质量体系的技术负责人",
      "需要控制构建成本、流量成本和回归风险的团队",
      "想提升类型系统设计能力的高级前端工程师"
    ],
    outcomes: [
      "建立配置变更后的自动化回放验证链路",
      "会监控包体积、CDN 流量和构建成本异常",
      "能够用复杂泛型工具为 JSON 配置提供强类型保护"
    ],
    keyPoints: [
      "针对关键业务流建立影子流量回放与录制体系",
      "通过构建分析、依赖治理和缓存策略做 FinOps 优化",
      "利用 TypeScript 5.x 泛型、条件类型和 satisfies 强化约束",
      "将质量门禁前置到 CI、预发和灰度阶段"
    ],
    projects: [
      "为配置平台搭建一次流量录制与回放验证能力",
      "做一份前端包体积和 CDN 成本的治理看板",
      "为 JSON 配置 schema 生成零错误类型提示工具"
    ],
    steps: [
      "先管住最关键的线上风险，再扩展到更多业务流",
      "成本治理要持续监控，不能只做一次性瘦身",
      "类型系统设计要服务业务可维护性，而不是炫技"
    ],
    snippet: `const pageSchema = {\n  type: "table",\n  columns: ["id", "name"]\n} as const satisfies PageConfig;`
  }
];
