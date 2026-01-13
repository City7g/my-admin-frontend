import type { Notification } from '@/types/Notification'

export const successNotification: Notification = {
  id: 1,
  type: 'success',
  title: 'Success',
  message: 'Success message description',
}

export const errorNotification: Notification = {
  id: 2,
  type: 'error',
  title: 'Error',
  message: 'Server error, something went wrong',
}

export const warningNotification: Notification = {
  id: 3,
  type: 'warning',
  title: 'Warning',
  message: 'Check the entered data',
}

export const infoNotification: Notification = {
  id: 4,
  type: 'info',
  title: 'Info',
  message: 'You have updated',
}