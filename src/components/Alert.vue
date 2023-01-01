<script lang="ts" setup>
import { computed, toRefs } from "vue";
import CloseButton from "./CloseButton.vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    desc?: string;
    closeButton?: boolean;
    rounded?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "primary" | "danger" | "success";
    variant?: "filled" | "light" | "outline";
  }>(),
  {
    clossButton: false,
    rounded: "sm",
    variant: "filled",
    color: "primary",
  }
);
const { rounded, variant, color } = toRefs(props);

const emit = defineEmits(["close"]);

const variantClass = computed(() => {
  return {
    filled: "bg-opacity-100 text-white",
    light: "bg-opacity-20 text-gray-600 font-medium dark:text-white",
    outline: "border",
  }[variant.value];
});

const colorClass = computed(() => {
  const bgs = {
    primary: "bg-primary",
    danger: "bg-red-500",
    success: "bg-green-500",
  }[color.value];
  const borders = {
    primary: "border-primary",
    danger: "border-red-500",
    success: "border-green-500",
  }[color.value];
  return `${variant.value === "outline" ? "bg-gray-800" : bgs} ${
    variant.value === "outline" ? borders : ""
  }`;
});
const titleClass = computed(() => {
  const texts = {
    primary: "text-primaryLight",
    danger: "text-red-500",
    success: "text-green-500",
  }[color.value];

  return variant.value === "light" || variant.value === "outline"
    ? texts
    : "text-white";
});

const roundedClass = computed(() => {
  return {
    xs: "rounded-[2px]",
    sm: "rounded-[4px]",
    md: "rounded-[8px]",
    lg: "rounded-[16px]",
    xl: "rounded-[32px]",
  }[rounded.value];
});

const globalClass = computed(() => {
  return "p-2 pb-2";
});
</script>

<template>
  <div
    :class="[
      'flex gap-3 items-start',
      globalClass,
      colorClass,
      roundedClass,
      variantClass,
    ]"
  >
    <div class="my-[6px] px-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        :class="['w-4 h-4 my-1', titleClass]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
        />
      </svg>
    </div>
    <div class="flex flex-col gap-1 w-full">
      <div class="flex w-full items-center justify-between">
        <h4 :class="['text-sm leading-6 font-medium', titleClass]">
          {{ title }}
        </h4>
        <div class="m-1 h-[28px] w-[28px]">
          <CloseButton
            :class="['', titleClass]"
            v-if="closeButton"
            @click="emit('close')"
          />
        </div>
      </div>
      <p
        v-if="desc"
        class="text-[13.5px] pb-2 font-medium dark:font-normal leading-7"
      >
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style lang=""></style>
