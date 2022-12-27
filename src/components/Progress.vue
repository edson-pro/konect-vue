<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    progress?: number;
    color?: string;
    label?: string;
    rounded?: "xs" | "sm" | "md" | "lg" | "xl";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }>(),
  {
    size: "md",
    rounded: "md",
    color: "primary",
    progress: 0,
  }
);

const { progress, color, rounded, size } = toRefs(props);

const roundedClass = computed(() => {
  return {
    xs: "rounded-[2px]",
    sm: "rounded-[4px]",
    md: "rounded-[8px]",
    lg: "rounded-[16px]",
    xl: "rounded-[32px]",
  }[rounded.value];
});

const sizeClass = computed(() => {
  return {
    xs: "h-[3px]",
    sm: "h-[5px]",
    md: "h-[8px]",
    lg: "h-[12px]",
    xl: "h-[16px]",
  }[size.value];
});
// const widthClass = computed(() => ``);
const colorClass = computed(() => {
  return {
    primary: "bg-primary",
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  }[color.value];
});
</script>

<template>
  <div :class="['w-full bg-gray-700', roundedClass, sizeClass]">
    <div
      :style="{ width: `${progress}%` }"
      :class="[
        'h-full flexitems-center justify-center transition-all',
        roundedClass,
        colorClass,
      ]"
    >
      <span class="" v-if="label">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped></style>
