<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import Table from './Table.vue'

const users = ref()

onMounted(async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
  users.value = data
})
</script>

<template>
  <Table :items="users" />
</template>
