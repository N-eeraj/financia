<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-theme-dark/10 backdrop-blur-sm duration-300 md:p-8 lg:relative lg:w-min lg:h-full lg:p-0" :class="!navDrawerVisibility && 'max-lg:-translate-x-full'" @click="toggleNavDrawer">
    <nav class="nav-container relative w-full h-full duration-300 before:content-[''] before:absolute before:aspect-square before:bg-base-green before:rounded-full before:blur-2xl before:z-40 after:content-[''] after:absolute after:bottom-0 after:right-0 after:aspect-square after:bg-base-blue after:rounded-full after:blur-2xl after:z-40 md:w-96 lg:w-80" @click.stop>

      <div class="relative flex-column gap-y-6 w-full h-full py-5 px-8 bg-gradient-to-bl glass-bg z-50 md:rounded-2xl md:border-[0.25px] md:border-theme-grey-light">

        <div class="max-md:h-16" />

        <!-- Financia -->
        <NuxtLink to="/dashboard" class="flex items-center gap-x-3 md:justify-center" @click="toggleNavDrawer">
          <img src="/favicon.ico" class="w-20 rounded-xl" />
          <BaseGradientText text="Financia" start="from-base-green" end="to-base-blue" class="text-4xl font-bold" />
        </NuxtLink>

        <!-- links -->
        <LayoutNavigationDrawerLink v-for="({to, icon, text}, index) in navDrawerLinksData" :to="to" :icon="icon" :text="text" :key="index" />

      </div>
    </nav>
  </div>
</template>

<style src="@/styles/nav-drawer.css" scoped/>
