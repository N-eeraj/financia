<template>
  <div class="relative flex-column gap-y-3 w-72 h-44 p-3 bg-theme-grey-dark rounded-md">
    <div class="flex gap-x-3">
      <div class="place-center w-12 aspect-square bg-theme-light rounded-md">
        <img :src="bankDetails?.image" :alt="bankDetails?.name" class="w-4/5" />
      </div>

      <div class="flex-column">
        <small class="text-theme-grey-light text-sm">
          {{ bankDetails?.name }}
        </small>
        <span class="text-theme-light text-lg">
          {{ accountNumberFormatter(accountNumber) }}
        </span>
      </div>
    </div>

    <strong class="text-2xl font-medium text-theme-light">
      {{ currencyFormatter(balance) }}
    </strong>

    <div class="absolute bottom-0 left-0 flex gap-x-12 w-full px-3 py-1 bg-theme-dark/25">
      <BankAccountDetails label="IFSC" :value="ifsc" />
      <BankAccountDetails label="Type" :value="accountTypeName" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  bankId: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
    validator(accountNumber: number) {
      return String(accountNumber).length === 16
    },
  },
  ifsc: {
    type: String,
    required: true,
  },
  accountType: {
    type: Number,
    required: true,
    validator(accountType: number) {
      const validAccountTypes = [ 1, 2, 3, 4, 5, ]
      return validAccountTypes.includes(accountType)
    },
  },
  balance: {
    type: Number,
    required: true,
  },
})

const accountTypes = [
  {
    value: 1,
    name: 'Savings',
  },
  {
    value: 2,
    name: 'Salary',
  },
  {
    value: 3,
    name: 'Fixed Deposit',
  },
  {
    value: 4,
    name: 'Recurring Deposit',
  },
  {
    value: 5,
    name: 'NRI',
  },
]

const accountTypeName = computed(() => accountTypes.find(({ value }) => value === props.accountType)?.name)

const bankDetails = computed(() => banks.find(({ id }) => id === props.bankId))
if (!bankDetails.value)
  throw `Invalid Bank Id ${props.bankId}`
</script>
