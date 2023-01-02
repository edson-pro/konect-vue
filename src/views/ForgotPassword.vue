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
  <div class="px-3 mx-auto max-w-md">
    <div
      class="flex items-center my-10 gap-2 justify-center flex-col text-center"
    >
      <h4 class="text-xl font-medium title">Forgot your password?</h4>
      <p class="sub-title leading-7 max-w-md font-medium text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing <br />
        elit, sed do eiusmod .
      </p>
    </div>
    <AppForm
      @submit="handeForgotPassword"
      :initialValues="initial"
      :validationSchema="schema"
    >
      <AppFormStatus />
      <AppFormInput label="Your email" placeholder="Email" name="email" />

      <div class="mb-3">
        <Checkbox label="I agree terms & conditions" />
      </div>

      <SubmitButton @submit="handeForgotPassword" :fullWidth="true">
        Request Password reset
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
