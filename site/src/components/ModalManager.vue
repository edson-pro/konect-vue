<script setup lang="ts">
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useModal } from "../store/modal";
import Modal from "./Modal.vue";
const modal = useModal();

// reactive container to save the payload returned by the mounted view
const model = reactive({});

// convert all state properties to reactive references to be used on view
const { isOpen, view, payload } = storeToRefs(modal);

const handleActionClick = (e) => {
  modal.action(e);
};
</script>

<template>
  <Modal
    v-if="payload.type === 'confirm'"
    @close="modal.close()"
    :open="isOpen"
    :show-dividers="false"
    size="md"
    :title="payload.title"
  >
    <template v-slot:body>
      <p
        class="text-sm text-left text-gray-600 dark:text-gray-400 leading-8 mx-2 my-1"
      >
        {{ payload.content }}
      </p>
    </template>
    <template v-slot:footer>
      <div class="w-full gap-3 p-1 flex justify-end items-center">
        <template v-for="action in payload.actions">
          <Btn
            :loading="action.loading"
            @click="handleActionClick(action.action)"
            :variant="action.variant"
            :color="action.color"
          >
            {{ action.title }}
          </Btn>
        </template>
      </div>
    </template>
  </Modal>
</template>

<style scoped></style>
