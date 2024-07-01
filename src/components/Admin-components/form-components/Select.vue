<template>
  <div class="bg-white border rounded-lg  p-auto">
    <select class="rounded-lg border border-stroke bg-transparent  outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white" v-bind="$attrs" v-model="selectedOption" :class="cusClass"  @change="handleChange">
    <option value="" disabled>{{ label }}</option>
    <option v-for="(option, index) in options" :key="index" :value="option[valueField]">
      <span v-if="option.parent_material === 1">&nbsp;&nbsp;&nbsp;</span>
      <span >{{ option[showfield] }}</span>
    </option>
  </select>
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
    type: String,
    default: ''
  },
  cusClass: {
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
