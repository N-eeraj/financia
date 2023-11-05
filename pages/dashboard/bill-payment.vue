<template>
  <div class="flex justify-between flex-wrap gap-9 h-full md:overflow-y-hidden">
    <BillsUpcoming class="w-full" />
    <BillsOptions class="w-fit h-fit" />
    <BillsHistory class="w-full md:w-80 md:h-[calc(100%-168px)]" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  ...authDashboard,
  pageTitle: 'Bill Payment',
})
</script>
