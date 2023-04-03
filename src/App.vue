<script setup>
import { computed, ref } from 'vue';

const baseV = ref(0);
const mbValue = computed(() => baseV.value / 1000000);
const kbValue = computed(() => baseV.value / 1000);

// const hello = "world";

// function toChf(amount) {
//   return `CHF ${amount}`;
// }

// const amount = ref(0);

function updateBaseV(event) {
  baseV.value = event.target.value;
}

</script>

<template>
  <label>B</label>
  <input type="number" :value="baseV" @input="updateBaseV($event)"/>
  <label>MB</label>
  <input type="number" :value="mbValue"/>
  <label>KB</label>
  <input type="number" :value="kbValue"/>
</template>

<style scoped>
  * {
    display: block;
  }
  label {
    margin-top: 1rem;
  }
</style>
