<script setup>
  import { ref } from 'vue';
  import TheHeader from './components/tasks/TheHeader.vue';
  import TheTasksList from './components/tasks/TheTasksList.vue';
  import TheTasksFormAdd from './components/tasks/TheTasksFormAdd.vue';

  import { page } from './stores/tasks.js';

  const dynamicComponent = ref('the-tasks-form-add');
  

</script>

<template>
  <the-header/>

  <the-tasks-form-add v-if="page === 'add'"/>
  <!-- <the-tasks-form-mod v-if="page === 'mod'"/>
  <the-tasks-form-del v-if="page === 'del'"/> -->

  <component :is="dynamicComponent"/>



  <the-tasks-list/>

</template>