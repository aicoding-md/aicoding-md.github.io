---
name: backend-ddd-usecase
description: 用于复杂业务系统的领域对象、用例层和边界设计，让 AI 生成更贴近业务语义的后端代码。
---

# 后端领域建模与 Use Case 设计

## When to use

当任务出现业务规则复杂、状态流多、服务耦合严重或模型命名混乱时触发。目标是让 AI 从领域语言而不是数据库表结构出发重构代码。

## Trigger

- 用户提到复杂业务流程、状态机或规则散落
- 任务涉及订单、审批、结算、权限等领域逻辑
- 需要从 CRUD 代码提升到用例驱动结构

## Inputs

- 核心业务流程、规则、状态转换和角色定义
- 现有 service/model/entity 代码
- 外部依赖、事件和边界上下文

## Constraints

- 先抽象业务语言和规则，再谈技术实现
- 不要把所有概念都包装成 DDD 名词，保持务实
- 实体、值对象和用例边界必须有明确职责
- 需要兼顾现有工程演进成本

## Workflow

- 提炼领域对象、规则和状态变化
- 建立 use case 层与基础设施边界
- 输出重构方案与关键代码

## Output contract

- 领域模型草图
- use case 结构建议
- 关键服务或实体代码

## Preferred tools

- Use Case Pattern
- 状态机
- 领域事件
- 接口隔离

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
class ApproveInvoiceUseCase {
  async execute(input: ApproveInvoiceInput) {
    // domain rules here
  }
}
```
