<template>
  <div class="relative">
    <input :value="modelValue" :type="currentType" :placeholder="placeholder" class="w-full px-5 py-3 rounded-md border placeholder:text-theme-grey-light focus:border-2" :class="componentClasses" @input="handleInput" @keypress="handleKeyPress" @keydown="handleKeyDown" @keyup="handleKeyUp" @keypress.enter="handleEnter" @focus="handleFocus" @blur="handleBlur" />

    <button v-if="type === 'password'" type="button" class="absolute top-1/2 right-2 -translate-y-1/2" @click="togglePasswordVisibility">
      <Icon :name="`mdi-eye${showPassword ? '-off' : ''}`" size="24" class="text-theme-grey-light" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },

  type: {
    type: String,
    required: false,
    default: 'text',
    validator(type) {
      const validTypes = [
        'email',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'url',
      ]
      return validTypes.includes(type)
    },
  },

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

const emit = defineEmits([
  'update:modelValue',
  'input',
  'keypress',
  'keydown',
  'keyup',
  'enter',
  'focus',
  'blur',
])

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

// passsword input toggle
const showPassword = ref(false)
const currentType = computed(() => {
  if (props.type === 'password' && showPassword.value)
    return 'text'
  return props.type
})
const togglePasswordVisibility = () => showPassword.value = !showPassword.value


// event emits
const handleInput = ({ target }) => {
  emit('update:modelValue', target.value)
  emit('input', target.value)
}
const handleKeyDown = ({ target }) => emit('keydown', target.value)
const handleKeyPress = ({ target }) => emit('keypress', target.value)
const handleKeyUp = ({ target }) => emit('keyup', target.value)
const handleEnter = ({ target }) => emit('enter', target.value)
const handleFocus = ({ target }) => emit('focus', target.value)
const handleBlur = ({ target }) => emit('blur', target.value)
</script>
