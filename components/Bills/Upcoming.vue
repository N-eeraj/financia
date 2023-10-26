<template>
  <section class="flex-column gap-y-4">
    <span class="text-theme-grey-light text-lg">
      Upcoming Bills
    </span>

    <div class="flex gap-x-6 overflow-x-auto">
      <BillsDue v-for="({ id, billName, daysLeft, amount }) of bills" :bill-name="billName" :days-left="daysLeft" :amount="amount" class="flex-shrink-0" :key="id" />
    </div>
  </section>
</template>
