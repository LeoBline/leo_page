# Leo Page

杂志风格的个人博客前端项目。设计强调排版、留白与图片叙事，
内容由后端 API 动态提供（无后端时自动回退到本地 mock 数据）。

## 技术栈

- **Vue 3** (`<script setup>` + Composition API)
- **Vite 5** 构建
- **Vue Router 4** 路由管理
- **Pinia** 状态管理
- **Axios** HTTP 客户端
- 纯 CSS（CSS Variables / 杂志风格设计令牌），无 UI 框架依赖

## 设计

- 黑白灰主色调 + 单一强调色（暗红）
- 衬线字体（Source Serif / Noto Serif）作为标题与正文，
  与无衬线字体（Inter）作为 UI 元素混排
- 大图叙事：首页头条采用 21:9 全幅 Hero
- 栅格化卡片列表，留白与图片比例遵循杂志版面节奏
- 移动端自适应：导航折叠、栅格降列

## 目录结构

```
leo_page/
├── public/                  # 静态资源 (favicon)
├── src/
│   ├── api/                 # API 服务层 (http, articles)
│   ├── assets/styles/       # 全局样式与设计令牌
│   ├── components/          # 公共组件 (Header, Footer, ArticleCard)
│   ├── mocks/               # 后端未就绪时的占位数据
│   ├── router/              # 路由配置
│   ├── stores/              # Pinia 状态
│   ├── views/               # 页面级组件
│   ├── App.vue
│   └── main.js
├── .env / .env.production   # 环境变量
├── vercel.json              # Vercel SPA 路由重写
├── vite.config.js
└── package.json
```

## 本地开发

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # 产出 dist/
npm run preview      # 本地预览构建产物
```

> 当 `VITE_API_BASE_URL` 为空时，前端会使用 `src/mocks/articles.js` 中的占位数据。

## 部署

项目已包含 `vercel.json`，可直接在 [Vercel](https://vercel.com) 导入仓库部署。
部署时通过环境变量 `VITE_API_BASE_URL` 指定后端地址，留空则使用 mock 数据。

## API 契约

| 方法 | 路径 | 用途 |
|---|---|---|
| GET | `/articles` | 列表（支持 `?page&pageSize&tag`） |
| GET | `/articles/featured` | 首页精选 |
| GET | `/articles/:id` | 详情 |

返回字段：`id, title, excerpt, cover, tags[], author, publishedAt, readingTime, featured, content`。

## 许可

MIT
