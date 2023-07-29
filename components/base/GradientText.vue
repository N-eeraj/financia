<template>
  <span class="inline-block bg-clip-text text-transparent" :class="[direction, start, end]">
    {{ text }}
  </span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: false,
    default: 'bg-gradient-to-r',
    validator(direction) {
      const validDirections = [
        'bg-gradient-to-t',
        'bg-gradient-to-tr',
        'bg-gradient-to-r',
        'bg-gradient-to-br',
        'bg-gradient-to-b',
        'bg-gradient-to-bl',
        'bg-gradient-to-l',
        'bg-gradient-to-tl',
      ]
      return validDirections.includes(direction)
    },
  },
  start: {
    type: String,
    required: false,
    default: 'from-gradient-start',
    validator(start) {
      return start.slice(0, 5) === 'from-'
    },
  },
  end: {
    type: String,
    required: false,
    default: 'to-gradient-end',
    validator(end) {
      return end.slice(0, 3) === 'to-'
    },
  },
})
</script>
