<template>
  <button class="inline-grid place-items-center rounded-md" :class="componentClasses">
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
    default: 'flat',
    validator(variant) {
      const validVariants = [
        'flat',
        'text',
        'outlined',
        'gradient',
      ]
      return validVariants.includes(variant)
    },
  },

  color: {
    type: String,
    required: false,
    default: 'light',
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
    },
  },

  dark: {
    type: Boolean,
    required: false,
    default: false,
  },

  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const componentClasses = computed(() => {
  const width = 'min-w-[150px]'
  const padding = 'p-2'
  const transparent = 'bg-transparent'

  const text = {
    light: 'text-theme-light',
    dark: 'text-theme-dark',
    green: 'text-base-green',
    blue: 'text-base-blue',
  }

  const buttonClassLibrary = {
    flat: {
      classes: `${padding} ${width}`,
      colors: {
        green: `${text.green}`,
        blue: `${text.blue}`,
        light: `bg-theme-light ${text.dark} `,
        dark: `bg-theme-dark ${text.light}`,
      }
    },

    text: {
      classes: `${padding} ${transparent} font-bold`,
      colors: {
        green: `text-base-green`,
        blue: `text-base-blue`,
        light: `${text.light}`,
        dark: `${text.dark}`,
      }
    },

    outlined: {
      classes: `${padding} ${width} ${transparent} border`,
      colors: {
        green: `border-base-green text-base-green hover:${text.green}/20`,
        blue: `border-base-blue text-base-blue hover:${text.blue}/20`,
        light: `border-theme-light ${text.light} hover:bg-theme-light/20`,
        dark: `border-theme-dark ${text.dark} hover:bg-theme-dark/20`,
      }
    },

    gradient: {
      classes: `${padding} ${width} bg-gradient-to-r`,
      colors: {
        green: `from-base-green to-base-blue`,
        blue: `from-base-blue to-base-green`,
        light: `from-theme-light to-theme-dark`,
        dark: `from-theme-dark to-theme-light`,
        start: `from-gradient-start to-gradient-end`,
        end: `from-gradient-end to-gradient-start`,
      }
    },
  }

  const textColor = props.dark ? 'text-theme-light' : 'text-theme-dark'

  if (props.variant !== 'gradient' && ['start', 'end'].includes(props.color))
    console.warn(`Cannot use color ${props.color} with variant ${props.variant}`)

  return [
    buttonClassLibrary[props.variant].classes,
    buttonClassLibrary[props.variant].colors[props.color],
    textColor,
  ]
})
</script>