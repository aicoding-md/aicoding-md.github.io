---
name: backend-testing-replay
description: 用于建立接口单测、集成测试、契约测试和流量回放体系，帮助 AI 生成更可信的后端改造方案。
---

# 后端测试矩阵与流量回放

## When to use

当任务涉及高风险改造、复杂业务流程验证或线上行为回归时触发。目标是让 AI 不只写业务代码，还同步给出验证体系，降低改动上线风险。

## Trigger

- 用户要求补测试、做回归、验证老逻辑不被破坏
- 任务涉及接口重构、数据库改造或高风险业务流程
- 需要影子流量、录制回放或契约测试

## Inputs

- 核心接口、业务流程和历史 bug 样本
- 现有测试框架、mock 策略和 CI 流程
- 线上流量录制或请求样本

## Constraints

- 优先覆盖高风险路径和历史易错点
- 测试要稳定可重复，避免强耦合外部环境
- 回放策略必须脱敏并控制资源消耗
- 输出需包含如何将验证接入 CI

## Workflow

- 确定风险最高的接口和业务链路
- 设计单测、集成、契约和回放分层验证
- 输出测试代码与接入方式

## Output contract

- 测试策略
- 测试或回放代码
- CI 接入建议

## Preferred tools

- Jest / Vitest
- Supertest
- Contract Test
- 流量录制与回放

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
it('replays recorded checkout payloads', async () => {
  const result = await replayCase(caseFixture);
  expect(result.status).toBe(200);
});
```
