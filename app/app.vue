<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.xxx-enter-active,
.xxx-leave-active {
  transition: opacity 0.5s;
}

.xxx-enter-from,
.xxx-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>