<script setup lang="ts">
import { ref, computed, toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    src?: string;
    name?: string;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    variant: "filled" | "light" | "outline";
    rounded: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  }>(),
  {
    size: "md",
    variant: "filled",
    rounded: "sm",
  }
);

const { src, size, rounded, name, variant } = toRefs(props);

const variantClass = computed(() => {
  return {
    filled: `bg-opacity-100`,
    light: "bg-opacity-30",
    outline: "border",
  }[variant.value];
});

const color_with_letters = [
  { color: "#F44336", letters: ["a", "b"] },
  { color: "#E91E63", letters: ["c", "d"] },
  { color: "#9C27B0", letters: ["e", "f"] },
  { color: "#673AB7", letters: ["g", "h"] },
  { color: "#3F51B5", letters: ["i", "j"] },
  { color: "#2196F3", letters: ["k", "l"] },
  { color: "#03A9F4", letters: ["m", "n"] },
  { color: "#00BCD4", letters: ["o", "p"] },
  { color: "#009688", letters: ["q", "r"] },
  { color: "#4CAF50", letters: ["s", "t"] },
  { color: "#8BC34A", letters: ["u", "v", "z"] },
  { color: "#FF9800", letters: ["w", "x", "y"] },
];

const color = computed(() => {
  const color = color_with_letters.find((i) =>
    i.letters.includes(name.value.toLowerCase().trim()[0] || "g")
  )?.color;
  return variant.value === "light" ? color + "40" : color;
});

const sizeClass = computed(() => {
  return {
    xs: "h-4 w-4",
    sm: "h-[26px] w-[26px]",
    md: "h-[38px] w-[38px]",
    lg: "h-[56px] w-[56px]",
    xl: "h-[84px] w-[84px]",
  }[size.value];
});
const roundedClass = computed(() => {
  return {
    xs: "rounded-[2px]",
    sm: "rounded-[4px]",
    md: "rounded-[8px]",
    lg: "rounded-[16px]",
    xl: "rounded-[32px]",
    full: "rounded-full",
  }[rounded.value];
});

const avatarClass =
  "flex items-center justify-center overflow-hidden capitalize";
</script>

<template>
  <div :class="[avatarClass, roundedClass, sizeClass]">
    <img v-if="src" :src="src" class="h-full object-cover w-full" />
    <div
      :style="{ background: color }"
      :class="[
        'h-full  w-full text-white uppercase flex font-medium tracking-[1px] items-center justify-center',
        variantClass,
      ]"
      v-if="!src && name"
    >
      <span>{{
        name.split(" ")[0][0] +
        (name?.split(" ")[1] ? name?.split(" ")[1][0] : "")
      }}</span>
    </div>
  </div>
</template>

<style scoped></style>
