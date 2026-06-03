// 前端无后端时的占位数据，便于本地开发与 UI 调试
// 后端 API 就绪后，配置 VITE_API_BASE_URL 即会自动切换到真实接口

export const mockArticles = [
  {
    id: 1,
    title: '在云端搭建一个属于自己的博客',
    excerpt: '从零开始用 Vue 3 + Vite + Serverless Functions 构建并部署一个全栈博客。',
    cover: 'https://picsum.photos/seed/leo1/1200/700',
    tags: ['Vue', 'Vercel', '教程'],
    author: 'Leo',
    publishedAt: '2026-05-12',
    readingTime: 8,
    featured: true,
    content: '## 开始\n\n这是文章的示例内容，部署后端后将被 API 返回的 Markdown 替换。'
  },
  {
    id: 2,
    title: '杂志风排版：让内容呼吸',
    excerpt: '通过字体、留白与图片比例，重新审视博客的视觉节奏。',
    cover: 'https://picsum.photos/seed/leo2/1200/700',
    tags: ['设计', '排版'],
    author: 'Leo',
    publishedAt: '2026-05-08',
    readingTime: 6,
    featured: true,
    content: '## 排版\n\n好的排版是看不见的设计。'
  },
  {
    id: 3,
    title: '我读《人类简史》',
    excerpt: '从认知革命到算法时代，一次跨越数万年的人类观察。',
    cover: 'https://picsum.photos/seed/leo3/1200/700',
    tags: ['阅读', '思考'],
    author: 'Leo',
    publishedAt: '2026-04-30',
    readingTime: 12,
    featured: true,
    content: '## 读后感\n\n历史的偶然性远大于必然性。'
  },
  {
    id: 4,
    title: 'TypeScript 让我重新思考 JavaScript',
    excerpt: '类型系统不是束缚，而是让代码更易读、更易维护的桥梁。',
    cover: 'https://picsum.photos/seed/leo4/1200/700',
    tags: ['TypeScript', '前端'],
    author: 'Leo',
    publishedAt: '2026-04-20',
    readingTime: 10,
    content: '## 类型即文档'
  },
  {
    id: 5,
    title: '在 Mac 上配置一个舒适的前端开发环境',
    excerpt: '从终端到编辑器，从字体到快捷键，工具的意义是放大专注。',
    cover: 'https://picsum.photos/seed/leo5/1200/700',
    tags: ['工具', '前端'],
    author: 'Leo',
    publishedAt: '2026-04-10',
    readingTime: 7,
    content: '## 工具清单'
  },
  {
    id: 6,
    title: '摄影：街头的瞬间',
    excerpt: '用一台胶片机记录城市的日常，光与影的偶然。',
    cover: 'https://picsum.photos/seed/leo6/1200/700',
    tags: ['摄影', '随笔'],
    author: 'Leo',
    publishedAt: '2026-03-28',
    readingTime: 5,
    content: '## 关于摄影'
  }
]
