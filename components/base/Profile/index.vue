<template>
  <div class="flex items-center gap-x-3 cursor-pointer" @click.stop="toggleProfileMenu">
    <span class="text-theme-light text-xl max-md:hidden">
      {{ user?.name }}
    </span>
    <img src="/users/john-doe.png" class="w-14 rounded-full" />
  </div>
  <Transition name="slide-down">
    <div v-if="profileMenuVisibility" class="absolute top-16 right-0 flex-column gap-y-3 w-52 px-3 py-2 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light">
      <BaseProfileAction v-for="({ icon, text, action, classes }, index) of profileActionsData" :icon="icon" :text="text" :class="classes" :key="index" @click="handleAction(action)" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { clearUser } = userStore

const handleViewProfile = () => router.push('/dashboard/profile')

const handleShowNotifications = () => {

}

const handleShowHelp = () => {

}

const handleLogout = () => {
  clearUser()
  router.push('/login')
}


const handleAction = (action: string) => {
  switch (action) {
    case 'viewProfile':
      return handleViewProfile()
    case 'showNotifications':
      return handleShowNotifications()
    case 'showHelp':
      return handleShowHelp()
    case 'logout':
      return handleLogout()
    default:
      toastify('Invalid Action', 'error')
  }
}
</script>

<style scoped>
.slide-down-enter-active {
  transition: top 250ms ease-in-out, opacity 400ms ease-in-out;
}
.slide-down-leave-active {
  transition: top 400ms ease-in-out, opacity 250ms ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  top: 0;
  opacity: 0;
}
</style>