import { useNotificationStore } from '@/stores/notification'
import type { NotificationType } from '@/types/Notification'

export default <Fn extends (...args: any[]) => Promise<any>>(
  name: string,
  func: Fn
): (...args: Parameters<Fn>) => Promise<Awaited<ReturnType<Fn>>> => {
  const notificationStore = useNotificationStore()

  return async (...args: Parameters<Fn>): Promise<Awaited<ReturnType<Fn>>> => {
    try {
      const res = await func(...args)
      notificationStore.add(`Load ${name}`)
      return res
    } catch (error) {
      notificationStore.add(`Failed load ${name}`, 'error', 'Please, try again')
      throw error
    }
  }
}