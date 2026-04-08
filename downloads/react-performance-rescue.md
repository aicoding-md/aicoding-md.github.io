---
name: react-performance-rescue
description: 用于解决 React 页面卡顿、重复渲染、长列表掉帧和交互迟滞，产出可直接落地的性能优化代码。
---

# React 性能救火

## When to use

当页面出现明显卡顿、列表滚动掉帧、组件重复渲染或交互响应过慢时触发。目标是帮助 AI 快速定位渲染热点，减少无效更新，并给出兼顾收益和可维护性的改造方案。

## Trigger

- 用户提到 React 页面卡顿、掉帧、输入延迟或首屏慢
- 任务涉及长列表、复杂图表、动画或频繁状态更新
- 需要对现有 React 代码做性能重构而不是简单解释

## Inputs

- 相关页面、组件和状态管理代码
- 复现步骤、性能录屏、Profiler 或 Performance 数据
- 业务约束，例如不能改变交互逻辑或接口协议

## Constraints

- 先定位性能瓶颈，再做局部优化，避免盲目全量重构
- 默认优先选择简单稳定的优化方式，而不是过度使用 memo 化
- React Compiler 或团队既有模式优先，不引入风格冲突
- 必须说明改动收益、风险和验证方式

## Workflow

- 定位最重的渲染路径、状态更新源和副作用链路
- 优先优化数据结构、渲染边界、列表策略和状态拆分
- 实现最小必要代码变更，并给出验证步骤

## Output contract

- 性能瓶颈归因
- 可提交的代码修改建议或补丁
- 验证指标和回归检查清单

## Preferred tools

- React DevTools Profiler
- Chrome DevTools Performance
- 虚拟列表
- startTransition / useDeferredValue

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

```txt
startTransition(() => {
  setFilteredRows(nextRows);
});
```
