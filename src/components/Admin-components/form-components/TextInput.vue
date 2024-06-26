<script setup>
import { ref, onMounted, defineProps, defineExpose } from 'vue';
// import { useField } from '@vee-validate/core';
import {  useField  } from 'vee-validate';

// Define props
const props = defineProps({
  label: {
    type: String,
  },
  errMessage: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  isTextarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 3,
  },
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: [String, Object],
    required: false,
  }
});

const { value: model, errorMessage, meta } = useField(props.name, props.rules);

const inputRef = ref(null);

onMounted(() => {
  if (inputRef.value && inputRef.value.hasAttribute('autofocus')) {
    inputRef.value.focus();
  }
});

defineExpose({ focus: () => inputRef.value.focus() });
</script>

<template>
  <label v-if="label" class="block font-medium text-sm text-gray-700 mb-1 ml-1">
    {{ label }}
  </label>

  <div v-if="isTextarea" class="space-y-3">
    <textarea
      class="py-3 px-4 block w-full border-gray-300 focus:border-none focus:ring-indigo-800 rounded-md shadow-sm"
      :rows="rows"
      :placeholder="placeholder"
      v-model="model"
      ref="inputRef"
      @input="$emit('update:model', $event.target.value)"
    ></textarea>
  </div>

  <input
    v-else
    class="border-gray-300 w-full focus:border-none focus:ring-indigo-800 rounded-md shadow-sm"
    v-model="model"
    ref="inputRef"
    :placeholder="placeholder"
    v-bind="$attrs"
    @input="$emit('update:model', $event.target.value)"

  />

  <div v-show="errMessage || errorMessage">
    <p class="text-sm text-red-600">
      {{ errMessage || errorMessage }}
    </p>
  </div>
</template>
