---
name: nextjs-rsc-streaming
description: 用于处理 Next.js App Router、Server Components、Streaming、缓存和边缘渲染相关实现。
---

# Next.js RSC 与流式渲染

## When to use

当任务横跨首屏性能、SEO、服务端组件拆分和数据缓存策略时触发。目标是让 AI 产出符合 Next.js 现代实践的可运行代码，而不是仅仅把 CSR 逻辑搬到新目录。

## Trigger

- 用户要求使用 Next.js App Router 或 Server Components
- 任务涉及 Streaming、Suspense、缓存或 Edge Functions
- 需要在 SEO、首屏性能和交互能力之间做取舍

## Inputs

- 现有 Next.js 路由结构和数据获取方式
- 页面 SEO 要求、首屏指标和缓存约束
- 部署平台和边缘运行限制

## Constraints

- 先判断哪些逻辑适合 server，哪些必须保留 client
- 缓存、Streaming 和错误处理必须整体设计
- 不能把所有组件都机械改成 client component
- 输出要兼容现有目录和部署环境

## Workflow

- 划分 server/client 边界和数据获取路径
- 设计 Streaming、缓存和 fallback 策略
- 输出页面代码、数据层代码和风险说明

## Output contract

- RSC 设计方案
- 页面与数据获取代码
- 缓存与部署说明

## Preferred tools

- Next.js App Router
- React Server Components
- Suspense / Streaming
- Edge Runtime

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
export default async function Page() {
  const data = await getDashboardData();
  return <Dashboard data={data} />;
}
```
