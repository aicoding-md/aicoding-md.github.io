---
name: fullstack-production-troubleshooter
description: 用于处理前端、网关、后端、数据库和缓存串联的线上故障，帮助 AI 输出高效的排障与修复方案。
---

# 全链路生产问题排查

## When to use

当问题横跨浏览器、接口、网关、服务、数据库或缓存时触发。目标是让 AI 按证据链和影响面组织排障，而不是头痛医头脚痛医脚。

## Trigger

- 用户提到线上故障、接口超时、全链路异常或偶发错误
- 问题同时影响前端展示和后端响应
- 需要优先止血再定位根因

## Inputs

- 错误日志、监控图表、Trace、告警时间线
- 受影响接口、页面和用户范围
- 最近变更记录和基础设施状态

## Constraints

- 先止血与缩小影响，再深挖根因
- 所有判断都要尽量建立在日志、Trace 和指标上
- 必须区分临时缓解、永久修复和后续治理
- 不要在证据不足时直接下结论

## Workflow

- 建立时间线和影响面，定位最可能的故障层级
- 设计止血措施与根因排查路径
- 输出修复方案、验证步骤和复盘项

## Output contract

- 排障结论与证据链
- 临时止血和正式修复建议
- 后续监控与治理动作

## Preferred tools

- 日志
- APM/Trace
- 错误监控
- 变更记录比对

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
1. Confirm blast radius
2. Compare latest deploys
3. Trace request path end-to-end
```
