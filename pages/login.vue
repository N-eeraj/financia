<template>
  <EntryForm :image="image" :title="title" :subtitle="subtitle" :segue="segue" :link="link" class="flex-row-reverse" @submit="handleSubmit">
    <BaseInput v-model="form.email" :ref="el => formInput.email = el" type="email" :validator="emailValidation" :placeholder="placeholder.email" variant="clear" dark class="w-full" />
    <BaseInput v-model="form.password" :ref="el => formInput.password = el" type="password" :validator="requiredValidation" :placeholder="placeholder.password" variant="clear" dark class="w-full" />
    <BaseButton variant="gradient" color="blue" dark>
      {{ button }}
    </BaseButton>
  </EntryForm>
</template>

<script setup>
const { image, title, subtitle, segue, link, placeholder, button } = loginData

// form field references
const formInput = reactive({
  email: null,
  password: null,
})

const form = reactive({
  email: '',
  password: '',
})

const handleSubmit = () => {
  if (!validateForm(formInput)) return
  try {
    const user = validateUserLogin(form)
    console.log(user)
  }
  catch (error) {
    console.warn(error)
  }
  console.log(form)
}
</script>
