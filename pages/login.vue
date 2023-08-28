<template>
  <EntryForm :image="image" :title="title" :subtitle="subtitle" :segue="segue" :link="link" class="flex-row-reverse" @submit="handleLogin">
    <BaseInput v-model="form.email" :ref="el => formInput.email = el" type="email" :validator="emailValidation" :placeholder="placeholder.email" variant="clear" dark class="w-full" />
    <BaseInput v-model="form.password" :ref="el => formInput.password = el" type="password" :validator="requiredValidation" :placeholder="placeholder.password" variant="clear" dark class="w-full" />
    <BaseButton variant="gradient" color="blue" dark>
      {{ button }}
    </BaseButton>
  </EntryForm>
</template>

<script setup lang="ts">
const { setUser } = useUserStore()
const router = useRouter()
const { image, title, subtitle, segue, link, placeholder, button } = loginData

definePageMeta({
  visitor: true,
  user: false,
})

type TemplateRef = Element | ComponentPublicInstance | null
interface LoginFormInput {
  email: TemplateRef
  password: TemplateRef
}
// form field references
const formInput = reactive<LoginFormInput>({
  email: null,
  password: null,
})

const form = reactive({
  email: '',
  password: '',
})

const handleLogin = () => {
  if (!validateForm(formInput)) return
  try {
    setUser(validateUserLogin(form))
    router.push('/dashboard')
  }
  catch (error) {
    toastify(String(error), 'error')
  }
}
</script>
