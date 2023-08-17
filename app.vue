<template>
  <NuxtLayout id="main">
    <NuxtPage />
  </NuxtLayout> 
</template>

<script setup>
import { storeToRefs } from 'pinia'
import 'vue3-toastify/dist/index.css'

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

<style src="@/styles/common.css" />
<style src="@/styles/transitions.css" />
