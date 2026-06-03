<template>
  <div class="about">
    <div class="container about__inner">
      <span class="eyebrow">About</span>
      <h1 class="about__title">关于 Leo</h1>
      <div class="about__content">
        <p>
          你好，我是 <strong>Leo</strong>。这里是我记录技术、阅读、生活和摄影的小角落。
        </p>
        <p>
          我相信持续写作是一种思考方式，也是一种对自己负责的态度。
          这个站点由 Vue 3 + Vite 构建，部署在 Vercel，
          数据来源于后端 API——当你看到这篇文章时，API 已经上线。
        </p>
        <p>
          如果你想交流，欢迎通过页脚的邮箱与我联系。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 120px 0 80px;
}
.about__inner {
  max-width: 720px;
}
.about__title {
  font-size: clamp(36px, 4.5vw, 56px);
  margin: 12px 0 32px;
}
.about__content {
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 1.85;
  color: var(--color-text);
}
.about__content p + p {
  margin-top: 1.2em;
}
</style>
