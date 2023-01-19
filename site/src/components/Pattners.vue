<template>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h2
      class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide"
    >
      Trusted by over 26,000 forward-thinking companies
    </h2>
    <div class="mt-8 grid sm:grid-cols-2 gap-8 md:grid-cols-6 grid-cols-5">
      <div
        v-for="company in companies"
        class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
      >
        <img class="h-12" :src="company.logo" :alt="company.name" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const companies = [
  {
    name: "tuple",
    logo: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    name: "mirage",
    logo: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "statickit",
    logo: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "transistor",
    logo: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    name: "workcation",
    logo: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
];
</script>
