import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { navDrawerVisibility } = storeToRefs(mainStore)
const { toggleNavDrawer, setNavDrawer } = mainStore

export { navDrawerVisibility, toggleNavDrawer, setNavDrawer }
