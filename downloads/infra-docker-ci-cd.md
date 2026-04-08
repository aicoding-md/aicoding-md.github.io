---
name: infra-docker-ci-cd
description: 用于处理 Dockerfile、构建优化、环境注入和 CI/CD 工作流，帮助 AI 生成可部署的服务交付方案。
---

# 容器化与 CI/CD 交付

## When to use

当任务不只写代码，还要求能打包、测试、部署或发布时触发。目标是让 AI 输出真正能接入流水线和容器环境的交付配置。

## Trigger

- 用户要求补 Dockerfile、CI workflow 或部署配置
- 任务涉及镜像瘦身、构建缓存和多环境发布
- 需要从代码走到可部署产物

## Inputs

- 应用启动方式、依赖管理和环境变量
- 现有 Dockerfile、CI 配置或部署平台约束
- 测试命令、构建命令和安全要求

## Constraints

- 镜像应尽量小、可缓存且避免泄露敏感信息
- CI 流程必须包含必要的 lint/test/build 门禁
- 配置兼容当前平台，不擅自改动部署模型
- 输出需说明环境变量和密钥注入方式

## Workflow

- 确认构建、运行和发布需求
- 设计 Dockerfile、缓存层和 CI 阶段
- 输出配置文件和使用说明

## Output contract

- Dockerfile 或容器配置
- CI/CD workflow
- 部署与变量说明

## Preferred tools

- Docker
- GitHub Actions
- Build cache
- Multi-stage build

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
```
