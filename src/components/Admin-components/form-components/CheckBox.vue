<template>
  <label class="flex text-sm  text-gray-700 font-extralight items-center space-x-2">
    <input
      type="checkbox"
      :value="value"
      v-model="proxyChecked"
      class="rounded bg-white border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
    />
    <span v-if="label" v-bind="$attrs">{{ label }}</span>
    <!-- <span v-if="flag"  >{{ flagText }}</span> -->
  </label>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps({
  checked: {
    type: [Array, Boolean],
    required: true,
  },
  value: {
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
});

const proxyChecked = computed({
  get() {
    return props.checked;
  },

  set(val) {
    emit('update:checked', val);
  },
});
</script>
