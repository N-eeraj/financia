<template>
  <ScrollableList>
    <template #title>
      Debit Cards
    </template>
    <BankCard v-for="({ id, bankId, cardNumber, networkProvider, expiryDate }) in allDebitCards" type="debit" :bank-id="bankId" :card-number="cardNumber" :network-provider="networkProvider" :expiry-date="expiryDate" :key="id" />
  </ScrollableList>
</template>
