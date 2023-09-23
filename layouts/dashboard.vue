<template>
  <main class="w-full h-screen p-8 bg-theme-dark lg:flex lg:gap-x-8" @click="handleCloseAll">
    <LayoutNavigationDrawer class="z-10" />
    <section class="flex-column gap-y-6 w-full">
      <LayoutNavigationBar />
      <div class="lg:w-[calc(100vw-480px)] h-[calc(100vh-124px)] overflow-y-auto">
        <slot />
      </div>
    </section>
    <Transition name="slide-down">
      <Help v-if="showHelp" />
    </Transition>
  </main>
</template>

<script setup lang="ts">
const handleCloseAll = () => {
  setProfileMenu(false)
  setNotificationList(false)
  setHelpVisibility(false)
}

onMounted(() => setNavDrawer(false))
</script>
