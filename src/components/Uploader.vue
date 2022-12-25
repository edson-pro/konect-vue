<script setup lang="ts">
import { useDropZone } from "@vueuse/core";
import { ref, computed } from "vue";

const dropZoneRef = ref<HTMLDivElement>();

function onDrop(files: File[] | null) {
  emit("drop", files);
  // called when files are dropped on zone
}

const emit = defineEmits(["drop"]);

const inputRef = ref<HTMLInputElement>();
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);

const dropClass = computed(() => {
  return (
    `flex  cursor-pointer m-3 transition-all  select-none  flex-col justify-center items-center border-2 p-6 rounded-md border-dashed  max-w-2xl` +
    ` ${
      isOverDropZone.value
        ? "dark:bg-primary dark:bg-opacity-30 bg-primary bg-opacity-20 border-primary border-opacity-70 dark:border-primary"
        : "dark:bg-gray-800 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 border-gray-300 dark:border-gray-600"
    }  `
  );
});

const subtitleClass = computed(() => {
  return isOverDropZone.value
    ? "text-primary dark:text-primary"
    : "text-gray-500 dark:text-gray-500";
});

const openFileDialog = () => {
  inputRef.value?.click();
};

const handleChange = (event: any) =>
  onDrop([...event.target.files].map((file) => file));
</script>

<template>
  <div @click="openFileDialog" ref="dropZoneRef" :class="[dropClass]">
    <input hidden ref="inputRef" type="file" @change="handleChange" />
    <img class="h-16 w-16 my-3" src="/images/image_icon.png" alt="" />
    <h4 class="font-semibold text-[15px] text-gray-800 dark:text-gray-200 my-2">
      Drag and drop you files here, or Browse
    </h4>
    <p :class="[subtitleClass, ` font-medium text-sm my-2`]">
      supports JPG,PNG,WEBP,MP4 and max 10Mb
    </p>
  </div>
</template>

<style scoped></style>
