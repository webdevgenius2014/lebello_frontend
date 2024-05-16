<template>
  <div class="flex gap-14 mx-10">
    <div
      v-for="(data, index) in productdata"
      :key="index"
      class="mt-24 flex m-auto w-4/12 bg-[rgb(220,214,205)]"
    >
      <div class="pb-1 ">
      <div class="overflow-hidden">
        <img :src="data?.img" class="w-6/2  transition-transform duration-1000 ease-in-out transform hover:scale-125  " />
      </div>
        <div class="ml-5 my-3 ">
          <h3 class="uppercase text-[#333333] text-[18px]">{{ data?.heading }}</h3>
          <p class=" text-[#333333] text-[13px] ">
            {{ data?.peragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
  
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
