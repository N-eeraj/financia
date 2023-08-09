import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { navDrawerVisibility } = storeToRefs(mainStore)
const { toggleNavDrawer } = mainStore

export { navDrawerVisibility, toggleNavDrawer }
