<script setup lang="ts">
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/vue/24/solid";
import { ref, toRefs, computed } from "vue";
import { useOffsetPagination } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    page: number;
    total: number;
    size: number;
  }>(),
  {
    size: 10,
    page: 1,
    total: 0,
  }
);
const { page, total, size } = toRefs(props);
const emits = defineEmits(["pageChange"]);

const handleChange = (page) => {
  emits("pageChange", page);
};

const { currentPage, pageCount, isFirstPage, isLastPage, prev, next } =
  useOffsetPagination({
    total: total,
    page: page.value,
    pageSize: size,
    onPageChange: (e) => handleChange(e.currentPage),
    onPageSizeChange: () => {},
  });
const siblings = 1;
const boundaries = 1;
const formated = computed(() => {
  function range(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  }
  const DOTS = "dot";

  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
  if (totalPageNumbers >= pageCount.value) {
    return range(1, pageCount.value);
  }

  const leftSiblingIndex = Math.max(currentPage.value - siblings, boundaries);
  const rightSiblingIndex = Math.min(
    currentPage.value + siblings,
    pageCount.value - boundaries
  );

  const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
  const shouldShowRightDots =
    rightSiblingIndex < pageCount.value - (boundaries + 1);

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = siblings * 2 + boundaries + 2;
    return [
      ...range(1, leftItemCount),
      DOTS,
      ...range(pageCount.value - (boundaries - 1), pageCount.value),
    ];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = boundaries + 1 + 2 * siblings;
    return [
      ...range(1, boundaries),
      DOTS,
      ...range(pageCount.value - rightItemCount, pageCount.value),
    ];
  }

  return [
    ...range(1, boundaries),
    DOTS,
    ...range(leftSiblingIndex, rightSiblingIndex),
    DOTS,
    ...range(pageCount.value - boundaries + 1, pageCount.value),
  ];
});

const handleCurrent = (item) => {
  if (typeof item === "number") {
    currentPage.value = item;
  }
};
</script>

<template>
  <nav class="flex items-center gap-4">
    <a
      @click="prev"
      :class="[
        isFirstPage ? 'pointer-events-none opacity-70' : '',
        ' h-8 hover:bg-gray-200 dark:hover:bg-gray-700 hover:bg-opacity-75 cursor-pointer transition-all w-8 flex items-center rounded-[3px] justify-center text-white text-sm',
      ]"
    >
      <ChevronLeftIcon class="h-4 w-4 text-gray-700 dark:text-gray-300" />
    </a>
    <div class="flex items-center gap-3">
      <template v-for="item in formated" :key="item">
        <a
          :disabled="currentPage === item"
          @click="handleCurrent(item)"
          :class="[
            item === currentPage
              ? 'bg-primary  bg-opacity-75 text-white'
              : 'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700',
            item === 'dot' ? 'pointer-events-none' : '',
            ' h-8 dark:text-white  hover:bg-opacity-75 cursor-pointer transition-all w-8 flex items-center rounded-[3px] justify-center text-gray-700 font-medium  text-sm',
          ]"
        >
          <template v-if="item === 'dot'">
            <EllipsisHorizontalIcon class="w-5 h-5" />
          </template>
          <template v-else>
            {{ item }}
          </template>
        </a>
      </template>
    </div>

    <a
      @click="next"
      :class="[
        isLastPage ? 'pointer-events-none opacity-75' : '',
        ' h-8 hover:bg-gray-200 dark:hover:bg-gray-700 hover:bg-opacity-75 cursor-pointer transition-all w-8 flex items-center rounded-[3px] justify-center text-white text-sm',
      ]"
    >
      <ChevronRightIcon class="h-4 w-4 text-gray-700 dark:text-gray-300" />
    </a>
  </nav>
</template>

<style scoped></style>
