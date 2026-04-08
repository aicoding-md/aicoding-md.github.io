---
name: event-driven-async-jobs
description: 用于处理消息队列、异步任务、补偿重试和事件解耦，让 AI 生成更稳健的后台任务系统。
---

# 异步任务与事件驱动架构

## When to use

当任务需要把同步接口拆成异步流程，或需要设计任务队列、消息消费和失败补偿时触发。目标是保证幂等、可追踪和可重试，而不是单纯把逻辑塞进定时任务。

## Trigger

- 用户提到消息队列、任务队列、重试或补偿机制
- 任务涉及邮件、通知、导出、结算等异步流程
- 需要从同步调用改造成事件驱动

## Inputs

- 业务流程、成功/失败路径和时序要求
- 现有同步调用代码和依赖关系
- 队列基础设施和告警能力

## Constraints

- 必须考虑幂等、重试、死信和追踪
- 事件名称和 payload 结构要稳定可演进
- 不能牺牲一致性和可排障性换取表面解耦
- 输出要包含失败恢复与人工处理路径

## Workflow

- 拆解同步链路，识别可异步化节点
- 设计事件、消费逻辑和失败恢复
- 输出生产者/消费者代码和运行保障方案

## Output contract

- 异步架构方案
- 任务代码或事件代码
- 重试/告警/排障建议

## Preferred tools

- BullMQ / RabbitMQ / Kafka
- 幂等键
- 死信队列
- 任务追踪

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
await queue.add('send-email', { userId, templateId }, { attempts: 3, backoff: 5000 });
```
