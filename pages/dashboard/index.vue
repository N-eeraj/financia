<template>
  <div class="flex-column gap-y-6">
    <BankAccountList />

    <div class="flex gap-x-5 overflow-x-auto">
      <QuickAction text="Action Name" icon="carbon:receipt" />
      <QuickAction text="Action Name" icon="carbon:receipt" />
      <QuickAction text="Action Name" icon="carbon:receipt" />
      <QuickAction text="Action Name" icon="carbon:receipt" />
    </div>

    <BankCardListDebit />
    <BankCardListCredit />
  </div>
</template>

<script setup lang="ts">
definePageMeta(authDashboard)
</script>
