<template lang="">
  <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-2xl font-semibold leading-tight text-gray-100 sm:text-4xl lg:text-5xl"
        >
          Frequently Asked Questions
        </h2>
        <p
          class="max-w-xl mx-auto mt-4 text-sm font-medium leading-relaxed text-gray-400"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
        </p>
      </div>

      <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        <div
          @click="open = faq.id"
          v-for="faq in faqs"
          class="transition-all duration-200 rounded-sm bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg cursor-pointer hover:bg-gray-800"
        >
          <button
            type="button"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <span class="flex text-[15px] font-medium text-gray-100">
              {{ faq.title }}
            </span>

            <svg
              :class="[
                open === faq.id ? '' : 'rotate-180',
                'w-4 h-4 text-gray-300 ',
              ]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            :class="[
              open === faq.id ? '' : 'hidden',
              'px-4 pb-5 text-sm font-medium text-gray-400 leading-7 sm:px-6 sm:pb-6',
            ]"
          >
            <p>
              {{ faq.desc }}
            </p>
          </div>
        </div>
      </div>

      <p class="text-center font-medium text-gray-400 text-sm mt-9">
        Didn’t find the answer you are looking for?
        <router-link to="/contact" class="font-medium text-primaryLight"
          >Contact our support</router-link
        >
      </p>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const open = ref(1);
const faqs = [
  {
    id: 1,
    title: "How to create an account?",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 2,

    title: "How can I make payment using Paypal? ",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 3,

    title: "Can I cancel my plan?",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 4,

    title: "How can I reach to support? ",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];
</script>
<style lang=""></style>
