<script setup lang="ts">
import { ref, toRefs } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const props = withDefaults(
  defineProps<{
    modelValue?: any;
    min?: number;
    max?: number;
    interval?: number;
    disabled?: boolean;
    lazy?: boolean;
    range?: boolean;
  }>(),
  {
    range: false,
    lazy: false,
    disabled: false,
    interval: 1,
    min: 0,
    max: 100,
  }
);
const { modelValue } = toRefs(props);
const value = ref(modelValue?.value);

const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: HTMLInputElement["value"]
  ): HTMLInputElement["value"];
}>();

const handleChange = (e: any) => {
  emit("update:modelValue", e);
};
</script>

<template>
  <VueSlider
    tooltip="active"
    :enable-cross="false"
    @change="handleChange"
    :lazy="lazy"
    :duration="0.3"
    :disabled="disabled"
    :interval="interval"
    :max="max"
    :min="min"
    v-model="value"
  ></VueSlider>
</template>

<style scoped></style>
