<template>
  <ScrollableList>
    <QuickAction v-for="({ icon, text, action }) in quickActions" :text="text" :icon="icon" @click="handleAction(action)" />
  </ScrollableList>
</template>

<script setup lang="ts">

const handleBillPayment = () => {}

const handleRecharge = () => {}

const handleSpends = () => {}

const handleCreditScore = () => {}

const handleTransactions = () => {}

const handleAction = (action: string) => {
  switch (action) {
    case 'billPayment':
      return handleBillPayment()
    case 'recharge':
      return handleRecharge()
    case 'spends':
      return handleSpends()
    case 'creditScore':
      return handleCreditScore()
    case 'transactions':
      return handleTransactions()
    default:
      toastify('Invalid Action', 'error')
  }
}
</script>
