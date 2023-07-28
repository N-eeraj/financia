<template>
  <button @click="handleLogin">
    Login
  </button>
</template>

<script setup>
const { updateAuthentication } = useMainStore()

const handleLogin = () => updateAuthentication(true)
</script>