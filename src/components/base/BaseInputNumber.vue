<script setup>
import { computed, defineProps } from 'vue';
import { round } from '../../utils/math.js';

const props = defineProps({
  label : {
    type: String,
    required: false,
    default: ''
  },
  unit: {
    type: String,
    required: false,
    default: ''
  },
  modelValue: {
    type: Number,
    required: true,
  },
  decimalPlaces: {
    type: Number,
    required: false,
    default: 2
  }
});

const emits = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return round(props.modelValue, props.decimalPlaces);
  },
  set(value) {
    emits('update:modelValue', Number(value));
  }
});


/*
function changeValue(event) {
  const value = event.target.value;
  emits('update:modelValue', Number(value));
}

:value="modelValue"
@input="changeValue($event)"
*/
</script>

<template>
  <div>
    <label v-if="unit">{{ unit }}</label>
    <input
      type="number"
      :placeholder="label"
      v-model="value"
    >
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
