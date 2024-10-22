<template>
  <article class="prose dark:prose-invert prose-h1:text-2xl">
    <ContentDoc path="/about"/>
  </article>
</template>

<script lang="ts" setup>
useHead({
  title: "About",
});
const enableCustomLayout = () => {
  setPageLayout("another");
};
</script>
