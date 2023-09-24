<template>
  <form class="flex-column items-center md:items-start gap-y-8 w-full md:w-1/2 max-w-full md:max-w-md" @submit="handleSubmit">
    <BaseInput v-model="form.password" :ref="el => formInput.password = el" type="password" :validator="requiredValidation" placeholder="Password" variant="clear" dark class="w-full" @change="handlePasswordChange" />
    <BaseInput v-model="form.confirmPassword" :ref="el => formInput.confirmPassword = el" type="password" :validator="handlePasswordConfirmation" placeholder="Confirm Password" variant="clear" dark class="w-full" />

    <BaseButton variant="gradient" color="blue" dark>
      Update
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
type TemplateRef = Element | ComponentPublicInstance | null
interface ProfileFormInput {
  password: TemplateRef
  confirmPassword: TemplateRef
}
// form field references
const formInput = reactive<ProfileFormInput>({
  password: null,
  confirmPassword: null,
})

const form = reactive({
  password: '',
  confirmPassword: '',
})

const handlePasswordConfirmation = (value: any) => {
  const passswordValidationResult = passwordValidation(value)
  if (passswordValidationResult.error)
    return passswordValidationResult
  const confirmpPassswordValidationResult = confirmValidation(form.password, value, 'passwords')
  if (confirmpPassswordValidationResult.error)
    return confirmpPassswordValidationResult
}

const handlePasswordChange = () => form.confirmPassword && formInput.confirmPassword?.validate()

const handleSubmit = (event: Event) => {
  event.preventDefault()
  if (!validateForm(formInput)) return
  console.log('form Submit')
}
</script>
