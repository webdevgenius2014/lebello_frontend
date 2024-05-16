<template>
  <div class="flex my-16 px-14">
    <div v-for="(logo, index) in logoData" :key="index" class="m-auto">
      <a href="#">
        <img class="" :src="logo.image" title="picture" alt="brand" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const logoData = ref([
  {
    herf: '#',
    image: 'https://lebello.com/wp-content/uploads/2015/03/hyatt-logo-1.png'
  },
  {
    herf: '#',
    image: 'http://lebello.com/wp-content/uploads/2015/03/one-and-only-logo-1.png'
  },
  {
    herf: '#',
    image: 'http://lebello.com/wp-content/uploads/2015/03/w-hotels-logo-1.png'
  },
  {
    herf: '#',
    image: 'https://lebello.com/wp-content/uploads/2015/03/ink-logo_1-1.gif'
  },
  {
    herf: '#',
    image: 'http://lebello.com/wp-content/uploads/2015/03/marriot-resorts-logo-1.png'
  },
  {
    herf: '#',
    image: 'http://lebello.com/wp-content/uploads/2015/03/marriot-resorts-logo-1.png'
  }
])
</script>
