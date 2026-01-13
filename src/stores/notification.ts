import type { Notification, NotificationType } from '@/types/Notification'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const MAX_NOTIFICATION = 3
const TIME_TO_CLOSE_NOTIFICATION = 3000

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])

  const add = (title: string, type: NotificationType = 'success', message?: string) => {
    if (notifications.value.length >= MAX_NOTIFICATION) {
      notifications.value.shift()
    }

    const id: Notification['id'] = Date.now() + Math.random()

    notifications.value.push({ id, type, title, message })

    setTimeout(() => remove(id), TIME_TO_CLOSE_NOTIFICATION)
  }

  const remove = (id: Notification['id']) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  return { notifications, add, remove }
})
