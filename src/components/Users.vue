<script setup lang="ts">
import Table from '@/components/Table.vue'
import { loadUsers } from '@/api/users';
import { useQuery } from '@tanstack/vue-query'

const { isPending, isFetching, isError, data: users, error } = useQuery({
  queryKey: ['users'],
  queryFn: loadUsers
})
</script>

<template>
  <Table :items="users" :isLoading="isFetching" />
</template>
