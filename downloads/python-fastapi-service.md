---
name: python-fastapi-service
description: 用于构建 FastAPI 服务、依赖注入、Pydantic 模型和异步接口，实现整洁的 Python 后端代码。
---

# Python FastAPI 服务实现

## When to use

当任务使用 Python 后端，特别是 FastAPI、异步接口和数据校验时触发。目标是生成结构清晰、具备类型和验证能力的服务实现。

## Trigger

- 用户明确要求 FastAPI 或 Python API 服务
- 任务涉及 Pydantic、依赖注入或异步 I/O
- 需要快速交付规范的 Python Web 服务

## Inputs

- 接口定义、数据模型和数据库访问需求
- 现有项目结构、依赖注入方式和测试方案
- 部署目标和 Python 版本

## Constraints

- 路由、服务、仓储和 schema 分层清晰
- 所有入参和出参都用 Pydantic 约束
- 异步代码避免阻塞调用混入
- 输出需包含错误处理和测试入口

## Workflow

- 确定接口、模型和依赖边界
- 实现路由、服务、schema 和异常处理
- 补齐测试与启动说明

## Output contract

- FastAPI 服务代码
- schema 和依赖结构
- 测试或运行说明

## Preferred tools

- FastAPI
- Pydantic
- SQLAlchemy/async driver
- pytest

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
@router.post('/users', response_model=UserResponse)
async def create_user(payload: CreateUserRequest):
    return await service.create_user(payload)
```
