import api from './axios'
import type { Resource, User } from '@/types'
import type { RequireKey } from '@/types/helpers'

const loadUsers = async () => {
  const { data } = await api.get<Resource<User>>(`/users`)
  return data
}

const updateUser = async ({ id, ...body }: RequireKey<User, 'id'>) => {
  await api.patch<Resource<void>>(`/users/${id}`, body)
}

const deleteUser = async (id: User['id']) => {
  await api.delete<Resource<void>>(`/users/${id}`)
}

export { loadUsers, updateUser, deleteUser }