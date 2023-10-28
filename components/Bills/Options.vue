<template>
  <section class="flex-column gap-y-4">
    <span class="text-theme-grey-light text-lg">
      Recharge & Pay Bills
    </span>

    <div class="flex md:grid md:grid-cols-4 justify-between flex-wrap gap-x-8 gap-y-6">
      <BillsType v-for="i of 12" name="Test" icon="bi:credit-card" />
    </div>
  </section>
</template>
