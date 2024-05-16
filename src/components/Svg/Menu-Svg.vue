<template>
  <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512" xml:space="preserve" :width="props?.size" :height="props?.size">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <rect y="16" class="st0" width="512" height="90" :fill="props.fillColor"></rect>
        <rect y="208" class="st0" width="512" height="90" :fill="props.fillColor"></rect>
        <rect y="400" class="st0" width="512" height="90" :fill="props.fillColor"></rect>
      </g>
    </g>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: "30px",
  },
  fillColor: {
    type: String,
    default: "#868383",
  },
});
</script>
