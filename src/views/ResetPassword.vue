<script setup lang="ts">
import * as Yup from "Yup";
import AuthServices from "@/services/auth.services";
import {
  AppForm,
  AppFormStatus,
  SubmitButton,
  AppFormInput,
} from "@/components/forms";

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
  <div class="px-3 mx-auto max-w-md">
    <div
      class="flex items-center my-10 gap-2 justify-center flex-col text-center"
    >
      <h4 class="text-xl font-medium title">Reset your password?</h4>
      <p class="sub-title leading-7 max-w-md font-medium text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing <br />
        elit, sed do eiusmod .
      </p>
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
      /><AppFormInput
        label="confirm new password"
        placeholder="Confirm password"
        name="confirmPassword"
        type="password"
      />

      <div class="mb-3">
        <Checkbox label="I agree terms & conditions" />
      </div>

      <SubmitButton @submit="handeResetPassword" :fullWidth="true">
        Reset Password
      </SubmitButton>

      <div
        class="my-5 flex items-center text-sm justify-center text-gray-400 font-medium gap-2"
      >
        <span>Remember your password?</span>
        <router-link to="/login"
          ><span class="text-primaryLight">Sign in.</span></router-link
        >
      </div>
    </AppForm>
  </div>
</template>

<style scoped></style>
