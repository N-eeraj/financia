<template>
  <EntryForm :image="image" :title="title" :subtitle="subtitle" :segue="segue" :link="link" @submit="handleSubmit">
    <BaseInput v-model="form.name" :ref="el => formInput.name = el" :validator="nameValidation" :placeholder="placeholder.name" variant="clear" dark class="w-full" />
    <BaseInput v-model="form.email" :ref="el => formInput.email = el" type="email" :validator="emailValidation" :placeholder="placeholder.email" variant="clear" dark class="w-full" />
    <BaseInput v-model="form.password" :ref="el => formInput.password = el" type="password" :validator="passwordValidation" :placeholder="placeholder.password" variant="clear" dark class="w-full" />
    <BaseInput v-model="form.confirmPassword" :ref="el => formInput.confirmPassword = el" type="password" :validator="handlePasswordConfirmation" :placeholder="placeholder.confirmPassword" variant="clear" dark class="w-full" />
    <BaseButton variant="gradient" color="blue" dark>
      {{ button }}
    </BaseButton>
  </EntryForm>
</template>

<script setup>
const { setUser } = useUserStore()
const router = useRouter()
const { image, title, subtitle, segue, link, placeholder, button } = signUpData

// form field references
const formInput = reactive({
  name: null,
  email: null,
  password: null,
  confirmPassword: null,
})

// form input values
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const handlePasswordConfirmation = value => confirmValidation(form.password, value, 'passwords')

const handleSubmit = () => {
  if (!validateForm(formInput)) return
  try {
    setUser(validateUserSignUp(form))
    router.push('/dashboard')
  }
  catch (error) {
    console.warn(error)
  }
}
</script>
