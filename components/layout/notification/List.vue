<template>
  <Transition name="slide-down">
    <div v-if="notificationListVisibility" class="absolute top-16 right-0 flex-column items-start gap-y-3 w-80 max-h-96 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light overflow-auto" :class="[classes]">
      <LayoutNotificationItem v-for="({ id, title, body, time }) of notificationsData" :id="id" :title="title" :body="body" :time="time" class="border-t border-t-theme-light first-of-type:border-t-0" :key="id" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
  defineProps({
    classes: {
      type: String,
      required: false,
      default: null
    }
  })
</script>
