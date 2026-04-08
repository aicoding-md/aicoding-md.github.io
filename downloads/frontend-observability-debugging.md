---
name: frontend-observability-debugging
description: 用于排查线上 JS 报错、白屏、接口异常和用户路径问题，产出监控埋点与修复方案。
---

# 前端可观测性与线上排障

## When to use

当任务是线上问题排查而不是纯开发时触发。目标是让 AI 从日志、监控和用户路径入手，补齐可观测性并给出最小风险修复方案。

## Trigger

- 用户提到线上白屏、异常率升高、偶发错误难复现
- 任务涉及埋点、告警、会话回放或错误归因
- 需要先提升可观测性再修问题

## Inputs

- 错误堆栈、监控平台数据和接口日志
- 埋点代码、告警规则和会话回放信息
- 受影响页面、用户路径和时间窗口

## Constraints

- 先确认问题范围和影响，再建议修复
- 监控补点要低侵入、可维护，避免噪音告警
- 输出必须包含验证修复是否生效的方法
- 不要在证据不足时臆造根因

## Workflow

- 归纳报错特征、影响范围和复现窗口
- 沿错误链路补齐日志、埋点或告警缺口
- 输出修复建议与观测性改造方案

## Output contract

- 根因假设和证据链
- 监控或埋点补强建议
- 修复与回归验证清单

## Preferred tools

- Sentry/前端监控
- 日志埋点
- 会话回放
- Source Map

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
window.addEventListener('error', (event) => {
  reportClientError(event.error);
});
```
