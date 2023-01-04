<script setup lang="ts">
import * as Yup from "Yup";
import AuthServices from "@/services/auth.services";
import {
  AppForm,
  AppFormStatus,
  SubmitButton,
  AppFormInput,
} from "@/components/forms";
import Logo from "@/components/Logo.vue";

const initial = {
  email: "",
};
const schema = Yup.object({
  email: Yup.string().required().email(),
});

const handeForgotPassword = ({ email }, actions) => {
  return new AuthServices()
    .forgotPassword({ email })
    .then((e) => {
      console.log(e);
      actions.setIsLoading(false);
      actions.setStatus({
        type: "success",
        message: "Password reset has been sent to your address",
      });
    })
    .catch((message) => {
      actions.setStatus({
        type: "error",
        message: message,
      });
      actions.setIsLoading(false);
    });
};
</script>

<template>
  <div class="px-5 pt-8 pb-6 mx-auto flex items-center h-full justify-center">
    <div class="w-full">
      <div class="flex items-start gap-2 justify-center flex-col">
        <router-link to="/"><Logo color="white" /></router-link>
        <div class="mt-7 mb-2">
          <h4 class="text-[18px] title mb-[6px] font-medium">
            Reset your password
          </h4>
          <p
            class="sub-title leading-6 text-opacity-75 max-w-md font-medium text-[13.5px]"
          >
            Enter the email address associated with your account. We will send a
            reset link to your email.
          </p>
        </div>
      </div>
      <AppForm
        @submit="handeForgotPassword"
        :initialValues="initial"
        :validationSchema="schema"
      >
        <AppFormStatus />
        <AppFormInput placeholder="Your Email" name="email" />

        <div class="my-3">
          <Checkbox label="I agree terms & conditions" />
        </div>

        <SubmitButton @submit="handeForgotPassword" :fullWidth="true">
          Send reset link
        </SubmitButton>

        <div
          class="mt-3 flex items-center text-sm justify-center text-gray-400 font-medium gap-2"
        >
          <span>Remember your password?</span>
          <router-link to="/auth/login"
            ><span class="text-primaryLight">Sign in.</span></router-link
          >
        </div>
      </AppForm>
    </div>
  </div>
</template>

<style scoped></style>
