<script setup lang="ts">
import * as Yup from "Yup";
import AuthServices from "@/services/auth.services";
import handleRedirect from "@/utils/handleRedirect";
import second from "first";
import {
  AppForm,
  AppFormStatus,
  SubmitButton,
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

const handeLogin = ({ email, password }, actions) => {
  return new AuthServices()
    .signIn({ email, password })
    .then(() => {
      actions.setIsLoading(false);
      handleRedirect("/projects");
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
  <div class="m-16 max-w-md">
    <div
      class="flex items-center my-10 gap-3 justify-center flex-col text-center"
    >
      <h4 class="text-xl font-semibold">Welcome Back</h4>
      <p class="sub-title leading-7 max-w-md font-medium text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing <br />
        elit, sed do eiusmod .
      </p>
    </div>
    <AppForm
      @submit="handeLogin"
      :initialValues="initial"
      :validationSchema="schema"
    >
      <AppFormStatus />
      <AppFormInput label="Your email" placeholder="Email" name="email" />
      <AppFormInput
        type="password"
        placeholder="Password"
        label="Your password"
        name="password"
      />
      <div class="mb-1">
        <Checkbox label="Remember me" />
      </div>
      <SubmitButton @submit="handeLogin" :fullWidth="true">
        Login your account
      </SubmitButton>
      <div
        class="my-3 flex items-center text-sm justify-center text-gray-400 font-medium gap-2"
      >
        <span>Don't have an account?</span>
        <router-link to="/register"
          ><span class="text-primary">Sign Up.</span></router-link
        >
      </div>
      <Btn variant="default" :fullWidth="true">Continue with Google</Btn>
    </AppForm>
  </div>
</template>

<style scoped></style>
