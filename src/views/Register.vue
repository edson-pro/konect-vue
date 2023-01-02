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

const initial = {
  names: "",
  email: "",
  password: "",
};
const schema = Yup.object({
  names: Yup.string().required(),
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
  <div class="px-3 mx-auto max-w-md">
    <div
      class="flex items-center my-10 gap-2 justify-center flex-col text-center"
    >
      <h4 class="text-xl title font-medium">Create a new account.</h4>
      <p class="sub-title leading-7 max-w-md font-medium text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing <br />
        elit, sed do eiusmod .
      </p>
    </div>
    <AppForm
      @submit="handeRegister"
      :initialValues="initial"
      :validationSchema="schema"
    >
      <AppFormStatus />
      <AppFormInput label="Your names" placeholder="Full Names" name="names" />
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
      class="my-5 flex items-center text-sm justify-center text-gray-400 font-medium gap-2"
    >
      <span>Already have an account?</span>
      <router-link to="/login"
        ><span class="text-primaryLight">Sign in.</span></router-link
      >
    </div>
  </div>
</template>

<style scoped></style>
