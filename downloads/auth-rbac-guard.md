---
name: auth-rbac-guard
description: 用于处理登录态、JWT、Session、RBAC/ABAC 权限和接口安全边界，帮助 AI 生成可靠的后端权限实现。
---

# 鉴权、RBAC 与安全边界

## When to use

当任务涉及用户登录、权限校验、组织角色、资源授权或接口安全整改时触发。目标是让 AI 从认证和授权两个层面一起设计，不只写一个 middleware。

## Trigger

- 用户提到登录、JWT、Session、RBAC、ABAC 或权限问题
- 任务涉及组织、角色、菜单、资源授权
- 需要统一接口权限和前端可见性规则

## Inputs

- 用户模型、角色模型和资源权限关系
- 登录流程、token/session 策略和现有中间件
- 接口规范和审计要求

## Constraints

- 认证和授权必须分层处理
- 权限模型要与业务资源边界一致，避免散落 if 判断
- 所有敏感接口默认拒绝，显式授权
- 要考虑审计、过期、撤权和多端登录行为

## Workflow

- 梳理认证流程与资源模型
- 设计守卫、中间件和权限校验层
- 输出代码、策略和审计建议

## Output contract

- 权限模型设计
- 鉴权/授权代码
- 审计与安全建议

## Preferred tools

- JWT / Session
- RBAC / ABAC
- 中间件 / Guard
- 审计日志

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
if (!ability.can('update', invoice)) {
  throw new ForbiddenError('No permission');
}
```
