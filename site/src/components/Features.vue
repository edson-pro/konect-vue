<template lang="">
  <div class="bg-gray-800 bg-opacity-30 my-20">
    <div class="max-w-5xl mx-auto px-3 py-20">
      <div class="grid grid-cols-2 gap-12">
        <div class="max-w-sm flex flex-col items-start gap-5">
          <span
            class="rounded bg-primaryLight bg-opacity-10 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
          >
            OUR APPLICATION
          </span>
          <h4 class="text-2xl font-semibold text-white leading-10">
            Simple sorting of messages and creating organized groups of
            recipients.
          </h4>
          <p class="text-sm font-medium text-gray-400 leading-7">
            Send messages simply and easily and we will informed about all the
            events and notification.
          </p>
          <Btn variant="outline">Privacy & poicy</Btn>
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-w-sm mx-auto"
            src="https://storage.googleapis.com/studio-design-asset-files/projects/G3qbkNQEaJ/s-1204x1124_v-fms_webp_4867f83e-570e-40ea-98c0-ff856160f9f7_middle.webp"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto px-3 py-20">
      <div class="grid grid-cols-2 gap-12">
        <div class="flex items-center justify-center">
          <img
            class="max-w-md mx-auto"
            src="https://www.boxhero-app.com/static/d871a8d978420863a72288f1885aa7e8/51bee/feature-devices.webp"
            alt=""
          />
        </div>
        <div class="max-w-sm flex flex-col items-start gap-5">
          <span
            class="rounded bg-primaryLight bg-opacity-10 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
          >
            CROSS PLATFORM
          </span>
          <h4 class="text-2xl font-semibold text-white leading-10">
            Mobile or Desktop? Use them ALL in Real-Time!
          </h4>
          <div class="flex flex-col gap-4">
            <div
              class="flex items-start gap-4"
              v-for="item in [
                'Easy to stock in and out from any device.',
                'Check inventory status anytime, anywhere!',
                'Collaborate effectively with your team members!',
              ]"
            >
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-primaryLight h-6 w-6"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>check-circle-solid</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                      <rect width="48" height="48" fill="none"></rect>
                    </g>
                    <g id="icons_Q2" data-name="icons Q2">
                      <path
                        d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM35.4,18.4l-14,14a1.9,1.9,0,0,1-2.8,0l-5.9-5.9a2.2,2.2,0,0,1-.4-2.7,2,2,0,0,1,3.1-.2L20,28.2,32.6,15.6a2,2,0,0,1,2.8,2.8Z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span class="text-sm leading-7 font-medium text-gray-400">{{
                item
              }}</span>
            </div>
          </div>
          <Btn variant="outline">Privacy & poicy</Btn>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto px-3 py-20">
      <div class="grid grid-cols-2 gap-12">
        <div class="max-w-sm flex flex-col items-start gap-5">
          <span
            class="rounded bg-primaryLight bg-opacity-10 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
          >
            SCANNING
          </span>
          <h4 class="text-2xl font-semibold text-white leading-10">
            Go Paperless by Snap pictures of receipts on the go.
          </h4>
          <p class="text-sm font-medium text-gray-400 leading-7">
            Rydoo mobile app, forward them via e-mail or simply upload them to
            the web app. Let our AI extract the key receipt data (date, amount
            and merchant) and automatically turn it into an expense. Never lose
            a receipt again.
          </p>
          <Btn variant="outline">Learn More</Btn>
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-w-sm mx-auto"
            src="https://www.rydoo.com/app/uploads/2022/03/go-paperless-scan-receipt-650x604.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
