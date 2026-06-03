import { defineStore } from 'pinia'
import { fetchArticles, fetchArticleById, fetchFeatured } from '@/api/articles'

export const useArticleStore = defineStore('articles', {
  state: () => ({
    list: [],
    featured: [],
    current: null,
    loading: false,
    total: 0
  }),
  actions: {
    async loadList(params) {
      this.loading = true
      try {
        const data = await fetchArticles(params)
        this.list = data.items || data
        this.total = data.total ?? this.list.length
      } finally {
        this.loading = false
      }
    },
    async loadFeatured() {
      this.featured = await fetchFeatured()
    },
    async loadDetail(id) {
      this.loading = true
      this.current = null
      try {
        this.current = await fetchArticleById(id)
      } finally {
        this.loading = false
      }
    }
  }
})
