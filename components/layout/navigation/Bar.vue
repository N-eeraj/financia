<template>
  <div class="flex justify-between w-full">
    <div class="flex items-center gap-x-3">
      <button class="lg:hidden">
        <Icon name="eva:menu-outline" class="text-theme-light text-6xl" />
      </button>
      <span class="text-theme-grey-light text-3xl max-sm:hidden">
        Dashboard
      </span>
    </div>

    <div class="flex items-center gap-x-5">
      <Icon name="mdi-notifications" size="32" class="w-14 h-14 p-3 aspect-square text-theme-grey-light max-sm:!hidden" />

      <div class="flex items-center gap-x-3">
        <span class="text-theme-light text-xl max-sm:hidden">
          John Doe
        </span>
        <img src="/users/john-doe.png" class="w-14 rounded-full" />
      </div>
    </div>
  </div>
</template>