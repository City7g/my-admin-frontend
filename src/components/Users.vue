<script setup lang="ts">
import { loadUsers } from '@/api'
import Table from '@/components/Table.vue'
import { useQuery } from '@tanstack/vue-query'

const { isFetching, data: users } = useQuery({
  queryKey: ['users'],
  queryFn: loadUsers
})
</script>

<template>
  <div>
    <Table :items="users ?? []" :columns="{ id: 'ID', name: 'Name', email: 'Email' }" :isLoading="isFetching" />
  </div>
</template>
