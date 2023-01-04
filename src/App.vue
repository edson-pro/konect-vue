<script setup lang="ts">
import useAuthComposable from "@/composables/auth";
import ModalManager from "@/components/ModalManager.vue";
useAuthComposable();
</script>

<template>
  <ModalManager />
  <router-view></router-view>
</template>

<style scoped></style>
