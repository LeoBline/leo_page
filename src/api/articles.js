import http from './http'
import { mockArticles } from '@/mocks/articles'

const USE_MOCK = !import.meta.env.VITE_API_BASE_URL

/**
 * 获取文章列表
 * @param {{ page?: number, pageSize?: number, tag?: string }} params
 */
export async function fetchArticles(params = {}) {
  if (USE_MOCK) {
    await delay(200)
    return paginate(mockArticles, params)
  }
  return http.get('/articles', { params })
}

/** 获取文章详情 */
export async function fetchArticleById(id) {
  if (USE_MOCK) {
    await delay(200)
    const article = mockArticles.find((a) => String(a.id) === String(id))
    if (!article) throw new Error('Article not found')
    return article
  }
  return http.get(`/articles/${id}`)
}

/** 获取精选文章（首页大图） */
export async function fetchFeatured() {
  if (USE_MOCK) {
    await delay(200)
    return mockArticles.filter((a) => a.featured).slice(0, 3)
  }
  return http.get('/articles/featured')
}

function paginate(list, { page = 1, pageSize = 9, tag } = {}) {
  const filtered = tag ? list.filter((a) => a.tags?.includes(tag)) : list
  const start = (page - 1) * pageSize
  return {
    items: filtered.slice(start, start + pageSize),
    total: filtered.length,
    page,
    pageSize
  }
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms))
}
