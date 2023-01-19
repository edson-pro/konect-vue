<script setup lang="ts">
import { toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    title?: string;
    subTitle?: string;
    modelValue?: boolean;
  }>(),
  {
    modelValue: false,
  }
);

const {} = toRefs(props);

const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: HTMLInputElement["checked"]
  ): HTMLInputElement["checked"];
}>();
</script>

<template>
  <label
    :for="label || title"
    class="flex cursor-pointer my-5 select-none items-center"
  >
    <div v-if="(title || subTitle) && !label" class="flex flex-col mr-10">
      <span
        v-if="title"
        class="text-sm mb-3 text-gray-700 dark:text-gray-300 font-semibold"
      >
        {{ title }}
      </span>

      <span
        v-if="subTitle"
        class="text-sm text-gray-500 font-medium dark:text-gray-400"
        >{{ subTitle }}</span
      >
    </div>

    <div class="relative">
      <input
        type="checkbox"
        :id="label || title"
        class="sr-only peer"
        v-bind:checked="modelValue"
        v-bind="$attrs"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).checked)
        "
      />
      <div
        class="box peer-checked:bg-primary bg-gray-300 dark:bg-gray-700 block h-7 w-12 rounded-full"
      />
      <div
        class="dot peer-checked:translate-x-5 absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition"
      />
    </div>

    <label
      v-if="label"
      :htmlFor="label || title"
      class="text-sm cursor-pointer text-gray-700 dark:text-gray-300 flex ml-3"
    >
      {{ label }}
    </label>
  </label>
</template>

<style scoped></style>
