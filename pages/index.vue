<template>
  <div class="relative flex-column items-center gap-y-16 min-h-screen px-[calc((100%-1440px)/2)] pb-5 md:gap-y-24 lg:pb-14">
    <img src="/coins.gif" alt="Decorative coins illustration" class="w-full max-w-xl lg:absolute top-0 left-0 lg:max-w-2xl" />

    <div class="flex-column items-center gap-y-6 w-11/12 md:max-w-xl lg:absolute lg:bottom-12 lg:right-12 lg:items-start lg:max-w-xl lg:gap-y-9">
      <!-- text container -->
      <div class="flex-column items-center lg:items-start lg:gap-y-2">
        <BaseGradientText text="Financia" start="from-base-green" end="to-base-blue" class="text-7xl text-center font-extrabold md:text-8xl lg:text-9xl" />
        <p class="text-theme-grey-light text-center md:text-2xl lg:text-left">
          Take Control of your finance by managing all your accounts, cards and expenses at one place.
        </p>
      </div>

      <!-- buttons container -->
      <div class="flex-column md:!flex-row items-center gap-y-4 w-full max-w-xs md:gap-x-6">
        <BaseButton variant="gradient" color="blue" dark class="w-full" data-cy="login-btn" @click="$router.push('/login')">
          Login
        </BaseButton>
        <BaseButton color="dark" class="w-full" data-cy="sign-up-btn" @click="$router.push('/sign-up')">
          Sign Up
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  visitor: true,
  user: true,
})
</script>
