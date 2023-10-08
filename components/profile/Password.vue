<template>
  <form class="flex-column items-center md:items-start gap-y-8 w-full md:w-1/2 max-w-full md:max-w-md" @submit="handleSubmit">
  <BaseInput v-model="form.password" :ref="el => formInput.password = el" type="password" :validator="requiredValidation" :error="passwordError" placeholder="Password" variant="clear" dark class="w-full" data-cy="password" />
    <BaseInput v-model="form.newPassword" :ref="el => formInput.newPassword = el" type="password" :validator="passwordValidation" placeholder="New Password" variant="clear" dark class="w-full" data-cy="new-password" @change="handlePasswordChange" />
  <BaseInput v-model="form.confirmPassword" :ref="el => formInput.confirmPassword = el" type="password" :validator="handlePasswordConfirmation" placeholder="Confirm Password" variant="clear" dark class="w-full" data-cy="confirm-password" />

    <BaseButton variant="gradient" color="blue" dark data-cy="update-btn">
      Update
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
type TemplateRef = Element | ComponentPublicInstance | null
interface ProfileFormInput {
  password: TemplateRef
  newPassword: TemplateRef
  confirmPassword: TemplateRef
}
// form field references
const formInput = reactive<ProfileFormInput>({
  password: null,
  newPassword: null,
  confirmPassword: null,
})

const form = reactive({
  password: '',
  newPassword: '',
  confirmPassword: '',
})

const passwordError = ref('')

const handlePasswordConfirmation = (value: any) => confirmValidation(form.newPassword, value, 'passwords')

const handlePasswordChange = () => form.confirmPassword && formInput.confirmPassword?.validate()

const handleSubmit = (event: Event) => {
  passwordError.value = ''
  event.preventDefault()
  if (!validateForm(formInput)) return
  const { success, message } = updateUserPassword(form)
  if (success) {
    toastify(message, 'success')
    passwordError.value = ''
  }
  else
    passwordError.value = message
}
</script>
