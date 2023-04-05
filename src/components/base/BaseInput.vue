<script setup>
import { defineProps } from 'vue'
defineProps({
  label : {
    type: String,
    default: ''
  },
  unit: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Number,
    required: true,
  }
});

const emits = defineEmits(['update:modelValue']);

function changeValue(event) {
  const value = event.target.value;
  emits('update:modelValue', Number(value));
}
</script>

<template>
  <div>
    <label v-if="unit">{{ unit }}</label>
    <input type="number" :value="modelValue" :placeholder="label" @input="changeValue($event)">
  </div>
</template>

<style scoped>
  div {
    margin: 1rem;
  }
  label {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
  input {
    padding: 0.5rem;
  }

</style>
