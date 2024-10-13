<template>
  <div>
    About page

    <div>
      <button @click="enableCustomLayout">Update layout</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "About",
});
const enableCustomLayout = () => {
  setPageLayout("another");
};
</script>
