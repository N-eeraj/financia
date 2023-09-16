<template>
  <div class="relative inline-block w-[300px] h-[175px] rounded-md" :class="classes">
    <img src="/world-map.svg" class="absolute top-0 left-0 w-full h-full" />

    <div class="absolute w-full h-full">
      <span class="absolute top-3 left-3 text-theme-light text-sm">
        {{ capitalize(type) }}
      </span>

      <img :src="`/banking/network-providers/${networkProvider}.svg`" :alt="networkProvider" class="absolute top-3 right-3 w-16 h-8" />

      <span class="absolute top-1/2 left-1/2 w-full text-theme-light text-lg text-center font-bruno-ace-sc -translate-x-1/2 -translate-y-1/2">
        {{ splitFormatter(cardNumber) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: true,
    validator(cardType: string) {
      const validCardTypes = [
        'debit',
        'credit',
      ]
      return validCardTypes.includes(cardType)
    },
  },
  networkProvider: {
    type: String,
    required: true,
    validator(networkProvider: string) {
      const validNetworkProvider = [
        'visa',
        'master-card',
        'rupay',
      ]
      return validNetworkProvider.includes(networkProvider)
    },
  },
  cardNumber: {
    type: Number,
    required: true,
    validator(cardNumber: number) {
      return String(cardNumber).length === 16
    },
  },
  classes: {
    type: String,
    required: false,
  },
})

const {
  capitalize,
  splitFormatter,
} = useFormatter()
</script>
