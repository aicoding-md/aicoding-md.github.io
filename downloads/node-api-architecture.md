---
name: node-api-architecture
description: 用于构建或重构 Node.js API 服务，处理路由、服务层、仓储层、验证与错误模型。
---

# Node API 架构与分层重构

## When to use

当任务涉及 Express、NestJS、Fastify 或自建 Node 服务的结构设计时触发。目标是生成可维护、分层清晰、易测试的后端代码，而不是把逻辑堆在 controller 中。

## Trigger

- 用户要求搭建或重构 Node API
- 任务涉及分层设计、DTO、校验和错误处理
- 需要补齐服务结构、目录规范和可测试性

## Inputs

- 现有路由、服务、数据库访问代码
- 接口定义、鉴权方式和错误返回规范
- 框架类型和部署约束

## Constraints

- 保持 controller 薄、业务逻辑集中在 service/use-case
- 所有外部输入都需要验证和类型约束
- 错误模型、日志和响应格式应统一
- 改造时尽量兼容现有接口契约

## Workflow

- 分析现有代码层次和职责混乱点
- 设计路由、服务、仓储和校验边界
- 输出结构化代码和迁移建议

## Output contract

- 服务分层方案
- 接口代码或重构补丁
- 测试和迁移建议

## Preferred tools

- Express/NestJS/Fastify
- Zod/class-validator
- 统一错误处理中间件
- 依赖注入

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
router.post('/users', validate(createUserSchema), createUserHandler);
```
