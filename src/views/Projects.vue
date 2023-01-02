<script setup lang="ts">
import Empty from "@/components/Empty.vue";

const handleCreate = () => {};
</script>

<template>
  <div class="max-w-5xl mx-auto px-3">
    <div class="my-4 flex items-center justify-between">
      <div class="max-w-lg">
        <h4 class="font-medium mb-2 text-white text-base">
          Select a project to work with
        </h4>
        <p class="font-medium text-sm text-gray-400 leading-7">
          Choose from your existing projects, or create a new one.
        </p>
      </div>
      <div class="flex items-center gap-4">
        <Btn @click="handleCreate"> Create a new project </Btn>
        <Btn variant="default"> logout</Btn>
      </div>
    </div>
    <Empty
      @action="handleCreate"
      action="Create a new project"
      image="/images/folder.svg"
      title="You have no projects yet !!"
      desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 tempor incididunt."
    />
  </div>
</template>

<style scoped></style>
