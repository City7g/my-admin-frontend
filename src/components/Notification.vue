<script setup lang="ts">
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()

const colorMap = {
  success: {
    border: 'border-green-200',
    icon: 'bg-green-100 text-green-600',
    title: 'text-green-700',
    symbol: '✓',
  },
  error: {
    border: 'border-red-200',
    icon: 'bg-red-100 text-red-600',
    title: 'text-red-700',
    symbol: '✕',
  },
  warning: {
    border: 'border-yellow-200',
    icon: 'bg-yellow-100 text-yellow-700',
    title: 'text-yellow-700',
    symbol: '!',
  },
  info: {
    border: 'border-blue-200',
    icon: 'bg-blue-100 text-blue-600',
    title: 'text-blue-700',
    symbol: 'i',
  },
}
</script>

<template>
  <div class="fixed bottom-5 right-5 z-50 w-full max-w-sm pointer-events-none">
    <TransitionGroup name="toast" tag="div" class="flex flex-col gap-4">
      <div
        v-for="notification in notificationStore.notifications"
        :key="notification.id"
        class="pointer-events-auto flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg border"
        :class="colorMap[notification.type].border"
      >
        <!-- Icon -->
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold"
          :class="colorMap[notification.type].icon"
        >
          {{ colorMap[notification.type].symbol }}
        </div>

        <!-- Content -->
        <div class="flex-1">
          <p class="text-sm font-semibold" :class="colorMap[notification.type].title">
            {{ notification.title }}
          </p>
          <p v-if="notification.message" class="text-sm text-gray-600">
            {{ notification.message }}
          </p>
        </div>

        <!-- Close -->
        <button
          @click="notificationStore.remove(notification.id)"
          class="cursor-pointer text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active,
.toast-move {
  transition: all 0.35s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* .toast-enter-active {
  width: 100%;
  position: absolute;
} */
</style>
