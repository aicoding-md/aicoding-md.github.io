---
name: fullstack-monorepo-governor
description: 用于治理前后端 Monorepo 的包边界、共享代码、构建缓存、发布策略和依赖一致性。
---

# 全栈 Monorepo 治理

## When to use

当任务横跨前端、后端、共享包和基础设施时触发。目标是让 AI 在保持协作效率的同时，避免 Monorepo 变成耦合泥团。

## Trigger

- 用户要求搭建或重构 Monorepo
- 任务涉及前端应用、后端服务和 shared package 共存
- 需要统一 lint、测试、构建和发布策略

## Inputs

- 现有仓库结构、包关系和构建工具
- 应用数量、共享代码范围和团队协作模式
- 发布方式和缓存需求

## Constraints

- 共享代码只抽高稳定共性，避免任意跨包引用
- 边界要清晰，可见依赖关系要可治理
- 构建和测试必须支持增量执行
- 输出需兼顾本地开发体验和 CI 速度

## Workflow

- 分析包结构和依赖耦合
- 设计 workspace、共享包和任务管线
- 输出目录方案、配置文件和治理规则

## Output contract

- Monorepo 结构设计
- 工具配置和脚本
- 边界治理建议

## Preferred tools

- pnpm workspace
- Turborepo/Nx
- Changesets
- 共享类型包

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
"workspaces": ["apps/*", "packages/*"]
```
