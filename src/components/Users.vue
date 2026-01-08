<script setup lang="ts">
import { loadUsers } from '@/api'
import Table from '@/components/Table.vue'
import { useQuery } from '@tanstack/vue-query'

const { data: users, status  } = useQuery({
  queryKey: ['users'],
  queryFn: loadUsers
})
</script>

<template>
  <div>
    <Table :items="users ?? []" :columns="{ id: 'ID', name: 'Name', email: 'Email' }" :status />
  </div>
</template>
