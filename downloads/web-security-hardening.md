---
name: web-security-hardening
description: 用于处理 XSS、CSRF、权限泄露、Token 暴露和前端安全基线问题，帮助 AI 生成更安全的实现。
---

# Web 安全加固

## When to use

当任务涉及登录态、富文本、文件上传、权限控制或安全整改时触发。目标是让 AI 识别高风险点，生成符合现代 Web 安全实践的代码和防护建议。

## Trigger

- 用户提到 XSS、CSRF、鉴权、Cookie、Token 或权限问题
- 任务涉及富文本、上传、跨域或第三方脚本
- 需要对现有前端代码做安全整改

## Inputs

- 鉴权流程、请求头、Cookie 策略和相关代码
- 富文本、上传或外链脚本的处理逻辑
- 接口安全约束和部署环境

## Constraints

- 先识别威胁模型，再给方案，不泛化堆概念
- 前端措施要和后端鉴权策略对齐
- 不能引入会破坏登录态或业务流的激进变更
- 必须标明哪些风险需要后端配合

## Workflow

- 识别攻击面和数据入口
- 判断前端、后端和平台层各自责任
- 输出代码修复、配置调整和联动建议

## Output contract

- 安全风险列表
- 前端修复建议
- 需要后端/运维协同的事项

## Preferred tools

- CSP
- DOMPurify
- SameSite Cookie
- 权限中间层

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
const safeHtml = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
```
