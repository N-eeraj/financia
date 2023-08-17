<template>
  <div class="flex items-center gap-x-3 cursor-pointer">
    <span class="text-theme-light text-xl max-md:hidden">
      John Doe
    </span>
    <img src="/users/john-doe.png" class="w-14 rounded-full" />
  </div>
  <div class="absolute top-16 right-0 flex-column gap-y-3 w-52 px-3 py-2 bg-gradient-to-bl from-theme-grey-dark/70 to-theme-dark/30 backdrop-blur-lg rounded-md border-[0.25px] border-theme-grey-light">
    <BaseProfileAction v-for="({ icon, text, action, classes }, index) of profileActionsData" :icon="icon" :text="text" :class="classes" :key="index" @click="handleAction(action)" />
  </div>
</template>

<script setup lang="ts">
const handleAction = (action: string) => {
  console.log(action)
}
</script>