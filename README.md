# vite-plugin-history

`Vite` 功能增强插件，对 `connect-history-api-fallback` 的二次封装。主要解决路径访问 `url` 重写等问题。

### 使用方法

目录
```
├── package.json
├── vite.config.js
└── pages
    ├── pageA
    |    ├── index.html
    |    └── index.js
    └── pageB
         ├── index.html
         └── index.js
```

安装插件

```base
yarn add vite-plugin-history --dev
```

使用插件

```js
import { createVuePlugin } from 'vite-plugin-vue2'
import history from 'vite-plugin-history'

const pages = {
    pageA: './pages/pageA/index.html',
    pageB: './pages/pageB/index.html',
}

const rewrites = Object.keys(pages).map(name => ({
  from: `/${name}`,
  to: `./pages/${name}/index.html`
})).concat({
  from: /^\/$/,
  to: './pages/pageA/index.html'
})

export default {
    build: {
        rollupOptions: {
            input: pages,
        }
    },
    plugins: [
        createVuePlugin(),
        history({
            logger: console.log.bind(console),
            rewrites
        }),
    ],
}
```
