<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/24/solid";
import { useToast } from "vue-toastification";
import Loader from "./Loader.vue";

const props = withDefaults(
  defineProps<{
    message: string;
    title: string;
    loading?: boolean;
    variant: "default" | "danger" | "success";
  }>(),
  {
    variant: "default",
    loading: false,
  }
);

const emit = defineEmits(["close"]);
</script>

<template>
  <div>
    <div
      class="dark:bg-gray-800 gap-8 shadow-md border dark:border-gray-700 dark:border-opacity-50 border-gray-200 bg-white max-w-[600px] relative flex items-center justify-between p-3 rounded-[4px]"
    >
      <div class="flex gap-3 self-stretch">
        <div class="flex items-center justify-center mr-2" v-if="loading">
          <Loader />
        </div>
        <template v-else>
          <div
            class="h-full bg-primary w-[6px] rounded-md"
            v-if="variant === 'default'"
          ></div>
          <div
            class="flex items-center justify-center mr-2"
            v-if="variant === 'danger'"
          >
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div
            class="flex items-center justify-center mr-2"
            v-if="variant === 'success'"
          >
            <div
              class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center"
            >
              <svg
                class="icon icon-tabler icon-tabler-check"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              >
                <desc>
                  Download more icon variants from
                  https://tabler-icons.io/i/check
                </desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>
        </template>

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
        @click="emit('close')"
        class="h-7 w-7 text-gray-700 dark:text-gray-100 hover:bg-opacity-40 flex items-center justify-center rounded-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900"
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
  </div>
</template>

<style scoped></style>
