<template>
  <button v-bind="$attrs"
    class=" border mx-2 border-textColor2 rounded-[4px] hover:border-[#0a4b78] p-1 font-normal text-sm"
    :class="[disabled ? 'opacity-50 cursor-not-allowed' : '', bg_th_color ? bg_th_color : 'text-textColor2 bg-white hover:text-[#0a4b78]']"
    :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  bg_th_color: {
    type: String
  },
});
</script>