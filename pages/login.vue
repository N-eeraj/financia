<template>
  <h2>
    Login
  </h2>
  <button @click="handleLogin">
    Login
  </button>
  <NuxtLink to="/home">
    Error Page
  </NuxtLink>
</template>

<script setup>
const { updateAuthentication } = useMainStore()

const handleLogin = () => updateAuthentication(true)
</script>