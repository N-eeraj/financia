<template>
  <div>
    <img :src="profilePicture || `${baseURL}/users/john-doe.png`" class="w-14 rounded-full" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { profilePicture } = storeToRefs(userStore)

const runtime = useRuntimeConfig()
const baseURL = runtime.public.baseURL
</script>
