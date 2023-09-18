<template>
  <main class="w-full min-h-screen p-8 bg-theme-dark lg:flex lg:gap-x-8" @click="handleCloseAll">
    <LayoutNavigationDrawer class="z-10" />
    <section class="w-full">
      <LayoutNavigationBar />
      <slot />
    </section>
  </main>
</template>

<script setup lang="ts">
const handleCloseAll = () => {
  setProfileMenu(false)
  setNotificationList(false)
}

onMounted(() => setNavDrawer(false))
</script>