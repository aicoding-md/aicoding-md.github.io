export const siteMeta = {
  title: "AI Coding Skills Library",
  heroTitle: "20 个可直接落地的全栈 AI Coding Skills",
  heroCopy:
    "覆盖前端与后端工程，面向 AI 代理的代码生成、重构、排障与架构设计场景。每个 skill 都提供触发条件、执行约束、工作流和可下载的 SKILL.md 文件。"
};

export const articleDrafts = [
  {
    slug: "how-to-raise-code-output-rate-with-better-context",
    title: "如何用上下文工程提高 AI 出码率",
    category: "最佳实践",
    level: "Core",
    summary:
      "高质量上下文比更长的 prompt 更重要。把代码目录、目标文件、约束和验收标准喂对，AI 生成质量会显著提升。",
    overview:
      "出码率低的根因通常不是模型不够强，而是输入信息缺了关键上下文。最有效的改进方式，是让 AI 在写代码前就拿到正确的文件范围、现有实现、风格约束和目标输出边界。",
    body: [
      "如果你希望 AI 更稳定地写出可用代码，第一步不是换模型，而是减少它的猜测空间。很多失败的 prompt 看起来需求很完整，实际却缺少仓库路径、入口文件、约束条件和可接受的变更范围。AI 在这种情况下只能根据通用经验补全，自然更容易偏题。",
      "上下文工程的本质，是把“写代码之前需要知道什么”提前整理出来。你给它相邻模块、现有实现、命名风格和验收标准，它就会更像在一个熟悉的仓库里工作，而不是在完全陌生的空白环境里自由发挥。",
      "如果任务比较大，还可以把上下文分层：先给目录地图，再给目标文件，再给局部参考实现。这样 AI 先建立整体定位，再进入局部实现，通常能明显提高出码率，也能减少它生成和项目风格不一致的代码。"
    ],
    highlights: [
      "明确告诉 AI 当前在哪些文件里改，避免它凭空创造不存在的结构",
      "给出已有实现、相邻模块和命名风格，比抽象描述更有效",
      "把验收标准前置，能显著减少返工轮次"
    ],
    checklist: [
      "提供目标文件路径、入口文件和相关模块",
      "给出当前栈、框架版本和约束条件",
      "明确是否允许重构、是否需要测试、是否必须兼容旧行为",
      "说明期望输出是补丁、完整文件、思路还是可运行实现"
    ],
    mistakes: [
      "只说“帮我优化一下”，没有提供任何现有代码",
      "同时提很多目标，却没有优先级",
      "没有告诉 AI 哪些行为绝对不能改"
    ],
    template: `目标：在保持现有行为不变的前提下，优化 /path/to/file.tsx 的性能。\n上下文：项目使用 React 19 + TypeScript，列表渲染卡顿。\n限制：不要改接口协议，不要引入新依赖。\n验收：滚动更流畅，保留当前 UI 和交互。`
  },
  {
    slug: "split-big-tasks-into-ai-friendly-steps",
    title: "把大任务拆成 AI 更擅长执行的步骤",
    category: "任务拆解",
    level: "Core",
    summary:
      "AI 更擅长处理边界明确、目标单一的任务。把大需求拆成探索、实现、验证三段，出码率和正确率都会更高。",
    overview:
      "很多“AI 写不出来”的问题，本质上是任务过大且目标混杂。先让 AI 读代码、做切面判断，再让它落实现，最后要求它自查验证，这种链式方式比一次性要求“直接做完”稳定得多。",
    body: [
      "当一个需求同时包含架构调整、页面实现、接口修改和测试补齐时，AI 往往会在第一轮就丢失重心。更稳妥的做法，是先把问题拆成“理解上下文”“实现改动”“验证结果”三段。每一段都给清晰目标，AI 反而更容易一次做对。",
      "拆任务的另一个好处，是你能更早发现信息缺口。比如 AI 在理解阶段就说出某个文件不存在，或者某条链路不明确，这些反馈其实比让它盲写一大坨代码更有价值，因为你可以立刻补上下文，而不是在后面返工。",
      "对于复杂改造，建议先让 AI 输出计划，再要求它按计划逐步执行。这样你不仅能控制范围，还能随时插入人工判断，特别适合多文件、多模块或者需要保守演进的场景。"
    ],
    highlights: [
      "把“分析”和“实现”分开，有助于减少错误假设",
      "让 AI 先列风险点，再写代码，通常能减少回滚",
      "最后再单独补验证步骤，能提高交付完成度"
    ],
    checklist: [
      "第一步先让 AI 识别相关文件和关键调用链",
      "第二步明确只改哪些模块，不要无限扩散",
      "第三步要求输出验证方式和未覆盖风险",
      "必要时把测试补全单独作为一步"
    ],
    mistakes: [
      "在同一条请求里混合架构设计、页面实现、测试修复和部署",
      "让 AI 同时重构多个领域模块，导致上下文失控",
      "没有定义完成条件，导致实现永远在发散"
    ],
    template: `Step 1: 先阅读相关模块，告诉我应该改哪些文件。\nStep 2: 只实现接口层改造，不改页面层。\nStep 3: 补验证方式，并说明还剩什么风险。`
  },
  {
    slug: "make-ai-follow-existing-codebase-style",
    title: "让 AI 更好遵循现有工程风格",
    category: "工程协同",
    level: "Advanced",
    summary:
      "出码率高不等于代码可合并。提前给 AI 现有项目的命名、分层、注释和测试风格，能显著提升可用性。",
    overview:
      "AI 最容易犯的一个问题，是写出“看起来能跑但不像这个项目”的代码。要提高真正可合并的出码率，就必须让它先理解仓库里的模式，而不是让它按默认模板发挥。",
    body: [
      "很多团队在用 AI 时都会遇到同一个问题：代码逻辑没错，但风格完全不像现有工程。它可能会多加一层抽象、换掉常用的错误处理模式，或者引入团队从没用过的新依赖。这样的代码即使能运行，通常也很难直接合并。",
      "解决办法不是空泛地告诉 AI“请保持风格一致”，而是直接给它最有代表性的相邻文件。一个高质量参考样例，往往比一大段风格说明更有效。AI 会从命名、分层、注释方式和测试写法里快速归纳出当前仓库的偏好。",
      "如果项目有明确的约束，例如不能新增状态库、不能改变目录结构、不能改日志格式，也要直接写出来。越是具体的边界，AI 越容易把输出收敛到你真正能接住的实现上。"
    ],
    highlights: [
      "给一两个同风格文件做参考，往往比长篇风格说明更有效",
      "明确是否允许引入新依赖、新抽象和新目录层级",
      "要求保持现有错误处理、日志和测试模式"
    ],
    checklist: [
      "提供相邻模块或同类实现作为参考",
      "说明项目偏好的函数风格、状态管理和目录结构",
      "告诉 AI 哪些模式必须复用，哪些模式禁止新增",
      "要求改动保持最小 diff"
    ],
    mistakes: [
      "忽略现有项目的模式，导致 AI 默认生成通用脚手架代码",
      "要求“更优雅”，却没有说明允许改变到什么程度",
      "没有限制新增依赖和新增抽象层"
    ],
    template: `参考 /src/features/order/List.tsx 和 /src/features/order/service.ts 的写法。\n保持当前 hooks 风格，不引入新状态库。\n只做最小 diff，可读性优先。`
  },
  {
    slug: "review-loop-that-improves-ai-code-quality",
    title: "用 Review 闭环把 AI 代码越写越准",
    category: "质量提升",
    level: "Advanced",
    summary:
      "高出码率来自稳定反馈回路。把问题分成“逻辑错误、风格偏差、边界遗漏”三类反馈给 AI，会比笼统说“这里不对”更有效。",
    overview:
      "AI 最适合在有反馈信号的环境里持续迭代。每一轮 review 如果都能指出错误类型、影响范围和预期修正方式，下一轮生成会更贴近目标，最终形成稳定的团队使用模式。",
    body: [
      "AI 不是一次性写对就结束，它和团队协作一样，更需要反馈闭环。你给它的每一次 review，如果都能明确指出问题类型和修改方向，它下一轮输出的质量通常都会更接近预期。",
      "最有效的 review 不是“这里不行”，而是“这里是逻辑错误”“那里是边界遗漏”“这个地方风格不一致”。分类越清楚，AI 越知道应该修什么，避免它在错误的方向上重复劳动。",
      "长期来看，团队可以把高频 review 语句整理成固定提示词。比如“保持现有错误处理模式”“补上空值保护”“不要改接口签名”，这些简短约束会持续提升 AI 的可用代码比例。"
    ],
    highlights: [
      "错误分类越明确，AI 下一轮修正越有效",
      "让 AI 复述问题再修改，可以降低误修率",
      "把团队高频 review 意见沉淀成固定提示词，收益很高"
    ],
    checklist: [
      "指出具体文件和问题位置",
      "说明这是逻辑错误、风格问题还是约束遗漏",
      "给出想保留的部分和必须调整的部分",
      "要求 AI 修改后再次自检"
    ],
    mistakes: [
      "只说“这版不行”，没有问题类型和范围",
      "每轮都重新说一遍需求，却不指出上轮具体错误",
      "让 AI 猜测哪些部分是可以保留的"
    ],
    template: `问题分类：逻辑错误。\n位置：/src/api/user.ts 第 34 行附近。\n原因：空值分支没有处理，导致线上 500。\n要求：保留当前函数签名，只补空值保护和测试。`
  },
  {
    slug: "choose-the-right-output-format-for-ai-coding",
    title: "用正确的输出格式提升 AI 可用代码比例",
    category: "交付方式",
    level: "Advanced",
    summary:
      "不同任务要让 AI 输出不同形态的结果。明确要求它输出 patch、文件草稿、测试方案或迁移清单，会显著提高代码可落地性。",
    overview:
      "很多时候不是 AI 不会写，而是输出格式不对。架构讨论适合先要清单和风险，局部修复适合要 patch，多文件改造适合按文件分块输出。格式选对了，后续接手成本会低很多。",
    body: [
      "同一个任务，如果让 AI 直接输出完整文件、patch 或实施计划，结果可能完全不同。对很多日常开发来说，最有价值的并不是长篇解释，而是可以直接粘贴到工程里使用的结果。",
      "局部修复最适合 patch 风格，因为你可以很快看清改动范围；多文件改造更适合按文件拆分，避免输出混杂；而架构讨论则应该先拿到变更清单和风险说明，再决定是否继续深入。",
      "真正提高出码率的方法之一，是把“你希望 AI 如何交付”也写清楚。输出格式清楚，AI 会更少跑题，也更容易生成能直接进入下一步工作流的结果。"
    ],
    highlights: [
      "局部修复优先要 patch 或精确文件改动",
      "复杂改造先要变更计划，再逐步要代码",
      "高风险改动应要求额外输出验证步骤和回滚点"
    ],
    checklist: [
      "明确要 patch、完整文件还是伪代码",
      "要求按文件分组输出，避免大段混杂",
      "补充测试、迁移和风险说明的输出要求",
      "让 AI 标明哪些部分是推断，哪些部分来自现有代码"
    ],
    mistakes: [
      "默认让 AI 一次性输出所有文件全文",
      "复杂改造没有要求按阶段交付",
      "没有要求解释哪些地方需要你人工确认"
    ],
    template: `请按文件输出变更。\n每个文件先给改动目的，再给代码。\n最后补一段验证步骤和风险说明。`
  },
  {
    slug: "feed-ai-the-right-repo-map",
    title: "先给 AI 仓库地图，再让它开始写代码",
    category: "仓库认知",
    level: "Core",
    summary:
      "把目录结构、入口文件、公共模块和关键约束先喂给 AI，能明显减少它写偏目录、改错文件和乱造结构的概率。",
    overview:
      "很多 AI 代码失败不是写法问题，而是对仓库不熟。先告诉它仓库里哪里放页面、哪里放服务、哪里放共享逻辑，等于先给它一张导航图，后续出码会顺很多。",
    highlights: [
      "仓库地图比泛泛描述技术栈更有用",
      "入口文件、公共模块和边界层是最该优先提供的上下文",
      "让 AI 先复述目录理解，再开始编码，能减少偏航"
    ],
    checklist: [
      "提供目录树或相关文件路径列表",
      "标出入口文件、公共工具和边界模块",
      "说明哪些目录只读，哪些目录允许改",
      "如果有 monorepo，标明包边界和依赖方向"
    ],
    mistakes: [
      "只给一个模糊需求，不给仓库结构",
      "把所有目录都说成“差不多”，没有边界",
      "没有告诉 AI 哪些目录禁止修改"
    ],
    template: `仓库结构：\n- apps/web：前端入口\n- packages/ui：共享组件\n- services/api：后端接口\n- libs/shared：通用工具\n\n规则：只改 apps/web 和 packages/ui。先告诉我你理解的目录分工，再开始写。`
  },
  {
    slug: "ask-for-review-ready-patches",
    title: "让 AI 直接输出可过 Review 的 patch",
    category: "交付质量",
    level: "Advanced",
    summary:
      "把 diff、测试、风险和边界写进输出要求里，AI 更容易一次给出接近可合并的补丁，而不是只产出思路。",
    overview:
      "如果你的目标是提高出码率，最终衡量标准不是“能不能写出代码”，而是“能不能少返工、少补漏、少争论”。要求 AI 以 patch 形式输出，并补上验证和风险，往往比让它先讲方案更接近真实交付。",
    highlights: [
      "patch 输出比整段解释更容易直接接进工程",
      "把测试与风险写进要求里，AI 更容易自带自检",
      "明确哪些地方可以不改，能避免它过度重构"
    ],
    checklist: [
      "要求按文件列出改动，而不是一次性混在一起",
      "明确是否需要测试文件、类型修改和文档更新",
      "要求输出前后差异点和回滚风险",
      "如果涉及多文件，要求先给最小可行 patch"
    ],
    mistakes: [
      "只要结论，不要补丁",
      "没有要求 AI 说明为什么这么改",
      "改动目标很多，但没有约束只做最小范围"
    ],
    template: `请输出 patch 风格结果。\n按文件分组说明改动目的、具体代码和验证方式。\n如果有任何可能引入回归的地方，请主动列出来。`
  }
];

