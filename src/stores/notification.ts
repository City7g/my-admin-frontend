import { errorNotification, infoNotification, successNotification, warningNotification } from '@/data/notifications'
import type { Notification, NotificationType } from '@/types/Notification'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const MAX_NOTIFICATION = 3

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])

  const add = (title: string, type: NotificationType = 'success', message?: string) => {
    if (notifications.value.length >= MAX_NOTIFICATION) {
      notifications.value.shift()
    }

    const id: Notification['id'] = Date.now() + Math.random()

    notifications.value.push({ id, type, title, message })

    setTimeout(() => remove(id), 5000)
  }

  const remove = (id: Notification['id']) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  setTimeout(() => add(successNotification.title, successNotification.type, successNotification.message), 1000)
  setTimeout(() => add(errorNotification.title, errorNotification.type, errorNotification.message), 2000)
  setTimeout(() => add(warningNotification.title, warningNotification.type, warningNotification.message), 3000)
  setTimeout(() => add(infoNotification.title, infoNotification.type, infoNotification.message), 4000)

  return { notifications, add, remove }
})
