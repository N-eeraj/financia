<template>
  <BaseDialog :show="deleteConfirmation" title="Danger Zone" data-cy="delete-modal">
    Once you delete this account, there is no going back. Please be certain !

    <template #actions>
      <BaseButton variant="outlined" class="bg-gradient-to-bl glass-bg !text-red-500 !border-red-500" @click="handleDeleteAccount">
        Delete Account
      </BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { clearUser } = useUserStore()

const deleteConfirmation = computed(() => route.hash === '#delete-account')

const handleDeleteAccount = () => {
  deleteUser()
  clearUser()
  router.push('/login')
}
</script>
