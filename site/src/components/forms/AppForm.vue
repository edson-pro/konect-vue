<script lang="ts" setup>
import { useForm } from "vee-validate";
import { toRefs } from "vue";

const props = defineProps<{
  validationSchema: any;
  initialValues: any;
}>();

const emits = defineEmits(["submit"]);

const { validationSchema, initialValues } = toRefs(props);

const form = useForm({
  validationSchema: validationSchema.value,
  initialValues: {
    ...initialValues.value,
    formStatus: null,
    loading: false,
  },
});
const { handleSubmit, resetForm, setFieldValue } = form;

const setIsLoading = (e) => {
  setFieldValue("loading", e);
};

const setStatus = (data) => {
  setFieldValue("formStatus", data);
};

const onSubmit = handleSubmit((values) => {
  setIsLoading(true);
  setStatus(null);
  const { formStatus, loading, ...newVaues } = values;
  emits("submit", newVaues, { resetForm, setIsLoading, setStatus });
});
</script>

<template>
  <form @submit="onSubmit">
    <slot />

    <button :hidden="true" type="submit"></button>
  </form>
</template>
