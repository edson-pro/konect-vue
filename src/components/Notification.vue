<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    message: string;
    title: string;
    variant: "default" | "danger" | "success" | "loading";
  }>(),
  {
    variant: "default",
  }
);
</script>

<template>
  <div
    class="dark:bg-gray-800 shadow-md border dark:border-gray-700 dark:border-opacity-50 border-gray-200 bg-white max-w-sm relative flex items-center justify-between p-3 rounded-[4px]"
  >
    <div class="flex gap-3 items-stretch">
      <div
        class="h-full bg-primary w-[6px] rounded-md"
        v-if="variant === 'default'"
      ></div>
      <div v-if="variant === 'danger'"></div>
      <div v-if="variant === 'success'">
        <div class="w-8 h-8 bg-green-500"></div>
      </div>
      <div v-if="variant === 'loading'"></div>

      <div class="flex flex-col items-start gap-3">
        <h4 class="dark:text-white text-gray-800 font-semibold text-sm">
          {{ title }}
        </h4>
        <p class="dark:text-gray-400 text-gray-500 font-medium text-[13px]">
          {{ message }}
        </p>
      </div>
    </div>
    <a
      class="h-7 w-7 text-gray-700 dark:text-gray-100 hover:bg-opacity-40 flex items-center justify-center rounded-sm cursor-pointer hover:bg-gray-900"
      ><svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        class="fill-current"
      >
        <path
          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        ></path></svg
    ></a>
  </div>
</template>

<style scoped></style>
