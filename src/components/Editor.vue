<script setup lang="ts">
import { ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import ImageUploader from "quill-image-uploader";

const props = withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  {}
);

const handelChange = (e) => {
  emit("update:modelValue", e);
};

const emit = defineEmits(["update:modelValue"]);

const modules = {
  name: "imageUploader",
  module: ImageUploader,
  options: {
    upload: (file: any) => {
      console.log(file);
      //handle image upload
    },
  },
};

const value = ref();
</script>

<template>
  <QuillEditor
    @update:content="handelChange"
    @editor-change="handelChange"
    :placeholder="placeholder"
    v-model="value"
    :modules="modules"
    theme="snow"
    :toolbar="[
      { header: [1, 2, 3, 4, 5, 6, false] },
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'code-block',
      { list: 'ordered' },
      { list: 'bullet' },
      { color: [] },
      { background: [] },
      { align: [] },
      'clean',
      'image',
      'link',
    ]"
  />
</template>

<style scoped></style>
