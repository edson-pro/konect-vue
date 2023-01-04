<script setup lang="ts">
import Modal from "@/components/Modal.vue";
import * as Yup from "Yup";
import { ref } from "vue";
import { AppForm } from "../forms";
import AppFormInput from "@/components/forms/AppFormInput.vue";
import AppFormStatus from "@/components/forms/AppFormStatus.vue";
import SubmitButton from "@/components/forms/SubmitButton.vue";
import AppFormSelect from "@/components/forms/AppFormSelect.vue";
import { createProject } from "@/services/projects.services";
import useToast from "@/composables/useToast";
import router from "@/router";

defineProps<{
  open?: boolean;
}>();

const initial = {
  name: "",
  category: "",
};
const schema = Yup.object({
  name: Yup.string().required(),
  category: Yup.string().required(),
});
const toast = useToast();

const handeSubmit = ({ name, category }, actions) => {
  return createProject({ name, category })
    .then(({ id }) => {
      actions.setIsLoading(false);
      emits("close");
      toast.show({
        title: "Project Created Successfully",
        message: "your project was created successfully",
      });
      router.push({ path: `/projects/${id}` });
    })
    .catch(({ message }) => {
      actions.setStatus({
        type: "error",
        message: message,
      });
      actions.setIsLoading(false);
    });
};

const emits = defineEmits(["close"]);
</script>

<template>
  <AppForm
    @submit="handeSubmit"
    :initialValues="initial"
    :validationSchema="schema"
  >
    <Modal
      title="Create a new Project"
      :open="open"
      @close="emits('close')"
      size="lg"
    >
      <template v-slot:body>
        <div class="p-2">
          <AppFormStatus />
          <AppFormInput label="Project Name" placeholder="Name" name="name" />
          <div class="mt-5">
            <AppFormSelect
              description="Provide us with a project category to use."
              label="Project Category"
              placeholder="Category"
              name="category"
              :options="[
                'contruction',
                'software & ict',
                'health',
                'medical',
                'real estate',
                'trainings',
              ]"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="w-full gap-3 flex justify-end items-center">
          <Btn @click="emits('close')" variant="default">cancel</Btn>
          <SubmitButton @submit="handeSubmit">Create project</SubmitButton>
        </div>
      </template>
    </Modal>
  </AppForm>
</template>

<style lang=""></style>
