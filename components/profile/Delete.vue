<template>
  <BaseDialog :show="deleteConfirmation" title="Danger Zone">
    Once you delete this account, there is no going back. Please be certain !

    <template #actions>
      <BaseButton variant="outlined" class="bg-gradient-to-bl glass-bg !text-red-500 !border-red-500">
        Delete Account
      </BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
const route = useRoute()

const deleteConfirmation = computed(() => route.hash === '#delete-account')
</script>
