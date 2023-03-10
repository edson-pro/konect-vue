<script lang="ts" setup>
import { computed, toRefs, ref } from "vue";
import Loader from "./Loader.vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    modelValue?: string;
    type?: string;
    label?: string;
    leftIcon?: any;
    loading?: boolean;
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
    type: "text",
  }
);

const { rounded, variant, size, error, disabled } = toRefs(props);

const variantClass = computed(() => {
  return {
    default:
      " block w-full sm:text-sm border dark:bg-gray-800 dark:bg-opacity-80 bg-transparent " +
      (error?.value
        ? " dark:border-red-600 border-red-500"
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
    sm: "px-2 py-2  leading-4 font-medium  text-[13px] ",
    md: "px-4 py-[10px] font-medium text-sm",
    lg: "px-5 py-3 font-medium text-sm",
  }[size.value];
});
const globalClass = computed(() => {
  return (
    "outline-none mb-[2px] max-w-xl" +
    ` ${disabled?.value ? "pointer-events-none opacity-70" : ""} ` +
    (error?.value
      ? " placeholder-red-500 text-red-500"
      : "dark:text-gray-300 text-gray-500")
  );
});

const globalLabelClass = computed(() => {
  return (
    "block mb-2  dark:text-gray-200 text-[13.2px] font-medium dark:text-gray-300 text-gray-700" +
    ` ${disabled?.value ? "pointer-events-none opacity-70" : ""}`
  );
});
const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: HTMLInputElement["value"]
  ): HTMLInputElement["value"];
}>();

const showPassword = ref(false);
</script>

<template>
  <div class="flex items-start flex-col">
    <label :class="[globalLabelClass]" v-if="label">{{ label }}</label>
    <div class="relative w-full">
      <div v-if="leftIcon">
        <component
          class="w-5 h-5 text-gray-400 absolute top-[23%] left-3"
          :is="leftIcon"
        />
      </div>
      <div v-if="loading">
        <component
          color="default"
          class="w-5 h-5 text-gray-400 absolute top-[27%] right-3"
          :is="Loader"
        />
      </div>
      <div class="absolute top-[27%] right-3" v-if="type === 'password'">
        <a
          @click="showPassword = false"
          v-if="showPassword"
          class="cursor-pointer active:translate-y-[1px]"
        >
          <EyeIcon class="h-5 w-5" />
        </a>
        <a
          class="cursor-pointer active:translate-y-[1px]"
          @click="showPassword = true"
          v-else="showPassword"
        >
          <EyeSlashIcon class="h-5 w-5" />
        </a>
      </div>
      <input
        :type="showPassword ? 'text' : type"
        v-bind="$attrs"
        :value="modelValue"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :placeholder="placeholder"
        :class="[
          variantClass,
          roundedClass,
          sizeClass,
          globalClass,
          leftIcon ? 'pl-10' : '',
        ]"
      />
    </div>
  </div>
  <span
    class="text-[13px] w-full text-left block mt-1 capitalize dark:font-medium font-medium text-red-500"
    v-if="error"
    >{{ error }}</span
  >
</template>

<style lang=""></style>