export const articles = [
  {
    slug: "how-to-raise-code-output-rate-with-better-context",
    title: "如何用上下文工程提高 AI 出码率",
    category: "最佳实践",
    level: "Core",
    summary:
      "高质量上下文比更长的 prompt 更重要。把代码目录、目标文件、约束和验收标准喂对，AI 生成质量会显著提升。",
    overview:
      "出码率低的根因通常不是模型不够强，而是输入信息缺了关键上下文。最有效的改进方式，是让 AI 在写代码前就拿到正确的文件范围、现有实现、风格约束和目标输出边界。",
    body: [
      "如果你希望 AI 更稳定地写出可用代码，第一步不是换模型，而是减少它的猜测空间。很多失败的 prompt 看起来需求很完整，实际却缺少仓库路径、入口文件、约束条件和可接受的变更范围。AI 在这种情况下只能根据通用经验补全，自然更容易偏题。",
      "上下文工程的本质，是把“写代码之前需要知道什么”提前整理出来。你给它相邻模块、现有实现、命名风格和验收标准，它就会更像在一个熟悉的仓库里工作，而不是在完全陌生的空白环境里自由发挥。",
      "如果任务比较大，还可以把上下文分层：先给目录地图，再给目标文件，再给局部参考实现。这样 AI 先建立整体定位，再进入局部实现，通常能明显提高出码率，也能减少它生成和项目风格不一致的代码。"
    ],
    highlights: [
      "明确告诉 AI 当前在哪些文件里改，避免它凭空创造不存在的结构",
      "给出已有实现、相邻模块和命名风格，比抽象描述更有效",
      "把验收标准前置，能显著减少返工轮次"
    ],
    checklist: [
      "提供目标文件路径、入口文件和相关模块",
      "给出当前栈、框架版本和约束条件",
      "明确是否允许重构、是否需要测试、是否必须兼容旧行为",
      "说明期望输出是补丁、完整文件、思路还是可运行实现"
    ],
    mistakes: [
      "只说“帮我优化一下”，没有提供任何现有代码",
      "同时提很多目标，却没有优先级",
      "没有告诉 AI 哪些行为绝对不能改"
    ],
    template: `目标：在保持现有行为不变的前提下，优化 /path/to/file.tsx 的性能。\n上下文：项目使用 React 19 + TypeScript，列表渲染卡顿。\n限制：不要改接口协议，不要引入新依赖。\n验收：滚动更流畅，保留当前 UI 和交互。`
  },
  {
    slug: "split-big-tasks-into-ai-friendly-steps",
    title: "把大任务拆成 AI 更擅长执行的步骤",
    category: "任务拆解",
    level: "Core",
    summary:
      "AI 更擅长处理边界明确、目标单一的任务。把大需求拆成探索、实现、验证三段，出码率和正确率都会更高。",
    overview:
      "很多“AI 写不出来”的问题，本质上是任务过大且目标混杂。先让 AI 读代码、做切面判断，再让它落实现，最后要求它自查验证，这种链式方式比一次性要求“直接做完”稳定得多。",
    body: [
      "当一个需求同时包含架构调整、页面实现、接口修改和测试补齐时，AI 往往会在第一轮就丢失重心。更稳妥的做法，是先把问题拆成“理解上下文”“实现改动”“验证结果”三段。每一段都给清晰目标，AI 反而更容易一次做对。",
      "拆任务的另一个好处，是你能更早发现信息缺口。比如 AI 在理解阶段就说出某个文件不存在，或者某条链路不明确，这些反馈其实比让它盲写一大坨代码更有价值，因为你可以立刻补上下文，而不是在后面返工。",
      "对于复杂改造，建议先让 AI 输出计划，再要求它按计划逐步执行。这样你不仅能控制范围，还能随时插入人工判断，特别适合多文件、多模块或者需要保守演进的场景。"
    ],
    highlights: [
      "把“分析”和“实现”分开，有助于减少错误假设",
      "让 AI 先列风险点，再写代码，通常能减少回滚",
      "最后再单独补验证步骤，能提高交付完成度"
    ],
    checklist: [
      "第一步先让 AI 识别相关文件和关键调用链",
      "第二步明确只改哪些模块，不要无限扩散",
      "第三步要求输出验证方式和未覆盖风险",
      "必要时把测试补全单独作为一步"
    ],
    mistakes: [
      "在同一条请求里混合架构设计、页面实现、测试修复和部署",
      "让 AI 同时重构多个领域模块，导致上下文失控",
      "没有定义完成条件，导致实现永远在发散"
    ],
    template: `Step 1: 先阅读相关模块，告诉我应该改哪些文件。\nStep 2: 只实现接口层改造，不改页面层。\nStep 3: 补验证方式，并说明还剩什么风险。`
  },
  {
    slug: "make-ai-follow-existing-codebase-style",
    title: "让 AI 更好遵循现有工程风格",
    category: "工程协同",
    level: "Advanced",
    summary:
      "出码率高不等于代码可合并。提前给 AI 现有项目的命名、分层、注释和测试风格，能显著提升可用性。",
    overview:
      "AI 最容易犯的一个问题，是写出“看起来能跑但不像这个项目”的代码。要提高真正可合并的出码率，就必须让它先理解仓库里的模式，而不是让它按默认模板发挥。",
    body: [
      "很多团队在用 AI 时都会遇到同一个问题：代码逻辑没错，但风格完全不像现有工程。它可能会多加一层抽象、换掉常用的错误处理模式，或者引入团队从没用过的新依赖。这样的代码即使能运行，通常也很难直接合并。",
      "解决办法不是空泛地告诉 AI“请保持风格一致”，而是直接给它最有代表性的相邻文件。一个高质量参考样例，往往比一大段风格说明更有效。AI 会从命名、分层、注释方式和测试写法里快速归纳出当前仓库的偏好。",
      "如果项目有明确的约束，例如不能新增状态库、不能改变目录结构、不能改日志格式，也要直接写出来。越是具体的边界，AI 越容易把输出收敛到你真正能接住的实现上。"
    ],
    highlights: [
      "给一两个同风格文件做参考，往往比长篇风格说明更有效",
      "明确是否允许引入新依赖、新抽象和新目录层级",
      "要求保持现有错误处理、日志和测试模式"
    ],
    checklist: [
      "提供相邻模块或同类实现作为参考",
      "说明项目偏好的函数风格、状态管理和目录结构",
      "告诉 AI 哪些模式必须复用，哪些模式禁止新增",
      "要求改动保持最小 diff"
    ],
    mistakes: [
      "忽略现有项目的模式，导致 AI 默认生成通用脚手架代码",
      "要求“更优雅”，却没有说明允许改变到什么程度",
      "没有限制新增依赖和新增抽象层"
    ],
    template: `参考 /src/features/order/List.tsx 和 /src/features/order/service.ts 的写法。\n保持当前 hooks 风格，不引入新状态库。\n只做最小 diff，可读性优先。`
  },
  {
    slug: "review-loop-that-improves-ai-code-quality",
    title: "用 Review 闭环把 AI 代码越写越准",
    category: "质量提升",
    level: "Advanced",
    summary:
      "高出码率来自稳定反馈回路。把问题分成“逻辑错误、风格偏差、边界遗漏”三类反馈给 AI，会比笼统说“这里不对”更有效。",
    overview:
      "AI 最适合在有反馈信号的环境里持续迭代。每一轮 review 如果都能指出错误类型、影响范围和预期修正方式，下一轮生成会更贴近目标，最终形成稳定的团队使用模式。",
    body: [
      "AI 不是一次性写对就结束，它和团队协作一样，更需要反馈闭环。你给它的每一次 review，如果都能明确指出问题类型和修改方向，它下一轮输出的质量通常都会更接近预期。",
      "最有效的 review 不是“这里不行”，而是“这里是逻辑错误”“那里是边界遗漏”“这个地方风格不一致”。分类越清楚，AI 越知道应该修什么，避免它在错误的方向上重复劳动。",
      "长期来看，团队可以把高频 review 语句整理成固定提示词。比如“保持现有错误处理模式”“补上空值保护”“不要改接口签名”，这些简短约束会持续提升 AI 的可用代码比例。"
    ],
    highlights: [
      "错误分类越明确，AI 下一轮修正越有效",
      "让 AI 复述问题再修改，可以降低误修率",
      "把团队高频 review 意见沉淀成固定提示词，收益很高"
    ],
    checklist: [
      "指出具体文件和问题位置",
      "说明这是逻辑错误、风格问题还是约束遗漏",
      "给出想保留的部分和必须调整的部分",
      "要求 AI 修改后再次自检"
    ],
    mistakes: [
      "只说“这版不行”，没有问题类型和范围",
      "每轮都重新说一遍需求，却不指出上轮具体错误",
      "让 AI 猜测哪些部分是可以保留的"
    ],
    template: `问题分类：逻辑错误。\n位置：/src/api/user.ts 第 34 行附近。\n原因：空值分支没有处理，导致线上 500。\n要求：保留当前函数签名，只补空值保护和测试。`
  },
  {
    slug: "choose-the-right-output-format-for-ai-coding",
    title: "用正确的输出格式提升 AI 可用代码比例",
    category: "交付方式",
    level: "Advanced",
    summary:
      "不同任务要让 AI 输出不同形态的结果。明确要求它输出 patch、文件草稿、测试方案或迁移清单，会显著提高代码可落地性。",
    overview:
      "很多时候不是 AI 不会写，而是输出格式不对。架构讨论适合先要清单和风险，局部修复适合要 patch，多文件改造适合按文件分块输出。格式选对了，后续接手成本会低很多。",
    body: [
      "同一个任务，如果让 AI 直接输出完整文件、patch 或实施计划，结果可能完全不同。对很多日常开发来说，最有价值的并不是长篇解释，而是可以直接粘贴到工程里使用的结果。",
      "局部修复最适合 patch 风格，因为你可以很快看清改动范围；多文件改造更适合按文件拆分，避免输出混杂；而架构讨论则应该先拿到变更清单和风险说明，再决定是否继续深入。",
      "真正提高出码率的方法之一，是把“你希望 AI 如何交付”也写清楚。输出格式清楚，AI 会更少跑题，也更容易生成能直接进入下一步工作流的结果。"
    ],
    highlights: [
      "局部修复优先要 patch 或精确文件改动",
      "复杂改造先要变更计划，再逐步要代码",
      "高风险改动应要求额外输出验证步骤和回滚点"
    ],
    checklist: [
      "明确要 patch、完整文件还是伪代码",
      "要求按文件分组输出，避免大段混杂",
      "补充测试、迁移和风险说明的输出要求",
      "让 AI 标明哪些部分是推断，哪些部分来自现有代码"
    ],
    mistakes: [
      "默认让 AI 一次性输出所有文件全文",
      "复杂改造没有要求按阶段交付",
      "没有要求解释哪些地方需要你人工确认"
    ],
    template: `请按文件输出变更。\n每个文件先给改动目的，再给代码。\n最后补一段验证步骤和风险说明。`
  },
  {
    slug: "feed-ai-the-right-repo-map",
    title: "先给 AI 仓库地图，再让它开始写代码",
    category: "仓库认知",
    level: "Core",
    summary:
      "把目录结构、入口文件、公共模块和关键约束先喂给 AI，能明显减少它写偏目录、改错文件和乱造结构的概率。",
    overview:
      "很多 AI 代码失败不是写法问题，而是对仓库不熟。先告诉它仓库里哪里放页面、哪里放服务、哪里放共享逻辑，等于先给它一张导航图，后续出码会顺很多。",
    body: [
      "AI 在陌生仓库里写代码，最容易犯的不是语法错误，而是“位置错误”。它可能把组件写进服务层，把工具函数放到页面目录，或者把本该共享的逻辑散落到多个地方。仓库地图就是解决这个问题的第一步。",
      "最实用的做法，是先告诉 AI 哪些目录是入口、哪些目录放共享代码、哪些目录专门负责业务模块。如果是 monorepo，就再明确一下包边界和依赖方向。这样它在生成代码时，会更容易顺着现有结构走。",
      "你还可以要求 AI 先复述它对仓库的理解，再开始写代码。这个小动作非常有效，因为一旦它对目录分工理解错了，你可以在开始编码前就修正，而不是等它生成一大堆错位文件后再返工。"
    ],
    highlights: [
      "仓库地图比泛泛描述技术栈更有用",
      "入口文件、公共模块和边界层是最该优先提供的上下文",
      "让 AI 先复述目录理解，再开始编码，能减少偏航"
    ],
    checklist: [
      "提供目录树或相关文件路径列表",
      "标出入口文件、公共工具和边界模块",
      "说明哪些目录只读，哪些目录允许改",
      "如果有 monorepo，标明包边界和依赖方向"
    ],
    mistakes: [
      "只给一个模糊需求，不给仓库结构",
      "把所有目录都说成“差不多”，没有边界",
      "没有告诉 AI 哪些目录禁止修改"
    ],
    template: `仓库结构：\n- apps/web：前端入口\n- packages/ui：共享组件\n- services/api：后端接口\n- libs/shared：通用工具\n\n规则：只改 apps/web 和 packages/ui。先告诉我你理解的目录分工，再开始写。`
  },
  {
    slug: "ask-for-review-ready-patches",
    title: "让 AI 直接输出可过 Review 的 patch",
    category: "交付质量",
    level: "Advanced",
    summary:
      "把 diff、测试、风险和边界写进输出要求里，AI 更容易一次给出接近可合并的补丁，而不是只产出思路。",
    overview:
      "如果你的目标是提高出码率，最终衡量标准不是“能不能写出代码”，而是“能不能少返工、少补漏、少争论”。要求 AI 以 patch 形式输出，并补上验证和风险，往往比让它先讲方案更接近真实交付。",
    body: [
      "很多人用 AI 的习惯是先让它讲思路，再慢慢收敛到代码。但在真实开发里，最有价值的往往是可以直接进入 review 的 patch。格式越接近交付物，后续的沟通成本通常越低。",
      "为了让 AI 输出更像能合并的补丁，你可以把文件边界、测试要求和风险提示一起写进 prompt。这样它不会只给你“看起来对”的答案，而会更主动地补齐边界判断和验证步骤。",
      "如果任务涉及多文件改动，建议先要求最小可行 patch，再逐步扩展。这样既能控制风险，也更容易确认第一轮输出是否方向正确。"
    ],
    highlights: [
      "patch 输出比整段解释更容易直接接进工程",
      "把测试与风险写进要求里，AI 更容易自带自检",
      "明确哪些地方可以不改，能避免它过度重构"
    ],
    checklist: [
      "要求按文件列出改动，而不是一次性混在一起",
      "明确是否需要测试文件、类型修改和文档更新",
      "要求输出前后差异点和回滚风险",
      "如果涉及多文件，要求先给最小可行 patch"
    ],
    mistakes: [
      "只要结论，不要补丁",
      "没有要求 AI 说明为什么这么改",
      "改动目标很多，但没有约束只做最小范围"
    ],
    template: `请输出 patch 风格结果。\n按文件分组说明改动目的、具体代码和验证方式。\n如果有任何可能引入回归的地方，请主动列出来。`
  }
];

