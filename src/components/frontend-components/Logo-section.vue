<template>
  <div class=" flex flex-wrap	 md2:flex my-16 px-14">
    <div v-for="(logo, index) in logoData" :key="index" class="flex-1 min-w-[120px] mb-8 m-auto md2:m-auto">
      <a href="#">
        <img class="m-auto md2:opacity-50" :src="logo.image" :title="logo.alt" :alt="logo.alt" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const logoData = ref([
  {
    herf: 'contractDesign',
    image: 'https://lebello.com/wp-content/uploads/2015/03/hyatt-logo-1.png',
    alt:'hyatt'
  },
  {
    herf: 'contractDesign',
    image: 'http://lebello.com/wp-content/uploads/2015/03/one-and-only-logo-1.png',
    alt:'one-and-only'
  },
  {
    herf: 'contractDesign',
    image: 'http://lebello.com/wp-content/uploads/2015/03/w-hotels-logo-1.png',
    alt:'w-hotels'
  },
  {
    herf: 'contractDesign',
    image: 'https://lebello.com/wp-content/uploads/2015/03/ink-logo_1-1.gif',
    alt:'ink-logo'
  },
  {
    herf: 'contractDesign',
    image: 'http://lebello.com/wp-content/uploads/2015/03/marriot-resorts-logo-1.png',
    alt:'marriot-resorts'
  },
  {
    herf: 'contractDesign',
    image: 'http://lebello.com/wp-content/uploads/2015/03/marriot-resorts-logo-1.png',
    alt:'marriot-resorts'
  }
])
</script>
