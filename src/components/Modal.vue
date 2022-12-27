<script setup lang="ts">
import { computed, toRefs } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const props = withDefaults(
  defineProps<{
    size: "xs" | "sm" | "md" | "lg" | "xl";
    open: boolean;
    title?: string;
  }>(),
  {
    size: "lg",
    open: false,
  }
);

const { open, size } = toRefs(props);

const sizeClass = computed(() => {
  return {
    xs: "max-w-[320px]",
    sm: "max-w-[380px]",
    md: "max-w-[440px]",
    lg: "max-w-[620px]",
    xl: "max-w-[780px]",
  }[size.value];
});

const emit = defineEmits(["close"]);
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="emit('close')"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          />
        </TransitionChild>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            :class="[
              'dark:bg-gray-900 bg-white relative inline-block rounded-[4px] overflow-hidden shadow-xl transform transition-all my-8 align-middle w-full',
              sizeClass,
            ]"
          >
            <slot name="header">
              <div
                v-if="title"
                class="border-b rounded-t-md border-gray-100 dark:border-gray-800 px-4"
              >
                <div class="flex justify-between items-center py-3">
                  <h4
                    class="font-semibold dark:font-medium text-[15px] text-gray-800 dark:text-gray-200"
                  >
                    {{ title }}
                  </h4>
                  <a
                    aria-label="Close modal"
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
            </slot>

            <div class="p-4" id="modalDescription">
              <slot name="body">
                <div
                  class="h-[100px] w-full flex text-sm capitalize font-medium text-gray-400 justify-center items-center"
                >
                  this is the body
                </div>
              </slot>
            </div>

            <div
              class="border-t px-4 py-2 border-gray-200 dark:border-gray-800"
            >
              <slot name="footer">
                <div class="w-full flex items-center justify-end">
                  <Btn @click="emit('close')">Close</Btn>
                </div>
              </slot>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped></style>
