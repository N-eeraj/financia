<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout> 
</template>

<script setup>
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const { setUser } = userStore
const { authenticated } = storeToRefs(userStore)

useHead({
  title: 'Financia',
  meta: [
    { name: 'description', content: 'Financia Website.' }
  ],
})

const checkPagePermission = () => {
  const { visitor, user } = route.meta
  // if user & not authenticated redirect to login
  if (!visitor && user && !authenticated.value)
    router.replace('/login')
  // else if user & authenticated but not visitor redirect to dashboard
  else if (visitor && !user && authenticated.value)
    router.replace('/dashboard')
}

watch(() => route.path, checkPagePermission)

onMounted(() => {
  const user = getFromStorage('user')
  if (user)
    setUser(user)
  checkPagePermission()
})
</script>

<style>
* {
  @apply focus:border-base-blue focus:outline-none;
}
/* custom classes */
.flex-column {
  @apply flex flex-col;
}
.flex-center {
  @apply flex justify-center items-center
}
.place-center {
  @apply grid place-items-center;
}

/* page transitions */
.page-enter-active,
.page-leave-active {
  transition-duration: 400ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>