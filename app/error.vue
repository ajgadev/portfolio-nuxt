<template>
    <NuxtLayout>
        <section class="flex flex-col items-center justify-center">
            <h1 class="text-4xl">Oops {{ error.statusCode }}</h1>
            <h2 class="text-xl text-gray-500 dark:text-gray-400">{{ error.statusMessage }}</h2>
        </section>
    </NuxtLayout>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>