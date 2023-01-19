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
  password: "",
  confirmPassword: "",
};
const schema = Yup.object({
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const handeResetPassword = ({ password }, actions) => {
  const code = "";
  return new AuthServices()
    .resetPassword({ password, code })
    .then((e) => {
      actions.setIsLoading(false);
      actions.setStatus({
        type: "success",
        message: "Password have been updated successfully",
      });
    })
    .catch((message) => {
      actions.setStatus({
        type: "error",
        message: "Email link is invalid or has expired",
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

        <div class="mt-5 mb-4">
          <h4 class="text-[17px] title mb-1 font-medium">
            Create a new password.
          </h4>
          <p class="sub-title leading-7 max-w-md font-medium text-[13.5px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <AppForm
        @submit="handeResetPassword"
        :initialValues="initial"
        :validationSchema="schema"
      >
        <AppFormStatus />
        <AppFormInput
          label="Your new password"
          placeholder="New password"
          name="password"
          type="password"
        />
        <div class="mt-4">
          <AppFormInput
            label="confirm new password"
            placeholder="Confirm password"
            name="confirmPassword"
            type="password"
          />
        </div>

        <div class="my-3">
          <Checkbox label="I agree terms & conditions" />
        </div>

        <SubmitButton @submit="handeResetPassword" :fullWidth="true">
          Reset Password
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
