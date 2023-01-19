<template>
  <section class="bg-gray-900 py-24">
    <div class="max-w-6xl mx-auto px-8">
      <div
        class="grid md:items-stretch grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10"
      >
        <div class="flex flex-col justify-start gap-16 py-5">
          <div>
            <h2 class="font-semibold leading-10 text-white text-2xl">
              It’s time to build something <br />

              <span class="text-primaryLight"> exciting!</span>
            </h2>
            <p
              class="max-w-xl mx-auto font-medium mt-4 text-sm leading-7 text-gray-400"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>
          <div>
            <div class="text-gray-400 font-medium text-sm leading-7">
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>742 Evergreen Terrace</p>
                <p>Springfield, OR 12345</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex items-center gap-3">
                <PhoneIcon class="flex-shrink-0 h-5 w-5 text-primaryLight" />
                <span class="text-gray-400 font-medium text-sm">
                  +1 (555) 123-4567
                </span>
              </dd>
            </div>
            <div class="mt-4">
              <dt class="sr-only">Email</dt>
              <dd class="flex items-center gap-3">
                <EnvelopeIcon class="flex-shrink-0 h-5 w-5 text-primaryLight" />
                <span class="text-gray-400 font-medium text-sm">
                  support@example.com
                </span>
              </dd>
            </div>

            <p class="mt-6 text-gray-400 font-medium text-sm">
              Looking for careers?
              <a href="#" class="font-medium text-primaryLight underline"
                >View all job openings</a
              >.
            </p>
          </div>
        </div>

        <div class="">
          <div
            class="overflow-hidden border bg-gray-800 bg-opacity-50 border-gray-700 border-opacity-50 rounded-[4px]"
          >
            <div class="p-6 sm:p-10">
              <h3 class="text-xl font-semibold text-gray-100">
                Get in touch with us.
              </h3>
              <p class="mt-4 text-sm font-medium leading-7 text-gray-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

              <form action="#" method="POST" class="mt-4">
                <div class="space-y-6">
                  <AppForm
                    @submit="handeSubmit"
                    :initialValues="initial"
                    :validationSchema="schema"
                  >
                    <AppFormStatus />
                    <AppFormInput
                      label="Your names"
                      placeholder="Names"
                      name="names"
                    />
                    <AppFormInput
                      placeholder="Email"
                      label="Your email"
                      name="email"
                    />
                    <AppFormTextarea
                      placeholder="Message"
                      label="Your message"
                      name="message"
                    />

                    <SubmitButton @submit="handeSubmit" :fullWidth="true">
                      Get in touch
                    </SubmitButton>
                  </AppForm>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import * as Yup from "Yup";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
import {
  AppForm,
  AppFormStatus,
  SubmitButton,
  AppFormTextarea,
  AppFormInput,
} from "@/components/forms";

const initial = {
  email: "",
  password: "",
};
const schema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});
const googleLoading = ref(false);

const handeSubmit = ({}, actions) => {};
</script>
<style lang=""></style>
