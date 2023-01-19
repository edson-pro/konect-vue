<script setup lang="ts">
import Pagination from "@/components/Pagination.vue";
import Skeleton from "@/components/Skeleton.vue";
import ActionNavbar from "@/components/ActionNavbar.vue";
import useLogout from "@/composables/useLogout";
import useFetchProjects from "@/composables/useFetchProjects";
import useConfirm from "@/composables/useConfirm";
import Empty from "@/components/Empty.vue";
import { ref } from "vue";
// import { deleteProject } from "@/services/projects.services";
import {
  TrashIcon,
  PencilSquareIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import Menu from "@/components/Menu.vue";
import useToast from "@/composables/useToast";
import ProjectModal from "@/components/modals/ProjectModal.vue";
import router from "@/router";

const handleCreate = () => {};

const { logout } = useLogout();

const { loading, projects } = useFetchProjects();

const activeMenu = ref();

const toast = useToast();

const { confirm, close, setLoading } = useConfirm({
  onConfirm: () => {
    handleDeleteProject();
  },
  action: "Delete project",
  title: "Are you sure you want to delete this project",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt`,
});

const handleDeleteProject = () => {
  setLoading(true);
  // return deleteProject().then((e) => {
  //   close();
  //   toast.show({
  //     title: "Project deleted successfully",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  //   });
  // });
};

const handeMenuAction = ({ action, meta }) => {
  switch (action) {
    case "delete":
      confirm();
      break;
    case "select":
      router.push(`/projects/${meta.value}`);
      break;
    default:
      break;
  }
};

const actions = [
  {
    title: "Actions",
    items: [
      {
        icon: ArrowRightIcon,
        title: "select project",
        action: "select",
      },
      {
        icon: PencilSquareIcon,
        title: "update project",
        action: "update",
      },
    ],
  },
  {
    title: "Danger Zone",
    items: [
      {
        icon: TrashIcon,
        title: "delete project",
        action: "delete",
        danger: true,
      },
    ],
  },
];
const showProjectModal = ref(false);
</script>

<template>
  <ActionNavbar />
  <div class="max-w-5xl my-6 mx-auto px-3">
    <div class="my-4 flex items-center justify-between">
      <div class="max-w-lg">
        <h4 class="font-medium mb-2 text-white text-base">
          Select a project to work with
        </h4>
        <p class="font-medium text-sm text-gray-400 leading-7">
          Choose from your existing projects, or create a new one.
        </p>
      </div>
      <div class="flex items-center gap-4">
        <Btn @click="showProjectModal = true"> Create a new project </Btn>
        <Btn @click="logout" variant="default"> logout</Btn>
      </div>
    </div>
    <div v-if="loading">
      <div
        v-for="project in [1, 2, 3, 4]"
        class="border my-5 border-l-4 pointer-events-none border-l-primaryLight pl-5 rounded-[4px] cursor-pointer hover:bg-opacity-100 border-gray-700 bg-gray-800 bg-opacity-50 border-opacity-50 p-3 flex items-center justify-between"
      >
        <div class="flex items-center gap-4">
          <Skeleton width="3rem" height="3rem" :circle="true" />
          <div class="flex flex-col gap-3">
            <Skeleton width="14rem" height="0.8rem" :circle="true" />
            <Skeleton width="11rem" height="0.6rem" :circle="true" />
          </div>
        </div>
        <div>
          <Skeleton width="6rem" height="1.5rem" :circle="true" />
        </div>
        <div class="flex items-center">
          <Skeleton width="2.5rem" height="2.5rem" :circle="true" />
          <div class="-ml-4">
            <Skeleton width="2.5rem" height="2.5rem" :circle="true" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="projects.length" class="my-7">
      <div
        @click="router.push(`/projects/${project.id}`)"
        v-for="project in projects"
        class="border my-5 border-l-4 border-l-primaryLight pl-5 rounded-[4px] cursor-pointer hover:bg-opacity-100 border-gray-700 bg-gray-800 bg-opacity-50 border-opacity-50 p-3 flex items-center justify-between"
      >
        <div class="flex justify-between items-center">
          <div
            class="w-14 border-primary border h-14 flex items-center justify-center text-primaryLight bg-primary bg-opacity-20 rounded-full"
          >
            <svg
              viewBox="0 -8 72 72"
              id="Layer_1"
              class="h-10 w-10 fill-current"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_iconCarrier">
                <title>construction</title>
                <path
                  d="M27.69,34.62l-4.85-7.84.37-.36,1.6,1.37a1.5,1.5,0,0,0,.53,1.93,1.54,1.54,0,0,0,.81.23,1.49,1.49,0,0,0,.87-.27L37,38.2a.62.62,0,0,0,.44.18.64.64,0,0,0,.47-.21.65.65,0,0,0,0-.91L27.8,28.66l5-7.88a1.49,1.49,0,0,0,0-1.62,2.26,2.26,0,0,0-.25-.29L26.74,12a1.5,1.5,0,0,0-1.24-.66h0l-7.67.07a1.22,1.22,0,0,0-1.07.69l-2.37,5.09-.63-.54a.63.63,0,0,0-.9,0,.64.64,0,0,0,0,.91l.93.8-.24.53a1.52,1.52,0,0,0,.59,2,1.42,1.42,0,0,0,.74.2,1.51,1.51,0,0,0,1.27-.7l.78.67L13.4,24.87a2.37,2.37,0,0,0-.76,1.66l-.26,8.58L10.05,45.19A2.35,2.35,0,0,0,11.81,48a2.48,2.48,0,0,0,.54.06,2.35,2.35,0,0,0,2.29-1.83l2.44-10.53.23-7.63,1.4,1,4,6.49-4.38,9.15a2.35,2.35,0,1,0,4.25,2L27.76,36A1.37,1.37,0,0,0,27.69,34.62Z"
                ></path>
                <circle cx="33.46" cy="12.22" r="4.3"></circle>
                <path
                  d="M61.39,45.33c-1.44-2.1-8.34-15.16-10.12-17s-3.36-2.08-4.44-1.64a6.94,6.94,0,0,0-3,2.24c-1.27,1.73-3,6.91-4.44,9.23a11.08,11.08,0,0,0-.8,1l-.08.06c-1.06.64-4,1.19-5.19,2.4a15.63,15.63,0,0,0-1.92,2.6l-.18.25a8.22,8.22,0,0,1-3.93,3.27l0,.32H60.43C60.66,48.08,63.15,47.9,61.39,45.33Z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="ml-4">
            <h4 class="font-medium mb-2 text-gray-100 text-sm">
              {{ project.name }}
            </h4>
            <p class="text-sm font-medium text-gray-400 capitalize">
              <span>{{ project.category }}</span>
              <span class="px-2">-</span>
              <span>Owner</span>
            </p>
          </div>
        </div>
        <div
          class="w-fit px-3 py-1 bg-primaryLight text-primaryLight bg-opacity-25 font-medium uppercase text-sm rounded-2xl"
        >
          {{ project.plan }}
        </div>
        <div class="flex items-center">
          <div
            class="-ml-5 border-[3px] border-gray-800 bg-gray-800 rounded-full"
            v-for="member in project.members"
          >
            <Avatar :src="member.photo" rounded="full" :name="member.name" />
          </div>
        </div>

        <div class="relative">
          <a
            @click.stop="activeMenu = project.id"
            class="h-8 w-7 transition-all text-gray-700 mx-2 active:translate-y-[1px] dark:text-gray-400 flex items-center justify-center rounded-sm cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 dark:hover:bg-opacity-10"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </a>
          <div class="absolute top-10 right-3" v-if="activeMenu === project.id">
            <Menu
              @action="handeMenuAction"
              :meta="project.id"
              :actions="actions"
              @close="activeMenu = null"
            />
          </div>
        </div>
      </div>
    </div>

    <template v-if="projects.length === 0 && !loading">
      <Empty
        @action="handleCreate"
        action="Create a new project"
        image="/images/folder.svg"
        title="You have no projects yet !!"
        desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 tempor incididunt."
      />
    </template>
  </div>

  <ProjectModal :open="showProjectModal" @close="showProjectModal = false" />
</template>

<style scoped></style>
