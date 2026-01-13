import { useNotificationStore } from "@/stores/notification"

export default async <T>(name: string, func: () => Promise<T>): Promise<T> => {
  const notificationStore = useNotificationStore()

  try {
    const res = await func()
    notificationStore.add(`Load ${name}`)
    return res
  } catch (error) {
    notificationStore.add(`Failed load ${name}`, 'error', 'Please, try again')
    throw error
  }
}