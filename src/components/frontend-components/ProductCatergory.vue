<template>
  <a href="#" class=" block mx-7 md2:flex gap-14 mt-24 mx-10 overflow-x-hidden ">
    <div v-for="(data, index) in productdata" :key="index" class=" w-full mt-10 md2: flex m-auto w-4/12 bg-[#ddd7ce]">
      <div class="pb-1 text-textColorBlack hover:bg-[#c68d39] hover:text-white ">
        <div class="overflow-hidden">
          <img :src="data?.img"
            class="w-6/2  transition-transform duration-1000 ease-in-out transform hover:scale-125  " />
        </div>
        <div class="mx-5 my-5 md2:mx-5 my-3 ">
          <h3 class="uppercase leading-none font-graphik text-[18px]">{{ data?.heading }}</h3>
          <p class=" text-[12px] font-graphik">
            {{ data?.peragraph }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue'

const productdata = ref([
  {
    img: 'https://lebello.com/wp-content/uploads/2022/09/Contract-Design-image-2.png',
    heading: 'Contract Design',
    peragraph: 'see our previous project around the world'
  },
  {
    img: 'https://lebello.com/wp-content/uploads/2022/09/Product-Catalog-image.jpg',
    heading: 'PRODUCT CATALOG',
    peragraph: 'download our latest product'
  },
  {
    img: 'https://lebello.com/wp-content/uploads/2023/05/our-material-lebello-1.jpg',
    heading: 'OUR MATERIAL',
    peragraph: 'Discover our 100+ bespoke material options'
  }
])

</script>

<style scoped></style>
