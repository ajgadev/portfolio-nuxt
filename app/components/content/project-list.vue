<template>
  <div class="not-prose font-mono">
    <section v-if="pending">
      <div>Loading...</div>
    </section>
    <section v-else-if="error">
      <div>Error: {{ error.message }}</div>
    </section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repository in repos"
          :key="repository.id"
          class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono"
        >
          <a :href="repository.html_url" target="_blank">
            <div class="flex items-center justify-between">
              <div class="text-xl font-semibold">{{ repository.name }}</div>
              <div class="text-sm">{{ repository.stargazers_count }} *</div>
            </div>
            <p class="text-sm">{{ repository.description }}</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from "#app";
const config = useRuntimeConfig();
const { error, pending, data } = await useFetch(config.public.githubRepoUrl);
const repos = computed(() =>
  data.value
    ?.filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>
