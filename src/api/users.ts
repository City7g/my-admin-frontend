import type { Resource, User } from '@/types'
import axios from 'axios'

const loadUsers = async () => {
  await new Promise(resolve => setTimeout(resolve, +import.meta.env.VITE_TIMEOUT ?? 0))
  const { data } = await axios.get<Resource<User>>(`${import.meta.env.VITE_API_URL}/users`)
  return data
}

export { loadUsers }