export const skills = [
  {
    slug: "react-performance-rescue",
    title: "React 性能救火",
    group: "Frontend",
    category: "性能优化",
    level: "Advanced",
    priority: "high",
    summary:
      "用于解决 React 页面卡顿、重复渲染、长列表掉帧和交互迟滞，产出可直接落地的性能优化代码。",
    overview:
      "当页面出现明显卡顿、列表滚动掉帧、组件重复渲染或交互响应过慢时触发。目标是帮助 AI 快速定位渲染热点，减少无效更新，并给出兼顾收益和可维护性的改造方案。",
    trigger: [
      "用户提到 React 页面卡顿、掉帧、输入延迟或首屏慢",
      "任务涉及长列表、复杂图表、动画或频繁状态更新",
      "需要对现有 React 代码做性能重构而不是简单解释"
    ],
    inputs: [
      "相关页面、组件和状态管理代码",
      "复现步骤、性能录屏、Profiler 或 Performance 数据",
      "业务约束，例如不能改变交互逻辑或接口协议"
    ],
    constraints: [
      "先定位性能瓶颈，再做局部优化，避免盲目全量重构",
      "默认优先选择简单稳定的优化方式，而不是过度使用 memo 化",
      "React Compiler 或团队既有模式优先，不引入风格冲突",
      "必须说明改动收益、风险和验证方式"
    ],
    workflow: [
      "定位最重的渲染路径、状态更新源和副作用链路",
      "优先优化数据结构、渲染边界、列表策略和状态拆分",
      "实现最小必要代码变更，并给出验证步骤"
    ],
    outputs: [
      "性能瓶颈归因",
      "可提交的代码修改建议或补丁",
      "验证指标和回归检查清单"
    ],
    tools: [
      "React DevTools Profiler",
      "Chrome DevTools Performance",
      "虚拟列表",
      "startTransition / useDeferredValue"
    ],
    snippet:
      "startTransition(() => {\n  setFilteredRows(nextRows);\n});"
  },
  {
    slug: "react-design-system-builder",
    title: "React 设计系统与组件抽象",
    group: "Frontend",
    category: "组件工程",
    level: "Advanced",
    priority: "medium",
    summary:
      "用于构建可复用组件、统一 API、样式 token 和文档示例，让 AI 生成可维护的组件系统代码。",
    overview:
      "当任务涉及组件库、业务组件抽象、Design Token 收敛或 Storybook 文档补全时触发。目标是输出一致、可演进、具备清晰 API 边界的组件实现。",
    trigger: [
      "用户要求抽象重复 UI 或搭建组件库",
      "任务涉及按钮、表单、弹窗、表格等基础组件统一",
      "需要让新组件符合现有设计系统风格"
    ],
    inputs: [
      "现有组件实现、视觉规范和交互规则",
      "项目中的样式方案和组件命名约定",
      "组件的受控/非受控、可访问性和组合要求"
    ],
    constraints: [
      "优先抽象高复用能力，避免把临时业务分支固化到基础组件",
      "组件 API 必须简洁、可预测，并遵循团队命名模式",
      "必须考虑 a11y、键盘交互和状态边界",
      "在现有设计系统上演进，不随意引入新视觉语言"
    ],
    workflow: [
      "分析已有组件的共性与差异，确定抽象层级",
      "设计 props API、状态模型和样式 token 接口",
      "输出组件代码、使用示例和测试/文档建议"
    ],
    outputs: [
      "组件抽象方案",
      "可复用组件代码",
      "示例、文档或测试建议"
    ],
    tools: [
      "React",
      "TypeScript",
      "Storybook",
      "Design Tokens"
    ],
    snippet:
      "type ButtonProps = {\n  variant?: 'primary' | 'secondary';\n  size?: 'sm' | 'md' | 'lg';\n};"
  },
  {
    slug: "nextjs-rsc-streaming",
    title: "Next.js RSC 与流式渲染",
    group: "Frontend",
    category: "现代 Web",
    level: "Expert",
    priority: "high",
    summary:
      "用于处理 Next.js App Router、Server Components、Streaming、缓存和边缘渲染相关实现。",
    overview:
      "当任务横跨首屏性能、SEO、服务端组件拆分和数据缓存策略时触发。目标是让 AI 产出符合 Next.js 现代实践的可运行代码，而不是仅仅把 CSR 逻辑搬到新目录。",
    trigger: [
      "用户要求使用 Next.js App Router 或 Server Components",
      "任务涉及 Streaming、Suspense、缓存或 Edge Functions",
      "需要在 SEO、首屏性能和交互能力之间做取舍"
    ],
    inputs: [
      "现有 Next.js 路由结构和数据获取方式",
      "页面 SEO 要求、首屏指标和缓存约束",
      "部署平台和边缘运行限制"
    ],
    constraints: [
      "先判断哪些逻辑适合 server，哪些必须保留 client",
      "缓存、Streaming 和错误处理必须整体设计",
      "不能把所有组件都机械改成 client component",
      "输出要兼容现有目录和部署环境"
    ],
    workflow: [
      "划分 server/client 边界和数据获取路径",
      "设计 Streaming、缓存和 fallback 策略",
      "输出页面代码、数据层代码和风险说明"
    ],
    outputs: [
      "RSC 设计方案",
      "页面与数据获取代码",
      "缓存与部署说明"
    ],
    tools: [
      "Next.js App Router",
      "React Server Components",
      "Suspense / Streaming",
      "Edge Runtime"
    ],
    snippet:
      "export default async function Page() {\n  const data = await getDashboardData();\n  return <Dashboard data={data} />;\n}"
  },
  {
    slug: "frontend-observability-debugging",
    title: "前端可观测性与线上排障",
    group: "Frontend",
    category: "工程质量",
    level: "Advanced",
    priority: "high",
    summary:
      "用于排查线上 JS 报错、白屏、接口异常和用户路径问题，产出监控埋点与修复方案。",
    overview:
      "当任务是线上问题排查而不是纯开发时触发。目标是让 AI 从日志、监控和用户路径入手，补齐可观测性并给出最小风险修复方案。",
    trigger: [
      "用户提到线上白屏、异常率升高、偶发错误难复现",
      "任务涉及埋点、告警、会话回放或错误归因",
      "需要先提升可观测性再修问题"
    ],
    inputs: [
      "错误堆栈、监控平台数据和接口日志",
      "埋点代码、告警规则和会话回放信息",
      "受影响页面、用户路径和时间窗口"
    ],
    constraints: [
      "先确认问题范围和影响，再建议修复",
      "监控补点要低侵入、可维护，避免噪音告警",
      "输出必须包含验证修复是否生效的方法",
      "不要在证据不足时臆造根因"
    ],
    workflow: [
      "归纳报错特征、影响范围和复现窗口",
      "沿错误链路补齐日志、埋点或告警缺口",
      "输出修复建议与观测性改造方案"
    ],
    outputs: [
      "根因假设和证据链",
      "监控或埋点补强建议",
      "修复与回归验证清单"
    ],
    tools: [
      "Sentry/前端监控",
      "日志埋点",
      "会话回放",
      "Source Map"
    ],
    snippet:
      "window.addEventListener('error', (event) => {\n  reportClientError(event.error);\n});"
  },
  {
    slug: "sdui-lowcode-runtime",
    title: "前端动态化与低代码运行时",
    group: "Frontend",
    category: "动态化",
    level: "Expert",
    priority: "high",
    summary:
      "用于设计 Server-Driven UI、低代码渲染引擎和页面协议，让 AI 生成可演进的动态化方案。",
    overview:
      "当任务涉及 JSON 协议渲染、配置化页面、运营平台和动态组件注册时触发。目标是生成稳定的协议、渲染器和治理机制，而不是一次性的页面拼装脚本。",
    trigger: [
      "用户要求通过配置或协议驱动页面渲染",
      "任务涉及低代码平台、搭建平台或动态发版",
      "需要处理 schema、回滚、灰度和多端兼容"
    ],
    inputs: [
      "现有页面结构、组件库和平台目标",
      "协议草案、字段定义和版本策略",
      "发布链路、灰度和回滚要求"
    ],
    constraints: [
      "协议必须优先考虑版本兼容和异常兜底",
      "组件能力通过注册表和 schema 限制",
      "输出需要包含治理、回滚和监控设计",
      "不要把所有业务特例都塞进基础协议"
    ],
    workflow: [
      "定义协议边界、组件模型和运行时职责",
      "设计 schema、渲染映射和灰度回滚机制",
      "输出运行时代码与治理建议"
    ],
    outputs: [
      "协议定义",
      "运行时渲染代码",
      "灰度/监控/回滚方案"
    ],
    tools: [
      "JSON Schema",
      "Zod",
      "组件注册表",
      "动态配置平台"
    ],
    snippet:
      "{\n  \"type\": \"hero-banner\",\n  \"props\": {\n    \"title\": \"限时活动\"\n  }\n}"
  },
  {
    slug: "typescript-schema-guardian",
    title: "TypeScript Schema 强约束",
    group: "Frontend",
    category: "类型系统",
    level: "Advanced",
    priority: "medium",
    summary:
      "用于为复杂 JSON 配置、表单 schema 和 API 响应建立高可靠类型约束，提升 AI 生成代码的正确率。",
    overview:
      "当任务需要强类型保护、泛型工具、schema 校验或类型推导时触发。目标是让 AI 输出能被 IDE 正确提示、能在构建期拦住错误的类型系统实现。",
    trigger: [
      "用户要求为配置系统或 API 层补强 TypeScript 类型",
      "任务涉及复杂泛型、条件类型或 schema 推导",
      "需要把运行时校验和编译期提示对齐"
    ],
    inputs: [
      "现有类型定义、schema 和接口示例",
      "错误样例或期望的 IDE 提示效果",
      "项目 TS 版本和 eslint/tsconfig 约束"
    ],
    constraints: [
      "类型设计服务业务正确性，不做无意义炫技",
      "优先保证可读性和维护性，再追求极致推导",
      "运行时 schema 和静态类型尽量保持一致",
      "必须给出示例和失败用例说明"
    ],
    workflow: [
      "分析数据结构和错误边界",
      "设计类型、schema 和推导辅助工具",
      "输出类型代码、示例和验证方式"
    ],
    outputs: [
      "类型系统设计",
      "schema 与类型定义",
      "示例和约束说明"
    ],
    tools: [
      "TypeScript 5.x",
      "Zod",
      "satisfies",
      "条件类型"
    ],
    snippet:
      "const pageSchema = {\n  type: 'table',\n  columns: ['id', 'name']\n} as const satisfies PageConfig;"
  },
  {
    slug: "web-security-hardening",
    title: "Web 安全加固",
    group: "Frontend",
    category: "安全",
    level: "Advanced",
    priority: "high",
    summary:
      "用于处理 XSS、CSRF、权限泄露、Token 暴露和前端安全基线问题，帮助 AI 生成更安全的实现。",
    overview:
      "当任务涉及登录态、富文本、文件上传、权限控制或安全整改时触发。目标是让 AI 识别高风险点，生成符合现代 Web 安全实践的代码和防护建议。",
    trigger: [
      "用户提到 XSS、CSRF、鉴权、Cookie、Token 或权限问题",
      "任务涉及富文本、上传、跨域或第三方脚本",
      "需要对现有前端代码做安全整改"
    ],
    inputs: [
      "鉴权流程、请求头、Cookie 策略和相关代码",
      "富文本、上传或外链脚本的处理逻辑",
      "接口安全约束和部署环境"
    ],
    constraints: [
      "先识别威胁模型，再给方案，不泛化堆概念",
      "前端措施要和后端鉴权策略对齐",
      "不能引入会破坏登录态或业务流的激进变更",
      "必须标明哪些风险需要后端配合"
    ],
    workflow: [
      "识别攻击面和数据入口",
      "判断前端、后端和平台层各自责任",
      "输出代码修复、配置调整和联动建议"
    ],
    outputs: [
      "安全风险列表",
      "前端修复建议",
      "需要后端/运维协同的事项"
    ],
    tools: [
      "CSP",
      "DOMPurify",
      "SameSite Cookie",
      "权限中间层"
    ],
    snippet:
      "const safeHtml = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });"
  },
  {
    slug: "node-api-architecture",
    title: "Node API 架构与分层重构",
    group: "Backend",
    category: "服务架构",
    level: "Advanced",
    priority: "high",
    summary:
      "用于构建或重构 Node.js API 服务，处理路由、服务层、仓储层、验证与错误模型。",
    overview:
      "当任务涉及 Express、NestJS、Fastify 或自建 Node 服务的结构设计时触发。目标是生成可维护、分层清晰、易测试的后端代码，而不是把逻辑堆在 controller 中。",
    trigger: [
      "用户要求搭建或重构 Node API",
      "任务涉及分层设计、DTO、校验和错误处理",
      "需要补齐服务结构、目录规范和可测试性"
    ],
    inputs: [
      "现有路由、服务、数据库访问代码",
      "接口定义、鉴权方式和错误返回规范",
      "框架类型和部署约束"
    ],
    constraints: [
      "保持 controller 薄、业务逻辑集中在 service/use-case",
      "所有外部输入都需要验证和类型约束",
      "错误模型、日志和响应格式应统一",
      "改造时尽量兼容现有接口契约"
    ],
    workflow: [
      "分析现有代码层次和职责混乱点",
      "设计路由、服务、仓储和校验边界",
      "输出结构化代码和迁移建议"
    ],
    outputs: [
      "服务分层方案",
      "接口代码或重构补丁",
      "测试和迁移建议"
    ],
    tools: [
      "Express/NestJS/Fastify",
      "Zod/class-validator",
      "统一错误处理中间件",
      "依赖注入"
    ],
    snippet:
      "router.post('/users', validate(createUserSchema), createUserHandler);"
  },
  {
    slug: "backend-ddd-usecase",
    title: "后端领域建模与 Use Case 设计",
    group: "Backend",
    category: "领域设计",
    level: "Expert",
    priority: "medium",
    summary:
      "用于复杂业务系统的领域对象、用例层和边界设计，让 AI 生成更贴近业务语义的后端代码。",
    overview:
      "当任务出现业务规则复杂、状态流多、服务耦合严重或模型命名混乱时触发。目标是让 AI 从领域语言而不是数据库表结构出发重构代码。",
    trigger: [
      "用户提到复杂业务流程、状态机或规则散落",
      "任务涉及订单、审批、结算、权限等领域逻辑",
      "需要从 CRUD 代码提升到用例驱动结构"
    ],
    inputs: [
      "核心业务流程、规则、状态转换和角色定义",
      "现有 service/model/entity 代码",
      "外部依赖、事件和边界上下文"
    ],
    constraints: [
      "先抽象业务语言和规则，再谈技术实现",
      "不要把所有概念都包装成 DDD 名词，保持务实",
      "实体、值对象和用例边界必须有明确职责",
      "需要兼顾现有工程演进成本"
    ],
    workflow: [
      "提炼领域对象、规则和状态变化",
      "建立 use case 层与基础设施边界",
      "输出重构方案与关键代码"
    ],
    outputs: [
      "领域模型草图",
      "use case 结构建议",
      "关键服务或实体代码"
    ],
    tools: [
      "Use Case Pattern",
      "状态机",
      "领域事件",
      "接口隔离"
    ],
    snippet:
      "class ApproveInvoiceUseCase {\n  async execute(input: ApproveInvoiceInput) {\n    // domain rules here\n  }\n}"
  },
  {
    slug: "database-query-optimizer",
    title: "数据库查询与索引优化",
    group: "Backend",
    category: "数据层",
    level: "Expert",
    priority: "high",
    summary:
      "用于处理 SQL 慢查询、索引失效、N+1、分页和 ORM 查询膨胀问题，帮助 AI 生成更高效的数据访问代码。",
    overview:
      "当接口慢、数据库 CPU 飙高、列表查询异常重或报表逻辑效率差时触发。目标是让 AI 从执行计划和访问模式出发优化，而不是只换一种 ORM 写法。",
    trigger: [
      "用户提到慢查询、索引优化、分页性能或 N+1",
      "任务涉及 SQL、ORM、聚合报表或复杂过滤条件",
      "需要数据库层面的性能诊断"
    ],
    inputs: [
      "SQL/ORM 查询代码",
      "表结构、索引、执行计划和数据量级",
      "响应时间目标和读写比例"
    ],
    constraints: [
      "先看执行计划和数据分布，再建议索引",
      "不能为了查询速度破坏写入成本和数据一致性",
      "分页、排序和过滤要结合真实使用路径设计",
      "必须说明索引和查询改造的副作用"
    ],
    workflow: [
      "识别最重查询和访问模式",
      "优化 SQL、索引、分页或预计算策略",
      "输出查询代码与验证方法"
    ],
    outputs: [
      "查询瓶颈分析",
      "SQL/索引优化建议",
      "验证与回滚说明"
    ],
    tools: [
      "EXPLAIN",
      "慢查询日志",
      "索引设计",
      "ORM query plan"
    ],
    snippet:
      "CREATE INDEX idx_orders_user_status_created_at ON orders(user_id, status, created_at DESC);"
  },
  {
    slug: "redis-cache-consistency",
    title: "Redis 缓存与一致性治理",
    group: "Backend",
    category: "缓存",
    level: "Advanced",
    priority: "high",
    summary:
      "用于设计缓存键、过期策略、热点防护和缓存一致性，让 AI 生成稳定的高并发缓存方案。",
    overview:
      "当任务涉及读多写少、热点数据、缓存雪崩、击穿和脏数据问题时触发。目标是平衡性能收益与一致性复杂度，生成可维护的缓存层实现。",
    trigger: [
      "用户提到 Redis、缓存击穿、热点 Key 或数据不一致",
      "任务涉及接口加速、排行榜、配置缓存或分布式锁",
      "需要设计缓存策略而不只是简单 set/get"
    ],
    inputs: [
      "数据读写模式、流量峰值和一致性要求",
      "当前缓存代码、key 设计和过期策略",
      "数据库更新路径和失效机制"
    ],
    constraints: [
      "先明确一致性等级，再设计缓存更新方案",
      "Key 命名、过期策略和失效逻辑必须统一",
      "防击穿方案要避免引入复杂且脆弱的锁逻辑",
      "必须说明缓存失效和数据回源路径"
    ],
    workflow: [
      "分析热点与一致性要求",
      "设计缓存 key、TTL、回源和失效机制",
      "输出缓存代码与监控指标"
    ],
    outputs: [
      "缓存策略设计",
      "Redis 接入代码",
      "一致性与监控建议"
    ],
    tools: [
      "Redis",
      "TTL",
      "请求合并",
      "热点探测"
    ],
    snippet:
      "const cacheKey = `user:profile:${userId}`;\nawait redis.set(cacheKey, JSON.stringify(profile), 'EX', 300);"
  },
  {
    slug: "event-driven-async-jobs",
    title: "异步任务与事件驱动架构",
    group: "Backend",
    category: "异步系统",
    level: "Advanced",
    priority: "medium",
    summary:
      "用于处理消息队列、异步任务、补偿重试和事件解耦，让 AI 生成更稳健的后台任务系统。",
    overview:
      "当任务需要把同步接口拆成异步流程，或需要设计任务队列、消息消费和失败补偿时触发。目标是保证幂等、可追踪和可重试，而不是单纯把逻辑塞进定时任务。",
    trigger: [
      "用户提到消息队列、任务队列、重试或补偿机制",
      "任务涉及邮件、通知、导出、结算等异步流程",
      "需要从同步调用改造成事件驱动"
    ],
    inputs: [
      "业务流程、成功/失败路径和时序要求",
      "现有同步调用代码和依赖关系",
      "队列基础设施和告警能力"
    ],
    constraints: [
      "必须考虑幂等、重试、死信和追踪",
      "事件名称和 payload 结构要稳定可演进",
      "不能牺牲一致性和可排障性换取表面解耦",
      "输出要包含失败恢复与人工处理路径"
    ],
    workflow: [
      "拆解同步链路，识别可异步化节点",
      "设计事件、消费逻辑和失败恢复",
      "输出生产者/消费者代码和运行保障方案"
    ],
    outputs: [
      "异步架构方案",
      "任务代码或事件代码",
      "重试/告警/排障建议"
    ],
    tools: [
      "BullMQ / RabbitMQ / Kafka",
      "幂等键",
      "死信队列",
      "任务追踪"
    ],
    snippet:
      "await queue.add('send-email', { userId, templateId }, { attempts: 3, backoff: 5000 });"
  },
  {
    slug: "auth-rbac-guard",
    title: "鉴权、RBAC 与安全边界",
    group: "Backend",
    category: "安全",
    level: "Advanced",
    priority: "high",
    summary:
      "用于处理登录态、JWT、Session、RBAC/ABAC 权限和接口安全边界，帮助 AI 生成可靠的后端权限实现。",
    overview:
      "当任务涉及用户登录、权限校验、组织角色、资源授权或接口安全整改时触发。目标是让 AI 从认证和授权两个层面一起设计，不只写一个 middleware。",
    trigger: [
      "用户提到登录、JWT、Session、RBAC、ABAC 或权限问题",
      "任务涉及组织、角色、菜单、资源授权",
      "需要统一接口权限和前端可见性规则"
    ],
    inputs: [
      "用户模型、角色模型和资源权限关系",
      "登录流程、token/session 策略和现有中间件",
      "接口规范和审计要求"
    ],
    constraints: [
      "认证和授权必须分层处理",
      "权限模型要与业务资源边界一致，避免散落 if 判断",
      "所有敏感接口默认拒绝，显式授权",
      "要考虑审计、过期、撤权和多端登录行为"
    ],
    workflow: [
      "梳理认证流程与资源模型",
      "设计守卫、中间件和权限校验层",
      "输出代码、策略和审计建议"
    ],
    outputs: [
      "权限模型设计",
      "鉴权/授权代码",
      "审计与安全建议"
    ],
    tools: [
      "JWT / Session",
      "RBAC / ABAC",
      "中间件 / Guard",
      "审计日志"
    ],
    snippet:
      "if (!ability.can('update', invoice)) {\n  throw new ForbiddenError('No permission');\n}"
  },
  {
    slug: "backend-testing-replay",
    title: "后端测试矩阵与流量回放",
    group: "Backend",
    category: "质量保障",
    level: "Expert",
    priority: "medium",
    summary:
      "用于建立接口单测、集成测试、契约测试和流量回放体系，帮助 AI 生成更可信的后端改造方案。",
    overview:
      "当任务涉及高风险改造、复杂业务流程验证或线上行为回归时触发。目标是让 AI 不只写业务代码，还同步给出验证体系，降低改动上线风险。",
    trigger: [
      "用户要求补测试、做回归、验证老逻辑不被破坏",
      "任务涉及接口重构、数据库改造或高风险业务流程",
      "需要影子流量、录制回放或契约测试"
    ],
    inputs: [
      "核心接口、业务流程和历史 bug 样本",
      "现有测试框架、mock 策略和 CI 流程",
      "线上流量录制或请求样本"
    ],
    constraints: [
      "优先覆盖高风险路径和历史易错点",
      "测试要稳定可重复，避免强耦合外部环境",
      "回放策略必须脱敏并控制资源消耗",
      "输出需包含如何将验证接入 CI"
    ],
    workflow: [
      "确定风险最高的接口和业务链路",
      "设计单测、集成、契约和回放分层验证",
      "输出测试代码与接入方式"
    ],
    outputs: [
      "测试策略",
      "测试或回放代码",
      "CI 接入建议"
    ],
    tools: [
      "Jest / Vitest",
      "Supertest",
      "Contract Test",
      "流量录制与回放"
    ],
    snippet:
      "it('replays recorded checkout payloads', async () => {\n  const result = await replayCase(caseFixture);\n  expect(result.status).toBe(200);\n});"
  },
  {
    slug: "python-fastapi-service",
    title: "Python FastAPI 服务实现",
    group: "Backend",
    category: "服务开发",
    level: "Advanced",
    priority: "medium",
    summary:
      "用于构建 FastAPI 服务、依赖注入、Pydantic 模型和异步接口，实现整洁的 Python 后端代码。",
    overview:
      "当任务使用 Python 后端，特别是 FastAPI、异步接口和数据校验时触发。目标是生成结构清晰、具备类型和验证能力的服务实现。",
    trigger: [
      "用户明确要求 FastAPI 或 Python API 服务",
      "任务涉及 Pydantic、依赖注入或异步 I/O",
      "需要快速交付规范的 Python Web 服务"
    ],
    inputs: [
      "接口定义、数据模型和数据库访问需求",
      "现有项目结构、依赖注入方式和测试方案",
      "部署目标和 Python 版本"
    ],
    constraints: [
      "路由、服务、仓储和 schema 分层清晰",
      "所有入参和出参都用 Pydantic 约束",
      "异步代码避免阻塞调用混入",
      "输出需包含错误处理和测试入口"
    ],
    workflow: [
      "确定接口、模型和依赖边界",
      "实现路由、服务、schema 和异常处理",
      "补齐测试与启动说明"
    ],
    outputs: [
      "FastAPI 服务代码",
      "schema 和依赖结构",
      "测试或运行说明"
    ],
    tools: [
      "FastAPI",
      "Pydantic",
      "SQLAlchemy/async driver",
      "pytest"
    ],
    snippet:
      "@router.post('/users', response_model=UserResponse)\nasync def create_user(payload: CreateUserRequest):\n    return await service.create_user(payload)"
  },
  {
    slug: "go-concurrency-service",
    title: "Go 并发服务与可靠接口",
    group: "Backend",
    category: "高性能服务",
    level: "Advanced",
    priority: "medium",
    summary:
      "用于处理 Go 服务中的 goroutine、context、并发控制和高性能接口实现。",
    overview:
      "当任务需要用 Go 实现高并发 API、并发任务或资源控制时触发。目标是帮助 AI 生成符合 Go 习惯、可取消、可观测的并发代码。",
    trigger: [
      "用户要求使用 Go 编写 API 或并发任务",
      "任务涉及 goroutine、worker pool、context 传播",
      "需要关注高并发和资源控制"
    ],
    inputs: [
      "接口需求、并发模型和外部依赖",
      "现有 Go 项目结构、日志和监控方式",
      "超时、重试和资源上限要求"
    ],
    constraints: [
      "所有并发流程都要配合 context 和超时控制",
      "避免 goroutine 泄漏和无界 worker 扩张",
      "错误聚合、日志和监控必须清晰",
      "输出要符合 Go 简洁直接的编码风格"
    ],
    workflow: [
      "设计并发边界、取消路径和资源上限",
      "实现 handler、service 和并发执行逻辑",
      "补充测试和可观测性建议"
    ],
    outputs: [
      "Go 服务代码",
      "并发控制策略",
      "测试与监控建议"
    ],
    tools: [
      "Go context",
      "goroutine / channel",
      "worker pool",
      "pprof"
    ],
    snippet:
      "ctx, cancel := context.WithTimeout(ctx, 2*time.Second)\ndefer cancel()"
  },
  {
    slug: "infra-docker-ci-cd",
    title: "容器化与 CI/CD 交付",
    group: "Backend",
    category: "交付工程",
    level: "Advanced",
    priority: "high",
    summary:
      "用于处理 Dockerfile、构建优化、环境注入和 CI/CD 工作流，帮助 AI 生成可部署的服务交付方案。",
    overview:
      "当任务不只写代码，还要求能打包、测试、部署或发布时触发。目标是让 AI 输出真正能接入流水线和容器环境的交付配置。",
    trigger: [
      "用户要求补 Dockerfile、CI workflow 或部署配置",
      "任务涉及镜像瘦身、构建缓存和多环境发布",
      "需要从代码走到可部署产物"
    ],
    inputs: [
      "应用启动方式、依赖管理和环境变量",
      "现有 Dockerfile、CI 配置或部署平台约束",
      "测试命令、构建命令和安全要求"
    ],
    constraints: [
      "镜像应尽量小、可缓存且避免泄露敏感信息",
      "CI 流程必须包含必要的 lint/test/build 门禁",
      "配置兼容当前平台，不擅自改动部署模型",
      "输出需说明环境变量和密钥注入方式"
    ],
    workflow: [
      "确认构建、运行和发布需求",
      "设计 Dockerfile、缓存层和 CI 阶段",
      "输出配置文件和使用说明"
    ],
    outputs: [
      "Dockerfile 或容器配置",
      "CI/CD workflow",
      "部署与变量说明"
    ],
    tools: [
      "Docker",
      "GitHub Actions",
      "Build cache",
      "Multi-stage build"
    ],
    snippet:
      "FROM node:22-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci"
  },
  {
    slug: "fullstack-monorepo-governor",
    title: "全栈 Monorepo 治理",
    group: "Fullstack",
    category: "工程架构",
    level: "Expert",
    priority: "medium",
    summary:
      "用于治理前后端 Monorepo 的包边界、共享代码、构建缓存、发布策略和依赖一致性。",
    overview:
      "当任务横跨前端、后端、共享包和基础设施时触发。目标是让 AI 在保持协作效率的同时，避免 Monorepo 变成耦合泥团。",
    trigger: [
      "用户要求搭建或重构 Monorepo",
      "任务涉及前端应用、后端服务和 shared package 共存",
      "需要统一 lint、测试、构建和发布策略"
    ],
    inputs: [
      "现有仓库结构、包关系和构建工具",
      "应用数量、共享代码范围和团队协作模式",
      "发布方式和缓存需求"
    ],
    constraints: [
      "共享代码只抽高稳定共性，避免任意跨包引用",
      "边界要清晰，可见依赖关系要可治理",
      "构建和测试必须支持增量执行",
      "输出需兼顾本地开发体验和 CI 速度"
    ],
    workflow: [
      "分析包结构和依赖耦合",
      "设计 workspace、共享包和任务管线",
      "输出目录方案、配置文件和治理规则"
    ],
    outputs: [
      "Monorepo 结构设计",
      "工具配置和脚本",
      "边界治理建议"
    ],
    tools: [
      "pnpm workspace",
      "Turborepo/Nx",
      "Changesets",
      "共享类型包"
    ],
    snippet:
      "\"workspaces\": [\"apps/*\", \"packages/*\"]"
  },
  {
    slug: "fullstack-ai-rag-platform",
    title: "全栈 AI RAG 平台接入",
    group: "Fullstack",
    category: "AI 平台",
    level: "Expert",
    priority: "high",
    summary:
      "用于构建从前端交互到后端检索、上下文编排和回答生成的 RAG 功能链路。",
    overview:
      "当任务涉及企业内部问答、代码知识库、配置生成平台或 AI Copilot 功能时触发。目标是输出一套从 UI、API、检索、上下文工程到安全控制的全链路实现。",
    trigger: [
      "用户要求做 RAG、知识库问答或 AI Copilot",
      "任务横跨前端交互、后端检索和模型上下文组织",
      "需要控制召回质量、权限和输出可靠性"
    ],
    inputs: [
      "文档源、代码库、权限模型和使用场景",
      "前端交互流程、响应形态和延迟目标",
      "向量库、模型能力和部署限制"
    ],
    constraints: [
      "检索结果必须可解释、可追溯，不能纯模型幻觉",
      "上下文组织优先短而准，不要盲目堆内容",
      "需要考虑数据权限和敏感信息过滤",
      "前后端链路要同时关注延迟、失败和降级"
    ],
    workflow: [
      "定义问答场景、权限边界和检索目标",
      "设计前端交互、API 协议和召回编排",
      "输出端到端代码和评估建议"
    ],
    outputs: [
      "前后端 RAG 方案",
      "UI/API/检索代码",
      "评估与权限建议"
    ],
    tools: [
      "向量检索",
      "RAG context builder",
      "前端流式回答",
      "权限过滤"
    ],
    snippet:
      "const context = await buildRagContext({ query, topK: 5, userId });"
  },
  {
    slug: "fullstack-production-troubleshooter",
    title: "全链路生产问题排查",
    group: "Fullstack",
    category: "排障",
    level: "Expert",
    priority: "high",
    summary:
      "用于处理前端、网关、后端、数据库和缓存串联的线上故障，帮助 AI 输出高效的排障与修复方案。",
    overview:
      "当问题横跨浏览器、接口、网关、服务、数据库或缓存时触发。目标是让 AI 按证据链和影响面组织排障，而不是头痛医头脚痛医脚。",
    trigger: [
      "用户提到线上故障、接口超时、全链路异常或偶发错误",
      "问题同时影响前端展示和后端响应",
      "需要优先止血再定位根因"
    ],
    inputs: [
      "错误日志、监控图表、Trace、告警时间线",
      "受影响接口、页面和用户范围",
      "最近变更记录和基础设施状态"
    ],
    constraints: [
      "先止血与缩小影响，再深挖根因",
      "所有判断都要尽量建立在日志、Trace 和指标上",
      "必须区分临时缓解、永久修复和后续治理",
      "不要在证据不足时直接下结论"
    ],
    workflow: [
      "建立时间线和影响面，定位最可能的故障层级",
      "设计止血措施与根因排查路径",
      "输出修复方案、验证步骤和复盘项"
    ],
    outputs: [
      "排障结论与证据链",
      "临时止血和正式修复建议",
      "后续监控与治理动作"
    ],
    tools: [
      "日志",
      "APM/Trace",
      "错误监控",
      "变更记录比对"
    ],
    snippet:
      "1. Confirm blast radius\n2. Compare latest deploys\n3. Trace request path end-to-end"
  }
];
