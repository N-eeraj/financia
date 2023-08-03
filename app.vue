<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout> 
</template>

<script setup>

useHead({
  title: 'Financia',
  meta: [
    { name: 'description', content: 'Financia Website.' }
  ],
})

onMounted(() => {
  const user = getFromStorage('userId')
  if (user)
    setUser(user)
})
</script>

<style>
* {
  @apply focus:border-base-blue focus:outline-none;
}
/* custom classes */
.flex-column {
  @apply flex flex-col;
}
.place-center {
  @apply grid place-items-center;
}

/* page transitions */
.page-enter-active,
.page-leave-active {
  transition-duration: 400ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>