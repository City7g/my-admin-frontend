<script setup lang="ts">
import Notification from './components/Notification.vue'
</script>

<template>
  <div class="my-10 px-4">
    <router-view />
  </div>

  <Notification />
</template>

<style>
@import 'tailwindcss';
@import '@nuxt/ui';
</style>
