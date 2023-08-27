<template>
  <main class="flex-center flex-col w-full h-screen px-[calc((100%-1440px)/2)] bg-gradient-to-b from-gradient-start to-gradient-end text-white lg:flex-row-reverse lg:!justify-start">
    <BaseGradientText text="Financia" start="from-base-green" end="to-base-blue" class="absolute top-6 left-[5%] font-semibold text-5xl" />
    <img src="/empty-wallet.svg" alt="Decorative empty wallet illustration" class="w-full md:w-11/12 lg:w-auto lg:h-4/6" />

    <section class="flex-column items-center gap-y-5 w-11/12 lg:gap-y-6 lg:max-w-md">
      <div class="flex-column gap-y-2 lg:items-start">
        <h1 class="text-theme-light text-6xl font-semibold text-center md:text-8xl">
          Oops!
        </h1>
        <p class="text-theme-grey-light text-xl text-center md:text-2xl lg:text-start">
          We couldn't find the page that you're looking for
        </p>
      </div>

      <BaseButton variant="gradient" color="blue" dark @click="handleGoBack">
        Back to Home
      </BaseButton>
    </section>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const { authenticated } = storeToRefs(userStore)

const handleGoBack = () => router.replace(authenticated.value ? '/dashboard' : '/')
</script>
