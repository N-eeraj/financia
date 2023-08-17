import { storeToRefs } from 'pinia'

const mainStore = useMainStore()

const {
  navDrawerVisibility,
  notificationListVisibility,
  profileMenuVisibility,
} = storeToRefs(mainStore)

const {
  toggleNavDrawer,
  setNavDrawer,
  toggleNotificationList,
  setNotificationList,
  toggleProfileMenu,
  setProfileMenu,
} = mainStore

export {
  navDrawerVisibility,
  notificationListVisibility,
  profileMenuVisibility,
  toggleNavDrawer,
  setNavDrawer,
  toggleNotificationList,
  setNotificationList,
  toggleProfileMenu,
  setProfileMenu,
}
