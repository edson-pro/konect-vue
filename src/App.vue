<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
import useAuthComposable from "./composables/auth";
useAuthComposable();
</script>

<template>
  <MainLayout />
  <router-view></router-view>
</template>

<style scoped></style>
