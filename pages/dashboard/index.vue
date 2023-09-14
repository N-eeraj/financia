<template>
  <div>
    <BankAccount :bank-id="1" account-number="1234123412341234" ifsc="IC123" :account-type="1" :balance="123" />
  </div>
</template>

<script setup lang="ts">
definePageMeta(authDashboard)
</script>
