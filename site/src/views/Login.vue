<script setup lang="ts">
import * as Yup from "Yup";
import AuthServices from "@/services/auth.services";
import handleRedirect from "@/utils/handleRedirect";
import GoogleIcon from "@/components/icons/Google.vue";
import {
  AppForm,
  AppFormStatus,
  SubmitButton,
  AppFormInput,
} from "@/components/forms";
import { ref } from "vue";
import getRedirect from "@/utils/getRedirect";
import Logo from "@/components/Logo.vue";

const initial = {
  email: "",
  password: "",
};
const schema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});
const googleLoading = ref(false);

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

const handleGoogleLogin = () => {
  return new AuthServices().signWithGoogle({
    redirect: getRedirect("/projects/"),
  });
};
</script>

<template>
  <div class="px-6 pt-8 pb-6 mx-auto flex items-center h-full justify-center">
    <div class="w-full">
      <div class="flex items-start gap-2 justify-center flex-col">
        <Logo color="white" />
        <div class="mt-5 mb-4">
          <h4 class="text-[17px] title mb-1 font-medium">Welcome Back</h4>
          <p class="sub-title leading-7 max-w-md font-medium text-[13.5px]">
            Need to create a new organization?
            <router-link to="/auth/register" class="text-primaryLight"
              >Sign up</router-link
            >
            here.
          </p>
        </div>
      </div>

      <div>
        <Btn
          :loading="googleLoading"
          :leftIcon="GoogleIcon"
          @click="handleGoogleLogin"
          variant="default"
          :fullWidth="true"
          >Continue with Google</Btn
        >
      </div>
      <div className="flex justify-center or items-center text-gray-500 my-3">
        <span className="text-sm mx-2 font-semibold">OR</span>
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
        <div class="mb-2 flex items-center justify-between">
          <Checkbox label="Remember me" />
          <router-link to="/auth/forgot-password"
            ><span class="text-sm text-primaryLight font-medium"
              >Forgot your password?</span
            ></router-link
          >
        </div>
        <SubmitButton @submit="handeLogin" :fullWidth="true">
          Login your account
        </SubmitButton>
      </AppForm>

      <div
        class="mt-3 flex items-center text-sm justify-center text-gray-400 font-medium gap-2"
      >
        <span>Don't have an account?</span>
        <router-link to="/auth/register"
          ><span class="text-primaryLight">Sign Up.</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
