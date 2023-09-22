<template>
  <div>
    <ProfileActionContainer :active-hash="activeTab" />

    <ProfileDetails v-if="!activeTab" />
    <ProfilePassword v-else />

    <ProfileDelete v-if="deleteConfirmation" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const activeTab = ref('')

const deleteConfirmation = computed(() => route.hash === '#delete-account')

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
