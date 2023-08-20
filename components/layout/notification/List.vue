<template>
  <Transition name="slide-down">
    <div v-if="notificationListVisibility" class="absolute top-16 right-0 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light overflow-auto" :class="[classes]" @click.stop>

      <template v-if="allNotifications.length">
        <div class="flex-column items-start gap-y-3 w-80 max-h-96 overflow-auto">
          <LayoutNotificationItem v-for="({ id, title, body, time }) of allNotifications" :id="id" :title="title" :body="body" :time="time" class="border-t border-t-theme-light first-of-type:border-t-0" :key="id" />
        </div>

        <button class="w-full p-2 bg-theme-grey-dark/50 text-theme-light">
          Read All Notifications
        </button>
      </template>

    <div v-if="notificationListVisibility" class="absolute top-16 right-0 flex-column items-start gap-y-3 w-80 max-h-96 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light overflow-auto" :class="[classes]">
      <LayoutNotificationItem v-for="({ id, title, body, time }) of notificationsData" :id="id" :title="title" :body="body" :time="time" class="border-t border-t-theme-light first-of-type:border-t-0" :key="id" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

defineProps({
  classes: {
    type: String,
    required: false,
    default: null
  }
})

const mainStore = useMainStore()
const { allNotifications } = storeToRefs(mainStore)
</script>
