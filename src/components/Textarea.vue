<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    modelValue?: string;
    label?: string;
    error?: string;
    disabled?: boolean;
    size: "sm" | "md" | "lg";
    rounded: "sm" | "md" | "lg" | "full" | "none";
    variant: "filled" | "default" | "unstyled";
  }>(),
  {
    rounded: "sm",
    variant: "default",
    size: "md",
  }
);

const { rounded, variant, size, error, disabled } = toRefs(props);

const variantClass = computed(() => {
  return {
    default:
      " block w-full sm:text-sm border dark:bg-gray-800 dark:bg-opacity-80 bg-transparent " +
      (error?.value
        ? " border-red-500"
        : "dark:border-gray-700 dark:border-opacity-70 border-gray-300"),
    filled:
      " block w-full sm:text-sm bg-opacity-50 border-opacity-50  border dark:bg-gray-800 dark:bg-gray-800 dark:border-gray-800 bg-gray-200  border-gray-200 ",
    unstyled: " block w-full sm:text-sm  bg-transparent border-transparent ",
  }[variant.value];
});
const roundedClass = computed(() => {
  return {
    sm: "rounded-[3px]",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
  }[rounded.value];
});

const sizeClass = computed(() => {
  return {
    sm: "px-2 py-3  leading-4 font-medium  text-[13px] ",
    md: "px-4 py-[14px] font-medium text-sm",
    lg: "px-5 py-4 font-medium text-sm",
  }[size.value];
});
const globalClass = computed(() => {
  return (
    "outline-none mt-2 mb-[2px] max-w-xl" +
    ` ${disabled?.value ? "pointer-events-none opacity-70" : ""} ` +
    (error?.value
      ? " placeholder-red-500 text-red-500"
      : "dark:text-gray-300 text-gray-500")
  );
});

const globalLabelClass = computed(() => {
  return (
    "block dark:text-gray-200 text-sm font-medium dark:text-gray-300 text-gray-700" +
    ` ${disabled?.value ? "pointer-events-none opacity-70" : ""}`
  );
});
const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: HTMLInputElement["value"]
  ): HTMLInputElement["value"];
}>();
</script>

<template>
  <div class="flex flex-col">
    <label :class="globalLabelClass" v-if="label">{{ label }}</label>
    <textarea
      style="resize: vertical"
      v-bind="$attrs"
      v-bind:value="modelValue"
      rows="5"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :placeholder="placeholder"
      :class="[variantClass, roundedClass, sizeClass, globalClass]"
    />
  </div>
  <span class="text-[13px] font-medium text-red-500" v-if="error">{{
    error
  }}</span>
</template>

<style lang=""></style>
