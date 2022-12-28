<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    height?: string;
    width?: string;
    rounded?: "xs" | "sm" | "md" | "lg" | "xl";
    circle?: boolean;
    margin?: string;
    animate?: boolean;
  }>(),
  {
    rounded: "sm",
  }
);

const roundedClass = computed(() => {
  return circle?.value
    ? "rounded-full"
    : {
        xs: "rounded-[2px]",
        sm: "rounded-[4px]",
        md: "rounded-[8px]",
        lg: "rounded-[16px]",
        xl: "rounded-[32px]",
        "2xl": "rounded-[64px]",
        "3xl": "rounded-[128px]",
      }[rounded.value];
});

const animateClass = computed(() => {
  return animate?.value ? " animate-pulse" : "";
});

const { height, width, rounded, circle, animate } = toRefs(props);
</script>

<template>
  <div
    :style="{ width: width, height: height }"
    :class="[
      'dark:bg-gray-800 bg-opacity-50 bg-gray-300 animate-pulse',
      roundedClass,
      animateClass,
      margin,
    ]"
  ></div>
</template>

<style scoped></style>
