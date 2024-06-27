<template>
  <label v-if="label" class="block font-medium text-sm text-gray-700 mb-1 ml-1">
    {{ label }}
  </label>

  <div v-if="isTextarea" class="space-y-3">
    <textarea
      class="py-3 px-4 block w-full border-gray-300 focus:border-none focus:ring-indigo-800 rounded-md shadow-sm"
      :rows="rows"
      :placeholder="placeholder"
      v-model="inputValue"
      ref="inputRef"
      @input="updateValue($event.target.value)"
    ></textarea>
  </div>

  <input
    v-else
    class="border-gray-300 w-full focus:border-none focus:ring-indigo-800 rounded-md shadow-sm"
    :placeholder="placeholder"
    v-model="inputValue"
    ref="inputRef"
    v-bind="$attrs"
    @input="updateValue($event.target.value)"
  />

  <div v-show="errMessage">
    <p class="text-sm text-red-600">
      {{ errMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: String,
  errMessage: String,
  placeholder: String,
  isTextarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 3,
  },
});

const emit = defineEmits(['update:model']);

const inputValue = ref(props.value); 

const inputRef = ref(null);
onMounted(() => {
  if (inputRef.value && inputRef.value.hasAttribute('autofocus')) {
    inputRef.value.focus();
  }
});

defineExpose({ focus: () => inputRef.value.focus() });

const updateValue = (newValue) => {
  inputValue.value = newValue;
  emit('update:model', newValue); 
};
</script>
