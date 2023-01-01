<script lang="ts" setup>
import { useField } from "vee-validate";
import { defineProps, toRef, computed } from "vue";
import Input from "@/components/Input.vue";

const props = withDefaults(
  defineProps<{
    name?: string;
  }>(),
  {}
);

const nameRef = toRef(props, "name");

const { errorMessage, value, handleBlur, setTouched, meta }: any =
  useField(nameRef);

const hasError = computed((e) => {
  return meta.valid === false && meta.touched && errorMessage
    ? errorMessage
    : "";
});
</script>

<template>
  <div class="my-4">
    <Input
      :error="hasError ? errorMessage : null"
      v-bind="$attrs"
      @blur="handleBlur"
      v-model="value"
    />
  </div>
</template>
