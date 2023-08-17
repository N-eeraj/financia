import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { navDrawerVisibility, profileMenuVisibility } = storeToRefs(mainStore)
const { toggleNavDrawer, setNavDrawer, setProfileMenu } = mainStore

export {
  navDrawerVisibility,
  toggleNavDrawer,
  setNavDrawer,
  profileMenuVisibility,
  setProfileMenu,
}
