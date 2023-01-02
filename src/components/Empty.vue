<script setup lang="ts">
const props = defineProps<{
  title?: string;
  desc?: string;
  image?: string;
  action;
}>();
const emits = defineEmits(["action"]);
</script>

<template>
  <div class="min-h-full pt-20 pb-10 flex flex-col bg-gray-900">
    <main
      class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div v-if="image" class="flex-shrink-0 flex justify-center">
        <a href="/" class="inline-flex">
          <span class="sr-only">Workflow</span>
          <img class="h-20 w-auto" :src="image" alt="" />
        </a>
      </div>
      <div class="py-4">
        <div
          class="text-center max-w-md mx-auto flex flex-col items-center justify-center"
        >
          <h1 class="my-3 font-medium text-gray-200 tracking-tight text-lg">
            {{ title }}
          </h1>
          <p class="mt-2 text-sm leading-7 font-medium text-gray-400">
            {{ desc }}
          </p>
          <div v-if="action" class="mt-6">
            <Btn @click="emits('action')">{{ action }}</Btn>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
