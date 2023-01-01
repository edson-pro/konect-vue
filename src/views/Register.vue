<script setup lang="ts">
import { ref } from "vue";
import AuthServices from "../services/auth.services";
const email = ref();
const password = ref();

const register = () => {
  if (email && password) {
    console.log({ email, password });
    return new AuthServices()
      .createAccount({ email: email.value, password: password.value })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
</script>

<template>
  <div class="m-6">
    <input v-model="email" type="email" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <button @click="register">Register</button>
  </div>
</template>

<style scoped></style>
