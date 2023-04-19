<script setup>
  import { tasks, page } from '../../stores/tasks';

</script>

<template>
  <div>
    <input type="text"/>
    <button>add</button>
    <button @click="page = 'home'">cancel</button>
  </div>
</template>

<style scoped>
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
    padding: 10px;
  }
</style>