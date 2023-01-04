<script setup lang="ts">
import router from "@/router";
import {
  CommandLineIcon,
  Cog6ToothIcon,
  ChartBarSquareIcon,
  ChevronRightIcon,
  RectangleStackIcon,
  NewspaperIcon,
  ArchiveBoxIcon,
  CreditCardIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";
import Avatar from "./Avatar.vue";
const links = [
  {
    title: "Dashboard",
    link: "/",
    icon: RectangleStackIcon,
  },
  {
    title: "Budgets",
    link: "/budgets",
    icon: ArchiveBoxIcon,
  },
  {
    title: "expenses",
    link: "/expenses",
    icon: CreditCardIcon,
  },
  {
    title: "transactions",
    link: "/transactions",
    icon: NewspaperIcon,
  },
  {
    title: "reports",
    link: "/reports",
    icon: ChartBarSquareIcon,
  },
];

const route = useRouter();
</script>

<template>
  <div
    class="w-[300px] bg-gray-800 bg-opacity-50 h-screen border-opacity-50 border-r border-gray-700"
  >
    <div class="px-2 py-2 flex flex-col h-full justify-between">
      <div>
        <div
          class="border justify-between hover:bg-opacity-100 cursor-pointer bg-gray-800 flex items-center px-2 py-2 border-opacity-50 rounded-[3px] border-gray-700"
        >
          <div class="flex items-center gap-4">
            <img
              class="h-11 bg-gray-700 w-11 rounded-[4px]"
              src="https://pbs.twimg.com/profile_images/1603113436757389313/wpYDqrIf_400x400.jpg"
              alt=""
            />
            <div class="flex flex-col items-start gap-1">
              <h1 class="text-[13.5px] font-semibold text-gray-100">Open Ai</h1>
              <p class="text-[13px] capitalize font-medium text-gray-400">
                software - owner
              </p>
            </div>
          </div>
          <div>
            <a
              class="text-gray-400 h-7 w-7 active:translate-y-[1px] dark:text-gray-100 flex items-center justify-center rounded-sm cursor-pointer hover:bg-gray-100 hover:bg-opacity-5"
            >
              <svg
                width="24"
                height="18"
                class="fill-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.54 2.23a.75.75 0 0 0-1.08 0l-6.25 6.5a.75.75 0 1 0 1.08 1.04L12 3.832l5.71 5.938a.75.75 0 1 0 1.08-1.04l-6.25-6.5Zm0 19.54a.75.75 0 0 1-1.08 0l-6.25-6.5a.75.75 0 1 1 1.08-1.04L12 20.168l5.71-5.938a.75.75 0 1 1 1.08 1.04l-6.25 6.5Z"
                /></svg
            ></a>
          </div>
        </div>

        <div>
          <ul class="my-5">
            <li v-for="link in links">
              <router-link
                :to="'/projects/ede' + link.link"
                :class="[
                  route.currentRoute.value.path === '/projects/ede' + link.link
                    ? 'text-primaryLight bg-primary bg-opacity-20'
                    : 'hover:bg-gray-700  hover:bg-opacity-40 text-gray-400 ',
                  'flex px-2 my-3  rounded-[3px] text-[14.5px] font-medium capitalize py-3 items-center',
                ]"
              >
                <div
                  class="flex gap-4 group w-full items-center justify-between"
                >
                  <div class="flex items-center gap-4">
                    <component :is="link.icon" class="h-[22px] w-[22px]" />
                    <span>{{ link.title }}</span>
                  </div>
                  <a class="px-3 cursor-pointer">
                    <ArrowRightIcon
                      class="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-3 transition-all group-hover:translate-x-0"
                    />
                  </a>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <router-link
          :to="'/projects/dc/settings'"
          class="flex px-2 my-2 hover:bg-gray-700 hover:bg-opacity-40 rounded-[3px] text-gray-400 text-[14.5px] font-medium capitalize py-3 items-center"
        >
          <div class="flex gap-4 w-full justify-between items-center">
            <span class="flex gap-4 items-center">
              <Cog6ToothIcon class="h-[22px] w-[22px]" />
              <span>Settings</span>
            </span>
            <ChevronRightIcon class="h-4 w-4" />
          </div>
        </router-link>
        <div
          class="border justify-between hover:bg-opacity-100 cursor-pointer bg-gray-800 flex items-center px-2 py-2 border-opacity-50 rounded-[3px] border-gray-700"
        >
          <div class="flex items-center gap-4">
            <Avatar name="Beconie alvoli" />
            <div class="flex flex-col items-start gap-1">
              <h1 class="text-[13.5px] font-semibold text-gray-100">Open Ai</h1>
              <p class="text-[13px] capitalize font-medium text-gray-400">
                software - owner
              </p>
            </div>
          </div>
          <div>
            <a
              class="text-gray-400 h-7 w-7 active:translate-y-[1px] dark:text-gray-100 flex items-center justify-center rounded-sm cursor-pointer hover:bg-gray-100 hover:bg-opacity-5"
            >
              <svg
                width="24"
                height="18"
                class="fill-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.54 2.23a.75.75 0 0 0-1.08 0l-6.25 6.5a.75.75 0 1 0 1.08 1.04L12 3.832l5.71 5.938a.75.75 0 1 0 1.08-1.04l-6.25-6.5Zm0 19.54a.75.75 0 0 1-1.08 0l-6.25-6.5a.75.75 0 1 1 1.08-1.04L12 20.168l5.71-5.938a.75.75 0 1 1 1.08 1.04l-6.25 6.5Z"
                /></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
