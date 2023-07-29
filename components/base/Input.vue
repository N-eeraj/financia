<template>
  <input :placeholder="placeholder" class="box-border px-5 py-3 rounded-md border placeholder:text-theme-grey-light focus:border-2 focus:border-base-blue focus:outline-none" :class="componentClasses" />
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: 'filled',
    validator(variant) {
      const validVariants = [
        'filled',
        'outlined',
        'clear',
      ]
      return validVariants.includes(variant)
    },
  },
  placeholder: {
    type: String,
    required: false,
  },
  dark: {
    type: Boolean,
    required: false,
    default: false,
  }
})

const componentClasses = computed(() => {
  const inputClassLibrary = {
    filled: {
      background: 'bg-white',
      border: {
        dark: 'border-theme-grey-light',
        light: 'border-theme-grey-dark',
      }
    },
    outlined: {
      background: 'bg-transparent',
      border: {
        dark: 'border-theme-light',
        light: 'border-theme-dark',
      }
    },
    clear: {
      background: 'bg-theme-light/10 backdrop-blur-sm',
      border: {
        dark: 'border-theme-light/50',
        light: 'border-theme-dark/50',
      }
    },
  }

  const textColor = props.dark ? 'text-theme-light' : 'text-theme-dark'

  return [
    inputClassLibrary[props.variant].background,
    inputClassLibrary[props.variant].border[props.theme],
    textColor,
  ]
})
</script>