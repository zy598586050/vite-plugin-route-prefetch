# vite-plugin-route-prefetch

### 功能

✅ 自动识别路由懒加载的代码分割 chunk <br>
✅ 在构建时注入 prefetch 标签 <br>
✅ 智能跳过已有资源和 legacy 构建 <br>
✅ 支持自定义过滤规则

## Installation

```bash
# with npm
npm install vite-plugin-route-prefetch -D
# with pnpm
pnpm add vite-plugin-route-prefetch -D
```

## Usage

```js
// vite.config.ts
import { defineConfig } from 'vite'
import routePrefetch from 'vite-plugin-route-prefetch'

export default defineConfig({
  plugins: [
    routePrefetch(),
  ]
})
```