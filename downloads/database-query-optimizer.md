---
name: database-query-optimizer
description: 用于处理 SQL 慢查询、索引失效、N+1、分页和 ORM 查询膨胀问题，帮助 AI 生成更高效的数据访问代码。
---

# 数据库查询与索引优化

## When to use

当接口慢、数据库 CPU 飙高、列表查询异常重或报表逻辑效率差时触发。目标是让 AI 从执行计划和访问模式出发优化，而不是只换一种 ORM 写法。

## Trigger

- 用户提到慢查询、索引优化、分页性能或 N+1
- 任务涉及 SQL、ORM、聚合报表或复杂过滤条件
- 需要数据库层面的性能诊断

## Inputs

- SQL/ORM 查询代码
- 表结构、索引、执行计划和数据量级
- 响应时间目标和读写比例

## Constraints

- 先看执行计划和数据分布，再建议索引
- 不能为了查询速度破坏写入成本和数据一致性
- 分页、排序和过滤要结合真实使用路径设计
- 必须说明索引和查询改造的副作用

## Workflow

- 识别最重查询和访问模式
- 优化 SQL、索引、分页或预计算策略
- 输出查询代码与验证方法

## Output contract

- 查询瓶颈分析
- SQL/索引优化建议
- 验证与回滚说明

## Preferred tools

- EXPLAIN
- 慢查询日志
- 索引设计
- ORM query plan

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
CREATE INDEX idx_orders_user_status_created_at ON orders(user_id, status, created_at DESC);
```
