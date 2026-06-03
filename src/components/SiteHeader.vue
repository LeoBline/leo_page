<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="container site-header__inner">
      <RouterLink to="/" class="site-header__brand" aria-label="Leo Page">
        <span class="site-header__mark">L</span>
        <span class="site-header__name">LEO<span>·</span>PAGE</span>
      </RouterLink>

      <nav class="site-header__nav" :class="{ 'is-open': menuOpen }">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="site-header__link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button
        class="site-header__toggle"
        :aria-expanded="menuOpen"
        aria-label="切换导航"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const nav = [
  { to: '/', label: '首页' },
  { to: '/articles', label: '文章' },
  { to: '/about', label: '关于' }
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 250, 247, 0.85);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, background 0.25s ease;
}
.site-header.is-scrolled {
  border-bottom-color: var(--color-border);
}
.site-header__inner {
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.site-header__mark {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  background: var(--color-text);
  color: #fff;
  border-radius: 50%;
  font-size: 16px;
  letter-spacing: 0;
}
.site-header__name span {
  margin: 0 4px;
  color: var(--color-accent);
}
.site-header__nav {
  display: flex;
  gap: 32px;
}
.site-header__link {
  position: relative;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--color-text-soft);
  padding: 6px 0;
}
.site-header__link:hover,
.site-header__link.router-link-active {
  color: var(--color-text);
}
.site-header__link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--color-accent);
}
.site-header__toggle {
  display: none;
  width: 36px;
  height: 36px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
.site-header__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
}

@media (max-width: 768px) {
  .site-header__toggle {
    display: flex;
  }
  .site-header__nav {
    position: absolute;
    top: var(--header-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  .site-header__nav.is-open {
    max-height: 300px;
  }
  .site-header__link {
    padding: 16px 24px;
    border-top: 1px solid var(--color-border);
  }
}
</style>
