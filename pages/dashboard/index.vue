<template>
  <div class="flex-column gap-y-6">
    <BankAccountList />
    <QuickActionList />
    <BankCardListDebit />
    <BankCardListCredit />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  ...authDashboard,
  pageTitle: 'Dashboard',
})
</script>
