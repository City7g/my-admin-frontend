<script setup lang="ts" generic="T, K extends keyof T">
const props = defineProps<{
  item: T
  field: K
}>()
</script>

<template>
  <div>{{ item }} - {{ field }}</div>
</template>
