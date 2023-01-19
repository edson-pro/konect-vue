<script setup lang="ts">
import { ref, computed, toRefs } from "vue";
import Menu from "./Menu.vue";
import Pagination from "./Pagination.vue";
import { onClickOutside } from "@vueuse/core";
import {
  TrashIcon,
  EyeIcon,
  PencilIcon,
  ClipboardIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";

const props = withDefaults(
  defineProps<{
    colums: any;
    data: any;
    actions: any;
    title?: string;
    filters?: any;
    activefilter?: string;
  }>(),
  {}
);

const { data, actions } = toRefs(props);

const selected = ref([]);

const indeterminate = computed(
  () => selected.value.length > 0 && selected.value.length < data.value.length
);

const currentPage = ref(2);

const handlePageChange = (page) => {
  currentPage.value = page;
};

const emits = defineEmits(["action", "filter", "search"]);
const pageSize = ref(15);

// selected = $event.target.checked
//                         ? people.map((p) => p.email)
//                         : []

const handleAllChange = (e) => {
  selected.value = e ? data.value.map((p) => p.id) : [];
};

const handleRowChange = (e) => {
  if (selected.value.includes(e)) {
    selected.value = selected.value.filter((i) => e !== i);
  } else {
    selected.value.push(e);
  }
};

const activeMenu = ref();

const icons = {
  update: PencilIcon,
  delete: TrashIcon,
  copy: ClipboardIcon,
  view: EyeIcon,
};

const acts: any = [
  {
    title: "Actions",
    items: actions.value
      .filter((e) => !e.group)
      .map((e) => {
        return {
          onclick: () => {
            console.log();
          },
          action: e.action,
          title: e.title,
          icon: icons[e.action],
        };
      }),
  },
  {
    title: "Danger zone",
    items: actions.value
      .filter((e) => e.group === "danger")
      .map((e) => {
        return {
          onclick: () => {},
          title: e.title,
          action: e.action,
          icon: icons[e.action],
          danger: true,
        };
      }),
  },
];

const handleMenuAction = (e) => {
  const action = e.action;
  const id = e.meta.value;
  emits("action", { action, id });
};

const handleSearch = (e) => {
  emits("search", e.target.value);
};
</script>

<template>
  <div class="mt-8 flex flex-col">
    <div class="">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="relative dark:shadow border-gray-300 dark:border-opacity-75 dark:border-gray-700 border rounded-[3px] ring-1 ring-black ring-opacity-5 md:rounded-lg"
        >
          <div
            v-if="title"
            class="dark:bg-gray-800 bg-opacity-50 px-4 bg-gray-200 justify-between flex items-center dark:bg-opacity-50 border-b border-gray-300 dark:border-gray-700"
          >
            <div class="px-1">
              <h4
                class="dark:font-medium tracking-wide text-[15px] text-gray-700 font-semibold dark:text-gray-200"
              >
                {{ title }}
              </h4>
            </div>

            <div v-if="filters">
              <div class="flex items-center gap-2">
                <template v-for="filter in filters" :key="filter.name">
                  <a
                    @click="emits('filter', filter.name)"
                    :class="[
                      activefilter === filter.name
                        ? 'text-primaryLight font-semibold'
                        : 'dark:text-gray-400 text-gray-800 font-medium ',
                      ' w-[130px] cursor-pointer relative text-center capitalize text-sm py-3',
                    ]"
                  >
                    {{ filter.title }}
                    <div
                      v-if="activefilter === filter.name"
                      class="absolute w-full h-1 rounded-t -bottom-[1px] bg-primary"
                    ></div>
                  </a>
                </template>
              </div>
            </div>
          </div>
          <div
            class="flex items-center border-b border-gray-300 dark:border-gray-700 border-opacity-75 justify-between px-4 py-3"
          >
            <div class="w-full">
              <div class="max-w-xs">
                <Input
                  @input="handleSearch"
                  :loading="false"
                  :leftIcon="MagnifyingGlassIcon"
                  placeholder="Search here"
                />
              </div>
            </div>
            <div class="flex items-center gap-4">
              <Btn variant="outline" :leftIcon="AdjustmentsHorizontalIcon"
                >Filter</Btn
              >
              <Btn>Create expence</Btn>
            </div>
          </div>
          <table
            class="min-w-full table-fixed divide-y rounded-t-[3px] divide-gray-200 dark:divide-gray-800"
          >
            <thead class="dark:bg-gray-800 bg-gray-100">
              <tr>
                <th
                  scope="col"
                  class="relative border-b border-opacity-50 dark:border-opacity-50 border-b-gray-300 dark:border-b-gray-700 w-12 px-6 sm:w-16 sm:px-8"
                >
                  <Checkbox
                    @change="handleAllChange"
                    :checked="indeterminate || selected.length === data.length"
                  />
                </th>

                <template v-for="column in colums" :key="column.name">
                  <th
                    scope="col"
                    class="min-w-[12rem] border-b border-opacity-50 dark:border-opacity-50 border-b-gray-300 dark:border-b-gray-700 text-gray-800 dark:text-gray-300 capitalize py-3.5 px-3 text-left text-sm font-semibold"
                  >
                    {{ column.name }}
                  </th>
                </template>
                <th
                  scope="col"
                  class="w-12 border-b dark:border-opacity-50 border-opacity-50 border-b-gray-300 dark:border-b-gray-700 text-gray-800 dark:text-gray-300 capitalize py-3.5 pr-3 text-right text-sm font-semibold"
                >
                  <span class="block mr-4"> Action</span>
                </th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-800 dark:bg-opacity-40"
            >
              <tr
                v-for="item in data"
                :key="data.id"
                :class="[
                  selected.includes(item.id) &&
                    'dark:bg-gray-800 bg-gray-100 bg-opacity-50',
                ]"
              >
                <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                  <div
                    v-if="selected.includes(item.id)"
                    class="absolute inset-y-0 left-0 w-0.5 bg-primary"
                  ></div>
                  <Checkbox
                    @change="handleRowChange(item.id)"
                    :checked="selected.includes(item.id)"
                  />
                </td>

                <template v-for="column in colums">
                  <td
                    class="whitespace-nowrap capitalize px-3 py-4 text-sm text-gray-600 dark:text-gray-400 font-medium"
                  >
                    {{ item[column.indexName] }}
                  </td>
                </template>

                <td
                  class="whitespace-nowrap relative w-14 mr-auto py-4 pl-3 flex justify-end text-right text-sm font-medium sm:pr-6"
                >
                  <a
                    @click="activeMenu = item.id"
                    class="h-8 w-7 transition-all text-gray-700 mx-2 active:translate-y-[1px] dark:text-gray-400 flex items-center justify-center rounded-sm cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 dark:hover:bg-opacity-10"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </a>
                  <div
                    class="absolute top-14 right-3"
                    v-if="activeMenu === item.id"
                  >
                    <Menu
                      @action="handleMenuAction"
                      :meta="item.id"
                      :actions="acts"
                      @close="activeMenu = null"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="flex items-center border-t bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 justify-between py-3 px-3"
          >
            <div
              class="text-sm font-medium capitalize px-3 text-gray-600 dark:text-gray-400"
            >
              show

              <select
                :value="pageSize"
                @input="
                  pageSize = parseInt(($event.target as HTMLInputElement).value)
                "
                class="pr-3 mx-1 outline-none bg-transparent text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              >
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
              </select>
              per page
            </div>
            <Pagination
              :size="pageSize"
              :total="200"
              @page-change="handlePageChange"
              :page="currentPage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
