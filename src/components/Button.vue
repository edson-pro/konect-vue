<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    href?: string;
    disabled: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: any;
    rightIcon?: any;
    iconRight?: any;
    loaderPosition?: "right" | "left" | "center";
    size: "sm" | "md" | "lg";
    rounded: "sm" | "md" | "lg" | "full" | "none";
    color: "primary" | "danger" | "success";
    variant: "filled" | "light" | "outline" | "default" | "subtle" | "white";
  }>(),
  {
    fullWidth: false,
    loaderPosition: "left",
    disabled: false,
    rounded: "sm",
    variant: "filled",
    color: "primary",
    size: "md",
  }
);
const {
  href,
  rounded,
  variant,
  color,
  size,
  disabled,
  fullWidth,
  loading,
  loaderPosition,
} = toRefs(props);

const emit = defineEmits(["click"]);

const type = computed(() => {
  return href.value ? "router-link" : "button";
});
const variantClass = computed(() => {
  return {
    filled: "bg-opacity-95 hover:bg-opacity-100 text-white",
    light: "bg-opacity-20 hover:bg-opacity-25 text-white",
    outline: "bg-opacity-0 hover:bg-opacity-10 border",
    default: "bg-opacity-50 dark:border-gray-700 hover:bg-opacity-75 border",
    subtle: "bg-opacity-0 hover:bg-opacity-10",
    white: "bg-white",
  }[variant.value];
});

const colorClass = computed(() => {
  const bgs = {
    primary: "bg-primary",
    danger: "bg-red-500",
    success: "bg-green-500",
  }[color.value];
  const texts = {
    primary: "text-primaryLight",
    danger: "text-red-500",
    success: "bg-green-500",
  }[color.value];
  const borders = {
    primary: "border-primary",
    danger: "border-red-500",
    success: "border-green-500",
  }[color.value];
  return variant.value === "white"
    ? "text-primary"
    : variant.value === "default"
    ? "text-gray-800 dark:text-gray-400 border-gray-300 bg-gray-800"
    : variant.value === "subtle"
    ? `${texts} + ${bgs}`
    : bgs +
      " " +
      (variant.value === "light" || variant.value === "outline" ? texts : " ") +
      " " +
      (variant.value === "outline" ? borders : " ");
});

const roundedClass = computed(() => {
  return {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
  }[rounded.value];
});

const sizeClass = computed(() => {
  return {
    sm: "px-2 py-2  leading-4 font-medium  text-[13px] ",
    md: "px-4 py-[9px] font-medium text-sm",
    lg: "px-5 py-3 font-medium text-base",
  }[size.value];
});

const globalClass = computed(() => {
  return (
    "inline-flex outline-none items-center truncate justify-center relative my-1 cursor-pointer select-none active:translate-y-[1px]" +
    ` ${
      disabled.value || loading?.value ? "pointer-events-none  opacity-70" : ""
    } ${fullWidth.value ? "w-full" : ""}`
  );
});
</script>

<template>
  <component
    v-bind="$attrs"
    :disabled="disabled || loading"
    @click="emit('click')"
    :is="type"
    :to="href"
    class=""
    :class="[variantClass, colorClass, roundedClass, sizeClass, globalClass]"
  >
    <component
      v-if="leftIcon && !loading"
      :is="leftIcon"
      :class="[fullWidth ? 'mr-4' : 'mr-2', 'h-5 w-5 stroke-2 ']"
    />
    <div
      v-if="loaderPosition === `left` && loading"
      :class="[fullWidth ? 'mr-4' : 'mr-2']"
    >
      <Spinner />
    </div>
    <slot />
    <div v-if="loaderPosition === `right` && loading" class="ml-2">
      <Spinner />
    </div>
    <component
      v-if="rightIcon && !loading"
      :is="rightIcon"
      class="h-4 w-4 stroke-2 ml-2"
    />
  </component>
</template>

<style lang=""></style>
