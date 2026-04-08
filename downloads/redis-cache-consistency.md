---
name: redis-cache-consistency
description: 用于设计缓存键、过期策略、热点防护和缓存一致性，让 AI 生成稳定的高并发缓存方案。
---

# Redis 缓存与一致性治理

## When to use

当任务涉及读多写少、热点数据、缓存雪崩、击穿和脏数据问题时触发。目标是平衡性能收益与一致性复杂度，生成可维护的缓存层实现。

## Trigger

- 用户提到 Redis、缓存击穿、热点 Key 或数据不一致
- 任务涉及接口加速、排行榜、配置缓存或分布式锁
- 需要设计缓存策略而不只是简单 set/get

## Inputs

- 数据读写模式、流量峰值和一致性要求
- 当前缓存代码、key 设计和过期策略
- 数据库更新路径和失效机制

## Constraints

- 先明确一致性等级，再设计缓存更新方案
- Key 命名、过期策略和失效逻辑必须统一
- 防击穿方案要避免引入复杂且脆弱的锁逻辑
- 必须说明缓存失效和数据回源路径

## Workflow

- 分析热点与一致性要求
- 设计缓存 key、TTL、回源和失效机制
- 输出缓存代码与监控指标

## Output contract

- 缓存策略设计
- Redis 接入代码
- 一致性与监控建议

## Preferred tools

- Redis
- TTL
- 请求合并
- 热点探测

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
const cacheKey = `user:profile:${userId}`;
await redis.set(cacheKey, JSON.stringify(profile), 'EX', 300);
```
