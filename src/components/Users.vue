<script setup lang="ts">
import { loadUsers, deleteUser, updateUser } from '@/api'
import Table from '@/components/Table.vue'
import { useMutation, useQuery } from '@tanstack/vue-query'
import withNotification from '@/helpers/withNotification'
import Toggle from './Toggle.vue'

const { data: users, status, fetchStatus, refetch } = useQuery({
  queryKey: ['users'],
  queryFn: withNotification('users', loadUsers),
})

const { mutate: toggleAdmin } = useMutation({
  mutationFn: withNotification('users', updateUser),
  onSettled: () => refetch(),
})

const { mutate: removeUser } = useMutation({
  mutationFn: withNotification('users', deleteUser),
  onSettled: () => refetch(),
})
</script>

<template>
  <div>
    <Table :items="users" :columns="{ id: 'ID', name: 'Name', email: 'Email', admin: 'Admin', action: 'Actions' }" :status :fetchStatus>
      <template #cell-admin="{ item }">
        <Toggle :modelValue="item.isAdmin" @update:model-value="toggleAdmin({ id: item.id, isAdmin: !item.isAdmin })" />
      </template>

      <template #cell-action="{ item }">
        <button class="text-blue-700 hover:text-blue-500 font-medium">Edit</button>
        <button @click="removeUser(item.id)" class="text-red-700 hover:text-red-500 font-medium">Delete</button>
      </template>
    </Table>
  </div>
</template>
