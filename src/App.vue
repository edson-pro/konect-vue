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
import LoadingOverlay from "./components/LoadingOverlay.vue";
import Progress from "./components/Progress.vue";
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
</script>

<template>
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
