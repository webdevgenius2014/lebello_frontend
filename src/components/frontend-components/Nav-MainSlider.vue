<template>
  <div class="relative">
   
    <MainSlider :list="list" :mainSlider="mainSlider" :showDropDown="showDropDown" :showHeading="showHeading" />
  </div>
</template>

<script setup>
import MainSlider from './Main-Slider.vue';

defineProps({
  list: {
    type: Array,
    required: true,
  },
  mainSlider: {
    type: Boolean,
  },
  showHeading: {
    type: Boolean,
  },
  showDropDown: {
    type: Boolean,
  },
  downDropdown: {
    type: Boolean,
  },
});
</script>
