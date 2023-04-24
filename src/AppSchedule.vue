<script setup>
  import { computed, ref } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import { useFetchJson } from './composables/fetchJson.js';

  const pageNb = ref(1);
  const url = computed(() => `https://chabloz.eu/files/horaires/all?page=${pageNb.value}`);

  const { data: schedule } = useFetchJson(url);
  const showHeader = ref(false);


</script>

<template>



  <the-header v-if="showHeader">Horaire IM</the-header>
  <button @click="showHeader = !showHeader">toggle header</button>
  <button @click="pageNb--">Previous</button>
  <button @click="pageNb++">Next</button>
  <template v-for="course of schedule">
    <div>
      {{ course.label }}
    </div>
  </template>
</template>