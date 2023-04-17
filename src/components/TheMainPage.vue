<script setup>
import BaseMessage from './base/BaseMessage.vue'
import BaseInputNumber from './base/BaseInputNumber.vue'
import { computed, ref } from 'vue'

const decimalPlaces = 2;
const kelvin = ref(0);
const celcius = computed({
  get() {
    return kelvin.value - 273.15;
  },
  set(value) {
    kelvin.value = value + 273.15;
  }
});

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
  <base-input-number
    v-model="kelvin"
    label="Kelvin"
    unit="K"
    :decimal-places="decimalPlaces"
  />
  <base-input-number
    v-model="celcius"
    label="celcius"
    unit="°C"
    :decimal-places="decimalPlaces"
  />
</template>

<style scoped>

</style>
