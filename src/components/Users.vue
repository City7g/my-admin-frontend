<script setup lang="ts">
import { loadUsers, deleteUser, updateUser } from '@/api'
import { useMutation, useQuery } from '@tanstack/vue-query'
import withNotification from '@/helpers/withNotification'
import { ref } from 'vue'
import type { User } from '@/types'
import { dateFormat } from '@/helpers/dateFormat'
import type { TableColumn } from '@nuxt/ui'
import type { RequireKey } from '@/types/helpers'

const changeAdminItems = ref<User['id'][]>([])

const { data: users, status, fetchStatus, refetch } = useQuery({
  queryKey: ['users'],
  queryFn: withNotification('users', loadUsers),
})

const { mutate: toggleAdmin } = useMutation<void, unknown, RequireKey<User, 'id'>>({
  mutationFn: withNotification('users', updateUser),
  onMutate: (vars, context) => {
    changeAdminItems.value.push(vars.id)

    let oldUser = context.client.getQueryData<User[]>(['users'])?.find(c => c.id === vars.id)

    context.client.setQueryData<User[]>(['users'], users => {
      return users?.map(user => {
        if (user.id === vars.id) {
          oldUser = user
          return { ...user, isAdmin: vars.isAdmin ?? user.isAdmin }
        } else {
          return user
        }
      })
    })

    return oldUser
  },
  onError(error, vars, oldUser, context) {
    context.client.setQueryData<User[]>(['users'], users => {
      return users?.map(user => {
        if (user.id === vars.id) {
          return oldUser as User
        } else {
          return user
        }
      })
    })
  },
  onSettled: (first, data, vars, bar) => {
    changeAdminItems.value = changeAdminItems.value.filter(c => c !== vars.id)
  },
})

const { mutate: removeUser } = useMutation({
  mutationFn: withNotification('users', deleteUser),
  onSettled: () => refetch(),
})

const columns: TableColumn<User>[] = [
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
    <UTable :data="users" :loading="fetchStatus === 'fetching'" class="flex-1" :columns="columns">
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
