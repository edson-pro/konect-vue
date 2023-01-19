<script setup lang="ts">
import { computed, toRefs, ref } from "vue";
import "@vuepic/vue-datepicker/dist/main.css";
import Datepicker from "@vuepic/vue-datepicker";
import { useDateFormat } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    modelValue: any;
    label?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);

const { disabled, error } = toRefs(props);

const globalLabelClass = computed(() => {
  return (
    "block dark:text-gray-200 text-sm font-medium dark:text-gray-300 text-gray-700" +
    ` ${disabled?.value ? "pointer-events-none opacity-70" : ""}`
  );
});

const emit = defineEmits<{
  (e: "update:modelValue", value: any): any;
}>();

const containerClass = computed((e) =>
  disabled.value ? `w-full select-none  pointer-events-none opacity-70` : "null"
);

const date: any = ref();
const range = ref(true);

const format = "DD MMM YYYY";

const formatedDate = useDateFormat(date, format);
const formatedDate1 = useDateFormat(date[0], format);
const formatedDate2 = useDateFormat(date[0], format);

const inputClass = computed(
  () =>
    (error?.value ? "border-red-500" : "border-gray-300 dark:border-gray-700") +
    " clickable-text cursor-pointer bg-white dark:bg-gray-800 relative box-border bg-opacity-70 flex w-full items-center px-2 rounded-[4px] border  text-sm min-h-[45px]"
);
</script>

<template>
  <div :class="[containerClass, 'max-w-md my-2']">
    <label :class="globalLabelClass" v-if="label">{{ label }}</label>

    <div class="mt-[8px]">
      <Datepicker
        v-bind="$props"
        :placeholder="placeholder"
        :auto-apply="true"
        :disabled="disabled"
        :range="range"
        v-model="date"
        position="left"
        class="datapicker"
        calendar-cell-class-name="datepicker__cell"
      >
        <template #calendar-header="{ index, day }">
          <div class="font-medium font-sans text-sm">
            {{ day }}
          </div>
        </template>
        <template #day="{ day, date }">
          <span class="font-medium text-[13px] font-sans"> {{ day }}</span>
        </template>
        <template #trigger>
          <div :class="[inputClass]">
            <div class="w-full pl-2 flex justify-between">
              <span
                class="font-medium text-gray-400 text-sm"
                v-if="placeholder && !date"
              >
                {{ placeholder }}
              </span>
              <span
                v-if="date"
                class="font-medium truncate text-gray-400 text-sm"
              >
                <template v-if="range">
                  {{ formatedDate1 }}
                  -
                  {{ formatedDate2 }}
                </template>
                <template v-else>
                  {{ formatedDate }}
                </template>
              </span>
              <a class="cursor-pointer px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </template>
      </Datepicker>
    </div>
    <span class="text-[13px] font-medium text-red-500" v-if="error">{{
      error
    }}</span>
  </div>
</template>

<style scoped></style>
