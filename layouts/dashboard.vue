<template>
  <main class="w-full min-h-screen p-8 bg-theme-dark lg:flex lg:gap-x-8" @click="handleCloseAllDashboardPopUp">
    <LayoutNavigationDrawer class="z-10" />
    <section class="flex-column gap-y-6 w-full">
      <LayoutNavigationBar />
      <div class="lg:w-[calc(100vw-480px)] md:h-[calc(100vh-156px)] overflow-y-auto">
        <slot />
      </div>
    </section>

    <Help />
  </main>
</template>

<script setup lang="ts">
onMounted(() => setNavDrawer(false))
</script>
