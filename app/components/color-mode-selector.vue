<template>
  <div class="flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showNextModeLabe">
      Change to {{ nextMode }}
    </div>
    <button
      @click="toggleColorMode"
      @mouseenter="showNextModeLabe = true"
      @mouseleave="showNextModeLabe = false"
      class="hover:bg-gray-100 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const showNextModeLabe = ref();

const colorMode = useColorMode();
const modes = ["system", "light", "dark"];
const nextModeIcons = {
  system: "🌓",
  light: "🌕",
  dark: "🌑",
};

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;
  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }
  return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

const toggleColorMode = () => {
  colorMode.preference = nextMode.value;
};
</script>
