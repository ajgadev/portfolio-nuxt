<template>
  <p class="mb-10">Take a look at my Github projects</p>

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
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
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
</template>

<script lang="ts" setup>
// const GITHUB_REPO_URL = "https://api.github.com/users/ajgadev/repos";
const { error, pending, data } = await useFetch(process.env.GITHUB_REPO_URL ?? '');
// const { error, pending, data } = await useFetch(GITHUB_REPO_URL);
const repos = computed(() =>
  data.value
    ?.filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>
