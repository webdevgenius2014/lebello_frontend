<template>
  <div :style="{ transform: `rotate(${rotation}deg)` }">
    <svg
      :width="props?.size"
      :height="props?.size"
      :fill="props?.fillColor"
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :stroke='props?.fillColor'
      stroke-width="77.824"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
          :fill="props?.fillColor"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, defineProps, } from 'vue'

const props = defineProps({
  initialRotation: {
    type: String,
    default: 'up'
  },
  direction: {
    type: String,
    default: 'up'
  },
  size: {
    type: String,
    default: '15px'
  },
  fillColor: {
    type: String,
    default: '#0fc000'
  }
})

// Initial rotation
const rotation = ref(0)

// Function to handle rotation
function rotate(direction) {
  switch (direction) {
    case 'up':
      rotation.value = 0
      break
    case 'down':
      rotation.value = 180
      break
    case 'left':
      rotation.value = -90
      break
    case 'right':
      rotation.value = 90
      break
    default:
      rotation.value = 0
  }
}

// Rotate the arrow based on initialRotation prop
rotate(props.initialRotation)

 
defineExpose({
    rotate
});


</script>

<style scoped>
/* Add any additional styling here */
</style>
