<script lang="ts" setup>
import type { Column } from "@/frontType";
import { ref } from "@vue/reactivity";
import { useTaskStore } from "../stores/tasks";
const taskStore = useTaskStore();
defineProps({
  reveal: Boolean,
  columns: Array<Column>,
});
const name = ref("");
const location = ref("");
const status = ref("");

const emit = defineEmits(["response"]);

function onSubmit() {
  const task = {
    id: taskStore.getLastId + 1,
    name: name.value,
    location: location.value,
    column: status.value,
  };
  taskStore.addTask(task);
  emit("response", false);
  name.value = ""
  location.value = ""
  status.value = ""
}

function closeModal(){
  emit("response", false);
}
</script>
<template>
  <div class="container" v-if="reveal">
    <Teleport to="body">
      <div class="overlay" @click="closeModal()"></div>
    </Teleport>
    <div class="content">
      <h3>Ajouter une carte</h3>
      <form @submit.prevent="onSubmit()">
        <div class="input-group">
          <label for="name">Name : </label>
          <input
            type="text"
            placeholder="Nom de la tâche"
            name="name"
            id="name"
            autocomplete="off"
            v-model="name"
          />
        </div>
        <div class="input-group">
          <label for="location">Lieu : </label>
          <input
            type="text"
            placeholder="Lieu"
            name="location"
            id="location"
            autocomplete="off"
            v-model="location"
          />
        </div>
        <div class="input-group">
          <label>Status : </label>
          <select v-model="status">
            <option disabled value="">Choisissez</option>
            <option v-for="column in columns">{{ column.name }}</option>
          </select>
        </div>
        <button class="btn-primary">Ajouter</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.content {
  background: #fff;
  max-width: 540px;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 16px;
}

input {
  width: 100%;
  height: 40px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 18px 10px;
}

select {
  width: 100%;
  height: 40px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
}

label {
  width: 100px;
  margin-left: 21px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  cursor: pointer;
}

.btn-primary {
  float: right;
}
</style>
