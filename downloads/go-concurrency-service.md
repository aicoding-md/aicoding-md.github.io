---
name: go-concurrency-service
description: 用于处理 Go 服务中的 goroutine、context、并发控制和高性能接口实现。
---

# Go 并发服务与可靠接口

## When to use

当任务需要用 Go 实现高并发 API、并发任务或资源控制时触发。目标是帮助 AI 生成符合 Go 习惯、可取消、可观测的并发代码。

## Trigger

- 用户要求使用 Go 编写 API 或并发任务
- 任务涉及 goroutine、worker pool、context 传播
- 需要关注高并发和资源控制

## Inputs

- 接口需求、并发模型和外部依赖
- 现有 Go 项目结构、日志和监控方式
- 超时、重试和资源上限要求

## Constraints

- 所有并发流程都要配合 context 和超时控制
- 避免 goroutine 泄漏和无界 worker 扩张
- 错误聚合、日志和监控必须清晰
- 输出要符合 Go 简洁直接的编码风格

## Workflow

- 设计并发边界、取消路径和资源上限
- 实现 handler、service 和并发执行逻辑
- 补充测试和可观测性建议

## Output contract

- Go 服务代码
- 并发控制策略
- 测试与监控建议

## Preferred tools

- Go context
- goroutine / channel
- worker pool
- pprof

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
ctx, cancel := context.WithTimeout(ctx, 2*time.Second)
defer cancel()
```
