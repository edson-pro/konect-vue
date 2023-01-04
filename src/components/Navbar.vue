<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useAuth from "../store/auth";
import AuthServices from "../services/auth.services";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const { user } = useAuth();

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About us", href: "/about" },
  { name: "Contact ", href: "/contact" },
];
</script>
<template>
  <div
    class="bg-gray-800 z-50 relative bg-opacity-40 border-b border-gray-700 border-opacity-50"
  >
    <div class="max-w-7xl mx-auto sm:px-4 px-6">
      <div class="flex justify-between items-center py-2 md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Konect</span>
            <div class="flex mr-32 items-center gap-4">
              <img class="h-8 w-auto sm:h-10" src="/logo.svg" alt="" />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="flex space-x-10">
          <router-link
            :to="link.href"
            v-for="link in navLinks"
            class="text-[15px] capitalize font-medium text-gray-400 hover:text-gray-300"
          >
            {{ link.name }}
          </router-link>
        </div>

        <div class="flex gap-4 items-center">
          <template v-if="user">
            <Btn href="/projects">Go to Dashboard</Btn>
          </template>
          <template v-else>
            <Btn href="/auth/login" variant="outline">Sign in</Btn>
            <Btn href="/auth/register">Get started</Btn>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
