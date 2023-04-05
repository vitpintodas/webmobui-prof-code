<script setup>
import BaseMessage from './base/BaseMessage.vue'
import BaseInput from './base/BaseInput.vue'
import { computed, ref } from 'vue'

const kelvin = ref(0);
const celcius = computed(() => kelvin.value - 273.15);

// setTimeout(() => {
//   kelvin.value = 100;
// }, 2000);


</script>

<template>
  <base-message data-role="error" >
    Error: plz try again later
  </base-message>
  <base-message data-role="warning">
    Application will be in maintenance ...
  </base-message>
  <!-- <base-input

    label="Kelvin"
    unit="K"
    :modelValue="kelvin"
    @update:modelValue="changeKelvin($event)"
  /> -->
  <base-input
    label="Kelvin"
    unit="K"
    v-model="kelvin"
  />
  <base-input :modelValue="celcius" label="celcius" />
  <p>Hello</p>
</template>

<style scoped>

</style>
