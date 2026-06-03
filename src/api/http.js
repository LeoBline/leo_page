import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 10000
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('[API ERROR]', error?.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default http
