<template>
  <button class="flex gap-x-3 py-1 text-theme-grey-light hover:text-theme-light" data-cy="profile-action">
    <Icon :name="icon" size="24" />
    <span class="text-xl">
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
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