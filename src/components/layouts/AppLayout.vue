<template>
  <div class="flex">
    <div>
      <Sidebar />
    </div>
    <div class="w-full flex-1 h-screen p-4 overflow-y-auto">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "../Sidebar.vue";
</script>

<style scoped>
body {
  overflow: hidden;
}
</style>
