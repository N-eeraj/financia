<template>
  <button class="flex justify-center items-center flex-shrink-0 gap-x-2 px-3 py-2 bg-theme-dark hover:bg-base-blue/25 rounded-md duration-300 group">
    <Icon v-if="icon" :name="icon" class="p-2 bg-base-blue/10 group-hover:bg-base-blue text-base-blue group-hover:text-theme-light text-4xl rounded-full" />
    <span class="text-theme-light text-sm">
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
})
</script>
