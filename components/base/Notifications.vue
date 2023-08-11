<template>
  <button class="relative place-center w-12 aspect-square max-md:!hidden">
    <Icon name="mdi-notifications" size="32" class="w-8 h-8 aspect-square text-theme-grey-light cursor-pointer hover:text-theme-light" />
    <div v-if="allNotifications.length" class=" absolute top-2 right-2 w-3 aspect-square bg-base-green rounded-full"></div>
  </button>
</template>

<script setup lang="ts">
const { allNotifications } = useMainStore()
</script>