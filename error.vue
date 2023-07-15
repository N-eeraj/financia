<template>
  <div>
    Error:
    {{ error.message }}
  </div>

  <button @click="handleError">
    Go Back
  </button>
</template>

<script setup>
const { isAuthenticated } = useMainStore()

const props = defineProps({
  error: Object
})

const handleError = () => clearError({
  redirect: isAuthenticated ? '/dashboard' : '/'
})
</script>
