<template>
  <div>
    <ProfileActionContainer :active-hash="activeTab" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const activeTab = ref('')

const showProfile = () => activeTab.value = ''
const showChangePassword = () => activeTab.value = '#change-password'
const showDeleteAccount = () => console.log('showDeleteAccount')

watch(
  () => route.hash,
  (to, from) => {
    switch (route.hash) {
      case '#change-password':
        return showChangePassword()
      case '#delete-account':
        return showDeleteAccount()
      default:
        return showProfile()
    }
  },
  { immediate: true }
)

definePageMeta({
  ...authDashboard,
  pageTitle: 'Profile',
})
</script>
