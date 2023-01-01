<script lang="ts" setup>
import Button from "@/components/Button.vue";
import { useField, useSubmitForm } from "vee-validate";

const emits = defineEmits(["submit"]);

const loadingField: any = useField("loading");
const statusField = useField("formStatus");

const setStatus = (data) => {
  statusField.setValue(data);
};

const setIsLoading = (e) => {
  loadingField.setValue(e);
};

const submitForm = useSubmitForm((values, { resetForm }) => {
  setIsLoading(true);
  setStatus(null);
  const { formStatus, loading, ...newVaues } = values;
  emits("submit", newVaues, { resetForm, setIsLoading, setStatus });
});
</script>

<template>
  <Button
    @input="submitForm"
    slot-scope="{ onInput }"
    type="submit"
    :loading="loadingField.value"
    @click="submitForm"
    v-bind="$attrs"
  >
    <slot />
  </Button>
</template>
