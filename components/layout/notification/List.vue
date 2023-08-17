<template>
  <Transition name="slide-down">
    <div v-if="notificationListVisibility" class="absolute top-16 right-0 flex-column items-start gap-y-3 w-72 px-3 py-2 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light" :class="[classes]">
      Test
    </div>
  </Transition>
</template>

<script setup lang="ts">
  defineProps({
    classes: {
      type: String,
      required: false,
      default: null
    }
  })
</script>
