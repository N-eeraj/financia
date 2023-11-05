<template>
  <div class="flex justify-between items-center gap-x-5 gap-y-1 h-20 p-3 bg-gradient-to-bl glass-bg border border-base-green rounded cursor-pointer">
    <div class="flex-column">
      <span class="text-theme-light text-lg">
        {{ billName }}
      </span>
      <span class="text-theme-grey-light text-sm">
        Paid on
        {{ paidOn }}
      </span>
    </div>
    <span class="w-fit text-theme-light text-2xl font-medium text-right">
      {{ currencyFormatter(amount) }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  billName: {
    type: String,
    required: true,
  },
  paidOn: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
})
const { currencyFormatter } = useFormatter()
</script>
