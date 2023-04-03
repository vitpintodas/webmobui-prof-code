<script setup>
import { computed, ref } from 'vue';

const baseV = ref(0);
const mbValue = computed(() => baseV.value / 1000000);
const kbValue = computed(() => baseV.value / 1000);

function updateBaseV(val, factor = 1) {
  baseV.value = val * factor;
}

</script>

<template>
  <label>MB</label>
  <input type="number" :value="mbValue" @input="updateBaseV($event.target.value, 1000000)"/>
  <label>KB</label>
  <input type="number" :value="kbValue" @input="updateBaseV($event.target.value, 1000)"/>
</template>

<style scoped>
  * {
    display: block;
  }
  label {
    margin-top: 1rem;
  }
</style>
