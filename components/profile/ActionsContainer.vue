<template>
  <div class="flex w-fit max-w-full bg-theme-light rounded-lg overflow-x-auto" data-cy="profile-action-container">
    <BaseButton v-for="({ text, classes, hash, activeClasses }, index) in actions" variant="text" class="flex-shrink-0 px-5 md:px-8 font-medium" :class="getClasses(classes, hash, activeClasses)" :key="index" data-cy="action" @click="handleClick(hash, $event)">
      {{ text }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  activeHash: {
    type: String,
    required: false,
    default: '',
  }
})

const route = useRoute()
const router = useRouter()
const { setHelpVisibility } = useMainStore()

const actions = [
  {
    text: 'My Profile',
    classes: '!text-theme-dark',
    hash: '',
    activeClasses: '!bg-base-green',
  },
  {
    text: 'Password',
    classes: '!text-theme-dark',
    hash: '#change-password',
    activeClasses: '!bg-base-blue',
  },
  {
    text: 'Delete Account',
    classes: '!text-red-500',
    hash: '#delete-account',
  }
]

const getClasses = (classes: string, hash: string, activeClasses?: string): string => [
    classes,
    props.activeHash === hash && activeClasses,
  ].join(' ')

const handleClick = (hash: string, event: Event): void => {
  if (hash === '#delete-account') {
    event.stopPropagation()
    setHelpVisibility(false)
  }
  router.replace({
    ...route,
    hash,
  })
}
</script>
