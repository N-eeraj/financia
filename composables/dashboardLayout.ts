import { storeToRefs } from 'pinia'

const mainStore = useMainStore()

const {
  navDrawerVisibility,
  profileMenuVisibility
} = storeToRefs(mainStore)

const {
  toggleNavDrawer,
  setNavDrawer,
  toggleProfileMenu,
  setProfileMenu
} = mainStore

export {
  navDrawerVisibility,
  profileMenuVisibility,
  toggleNavDrawer,
  setNavDrawer,
  toggleProfileMenu,
  setProfileMenu,
}
