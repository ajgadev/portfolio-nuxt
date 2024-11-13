<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center py-4 mt-5">
      <div class="flex items-center space-x-12">
        <div>
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
            >Alejandro Guevara</NuxtLink
          >
        </div>
        <Menu />
      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>
    <main class="py-5 mt-10">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "%s | Alejandro Guevara",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto";
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
