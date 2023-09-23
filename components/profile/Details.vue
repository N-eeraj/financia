<template>
  <div class="flex-column items-center gap-y-12 w-full">
    <div class="relative w-48 aspect-square">
      <img :src="profilePicture || `${baseURL}/users/john-doe.png`" class="w-full h-full rounded-full" />
      <Icon name="mdi-camera" size="48" class="absolute right-0 bottom-0 p-3 bg-base-green text-theme-light rounded-full" />
    </div>

    <form class="flex-column items-end gap-y-8 w-full max-w-full" @submit="handleSubmit">
      <BaseInput v-model="form.name" :ref="el => formInput.name = el" :validator="requiredValidation" placeholder="Full Name" variant="clear" dark class="w-full" />
      <BaseInput v-model="form.email" :ref="el => formInput.email = el" :validator="requiredValidation" placeholder="Email" variant="clear" dark class="w-full" />
      <BaseInput v-model="form.phone" :ref="el => formInput.phone = el" placeholder="Phone Number" variant="clear" dark class="w-full" />

      <BaseButton variant="gradient" color="blue" dark>
        Save
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { profilePicture } = storeToRefs(userStore)

type TemplateRef = Element | ComponentPublicInstance | null
interface ProfileFormInput {
  name: TemplateRef
  email: TemplateRef
  phone: TemplateRef
}
// form field references
const formInput = reactive<ProfileFormInput>({
  name: null,
  email: null,
  phone: null,
})

const runtime = useRuntimeConfig()
const baseURL = runtime.public.baseURL

const form = reactive({
  name: '',
  email: '',
  phone: '',
})

const handleSubmit = (event: Event) => {
  event.preventDefault()
  if (!validateForm(formInput)) return
  console.log('form Submit')
}
</script>
