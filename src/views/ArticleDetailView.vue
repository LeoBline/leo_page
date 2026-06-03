<template>
  <article class="detail">
    <div v-if="store.loading" class="detail__state">加载中…</div>
    <div v-else-if="!store.current" class="detail__state">文章不存在或已被删除。</div>
    <template v-else>
      <div class="detail__cover">
        <img :src="store.current.cover" :alt="store.current.title" />
      </div>

      <header class="container detail__head">
        <div class="detail__meta">
          <span v-for="t in store.current.tags" :key="t" class="tag">{{ t }}</span>
        </div>
        <h1 class="detail__title">{{ store.current.title }}</h1>
        <p class="detail__excerpt">{{ store.current.excerpt }}</p>
        <div class="detail__info">
          <span>{{ store.current.author }}</span>
          <span>·</span>
          <span>{{ formatDate(store.current.publishedAt) }}</span>
          <span v-if="store.current.readingTime">· {{ store.current.readingTime }} min read</span>
        </div>
      </header>

      <div class="container detail__content">
        <!-- 此处可接入 Markdown 渲染器，例如 markdown-it -->
        <pre class="detail__raw">{{ store.current.content }}</pre>
      </div>
    </template>
  </article>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/stores/articles'

const route = useRoute()
const store = useArticleStore()

function load() {
  store.loadDetail(route.params.id)
}

onMounted(load)
watch(() => route.params.id, load)

function formatDate(d) {
  return d ? new Date(d).toLocaleDateString('zh-CN') : ''
}
</script>

<style scoped>
.detail__cover {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
}
.detail__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.detail__head {
  max-width: 760px;
  margin: 0 auto;
  padding: 64px 24px 32px;
  text-align: center;
}
.detail__meta {
  margin-bottom: 20px;
}
.detail__title {
  font-size: clamp(32px, 4.5vw, 56px);
  line-height: 1.15;
  margin-bottom: 16px;
}
.detail__excerpt {
  font-family: var(--font-serif);
  font-size: 20px;
  line-height: 1.6;
  color: var(--color-text-soft);
  font-style: italic;
  margin: 0 0 24px;
}
.detail__info {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}
.detail__content {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 24px 80px;
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 1.85;
  color: var(--color-text);
}
.detail__raw {
  white-space: pre-wrap;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
}
.detail__state {
  text-align: center;
  padding: 120px 0;
  color: var(--color-text-muted);
}
</style>
