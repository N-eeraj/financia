<template>
  <div class="place-center w-screen min-h-screen">
    <img :src="image" class="absolute top-0 left-0 w-screen h-screen object-cover object-center lg:relative lg:w-1/2" />

    <!-- form container -->
    <div class="relative flex-column gap-y-7 w-80 z-10">

      <!-- welcome text -->
      <div class="w-full flex-column items-center gap-y-1">
        <h1 class="text-theme-light text-3xl font-bold">
          {{ title }}
        </h1>
        <span class="text-theme-grey-light text-lg">
          {{ subtitle }}
        </span>
      </div>

      <!-- form -->
      <form class="flex-column items-center gap-y-6 w-80" @submit="handleSubmit">
        <slot />
      </form>

      <!-- alternate entry container -->
      <div class="flex justify-center items-center gap-x-2 text-xl">
        <span class="text-theme-grey-light">
          {{ segue }}
        </span>
        <BaseButton variant="text" @click="$router.push(link.to)">
          {{ link.text }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  segue: {
    type: String,
    required: false,
  },
  link: {
    type: Object,
    required: true,
    validator({ text, to }) {
      return Boolean(text && to)
    },
  }
})

const emit = defineEmits(['submit'])

const handleSubmit = (event) => {
  event.preventDefault()
  emit('submit')
}
</script>