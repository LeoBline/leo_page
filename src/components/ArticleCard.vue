<template>
  <RouterLink :to="`/articles/${article.id}`" class="card" :class="`card--${variant}`">
    <div class="card__cover">
      <img :src="article.cover" :alt="article.title" loading="lazy" />
    </div>
    <div class="card__body">
      <div class="card__meta">
        <span v-for="t in article.tags" :key="t" class="tag">{{ t }}</span>
      </div>
      <h3 class="card__title">{{ article.title }}</h3>
      <p v-if="variant !== 'mini'" class="card__excerpt">{{ article.excerpt }}</p>
      <div class="card__footer">
        <span>{{ article.author }}</span>
        <span>·</span>
        <span>{{ formatDate(article.publishedAt) }}</span>
        <span v-if="article.readingTime">· {{ article.readingTime }} min</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  article: { type: Object, required: true },
  variant: { type: String, default: 'default' } // default | feature | mini
})

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.card {
  display: block;
  color: inherit;
  transition: transform 0.4s ease;
}
.card:hover {
  transform: translateY(-4px);
  color: inherit;
}
.card__cover {
  overflow: hidden;
  background: var(--color-bg-alt);
  margin-bottom: 20px;
}
.card__cover img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.card:hover .card__cover img {
  transform: scale(1.05);
}
.card--feature .card__cover img {
  aspect-ratio: 21 / 9;
}
.card--mini .card__cover img {
  aspect-ratio: 4 / 3;
}
.card__meta {
  margin-bottom: 12px;
}
.card__title {
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 10px;
}
.card--feature .card__title {
  font-size: 36px;
}
.card--mini .card__title {
  font-size: 18px;
}
.card__excerpt {
  color: var(--color-text-soft);
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 16px;
}
.card__footer {
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
</style>
