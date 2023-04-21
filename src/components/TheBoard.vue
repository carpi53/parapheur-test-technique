<script lang="ts" setup>
import type { Task } from "@/frontType";
import { useTaskStore } from "@/stores/tasks";
import { ref } from "@vue/reactivity";
import Column from "../components/Column.vue";
import Modal from "../components/Modal.vue";
const columns = [
  {
    name: "A traiter",
    order: 0,
  },
  {
    name: "En cours",
    order: 1,
  },
  {
    name: "Finalisé",
    order: 2,
  },
  {
    name: "Autre",
    order: 3,
  }
];
const revealModal = ref(false)

function toggleModal(){
  revealModal.value = !revealModal.value
}

const taskStore = useTaskStore();
const listTask = ref(taskStore.getTasks);

</script>

<template>
  <div>
    <button class="button" @click="toggleModal">Créer une nouvelle carte</button>
    <Modal :reveal="revealModal" :columns="columns" @response="(response) => toggleModal()"></Modal>
    <div class="the-board-container">
      <Column  v-for="column in columns" :key="column.name" :name="column.name" :listTask="listTask.filter((element: Task) => element.column === column.name)"/>
    </div>
  </div>
</template>

<style scoped>
.the-board-container {
  display: flex;
  height: 100%;
  gap: 1em;
}
</style>
