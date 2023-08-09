import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const navDrawerVisibility = ref(false)

  const toggleNavDrawer = () => navDrawerVisibility.value = !navDrawerVisibility.value

  return {
    navDrawerVisibility,
    toggleNavDrawer,
  }
})