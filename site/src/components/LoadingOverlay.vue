<script setup lang="ts">
import Loader from "./Loader.vue";
</script>

<template>
  <div
    class="absolute h-full w-full flex justify-center items-center z-30 pointer-events-none backdrop-blur-sm bg-gray-200 dark:bg-gray-700 dark:bg-opacity-50 bg-opacity-5 inset-0 transition-opacity"
  >
    <Loader />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
