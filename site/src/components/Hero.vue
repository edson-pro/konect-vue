<script setup lang="ts">
import { ChevronRightIcon, StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="bg-gray-900 sm:pb-12 pb-0">
    <div class="overflow-hidden py-12 relative">
      <div
        class="mx-auto sm:max-w-md sm:px-4 px-8 max-w-7xl grid grid-cols-2 gap-12"
      >
        <div class="relative pb-16 z-30">
          <div class="mt-10">
            <div>
              <a href="#" class="inline-flex space-x-4">
                <span
                  class="rounded bg-primaryLight bg-opacity-25 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
                >
                  What's new
                </span>
                <span
                  class="inline-flex items-center text-sm font-medium text-primaryLight space-x-1"
                >
                  <span>Just shipped version 0.1.0</span>
                  <ChevronRightIcon class="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div class="mt-6 max-w-xl">
              <h1
                class="text-4xl font-bold leading-[50px] text-gray-100 tracking-tight sm:text-5xl"
              >
                Server management for growing teams
              </h1>
              <p class="mt-6 leading-7 font-medium text-[15px] text-gray-400">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
            </div>
            <form action="#" class="mt-12 items-end gap-4 w-full flex">
              <div class="min-w-0 flex-1">
                <Input label="Email address" placeholder="Enter your email" />
              </div>
              <div>
                <Btn> Get started </Btn>
              </div>
            </form>
            <div class="mt-6">
              <div class="inline-flex items-center divide-x divide-gray-300">
                <div class="flex-shrink-0 flex pr-5">
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    class="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div
                  class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3"
                >
                  <span class="font-medium text-gray-200">Rated 5 stars</span>
                  by over
                  <span class="font-medium text-primaryLight"
                    >500 beta users</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mx-auto flex items-center justify-center relative w-full sm:px-6"
        >
          <svg
            class="absolute top-0 -mr-3 m-0 left-0"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
            />
          </svg>
          <div class="relative w-full rounded-lg shadow-lg max-w-md">
            <button
              type="button"
              class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">Watch our video to learn more</span>
              <img
                class="w-full"
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
              <div
                class="absolute inset-0 w-full h-full flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  class="h-20 w-20 text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                  <path
                    d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
