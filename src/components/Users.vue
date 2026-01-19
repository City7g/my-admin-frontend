<script setup lang="ts">
import { loadUsers, deleteUser, updateUser } from '@/api'
import { useMutation, useQuery } from '@tanstack/vue-query'
import withNotification from '@/helpers/withNotification'
import { ref } from 'vue'
import type { User } from '@/types'
import { dateFormat } from '@/helpers/dateFormat'

const changeAdminItems = ref<User['id'][]>([])

const { data: users, status, fetchStatus, refetch } = useQuery({
  queryKey: ['users'],
  queryFn: withNotification('users', loadUsers),
})

const { mutate: toggleAdmin } = useMutation({
  mutationFn: withNotification('users', updateUser),
  onMutate: ({ id }) => {
    changeAdminItems.value.push(id)
  },
  onSettled: (first, data, { id }, bar) => {
    changeAdminItems.value = changeAdminItems.value.filter(c => c !== id)
    refetch()
  },
})

const { mutate: removeUser } = useMutation({
  mutationFn: withNotification('users', deleteUser),
  onSettled: () => refetch(),
})

const columns = [
  {
    accessorKey: 'id',
    header: 'ID'
  }, {
    accessorKey: 'name',
    header: 'Name'
  }, {
    accessorKey: 'email',
    header: 'Email'
  }, {
    accessorKey: 'admin',
    header: 'Admin'
  }, {
    accessorKey: 'created_at',
    header: 'Create',
    cell: ({ row }) => dateFormat(row.getValue('created_at'))
  }, {
    accessorKey: 'actions',
    header: 'Actions'
  }
]
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <UTable :loading="fetchStatus === 'fetching'" :data="users" class="flex-1" :columns="columns">
      <template #admin-cell="{ row }">
        <USwitch :loading="changeAdminItems.includes(row.original.id)" :modelValue="row.original.isAdmin"
          @update:model-value="toggleAdmin({ id: row.original.id, isAdmin: !row.original.isAdmin })" />
      </template>

      <template #actions-cell="{ row }">
        <UButton variant="outline" color="info" class="mr-1">Edit</UButton>
        <UButton variant="outline" @click="removeUser(row.original.id)">Delete</UButton>
      </template>
    </UTable>

    <!-- <Table :items="users" :columns="{ id: 'ID', name: 'Name', email: 'Email', admin: 'Admin', action: 'Actions' }"
      :status :fetchStatus>
      <template #cell-admin="{ item }">
        <USwitch :modelValue="item.isAdmin"
          @update:model-value="toggleAdmin({ id: item.id, isAdmin: !item.isAdmin })" />
      </template>

      <template #cell-action="{ item }">
        <UButton>Edit</UButton>
        <UButton @click="removeUser(item.id)">Delete</UButton>
      </template>
    </Table> -->
  </div>
</template>
