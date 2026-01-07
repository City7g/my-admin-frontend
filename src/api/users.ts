import type { User } from '@/types/Users'
import axios from 'axios'

const loadUsers = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await axios.get<User[]>(`${import.meta.env.VITE_API_URL}/users`)
  return data
}

export { loadUsers }