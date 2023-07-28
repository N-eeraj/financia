<template>
  <button class="grid place-items-center rounded-md" :class="[componentClasses]">
    <!-- loading spinner -->
    <div v-if="loading" class="w-6 aspect-square border-2 border-theme-light border-t-transparent rounded-full animate-spin" />

    <slot v-else />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: `flat`,
    validator(variant) {
      const validVariants = [
        'flat',
        'text',
        'outlined',
        'gradient',
      ]
      return validVariants.includes(variant)
    }
  },
  color: {
    type: String,
    required: false,
    default: `light`,
    validator(color) {
      const validColors = [
        'green',
        'blue',
        'dark',
        'light',
        'start',
        'end',
      ]
      return validColors.includes(color)
    }
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
})


const componentClasses = computed(() => {

  if (props.variant !== 'gradient' && ['start', 'end'].includes(props.color))
    console.warn(`Cannot use color ${props.color} with variant ${props.variant}`)

  return [
    buttonClassLibrary[props.variant].classes,
    buttonClassLibrary[props.variant].colors[props.color],
  ]
})
</script>