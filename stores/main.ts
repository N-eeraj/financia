import { defineStore } from 'pinia'
import notificationsData from '@/data/notifications.json'

interface Notification {
  id: number
  title: string
  body?: string
  time?: string
}

interface VisibilityChange {
  ref: Ref<boolean>
  value?: boolean
  closeRefs?: Ref<boolean>[]
}

// helper function to update visibilty of dashboard layout components
const changeVisibility = ({ ref, value, closeRefs }: VisibilityChange): void => {
  if (value === undefined)
    ref.value = !ref.value
  else
    ref.value = value
  closeRefs?.forEach(closeRef => closeRef.value = false)
}

export const useMainStore = defineStore('main', () => {

  // nav drawer
  const navDrawerVisibility = ref(false)

  const toggleNavDrawer = (): void => changeVisibility({ ref: navDrawerVisibility })

  const setNavDrawer = (value: boolean): void => changeVisibility({
    ref: navDrawerVisibility,
    value,
  })
  
  // notification layout
  const notificationListVisibility = ref(false)

  const toggleNotificationList = (): void => changeVisibility({
    ref: notificationListVisibility,
    closeRefs: [
      profileMenuVisibility,
      showHelp,
    ],
  })

  const setNotificationList = (value: boolean): void => changeVisibility({
    ref: notificationListVisibility,
    value,
    closeRefs: [
      profileMenuVisibility,
      showHelp,
    ],
  })

  // notification data
  const allNotifications = ref<Notification[]>(notificationsData)

  const newNotification = (notification: Notification) => allNotifications.value.push(notification)

  const readNotification = (notificationId: number) => allNotifications.value = allNotifications.value.filter(({ id }) => notificationId !== id)

  const readAllNotification = () => allNotifications.value = []

  // profile menu
  const profileMenuVisibility = ref(false)

  const toggleProfileMenu = (): void => changeVisibility({
    ref: profileMenuVisibility,
    closeRefs: [
      notificationListVisibility,
      showHelp,
    ],
  })

  const setProfileMenu = (value: boolean): void => changeVisibility({
    ref: profileMenuVisibility,
    value,
    closeRefs: [
      notificationListVisibility,
      showHelp,
    ],
  })

  // help toggle
  const showHelp = ref(false)

  const setHelpVisibility = (value: boolean): void => changeVisibility({
    ref: showHelp,
    value,
    closeRefs: [
      profileMenuVisibility,
      notificationListVisibility,
    ],
  })

  const handleCloseAllDashboardPopUp = (): void => {
    [setNotificationList, setProfileMenu, setHelpVisibility]
      .forEach(closeFunction => closeFunction(false))
  }

  return {
    navDrawerVisibility,
    notificationListVisibility,
    allNotifications,
    profileMenuVisibility,
    showHelp,
    toggleNavDrawer,
    setNavDrawer,
    toggleNotificationList,
    setNotificationList,
    newNotification,
    readNotification,
    readAllNotification,
    toggleProfileMenu,
    setProfileMenu,
    setHelpVisibility,
    handleCloseAllDashboardPopUp,
  }
})