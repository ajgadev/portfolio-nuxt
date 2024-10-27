<template>
  <article class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 max-w-none">
    <ContentDoc>
      <template #not-found>
        <div class="text-center">
          <div class="text-gray-400 dark:text-gray-500">
            <div class="text-2xl font-semibold">Post not found (404)</div>
            <div>This blog post does not exist</div>
          </div>
        </div>
      </template>
      <template v-slot="{ doc }" #default>
        <div class="grid grid-cols-6 gap-16">
          <div :class="{'col-span-4': doc.toc, 'col-span-6': !doc.toc}">
            <ContentRenderer :value="doc" />
          </div>
          <div class="col-span-2 not-prose" v-if="doc.toc">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of Contents</div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :activeId="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script lang="ts" setup>
const activeId = ref(null);
onMounted(() => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries){
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    };
  };
  
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  const elements = document.querySelectorAll('h1, h2');
  for (const element of elements) {
    observer.observe(element);
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });

});
</script>