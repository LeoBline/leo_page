<template>
  <div class="nf">
    <div class="container nf__inner">
      <h1 class="nf__code">404</h1>
      <p class="nf__hint">这里空无一物。</p>
      <RouterLink to="/" class="btn btn--primary">回到首页</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nf {
  padding: 160px 0;
  text-align: center;
}
.nf__code {
  font-size: 120px;
  letter-spacing: -0.02em;
  color: var(--color-text-muted);
}
.nf__hint {
  font-family: var(--font-serif);
  font-size: 22px;
  color: var(--color-text-soft);
  margin: 0 0 32px;
}
</style>
