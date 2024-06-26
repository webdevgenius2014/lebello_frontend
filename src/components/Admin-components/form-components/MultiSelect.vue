<template>
    <div>
      <select v-model="selectedOptions" multiple @change="handleChange">
        <option v-if="!selectedOptions.length" :value="null">{{ label }}</option>
        <option v-for="(option, index) in options" :key="index" :value="option[valueField]">
          <span :class="{'ml-4': option.parent_material === 0}">{{ option[showfield] }}</span>
        </option>
      </select>
      <div v-if="selectedValues.length > 0">
        <p>Selected Values:</p>
        <ul>
          <li v-for="(value, index) in selectedValues" :key="index">
            {{ value }} 
            <button @click="removeValue(value)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
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
      type: Array, // Change type to Array for multiselect
      default: () => [] // Default value as an empty array
    }
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  const selectedOptions = ref(props.value);
  
  watch(() => props.value, (newVal) => {
    selectedOptions.value = newVal;
  });
  
  const selectedValues = ref([]);
  
  const handleChange = (event) => {
    const selected = Array.from(event.target.selectedOptions, option => option.value);
    emits('update:modelValue', selected);
  };
  
  const removeValue = (value) => {
    selectedValues.value = selectedValues.value.filter(item => item !== value);
    emits('update:modelValue', selectedValues.value);
  };
  
  watch(() => props.value, (newVal) => {
    selectedValues.value = newVal;
  });
  
  </script>
  