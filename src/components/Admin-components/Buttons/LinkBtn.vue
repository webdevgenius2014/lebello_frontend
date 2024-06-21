<template>
  <button @click="handleClick" class="text-textColor2 bg-white mx-2 hover:text-[#0a4b78] border border-textColor2 rounded-[4px] hover:border-[#0a4b78] p-1 font-normal text-sm"
    v-bind="$attrs"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>

const props = defineProps({
  click: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Add New Swatches'
  }
});

const handleClick = () => {
  window.location.href = props?.click;
};
</script>


