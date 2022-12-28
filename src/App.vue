<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { CircleStackIcon } from "@heroicons/vue/24/outline";
import { useDark, useScroll, useToggle } from "@vueuse/core";
import ScrollTop from "./components/ScrollTop.vue";
import Uploader from "./components/Uploader.vue";
import Notification from "./components/Notification.vue";
import { useToast } from "vue-toastification";
import Modal from "./components/Modal.vue";
import Progress from "./components/Progress.vue";
import Alert from "./components/Alert.vue";
import Select from "./components/Select.vue";
import Overlay from "./components/Overlay.vue";
import Loader from "./components/Loader.vue";
import Skeleton from "./components/Skeleton.vue";
import DatePicker from "./components/DatePicker.vue";

const toast = useToast();

const openToast = () => {
  toast({
    component: Notification,
    props: {
      message: "This is default notification with title and body",
      title: "Default notification",
      variant: "danger",
    },
  });
};
const username = ref();

const handle = () => {};

const isDark = useDark();
const toggleDark = useToggle(isDark);

const checked = ref(true);
const gender = ref("male");

const text = ref("hello world");

const handleUpload = (e: any) => {
  uploaderLoading.value = true;
  console.log(e);
};

const handleClose = (e: any) => {
  alert("hello");
};

const isModalVisible = ref(false);

const closeModal = () => {
  isModalVisible.value = false;
};
const openModal = () => {
  isModalVisible.value = true;
};

const uploaderLoading = ref(false);
const selected = ref([]);

const options = ref([
  { code: "React", label: "React" },
  { code: "Angular", label: "Angular" },
  { code: "Svelte", label: "Svelte" },
  { code: "Vue", label: "Vue", selectable: false },
]);

const users = ref([]);

const selectedUser = ref();

const countries: any = ref([]);

const conts = ref(["rwanda", "burundi", "kenya", "tanzania"]);

const asynL = (query: any) => {
  loadingUsers.value = true;
  return fetch(`https://api.github.com/search/users?q=${query}&per_page=10`)
    .then((x) => x.json())
    .then(({ items }) => {
      const data = items.map((e: any) => {
        return {
          label: e.login,
          value: e.id,
        };
      });
      loadingUsers.value = false;
      users.value = data;
    })
    .catch((e) => {
      loadingUsers.value = false;
      users.value = [];
    });
};

const loadingUsers = ref(false);

const showOverlay = ref(false);

const toggleOverlay = () => {
  showOverlay.value = !showOverlay.value;
};

const selectedDate = ref();
</script>

<template>
  <div class="m-6">
    <DatePicker
      v-model="selectedDate"
      placeholder="Pick date"
      label="Event date"
      :disabled="false"
      :multi-calendars="true"
    />
  </div>
  <div class="m-6">
    <Skeleton :circle="true" width="60px" height="60px" />
    <Skeleton rounded="md" margin="mt-3" width="250px" height="15px" />
    <Skeleton margin="my-2" rounded="md" width="350px" height="10px" />
    <Skeleton rounded="md" width="350px" height="10px" />
  </div>
  <div class="m-6">
    <Loader />
  </div>
  <div class="m-6">
    <Btn @click="toggleOverlay" color="danger">Show Overlay</Btn>
  </div>

  <Overlay
    @click="toggleOverlay"
    :blur="true"
    :zIndex="1000"
    v-show="showOverlay"
  />
  <div class="m-6 max-w-xl">
    <Select
      :multiple="false"
      placeholder="Pick one"
      :options="users"
      :async="true"
      :taggable="false"
      v-model="selectedUser"
      :loading="loadingUsers"
      @load="asynL"
      :disabled="true"
      label="Your favorite contributters/users"
    />

    <Select
      :multiple="true"
      placeholder="Pick one"
      :options="['one', 'two', 'three']"
      :taggable="true"
      v-model="selected"
      :loading="loadingUsers"
      @load="asynL"
      label="Your favorite contributters/users"
    />
  </div>

  <div class="m-6 max-w-sm">
    <Alert
      rounded="sm"
      label
      color="primary"
      :close-button="true"
      title="Bummer!"
      variant="light"
      desc="Something terrible happened! You made a mistake and there is no going back,"
    />
  </div>
  <div class="w-full m-6 max-w-2xl">
    <Progress color="blue" :progress="30" />
  </div>
  <div class="m-6"><Btn @click="openModal">Open modal</Btn></div>
  <Modal
    title="This is the title of the modal"
    :open="isModalVisible"
    @close="closeModal"
    size="lg"
  >
    <template v-slot:body>
      <h4 class="font-semibold dark:text-gray-100 text-gray-800 text-lg">
        Hello world
      </h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 leading-7 my-3">
        Thank you for your hard work and dedication this learning journey. Your
        contributions have been valuable. Wishing you a Merry Christmas and a
        Happy New Year. We can't wait to see what we will achieve in the future.
      </p>
    </template>
    <template v-slot:footer>
      <div class="w-full gap-3 flex justify-end items-center">
        <Btn @click="closeModal" color="danger">cancel</Btn>
        <Btn>save order</Btn>
      </div>
    </template>
  </Modal>
  <div class="m-6">
    <Btn @click="openToast">Toast me</Btn>

    <Notification
      @close="handleClose"
      variant="danger"
      :loading="false"
      message="This is default notification with title and body"
      title="Default notification"
    />
  </div>
  <ScrollTop />

  <Uploader :loading="uploaderLoading" @drop="handleUpload" />

  <div class="m-6 flex items-center gap-4">
    <Avatar name="Hirwa Aldo" />
    <Avatar
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      name="Hirwa Aldo"
    />

    <Avatar name="Ntwali edson" />
  </div>
  <div class="m-6">
    <Textarea placeholder="Enter your message" label="Message" v-model="text" />
  </div>
  {{ text }}
  <div class="m-6">
    {{ isDark }}
    <Input
      v-bind="username"
      type="text"
      placeholder="Enter username"
      label="Username"
    ></Input>
  </div>
  <Icon icon="mdi-light:home" />
  <div @click="handle" class="m-6">
    <Btn variant="light" :leftIcon="CircleStackIcon">click me aldo</Btn>
  </div>
  <div class="m-6">
    <div @click="handle" class="p-6 bg-gray-200 dark:bg-gray-800 w-[300px]">
      <Btn
        :leftIcon="CircleStackIcon"
        href="dd"
        loaderPosition="right"
        variant="white"
        rounded="sm"
      >
        <span>Connect to database</span>
      </Btn>
    </div>
    {{ isDark ? "yes" : "No" }}
    <Switch
      title="Dark mode"
      subTitle="Enable dark mode in this app"
      v-model="isDark"
    />
    <button @click="toggleDark()">toggle</button>
  </div>
  {{ checked }}
  <div class="m-6">
    <Checkbox v-model="checked" label="Are you a developer" />
  </div>
  {{ gender }}
  <div class="m-6">
    <Radio value="male" v-model="gender" label="Male" />
    <Radio value="female" v-model="gender" label="Female" />
  </div>
</template>

<style scoped></style>
