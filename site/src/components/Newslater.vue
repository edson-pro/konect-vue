<template lang="">
  <section class="bg-gray-900 py-6">
    <div class="mx-auto px-8 max-w-7xl">
      <div
        class="max-w-2xl flex items-center justify-center flex-col mx-auto text-center"
      >
        <div class="mb-5">
          <div
            class="h-14 w-14 text-white bg-primary rounded-full flex items-center justify-center"
          >
            <svg
              width="25px"
              height="25px"
              class="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33333 4C3.49238 4 2 5.53502 2 7.42857V16.5714C2 18.465 3.49238 20 5.33333 20H18.6667C20.5076 20 22 18.465 22 16.5714V7.42857C22 5.53502 20.5076 4 18.6667 4H5.33333ZM7.62469 8.21913C7.19343 7.87412 6.56414 7.94404 6.21913 8.37531C5.87412 8.80657 5.94404 9.43586 6.37531 9.78087L11.3753 13.7809L12 14.2806L12.6247 13.7809L17.6247 9.78087C18.056 9.43586 18.1259 8.80657 17.7809 8.37531C17.4359 7.94404 16.8066 7.87412 16.3753 8.21913L12 11.7194L7.62469 8.21913Z"
              />
            </svg>
          </div>
        </div>
        <h2
          class="text-xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Subscribe To our Newslater
        </h2>
        <p
          class="max-w-xl mx-auto mt-4 font-medium text-sm leading-relaxed text-gray-400"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>

      <form action="#" method="POST" class="max-w-md mx-auto mt-8">
        <div class="flex items-center">
          <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
            <Input name="email" placeholder="Enter email to get started" />
          </div>

          <Btn> Subscribe </Btn>
        </div>
      </form>

      <div
        class="flex items-center font-medium text-gray-400 justify-center px-8 mt-8 sm:px-0"
      >
        <svg
          class="flex-shrink-0 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <span class="ml-2 text-sm">
          Your email is complely secured with us. We don’t share with anyone.
        </span>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang=""></style>
