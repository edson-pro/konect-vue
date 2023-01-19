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
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};
const schema = Yup.object({
  flast_name: Yup.string().required(),
  first_name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});
const googleLoading = ref(false);

const handeRegister = ({ email, password }, actions) => {
  return new AuthServices()
    .createAccount({ email, password })
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
  <div class="px-5 pt-8 pb-6 mx-auto flex items-center h-full justify-center">
    <div class="w-full">
      <div class="flex items-start gap-2 justify-center flex-col">
        <router-link to="/"><Logo color="white" /></router-link>

        <div class="mt-5 mb-4">
          <h4 class="text-[17px] title mb-1 font-medium">
            Let’s get you set up
          </h4>
          <p class="sub-title leading-7 max-w-md font-medium text-[13.5px]">
            If your team is already using Retool, you can
            <router-link to="/auth/register" class="text-primaryLight">
              sign in.</router-link
            >
          </p>
        </div>
      </div>
      <AppForm
        @submit="handeRegister"
        :initialValues="initial"
        :validationSchema="schema"
      >
        <AppFormStatus />
        <div class="grid grid-cols-2 gap-3">
          <AppFormInput
            label="Last name"
            placeholder="First Name"
            name="first_name"
          />
          <AppFormInput
            label="First name"
            placeholder="Last Name"
            name="last_name"
          />
        </div>
        <AppFormInput label="Your email" placeholder="Email" name="email" />
        <AppFormInput
          type="password"
          placeholder="Password"
          label="Your password"
          name="password"
        />
        <div class="mb-3 flex items-center justify-between">
          <Checkbox label="I agree terms & conditions" />
        </div>
        <SubmitButton @submit="handeRegister" :fullWidth="true">
          Create your account
        </SubmitButton>
      </AppForm>

      <div className="flex justify-center or items-center text-gray-500 my-4">
        <span className="text-sm mx-2 font-semibold">OR</span>
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
      <div
        class="mt-5 flex items-center text-[13.5px] justify-center text-gray-400 font-medium gap-2"
      >
        <span>Already have an account?</span>
        <router-link to="/auth/login"
          ><span class="text-primaryLight">Sign in.</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
