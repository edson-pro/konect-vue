<script setup lang="ts">
import { ref, Transition } from "vue";
import { ArrowLongUpIcon } from "@heroicons/vue/24/solid";
import { useScroll } from "@vueuse/core";

const { x, y, isScrolling, arrivedState, directions } = useScroll(window, {
  behavior: "smooth",
});

// console.log(arrivedState.top);
</script>

<template>
  <Transition name="slide"
    ><a
      @click="y = 0"
      v-if="!arrivedState.top"
      class="bg-primary z-50 cursor-pointer inline-flex px-3 py-2 gap-2 fixed bottom-5 right-5 rounded-[3px] text-sm font-medium items-center text-white capitalize"
    >
      <ArrowLongUpIcon
        stroke-width="3"
        class="h-4 text-white stroke-current w-4 stroke-3"
      />
      <span>Scroll To Top</span>
    </a></Transition
  >
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
  transform: translateY(200%);
}
.slide-enter {
  transform: translateY(0);
}
.slide-enter-to {
  transform: translateY(0);
}
.slide-leave-to {
  transform: translateY(200%);
}
</style>
