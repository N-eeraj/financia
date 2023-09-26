<template>
  <div class="full-screen" :class="show ? 'z-50' : ' -z-50 duration-1000'">
    <!-- overlay -->
    <div v-if="overlay && show" class="full-screen bg-gradient-to-bl glass-bg" />

    <Transition name="fade">
      <!-- dialog -->
      <div v-if="show" class="screen-center flex-column gap-y-5 w-80 md:w-[480px] p-10 glass-bg border border-theme-light rounded-md" @click.stop>

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
  </div>
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
