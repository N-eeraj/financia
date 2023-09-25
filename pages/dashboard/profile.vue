<template>
  <div class="flex-column gap-y-6 md:gap-y-12">
    <ProfileActionContainer :active-hash="activeTab" />

    <ProfilePassword v-if="activeTab" />
    <ProfileDetails v-else />

    <ProfileDelete />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const activeTab = ref('')

const handleDeleteClose = () => {
  router.replace({
    ...route,
    hash: activeTab.value,
  })
  document.removeEventListener('click', handleDeleteClose)
}

watch(
  () => route.hash,
  () => {
    if (route.hash === '#delete-account')
      document.addEventListener('click', handleDeleteClose)
    else
      activeTab.value = route.hash
  },
  { immediate: true }
)

definePageMeta({
  ...authDashboard,
  pageTitle: 'Profile',
})
</script>
