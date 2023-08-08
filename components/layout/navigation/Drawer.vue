<template>
  <div class="w-screen h-screen">
    <nav class="fixed top-0 left-0 w-full h-full before:content-[''] before:absolute before:aspect-square before:bg-base-green before:rounded-full before:blur-2xl before:saturate-150 before:z-40 after:content-[''] after:absolute after:bottom-0 after:right-0 after:aspect-square after:bg-base-blue after:rounded-full after:blur-2xl after:saturate-150 after:z-40 nav-container">

      <div class="relative w-full h-full bg-gradient-to-bl from-theme-grey-dark/90 to-theme-dark/60 backdrop-blur-sm z-50">

        <!-- Financia -->
        <!-- <div class="flex-column items-center">
          <img src="/favicon.ico" />
          <BaseGradientText text="Financia" start="from-base-green" end="to-base-blue" class="text-4xl font-bold" />
        </div> -->

      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav-container::before {
  animation: start-from-top 18s infinite ease-in-out, glow 3s infinite ease-in-out alternate;
}
.nav-container::after {
  animation: start-from-bottom 18s infinite ease-in-out, glow 3s infinite ease-in-out alternate;
}

@keyframes glow {
  from {
    width: 40px;
  }
  to {
    width: 120px;
  }
}

@keyframes start-from-top {
  0% {
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
  16.67% {
    top: 0;
    left: 100%;
    transform: translate(-100%, 0);
  }
  50% {
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }
  66.67% {
    top: 100%;
    left: 0;
    transform: translate(0, -100%);
  }
  100% {
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
}

@keyframes start-from-bottom {
  0% {
    bottom: 0;
    right: 0;
    transform: translate(0, 0);
  }
  16.67% {
    bottom: 0;
    right: 100%;
    transform: translate(100%, 0);
  }
  50% {
    bottom: 100%;
    right: 100%;
    transform: translate(100%, 100%);
  }
  66.67% {
    bottom: 100%;
    right: 0;
    transform: translate(0, 100%);
  }
  100% {
    bottom: 0;
    right: 0;
    transform: translate(0, 0);
  }
}
</style>
