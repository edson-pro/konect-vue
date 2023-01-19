<script lang="ts" setup>
import { useField } from "vee-validate";
import Alert from "../Alert.vue";

const { value, setValue }: any = useField("formStatus");
</script>

<template>
  <template v-if="value">
    <Alert
      :color="value.type === 'error' ? 'danger' : 'success'"
      variant="light"
      :closeButton="true"
      @close="setValue(null)"
      :title="value.message"
    />
  </template>
</template>
