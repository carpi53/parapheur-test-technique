<script lang="ts" setup>
const props = defineProps({
  name: String,
  location: String
});
</script>
<template>
  <div class="box">
    <h3>{{ name }}</h3>
    <div class="location">
      <span class="label">Lieu: </span><span> {{ location }}</span>
    </div>
  </div>
</template>
<style>
.location {
  display: flex;
  gap: 5px;
  margin-top: 15px;
}

.label {
  font-weight: 600;
  color: var(--vt-c-text-light-2)
}

h3 {
  font-weight: 600;
  font-size: 1.5em;
  color: var(--vt-c-indigo);
}

.box {
  cursor: move;
}
</style>
