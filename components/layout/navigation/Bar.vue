<template>
  <div class="flex justify-between w-full">
    <div class="flex items-center gap-x-3">
      <button class="lg:hidden" @click="toggleNavDrawer">
        <Icon :name="navDrawerVisibility ? 'ion:close' : 'eva:menu-outline'" class="text-theme-light text-6xl max-md:relative" />
      </button>
      <span class="text-theme-grey-light text-3xl max-md:hidden">
        Dashboard
      </span>
    </div>

    <div class="flex items-center gap-x-5">
      <Icon name="mdi-notifications" size="32" class="w-14 h-14 p-3 aspect-square text-theme-grey-light max-md:!hidden" />

      <div class="flex items-center gap-x-3">
        <span class="text-theme-light text-xl max-md:hidden">
          John Doe
        </span>
        <img src="/users/john-doe.png" class="w-14 rounded-full" />
      </div>
    </div>
  </div>
</template>
