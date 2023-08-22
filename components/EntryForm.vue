<template>
  <div class="place-center w-screen min-h-screen lg:!flex">
    <img :src="imageUrl" class="absolute top-0 left-0 w-screen h-screen object-cover object-center lg:relative lg:w-[55%]" />

    <!-- form container -->
    <div class="relative flex-column items-center gap-y-7 w-80 z-10 md:w-4/6 lg:items-start lg:gap-y-12 lg:w-[45%] lg:pl-7">

      <!-- welcome text -->
      <div class="w-full flex-column items-center gap-y-1 md:gap-y-2 lg:items-start">
        <h1 class="text-theme-light text-3xl font-bold md:text-5xl">
          {{ title }}
        </h1>
        <span class="text-theme-grey-light text-lg md:text-2xl">
          {{ subtitle }}
        </span>
      </div>

      <!-- form -->
      <form class="flex-column items-center gap-y-6 w-80 md:w-96 lg:items-start" @submit="handleSubmit">
        <slot />
      </form>

      <!-- alternate entry container -->
      <div class="flex justify-center items-center gap-x-2 text-xl">
        <span class="text-theme-grey-light">
          {{ segue }}
        </span>
        <BaseButton variant="text" data-cy="segue-link" @click="$router.replace(link.to)">
          {{ link.text }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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

const imageUrl = computed(() => `${process.env.NODE_ENV === 'production' ? '/financia/' : '/'}${props.image}`)

const handleSubmit = (event: Event) => {
  event.preventDefault()
  emit('submit')
}
</script>
