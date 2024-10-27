<template>
  <article class="prose dark:prose-invert max-w-none">
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
