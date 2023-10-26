<template>
  <div class="relative flex-column items-start gap-y-2 w-full p-3">
    <strong class="text-theme-light text-xl font-medium">
      {{ title }}
    </strong>
    <span class="text-theme-light text-start text-base">
      {{ body }}
    </span>
    <small class="w-full text-end text-theme-grey-light text-xs">
      {{ formattedDate }}
    </small>
    <button class="absolute top-3 right-3" @click="readNotification(id)">
      <Icon name="majesticons:close" size="24" class="text-theme-light" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
    default: null,
  },
  time: {
    type: String,
    required: false,
    default: () => String(new Date().toISOString())
  },
})

const { readNotification } = useMainStore()

const formattedDate = computed(() => timePassed(new Date(props.time)))
</script>
