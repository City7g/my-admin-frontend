export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export interface Notification {
  id: number | string
  type: NotificationType
  title: string
  message?: string
}