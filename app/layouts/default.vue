<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center py-4 mt-5">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Alejandro Guevara</NuxtLink
        >
      </div>
      <Menu />
    </header>
    <main class="py-5 mt-10">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titileTemplate: "%s | Alejandro Guevara",
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
</style>
