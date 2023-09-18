<template>
  <div class="w-full flex-column gap-y-3">
    <h3 class="text-theme-light text-xl">
      <slot name="title" />
    </h3>
    <div class="flex gap-x-5 overflow-x-auto">
      <slot />
    </div>
  </div>
</template>
