<template>
  <div class="flex-column md:!flex-row justify-center items-center md:gap-x-16 gap-y-12 w-full">
    <div class="relative w-48 md:w-1/4 md:min-w-[180px] md:max-w-[240px] aspect-square">
      <img :src="form.profilePicture" class="w-full h-full object-cover rounded-full" />
      <label for="profilePictureInput">
        <Icon name="mdi-camera" size="48" class="absolute right-0 bottom-0 p-3 bg-base-green text-theme-light rounded-full cursor-pointer" />
      </label>
      <input type="file" accept="image/*" id="profilePictureInput" class="hidden" @change="handleFileInput">
    </div>

    <form class="flex-column items-center md:items-end gap-y-8 w-full md:w-1/2 max-w-full md:max-w-md" @submit="handleSubmit">
      <BaseInput v-model="form.name" :ref="el => formInput.name = el" :validator="nameValidation" placeholder="Full Name" variant="clear" dark class="w-full" data-cy="name" />
      <BaseInput v-model="form.email" :ref="el => formInput.email = el" :validator="emailValidation" placeholder="Email" variant="clear" dark class="w-full" data-cy="email" />
      <BaseInput v-model="form.phone" :ref="el => formInput.phone = el" :validator="phoneValidation" placeholder="Phone Number" variant="clear" dark class="w-full" data-cy="phone" />

      <BaseButton variant="gradient" color="blue" dark>
        Save
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

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
  profilePicture: ''
})

const handleSubmit = (event: Event) => {
  event.preventDefault()
  if (!validateForm(formInput)) return
  updateUserDetails(form)
}

const handleFileInput = ({ target }: any) => {
  if (target.files.length)
    form.profilePicture = URL.createObjectURL(target.files[0])
}

onMounted(() => {
  form.name = user.value?.name || ''
  form.email = user.value?.email || ''
  form.phone = user.value?.phone || ''
  form.profilePicture = user.value?.profilePicture || `${baseURL}/users/john-doe.png`
})
</script>
