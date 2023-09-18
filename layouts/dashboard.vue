<template>
  <main class="w-full h-screen p-8 bg-theme-dark lg:flex lg:gap-x-8" @click="handleCloseAll">
    <LayoutNavigationDrawer class="z-10" />
    <section class="w-full">
      <LayoutNavigationBar />
      <div class="h-[calc(100vh-124px)] overflow-y-auto">
        <slot />
      </div>
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