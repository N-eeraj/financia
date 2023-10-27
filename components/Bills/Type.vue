<template>
  <NuxtLink class="group flex-column items-center gap-y-1 cursor-pointer">
    <div class="place-center w-16 aspect-square bg-theme-grey-dark group-hover:bg-theme-light text-theme-light group-hover:text-theme-dark rounded-full duration-200">
      <Icon :name="icon" size="32" />
    </div>
    <span class="text-theme-light">
      {{ name }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>
