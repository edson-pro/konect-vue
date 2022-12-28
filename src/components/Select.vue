<script lang="ts" setup>
import { toRefs, ref, computed } from "vue";
import VueSelect from "vue-select";
import { useDebounceFn } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    loading?: boolean;
    taggable?: boolean;
    async?: boolean;
    placeholder?: string;
    multiple?: boolean;
    loader?: any;
    modelValue?: any;
    label?: string;
    error?: string;
    options?: any;
    max?: number;
    size: "sm" | "md" | "lg";
    rounded: "sm" | "md" | "lg" | "full" | "none";
    variant: "filled" | "default" | "unstyled";
  }>(),
  {
    max: 30,
    disabled: false,
    options: [],
    rounded: "sm",
    variant: "default",
    size: "md",
  }
);

const debouncedFn = useDebounceFn((query) => emit("load", query), 1000);

const {
  rounded,
  variant,
  size,
  async,
  error,
  multiple,
  disabled,
  modelValue,
  options,
  loader,
} = toRefs(props);

const handleSearch = (query: any) =>
  async?.value && query && debouncedFn(query);

const updateValue = (data: any) => {
  emit("update:modelValue", data);
};
const onSelect = (e: any) => {
  const newData = type.value === "object" ? { label: e, value: e } : e;
  updateValue(multiple?.value ? [...modelValue?.value, newData] : newData);
};

const emit = defineEmits<{
  (e: "update:modelValue", value: any): any;
  (e: "load", value: any): void;
  (e: "tag", value: any): void;
}>();

const type = computed((e) => typeof options?.value[0]);

const inputClass = computed((e) => (error?.value ? ` vs--error` : ""));

const containerClass = computed((e) =>
  disabled.value ? `w-full select-none  pointer-events-none opacity-70` : "null"
);

const handleRemove = (e: any) => {
  const newData =
    type.value === "object"
      ? modelValue?.value.filter((p: any) => p.value !== e.value)
      : modelValue?.value.filter((p: any) => p !== e);

  updateValue(newData);
};

const handleChange = (e: any) => {
  emit("update:modelValue", e);
};

const optionsToShow = computed((e) => {
  if (multiple?.value) {
    return options.value.filter(
      (e: any) =>
        !modelValue?.value?.find((i: any) => i.code === e.code) ||
        !modelValue?.value?.find((i: any) => i === e)
    );
  } else {
    return options.value;
  }
});
</script>

<template>
  <div :class="[containerClass, 'my-2']">
    <label
      v-if="label"
      class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      {{ label }}
    </label>
    <VueSelect
      v-model="modelValue"
      @update:modelValue="handleChange"
      :options="optionsToShow"
      :multiple="multiple"
      :taggable="taggable"
      :class="[inputClass]"
      :push-tags="taggable"
      :placeholder="placeholder"
      @search="handleSearch"
      :filterable="!async"
      :loading="loading"
      :selectable="() => (modelValue?.length || 1) < max"
    >
      <template #spinner>
        <div class="spinner mx-1" v-show="loading">
          <Spinner /></div
      ></template>
      <template #no-options="{ search, searching, loading }">
        <p class="p-2">This is the no results.</p>
      </template>
      <template #option="{ label }">
        <h3>{{ label }}</h3>
      </template>
      <template #open-indicator="{ attributes }">
        <span class="mx-1 cursor-pointer" v-bind="attributes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </template>
      <template #search="{ attributes, events }">
        <input class="vs__search" v-bind="attributes" v-on="events" />
      </template>
      <template #selected-option="{ label }">
        <span class="text-red-500">
          {{ label }}
        </span>
      </template>
      <template
        #selected-option-container="{ option, deselect, multiple, disabled }"
      >
        <div
          v-if="multiple"
          class="relative mx-[4px] first-of-type:ml-0 flex items-center text-sm py-1 pl-[10px] rounded-[3px] text-gray-700 font-medium dark:font-normal dark:text-gray-300 bg-gray-300 dark:bg-gray-700 bg-opacity-50 whitespace-nowrap max-w-full text-ellipsis"
        >
          <span class="">{{ option.label }}</span>
          <a class="px-2 cursor-pointer" @click="deselect(option.code)"
            ><svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              stroke-width="3"
              class="fill-current"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              ></path></svg
          ></a>
        </div>
        <span
          class="dark:text-gray-400 text-gray-700 flex px-2 font-medium text-sm"
          v-else
        >
          {{ option.label }}
        </span>
      </template>
    </VueSelect>
    <span class="text-[13px] font-medium text-red-500" v-if="error">{{
      error
    }}</span>
  </div>
</template>

<style lang=""></style>
