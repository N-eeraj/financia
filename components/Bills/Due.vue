<template>
  <div class="flex justify-between items-center gap-x-5 gap-y-1 min-w-[240px] h-20 p-3 bg-gradient-to-b from-gradient-start to-gradient-end rounded">
    <div class="flex-column">
      <span class="text-theme-light text-lg">
        Small Bill
      </span>
      <span class="text-theme-grey-light text-sm">
        Due Date
      </span>
    </div>
    <span class="w-fit text-theme-light text-2xl font-medium text-right">
      {{ currencyFormatter(0) }}
    </span>
  </div>
</template>

<script setup lang="ts">
const { currencyFormatter } = useFormatter()
</script>
