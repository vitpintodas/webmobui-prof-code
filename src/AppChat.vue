<script setup>
  import TheHeader from './components/TheHeader.vue'
  import { ref } from 'vue';
  import { useFetchJson } from './composables/fetchJson.js';

  const { data: user } = useFetchJson('/ws/chat/user/login?user=Nicolas');
  const { data: messages } = useFetchJson('/ws/chat/msg/get');


  console.log(user.value);


</script>

<template>
  <TheHeader></TheHeader>
  {{ user }}
</template>

<style scoped>

</style>
