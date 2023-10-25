<template>
  <div>
    <BillsUpcoming />
    <BillsOptions />
    <BillsHistory />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  ...authDashboard,
  pageTitle: 'Bill Payment',
})
</script>
