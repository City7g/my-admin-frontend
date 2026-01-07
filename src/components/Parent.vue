<script setup lang="ts">
import Child from './Child.vue'

interface User {
  id: number
  name: string
}

// const users: User[] = [{ id: 1, name: 'Dima' }]
const user = { id: 1, name: 'Dima' }
</script>

<template>
  <Child :item="user" field="name" />
</template>
