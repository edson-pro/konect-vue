<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useAuth from "../store/auth";
import AuthServices from "../services/auth.services";

const auth = useAuth();

const { loading, user } = storeToRefs(auth);

const handleLogout = () => {
  return new AuthServices().logout().then(() => {
    auth.logout();
  });
};
</script>
<template>
  {{ loading }}
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-link to="/projectss">Go to Projects</router-link>
  <div v-if="loading">loading user</div>
  <div v-if="user">
    <div>
      {{ user.username }}
    </div>
    <a @click="handleLogout">Logout</a>
  </div>
  <div v-else="user">
    <router-link to="/login">Login</router-link>
  </div>
</template>
<style lang=""></style>
