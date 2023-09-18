<template>
  <ScrollableList>
    <template #title>
      Credit Cards
    </template>
    <BankCard v-for="({ id, bankId, cardNumber, networkProvider, expiryDate }) in allCreditCards" type="credit" :bank-id="bankId" :card-number="cardNumber" :network-provider="networkProvider" :expiry-date="expiryDate" :key="id" />
  </ScrollableList>
</template>
