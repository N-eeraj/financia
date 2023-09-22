<template>
  <div class="flex justify-between w-full px-3">
    <div class="flex items-center gap-x-3">
      <button class="lg:hidden" :class="navDrawerVisibility && 'max-md:z-10 md:hidden'" data-cy="nav-toggle" @click="toggleNavDrawer">
        <Icon :name="navDrawerVisibility ? 'ion:close' : 'eva:menu-outline'" class="text-theme-light text-6xl max-md:relative" />
      </button>
      <span class="text-theme-grey-light text-3xl max-md:hidden" data-cy="page-title">
        {{ pageTitle }}
      </span>
    </div>

    <div class="relative flex items-center gap-x-5">
      <LayoutNotificationButton />
      <LayoutProfile data-cy="profile-button" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const pageTitle = computed(() => route.meta.pageTitle || '')
</script>
