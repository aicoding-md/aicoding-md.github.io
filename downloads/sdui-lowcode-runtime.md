---
name: sdui-lowcode-runtime
description: 用于设计 Server-Driven UI、低代码渲染引擎和页面协议，让 AI 生成可演进的动态化方案。
---

# 前端动态化与低代码运行时

## When to use

当任务涉及 JSON 协议渲染、配置化页面、运营平台和动态组件注册时触发。目标是生成稳定的协议、渲染器和治理机制，而不是一次性的页面拼装脚本。

## Trigger

- 用户要求通过配置或协议驱动页面渲染
- 任务涉及低代码平台、搭建平台或动态发版
- 需要处理 schema、回滚、灰度和多端兼容

## Inputs

- 现有页面结构、组件库和平台目标
- 协议草案、字段定义和版本策略
- 发布链路、灰度和回滚要求

## Constraints

- 协议必须优先考虑版本兼容和异常兜底
- 组件能力通过注册表和 schema 限制
- 输出需要包含治理、回滚和监控设计
- 不要把所有业务特例都塞进基础协议

## Workflow

- 定义协议边界、组件模型和运行时职责
- 设计 schema、渲染映射和灰度回滚机制
- 输出运行时代码与治理建议

## Output contract

- 协议定义
- 运行时渲染代码
- 灰度/监控/回滚方案

## Preferred tools

- JSON Schema
- Zod
- 组件注册表
- 动态配置平台

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
{
  "type": "hero-banner",
  "props": {
    "title": "限时活动"
  }
}
```
