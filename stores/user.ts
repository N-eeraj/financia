import { defineStore } from 'pinia'
import { setToStorage, removeFromStorage } from '@/utils/storage'

interface UserDetails {
  id: number
  name: string
  email: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<UserDetails | null>(null)

  const setUser = (userDetails: UserDetails) => {
    user.value = userDetails
    setToStorage({
      key: 'user',
      value: userDetails
    })
  }

  const clearUser = () => {
    user.value = null
    removeFromStorage('user')
  }

  const authenticated = computed(() => Boolean(user.value))

  const profilePicture = ref('')

  const setProfilePicture = (url: string) => profilePicture.value = url

  return {
    user,
    authenticated,
    profilePicture,
    setUser,
    clearUser,
    setProfilePicture,
  }
})
