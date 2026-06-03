<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <h3 class="site-footer__title">LEO · PAGE</h3>
        <p class="muted">记录、思考与分享。一个人的杂志。</p>
      </div>
      <div class="site-footer__col">
        <h4>导航</h4>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/articles">文章</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
      </div>
      <div class="site-footer__col">
        <h4>联系</h4>
        <a href="mailto:hi@leo.page">hi@leo.page</a>
        <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
    <div class="container site-footer__bottom">
      <span class="muted">© {{ year }} Leo Page. All rights reserved.</span>
      <span class="muted">Built with Vue 3 · Vite</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background: #14110f;
  color: #d9d5cd;
  padding: 64px 0 24px;
  margin-top: 80px;
}
.site-footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid #2a2723;
}
.site-footer__title {
  font-size: 24px;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.site-footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.site-footer__col h4 {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #f0eee9;
  margin-bottom: 4px;
}
.site-footer__col a {
  color: #b6b1a9;
  font-size: 14px;
}
.site-footer__col a:hover {
  color: #fff;
}
.site-footer__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  font-size: 13px;
}
@media (max-width: 768px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .site-footer__bottom {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
