<template>
  <div class="flex items-center gap-x-3 cursor-pointer" @click.stop="toggleProfileMenu">
    <span class="text-theme-light text-xl max-md:hidden">
      {{ user?.name }}
    </span>
    <img :src="user?.profilePicture || `${baseURL}/users/john-doe.png`" class="w-14 rounded-full" />

    <Transition name="slide-down">
      <div v-if="profileMenuVisibility" class="absolute top-16 right-0 flex-column gap-y-3 w-52 px-3 py-2 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light z-10">
        <LayoutProfileAction v-for="({ icon, text, action, classes }, index) of profileActionsData" :icon="icon" :text="text" :class="classes" :key="index" @click.stop="handleAction(action)" />
      </div>
    </Transition>

    <LayoutNotificationList classes="md:!hidden" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { clearUser } = userStore

const runtime = useRuntimeConfig()
const baseURL = runtime.public.baseURL

const handleViewProfile = (): void => {
  setProfileMenu(false)
  router.push('/dashboard/profile')
}

const handleLogout = () => {
  clearUser()
  setProfileMenu(false)
  setNotificationList(false)
  router.push('/login')
}


const handleAction = (action: string) => {
  switch (action) {
    case 'viewProfile':
      return handleViewProfile()
    case 'showNotifications':
      return setNotificationList(true)
    case 'showHelp':
      return setHelpVisibility(true)
    case 'logout':
      return handleLogout()
    default:
      toastify('Invalid Action', 'error')
  }
}
</script>
