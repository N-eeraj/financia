<template>
  <EntryForm :image="image" :title="title" :subtitle="subtitle" :segue="segue" :link="link" @submit="handleSubmit">
    <BaseInput :placeholder="placeholder.email"  variant="clear" dark class="w-full" />
    <BaseInput :placeholder="placeholder.password"  variant="clear" dark class="w-full" />
    <BaseButton variant="gradient" color="blue" dark>
      {{ button }}
    </BaseButton>
  </EntryForm>
</template>

<script setup>
const { image, title, subtitle, segue, link, placeholder, button } = loginData

const handleSubmit = () => {
  console.log('login')
}
</script>
