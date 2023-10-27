<template>
  <div class="flex justify-between flex-wrap gap-y-9">
    <BillsUpcoming class="w-full" />
    <BillsOptions class="w-full sm:w-fit" />
    <BillsHistory class="w-full sm:w-fit" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  ...authDashboard,
  pageTitle: 'Bill Payment',
})
</script>
