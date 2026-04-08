---
name: react-design-system-builder
description: 用于构建可复用组件、统一 API、样式 token 和文档示例，让 AI 生成可维护的组件系统代码。
---

# React 设计系统与组件抽象

## When to use

当任务涉及组件库、业务组件抽象、Design Token 收敛或 Storybook 文档补全时触发。目标是输出一致、可演进、具备清晰 API 边界的组件实现。

## Trigger

- 用户要求抽象重复 UI 或搭建组件库
- 任务涉及按钮、表单、弹窗、表格等基础组件统一
- 需要让新组件符合现有设计系统风格

## Inputs

- 现有组件实现、视觉规范和交互规则
- 项目中的样式方案和组件命名约定
- 组件的受控/非受控、可访问性和组合要求

## Constraints

- 优先抽象高复用能力，避免把临时业务分支固化到基础组件
- 组件 API 必须简洁、可预测，并遵循团队命名模式
- 必须考虑 a11y、键盘交互和状态边界
- 在现有设计系统上演进，不随意引入新视觉语言

## Workflow

- 分析已有组件的共性与差异，确定抽象层级
- 设计 props API、状态模型和样式 token 接口
- 输出组件代码、使用示例和测试/文档建议

## Output contract

- 组件抽象方案
- 可复用组件代码
- 示例、文档或测试建议

## Preferred tools

- React
- TypeScript
- Storybook
- Design Tokens

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};
```
