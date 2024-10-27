<template>
    <ul>
        <li v-for="link in links" :key="link.id">
            <NuxtLink 
                :to="{path: route.path, hash:`#${link.id}`}" 
                class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                :class="{'ml-4': level, 'text-green-600 dark:text-green-400': activeId === link.id}"
            >
                {{ link.text }}
            </NuxtLink>
            <TocLinks v-if="link.children" :links="link.children" :level="level + 1" :activeId="activeId" />
        </li>
    </uL>
</template>

<script setup lang="ts">
const route = useRoute();
const props = defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
})
</script>