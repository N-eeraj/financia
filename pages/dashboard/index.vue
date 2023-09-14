<template>
  <div>
    <BankAccount :bank-id="1" account-number="1234123412341234" ifsc="ICI1234" :account-type="1" :balance="123456" />
  </div>
</template>

<script setup lang="ts">
definePageMeta(authDashboard)
</script>
