<template>
  <div class="relative flex flex-col items-center gap-y-16 min-h-screen pb-5 md:gap-y-24">
    <img src="/home/coins.gif" class="w-full max-w-xl lg:absolute top-0 left-0 lg:max-w-2xl" />

    <div class="flex flex-col items-center gap-y-6 w-11/12 md:max-w-xl lg:absolute lg:bottom-12 lg:right-12 lg:items-start lg:max-w-xl lg:gap-y-9">
      <!-- text container -->
      <div class="flex flex-col items-center lg:items-start lg:gap-y-2">
        <BaseGradientText text="Financia" start="from-base-green" end="to-base-blue" class="text-7xl text-center font-extrabold md:text-8xl lg:text-9xl" />
        <p class="text-theme-grey-light text-center md:text-2xl lg:text-left">
          Take Control of your finance by managing all your accounts, cards and expenses at one place.
        </p>
      </div>

      <!-- buttons container -->
      <div class="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-6 w-full max-w-xs">
        <BaseButton variant="gradient" color="blue" class="w-full text-theme-light" @click="$router.push('/login')">
          Login
        </BaseButton>
        <BaseButton color="dark" class="w-full text-theme-light" @click="$router.push('/sign-up')">
          Sign Up
        </BaseButton>
      </div>
    </div>
  </div>
</template>
