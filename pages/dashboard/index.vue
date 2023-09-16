<template>
  <div>
    <BankAccount :bank-id="2" :account-number="1234123412341234" ifsc="ICI1234" :account-type="1" :balance="123456" />
    <BankCard type="credit" :bank-id="4" :card-number="1234123412341234"  network-provider="visa" expiry-date="12/24" classes="bg-gradient-to-tr from-[#00334D] to-[#006699]" />
    <BankCard type="debit" :bank-id="1" :card-number="1234123412341234" network-provider="rupay" expiry-date="06/25" classes="bg-gradient-to-tr from-[#4D0033] to-[#660099]" />
    <QuickAction text="Action Name" icon="carbon:receipt" />
  </div>
</template>

<script setup lang="ts">
definePageMeta(authDashboard)
</script>
