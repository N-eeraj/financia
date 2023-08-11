import { defineStore } from 'pinia'
import notificationsData from '@/data/notifications.json'

interface Notification {
  id: number
  title: string
  body: string
  time: string
}

export const useMainStore = defineStore('main', () => {
  // nav drawer
  const navDrawerVisibility = ref(false)

  const toggleNavDrawer = () => navDrawerVisibility.value = !navDrawerVisibility.value
  
  // notifications
  const allNotifications = ref<Notification[]>(notificationsData)
  
  const newNotification = (notification: Notification) => allNotifications.value.push(notification)

  const readNotification = (notificationId: number) => allNotifications.value = allNotifications.value.filter(({ id }) => notificationId === id)

  const readAllNotification = () => allNotifications.value = []

  return {
    navDrawerVisibility,
    toggleNavDrawer,
    allNotifications,
    newNotification,
    readNotification,
    readAllNotification,
  }
})