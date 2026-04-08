---
name: fullstack-ai-rag-platform
description: 用于构建从前端交互到后端检索、上下文编排和回答生成的 RAG 功能链路。
---

# 全栈 AI RAG 平台接入

## When to use

当任务涉及企业内部问答、代码知识库、配置生成平台或 AI Copilot 功能时触发。目标是输出一套从 UI、API、检索、上下文工程到安全控制的全链路实现。

## Trigger

- 用户要求做 RAG、知识库问答或 AI Copilot
- 任务横跨前端交互、后端检索和模型上下文组织
- 需要控制召回质量、权限和输出可靠性

## Inputs

- 文档源、代码库、权限模型和使用场景
- 前端交互流程、响应形态和延迟目标
- 向量库、模型能力和部署限制

## Constraints

- 检索结果必须可解释、可追溯，不能纯模型幻觉
- 上下文组织优先短而准，不要盲目堆内容
- 需要考虑数据权限和敏感信息过滤
- 前后端链路要同时关注延迟、失败和降级

## Workflow

- 定义问答场景、权限边界和检索目标
- 设计前端交互、API 协议和召回编排
- 输出端到端代码和评估建议

## Output contract

- 前后端 RAG 方案
- UI/API/检索代码
- 评估与权限建议

## Preferred tools

- 向量检索
- RAG context builder
- 前端流式回答
- 权限过滤

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
const context = await buildRagContext({ query, topK: 5, userId });
```
