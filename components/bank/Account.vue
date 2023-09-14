<template>
  <div class="flex-column gap-y-3 w-72 h-44 p-3 bg-theme-grey-dark rounded-md">
    <div>
      {{ bankId }}
      {{ accountNumber }}
    </div>

    <strong>
      {{ balance }}
    </strong>

    <div>
      <div>
        <span>
          IFSC
        </span>
        <span>
          {{ ifsc }}
        </span>
      </div>
      <div>
        <span>
          Type
        </span>
        <span>
          {{ accountTypeName }}
        </span>
      </div>
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
    type: String,
    required: true,
  },
  ifsc: {
    type: String,
    required: true,
  },
  accountType: {
    type: Number,
    required: true,
    validator(accountType: number) {
      const validAccountTypes = [
        1,
        2,
        3,
        4,
        5,
      ]
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
</script>
