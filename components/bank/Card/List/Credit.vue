<template>
  <ScrollableList>
    <template #title>
      Credit Cards
    </template>
    <BankCard v-for="({ id, bankId, cardNumber, networkProvider, expiryDate, color }) in allCreditCards" type="credit" :bank-id="bankId" :card-number="cardNumber" :network-provider="networkProvider" :expiry-date="expiryDate" :color="color" :key="id" />
  </ScrollableList>
</template>
