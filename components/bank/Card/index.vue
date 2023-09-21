<template>
  <div class="relative flex-shrink-0 inline-block w-[300px] h-[175px] bg-gradient-to-tr from-[#013] to-[#059] rounded-md">
    <div class="absolute top-0 left-0 w-full h-full" :style="`backdrop-filter: hue-rotate(${color}deg)`" />
    <img src="/world-map.svg" class="absolute top-0 left-0 w-full h-full object-contain" />

    <div class="absolute w-full h-full">
      <span class="absolute top-3 left-3 text-theme-light text-sm">
        {{ capitalize(type) }}
      </span>

      <img :src="`${baseURL}/banking/network-providers/${networkProvider}.svg`" :alt="networkProvider" class="absolute top-3 right-3 w-16 h-8 object-contain" />

      <span class="absolute top-1/2 left-1/2 w-full text-theme-light text-lg text-center font-bruno-ace-sc -translate-x-1/2 -translate-y-1/2">
        {{ splitFormatter(cardNumber) }}
      </span>

      <img :src="`${baseURL}/${bankDetails?.image}`" :alt="bankDetails?.name" class="absolute bottom-3 left-3 w-24 h-6 object-contain" />


      <span class="absolute bottom-3 right-3 text-theme-light">
        {{ expiryDate }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
  bankId: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
    validator(cardNumber: number) {
      return String(cardNumber).length === 16
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
  expiryDate: {
    type: String,
    required: true,
    validator(expiryDate: string) {
      try {
        const regexTest = /\d{2}\/\d{2}/.test(expiryDate)
        const [mm, yy] = expiryDate.split('/').map(value => Number(value))
        const d = new Date
        const currentYY = d.getFullYear() % 1000
        return Boolean(regexTest && mm && yy && mm <= 12 && yy >= currentYY)
      }
      catch {
        return false
      }
    },
  },
  color: {
    type: Number,
    required: false,
    default: 0,
  },
})

const {
  capitalize,
  splitFormatter,
} = useFormatter()

const bankDetails = computed(() => getBankDetails(props.bankId))

const runtime = useRuntimeConfig()
const baseURL = runtime.public.baseURL
</script>
