<template>
  <section class="inline-flex flex-col">
    <span class="text-theme-grey-light text-lg">
      Bills Paid
    </span>
    <div class="flex-column gap-y-6 md:h-full md:overflow-y-auto">
      <BillsPaid v-for="({ id, billName, amount }) of billsPaid" :bill-name="billName" :amount="amount" class="flex-shrink-0 snap-center" :key="id" />
    </div>
  </section>
</template>

