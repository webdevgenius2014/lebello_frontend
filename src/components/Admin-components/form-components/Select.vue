<template>
  <select v-model="selectedOption" @change="handleChange">
    <option value="" disabled>{{ label }}</option>
    <option v-for="(option, index) in options" :key="index" :value="option[valueField]">
      <span v-if="option.parent_material === 1">&nbsp;&nbsp;&nbsp;</span>
      <span >{{ option[showfield] }}</span>
    </option>
  </select>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';

const props = defineProps({
  
  options: {
    type: Array,
    required: true
  },
  showfield: {
    type: String,
    required: true,
  },
  valueField: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['update:modelValue']);

const selectedOption = ref(props.value);

watch(() => props.value, (newVal) => {
  selectedOption.value = newVal;
});

const handleChange = (event) => {
  emits('update:modelValue', event.target.value);
};
</script>
