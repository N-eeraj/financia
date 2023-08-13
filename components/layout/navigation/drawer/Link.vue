<template>
  <NuxtLink :to="to" class="flex items-center gap-x-3 py-1 text-theme-grey-light duration-300 hover:text-theme-light" active-class="text-theme-light" @click="setNavDrawer(false)">
    <Icon :name="icon" class="w-6 h-6" />
    <span class="text-xl">
      {{ text }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>