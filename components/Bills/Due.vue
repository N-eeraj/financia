<template>
  <div class="grid grid-rows-2 grid-cols-2 justify-between items-center w-60 h-20 p-3 bg-gradient-to-b from-gradient-start to-gradient-end rounded">
    <span class="text-theme-light">
      Bill Name
    </span>
    <span class="order-1 text-theme-grey-light">
      Due Date
    </span>
    <strong class="w-min row-span-2 text-theme-light text-right">
      {{ currencyFormatter(0) }}
    </strong>
  </div>
</template>

<script setup lang="ts">
const { currencyFormatter } = useFormatter()
</script>
