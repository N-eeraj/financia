import { defineStore } from 'pinia'
import notificationsData from '@/data/notifications.json'

interface Notification {
  id: number
  title: string
  body: string
  time: string
}

interface VisibilityChange {
  ref: Ref<boolean>
  value?: boolean
  closeRefs?: Ref<boolean>[]
}

// helper function to update visibilty of dashboard layout components
const changeVisibility = ({ ref, value, closeRefs }: VisibilityChange) => {
  if (value === undefined)
    ref.value = !ref.value
  else
    ref.value = value
  closeRefs?.forEach(closeRef => closeRef.value = false)
}

export const useMainStore = defineStore('main', () => {

  // nav drawer
  const navDrawerVisibility = ref(false)

  const toggleNavDrawer = () => changeVisibility({ ref: navDrawerVisibility })

  const setNavDrawer = (value: boolean) => changeVisibility({
    ref: navDrawerVisibility,
    value,
  })
  
  // notification layout
  const notificationListVisibility = ref(false)

  const toggleNotificationList = () => changeVisibility({
    ref: notificationListVisibility,
    closeRefs: [
      profileMenuVisibility,
    ],
  })

  const setNotificationList = (value: boolean) => changeVisibility({
    ref: notificationListVisibility,
    value,
    closeRefs: [
      profileMenuVisibility,
    ],
  })

  // notification data
  const allNotifications = ref<Notification[]>(notificationsData)

  const newNotification = (notification: Notification) => allNotifications.value.push(notification)

  const readNotification = (notificationId: number) => allNotifications.value = allNotifications.value.filter(({ id }) => notificationId === id)

  const readAllNotification = () => allNotifications.value = []

  // profile menu
  const profileMenuVisibility = ref(false)

  const toggleProfileMenu = () => changeVisibility({
    ref: profileMenuVisibility,
    closeRefs: [
      notificationListVisibility,
    ],
  })

  const setProfileMenu = (value: boolean) => changeVisibility({
    ref: profileMenuVisibility,
    value,
    closeRefs: [
      notificationListVisibility,
    ],
  })


  return {
    navDrawerVisibility,
    notificationListVisibility,
    allNotifications,
    profileMenuVisibility,
    toggleNavDrawer,
    setNavDrawer,
    toggleNotificationList,
    setNotificationList,
    newNotification,
    readNotification,
    readAllNotification,
    toggleProfileMenu,
    setProfileMenu,
  }
})