import { isNumber } from '@/helpers/isNumber';
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const API_DELAY: number = isNumber(import.meta.env.VITE_API_DELAY)

api.interceptors.request.use(
  (config) => new Promise(resolve => setTimeout(() => resolve(config), API_DELAY))
)

export default api
