<template>
  <div class="home">
    <!-- Hero 头条大图 -->
    <section v-if="hero" class="home__hero">
      <div class="home__hero-media">
        <img :src="hero.cover" :alt="hero.title" />
        <div class="home__hero-overlay"></div>
      </div>
      <div class="container home__hero-content">
        <span class="eyebrow">本周精选</span>
        <h1 class="home__hero-title">
          <RouterLink :to="`/articles/${hero.id}`">{{ hero.title }}</RouterLink>
        </h1>
        <p class="home__hero-excerpt">{{ hero.excerpt }}</p>
        <div class="home__hero-meta">
          <span>{{ hero.author }}</span>
          <span>·</span>
          <span>{{ formatDate(hero.publishedAt) }}</span>
        </div>
      </div>
    </section>

    <!-- 编辑精选 -->
    <section class="home__section">
      <div class="container">
        <div class="home__section-head">
          <span class="eyebrow">Editor's Pick</span>
          <h2 class="home__section-title">编辑精选</h2>
        </div>
        <div v-if="store.featured.length" class="home__featured">
          <ArticleCard
            v-for="(article, i) in store.featured"
            :key="article.id"
            :article="article"
            :variant="i === 0 ? 'feature' : 'default'"
          />
        </div>
      </div>
    </section>

    <!-- 最新文章 -->
    <section class="home__section home__section--alt">
      <div class="container">
        <div class="home__section-head">
          <span class="eyebrow">Latest</span>
          <h2 class="home__section-title">最新发布</h2>
          <RouterLink to="/articles" class="home__more">查看全部 →</RouterLink>
        </div>
        <div class="home__grid">
          <ArticleCard
            v-for="article in latest"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useArticleStore } from '@/stores/articles'
import ArticleCard from '@/components/ArticleCard.vue'

const store = useArticleStore()

onMounted(async () => {
  await Promise.all([store.loadFeatured(), store.loadList({ page: 1, pageSize: 6 })])
})

const hero = computed(() => store.featured[0])
const latest = computed(() => store.list.filter((a) => !a.featured).slice(0, 3))

function formatDate(d) {
  return d ? new Date(d).toLocaleDateString('zh-CN') : ''
}
</script>

<style scoped>
.home__hero {
  position: relative;
  height: 80vh;
  min-height: 520px;
  display: grid;
  align-items: end;
  overflow: hidden;
}
.home__hero-media,
.home__hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, var(--color-overlay) 100%);
}
.home__hero-content {
  position: relative;
  z-index: 1;
  color: #fff;
  padding-bottom: 64px;
}
.home__hero-title {
  font-size: clamp(32px, 5vw, 64px);
  max-width: 820px;
  margin: 16px 0 20px;
  line-height: 1.1;
}
.home__hero-title a:hover {
  color: #fff;
  opacity: 0.9;
}
.home__hero-excerpt {
  max-width: 640px;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0 0 16px;
}
.home__hero-meta {
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  gap: 6px;
  opacity: 0.85;
}
.home__hero-content .eyebrow {
  color: #fff;
  opacity: 0.9;
}

.home__section {
  padding: 96px 0;
}
.home__section--alt {
  background: var(--color-bg-alt);
}
.home__section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}
.home__section-title {
  font-size: clamp(28px, 3vw, 40px);
}
.home__more {
  font-size: 14px;
  letter-spacing: 0.04em;
}

.home__featured {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 48px;
  align-items: start;
}
.home__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 32px;
}

@media (max-width: 1024px) {
  .home__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .home__featured {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .home__grid {
    grid-template-columns: 1fr;
  }
  .home__section {
    padding: 64px 0;
  }
}
</style>
