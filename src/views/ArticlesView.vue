<template>
  <div class="articles">
    <header class="articles__head">
      <div class="container">
        <span class="eyebrow">Archive</span>
        <h1 class="articles__title">全部文章</h1>
        <p class="muted">记录、思考与分享，目前共 {{ store.total }} 篇。</p>
      </div>
    </header>

    <div class="container articles__body">
      <div v-if="store.loading" class="articles__loading">加载中…</div>
      <div v-else-if="!store.list.length" class="articles__empty">
        还没有文章，敬请期待。
      </div>
      <div v-else class="articles__grid">
        <ArticleCard
          v-for="article in store.list"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArticleStore } from '@/stores/articles'
import ArticleCard from '@/components/ArticleCard.vue'

const store = useArticleStore()
onMounted(() => store.loadList({ page: 1, pageSize: 12 }))
</script>

<style scoped>
.articles__head {
  padding: 80px 0 48px;
  border-bottom: 1px solid var(--color-border);
}
.articles__title {
  font-size: clamp(36px, 4vw, 56px);
  margin: 12px 0 8px;
}
.articles__body {
  padding: 64px 0 32px;
}
.articles__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px 32px;
}
.articles__loading,
.articles__empty {
  text-align: center;
  padding: 80px 0;
  color: var(--color-text-muted);
}
@media (max-width: 1024px) {
  .articles__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .articles__grid { grid-template-columns: 1fr; }
}
</style>
