<template>
  <main class="w-full h-screen p-8 bg-theme-dark lg:flex lg:gap-x-8">
    <LayoutNavigationDrawer />
    <section class="w-full">
      <LayoutNavigationBar />
      <slot />
    </section>
  </main>
</template>

<script setup lang="ts">
onMounted(() => setNavDrawer(false))
</script>