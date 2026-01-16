<script setup lang="ts">
const model = defineModel<boolean>()

defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <label class="inline-flex items-center cursor-pointer select-none"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }">
    <input type="checkbox" class="sr-only" :disabled="disabled" v-model="model" />

    <div class="relative w-11 h-6 rounded-full transition-colors duration-200"
      :class="model ? 'bg-blue-600' : 'bg-gray-300'">
      <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow
                 transition-transform duration-200" :class="model ? 'translate-x-5' : 'translate-x-0'" />
    </div>
  </label>
</template>