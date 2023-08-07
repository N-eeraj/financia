<template>
  <main class="w-full h-screen bg-theme-dark lg:flex lg:p-8">
    <LayoutNavigationDrawer />
    <LayoutNavigationBar />
    <section>
      <slot />
    </section>
  </main>
</template>
  