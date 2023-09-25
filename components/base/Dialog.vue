<template>
  <!-- overlay -->
  <div v-if="overlay" class="fixed top-0 left-0 w-screen h-screen bg-gradient-to-bl glass-bg z-50" />

  <Transition name="slide-up">
    <!-- dialog -->
    <div v-if="show" class="screen-center flex-column gap-y-5 w-80 md:w-[480px] p-10 glass-bg border border-theme-light rounded-md z-50" @click.stop>

      <!-- title -->
      <strong class="text-theme-light text-3xl font-semibold">
        <slot name="title">
          <template v-if="title">
            {{ title }}
          </template>
        </slot>
      </strong>

      <!-- body -->
      <div class="text-theme-light">
        <slot />
      </div>

      <!-- actions container -->
      <div class="flex justify-end gap-x-4">
        <slot name="actions" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: ''
  },
  overlay: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>
