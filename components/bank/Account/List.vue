<template>
  <ScrollableList>
    <template #title>
      Accounts
    </template>
    <BankAccount v-for="({ id, bankId, accountNumber, ifsc, accountType, balance }) in allBankAccounts" :bank-id="bankId" :account-number="accountNumber" :ifsc="ifsc" :account-type="accountType" :balance="balance" :key="id" />
  </ScrollableList>
</template>
