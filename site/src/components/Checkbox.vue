<script setup lang="ts">
import { toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    checked?: boolean;
  }>(),
  {
    checked: false,
  }
);

const { checked } = toRefs(props);

const emit = defineEmits(["change"]);

const handleChange = (e) => {
  emit("change", (e.target as HTMLInputElement).checked);
};
</script>

<template>
  <div class="flex my-2 items-center">
    <div>
      <input
        class="form-check-input appearance-none h-4 w-4 border checked:dark:border-primary dark:border-gray-600 border-gray-400 rounded-sm bg-transparent checked:bg-primary checked:border-primary focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        :id="label"
        :checked="checked"
        v-bind="$attrs"
        @input="handleChange"
      />
    </div>

    <label
      v-if="label"
      :for="label"
      class="text-sm cursor-pointer font-medium dark:text-gray-300 text-gray-700 flex ml-2"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
.form-check-input:checked[type="checkbox"] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
</style>
