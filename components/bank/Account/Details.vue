<template>
  <div class="flex-column gap-x-1">
    <span class="text-xs font-light text-theme-grey-light">
      {{ label }}
    </span>
    <span class="font-medium text-theme-light">
      {{ value || '-' }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: false,
  }
})
</script>
