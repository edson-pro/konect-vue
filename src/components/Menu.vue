<script setup lang="ts">
import { ref, toRefs } from "vue";

import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  actions: any;
  meta?: any;
}>();

const target = ref(null);
onClickOutside(target, (event) => emits("close"));
const { meta } = toRefs(props);
const emits = defineEmits(["close", "action"]);

const handleClick = (e) => {
  emits("close");
  emits("action", { meta, action: e });
};
</script>

<template>
  <div
    ref="target"
    class="bg-gray-50 dark:bg-gray-800 w-[230px] relative z-50 shadow-md dark:shadow-lg border border-gray-300 dark:border-gray-700 rounded-[3px]"
  >
    <template v-for="item in actions">
      <div
        class="border-t first-of-type:border-t-0 border-opacity-40 border-gray-300 dark:border-gray-600"
      >
        <div class="mx-3 mt-2 text-left">
          <span
            class="text-gray-500 dark:text-gray-400 font-semibold uppercase text-xs"
            >{{ item.title }}</span
          >
        </div>
        <div class="flex flex-col gap-0 my-2">
          <template v-for="action in item.items">
            <a
              @click="handleClick(action.action)"
              :class="[
                action.danger
                  ? 'text-red-500 hover:bg-red-400 hover:bg-opacity-20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700  dark:hover:bg-opacity-50 ',
                ' flex mx-1 cursor-pointer rounded-[3px]  capitalize items-center gap-4 py-3 px-3 font-medium text-[13.5px]',
              ]"
            >
              <component :is="action.icon" v-if="action.icon" class="h-4 w-4" />
              <span>
                {{ action.title }}
              </span>
            </a>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
