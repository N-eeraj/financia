<template>
  <div class="flex justify-between items-center gap-x-5 gap-y-1 h-20 p-3 border-base-green rounded cursor-pointer">
    <div class="flex-column">
      <span class="text-theme-light text-lg">
        Bill Name
      </span>
      <span class="text-theme-grey-light text-sm">
        Due
        Date
      </span>
    </div>
    <span class="w-fit text-theme-light text-2xl font-medium text-right">
      {{ currencyFormatter(123) }}
    </span>
  </div>
</template>

<script setup lang="ts">
const { currencyFormatter } = useFormatter()
</script>
