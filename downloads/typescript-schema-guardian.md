---
name: typescript-schema-guardian
description: 用于为复杂 JSON 配置、表单 schema 和 API 响应建立高可靠类型约束，提升 AI 生成代码的正确率。
---

# TypeScript Schema 强约束

## When to use

当任务需要强类型保护、泛型工具、schema 校验或类型推导时触发。目标是让 AI 输出能被 IDE 正确提示、能在构建期拦住错误的类型系统实现。

## Trigger

- 用户要求为配置系统或 API 层补强 TypeScript 类型
- 任务涉及复杂泛型、条件类型或 schema 推导
- 需要把运行时校验和编译期提示对齐

## Inputs

- 现有类型定义、schema 和接口示例
- 错误样例或期望的 IDE 提示效果
- 项目 TS 版本和 eslint/tsconfig 约束

## Constraints

- 类型设计服务业务正确性，不做无意义炫技
- 优先保证可读性和维护性，再追求极致推导
- 运行时 schema 和静态类型尽量保持一致
- 必须给出示例和失败用例说明

## Workflow

- 分析数据结构和错误边界
- 设计类型、schema 和推导辅助工具
- 输出类型代码、示例和验证方式

## Output contract

- 类型系统设计
- schema 与类型定义
- 示例和约束说明

## Preferred tools

- TypeScript 5.x
- Zod
- satisfies
- 条件类型

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
const pageSchema = {
  type: 'table',
  columns: ['id', 'name']
} as const satisfies PageConfig;
```
