<script setup lang="ts">
import { computed, ref, toRefs } from "vue";

const props = withDefaults(defineProps<{ blur: boolean; zIndex: number }>(), {
  blur: false,
  zIndex: 100,
});

const { blur, zIndex } = toRefs(props);

const blurClass = computed(() => (blur.value ? `backdrop-blur-sm ` : ""));
const emits = defineEmits(["click"]);
</script>

<template>
  <div
    @click="emits('click')"
    :style="{ zIndex: zIndex }"
    :class="[
      'absolute select-none h-full w-full flex justify-center items-center bg-gray-700 dark:bg-gray-900 dark:bg-opacity-75 bg-opacity-75 inset-0 transition-opacity',
      blurClass,
    ]"
  ></div>
</template>

<style scoped></style>
