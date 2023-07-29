<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Financia',
  meta: [
    { name: 'description', content: 'Financia Website.' }
  ],
})
</script>

<style>
.flex-column {
  @apply flex flex-col;
}
.place-center {
  @apply grid place-items-center;
}
</style>