<script lang="ts" setup>
import { useTaskStore } from "../stores/tasks";
import draggable from "vuedraggable";
import Card from "./Card.vue";
defineProps({
  name: String,
  listTask: Array
});
const taskStore = useTaskStore();
function updateColumn(e: any, column: string) {
  if (e.added) {
    taskStore.updateColumn(e.added.element.id, column)
  }
}
</script>
<template>
  <div class="column">
    <h2>{{ name }}</h2>
    <draggable
      class="list-group"
      :list="listTask"
      group="tasks"
      @change="updateColumn($event, name!)"
      itemKey="id"
    >
      <template #item="{ element }">
        <Card :name="element.name" :location="element.location" />
      </template>
    </draggable>
  </div>
</template>
<style scoped>
h2 {
  font-size: 2em;
  font-weight: 700;
  margin: 15px 0 20px;
  color: var(--vt-c-indigo);
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
