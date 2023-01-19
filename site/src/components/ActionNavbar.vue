<template>
  <div
    class="bg-gray-800 z-50 relative bg-opacity-40 border-b border-gray-700 border-opacity-50"
  >
    <div class="max-w-5xl flex items-center justify-between mx-auto px-3 py-2">
      <router-link to="/">
        <span class="sr-only">Konect</span>
        <div class="flex mr-32 items-center gap-4">
          <img class="h-8 w-auto sm:h-10" src="/logo.svg" alt="" />
        </div>
      </router-link>
      <div class="relative">
        <a @click="showDropdown = true" class="cursor-pointer m-1 block"
          ><Avatar rounded="full" :name="user.names"
        /></a>
        <div v-if="showDropdown" class="absolute right-0 top-[115%]">
          <Menu
            @close="handleClose"
            @action="handleAction"
            :actions="[
              {
                title: user.names,
                items: [
                  {
                    title: 'Logout',
                    icon: ArrowRightOnRectangleIcon,
                    action: 'logout',
                  },
                ],
              },
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import router from "@/router";
import AuthServices from "@/services/auth.services";
import useLogout from "@/composables/useLogout";
import useAuth from "@/store/auth";
import { ArrowRightOnRectangleIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const showDropdown = ref(false);

const handleClose = () => {
  showDropdown.value = false;
};

const { user } = useAuth();

const { logout } = useLogout();

const handleAction = (e) => {
  if (e.action == "logout") {
    logout();
  }
};
</script>
<style lang=""></style>
