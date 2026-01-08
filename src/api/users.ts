import type { Resource, User } from '@/types'
import api from './axios'

const loadUsers = async () => {
  const { data } = await api.get<Resource<User>>(`${import.meta.env.VITE_API_URL}/users`)
  return data
}

export { loadUsers }