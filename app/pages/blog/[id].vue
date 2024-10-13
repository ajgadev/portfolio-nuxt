<template>
  <div>
    We are inside the blog
  </div>
  <div>
    The post id is {{ route.params.id }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style>

</style>