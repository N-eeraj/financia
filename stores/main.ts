import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const isAuthenticated = ref(false)

  const updateAuthentication = (updatedAuth: boolean) => {
    if (updatedAuth)
      console.log('setup storage')
    else
      console.log('clear storage')
    isAuthenticated.value = updatedAuth
  }

  return {
    isAuthenticated,
    updateAuthentication
  }
})