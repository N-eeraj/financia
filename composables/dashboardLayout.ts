import { storeToRefs } from 'pinia'

const mainStore = useMainStore()

const {
  navDrawerVisibility,
  notificationListVisibility,
  profileMenuVisibility,
  showHelp,
} = storeToRefs(mainStore)

const {
  toggleNavDrawer,
  setNavDrawer,
  toggleNotificationList,
  setNotificationList,
  toggleProfileMenu,
  setProfileMenu,
  setHelpVisibility,
} = mainStore

export {
  navDrawerVisibility,
  notificationListVisibility,
  profileMenuVisibility,
  showHelp,
  toggleNavDrawer,
  setNavDrawer,
  toggleNotificationList,
  setNotificationList,
  toggleProfileMenu,
  setProfileMenu,
  setHelpVisibility,
}
