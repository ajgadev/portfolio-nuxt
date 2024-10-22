<template>
  <article class="prose dark:prose-invert">
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
