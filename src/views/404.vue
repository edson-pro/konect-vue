<script setup lang="ts"></script>

<template>
  !!Opps, Page Not Foung
  <br />
  <Btn @click="$router.push({ path: '/', query: { from: '404' } })"
    >Go Back Home</Btn
  >
</template>

<style scoped></style>
