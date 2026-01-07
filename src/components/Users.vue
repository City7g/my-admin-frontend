<script setup lang="ts">
import type { User } from '@/types/Users'
import axios from 'axios'
import Table from '@/components/Table.vue'
import { useQuery } from '@tanstack/vue-query'

const { isPending, isFetching, isError, data: users, error } = useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const { data } = await axios.get<User[]>(`${import.meta.env.VITE_API_URL}/users`)
    return data
  },
})
</script>

<template>
  <Table :items="users" :isLoading="isFetching" />
</template>
