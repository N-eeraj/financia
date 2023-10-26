<template>
  <section class="flex-column gap-y-4">
    <span class="text-theme-grey-light text-lg">
      Upcoming Bills
    </span>

    <div class="flex gap-x-6 overflow-x-auto">
      <BillsDue v-for="i of 3" class="flex-shrink-0" />
    </div>
  </section>
</template>
