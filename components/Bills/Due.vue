<template>
  <div class="flex justify-between items-center gap-x-5 gap-y-1 min-w-[240px] h-20 p-3 bg-gradient-to-b from-gradient-start to-gradient-end rounded">
    <div class="flex-column">
      <span class="text-theme-light text-lg">
        {{ billName }}
      </span>
      <span class="text-theme-grey-light text-sm">
        Due
        {{ formattedDate }}
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
  daysLeft: {
    type: Number,
    required: false,
    default: 0
  },
  amount: {
    type: Number,
    required: true,
  },
})
const { currencyFormatter } = useFormatter()
const formattedDate = computed(() => timeLeft((props.daysLeft)))
</script>
