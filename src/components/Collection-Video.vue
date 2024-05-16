<template>
  <div id="arrowto" class="h-full bg-[#e3dbcf] overflow-hidden pb-16 mx-0 transition duration-1000	 ease-in	">
    <!-- menu icon right  -->
    <div class="relative">
      <div class="absolute top-5 right-0 pr-3" ref="closeMenu">
        <SideMenu key="firstKey1" :list="products" :handleSideMenu="handleSideMenu" :isOpen="isOpenSidebar"
          showMediaIcon="true" />
      </div>
    </div>
    <!-- section video +text -->
    <div class="flex w-[1100px] m-auto my-20">
      <div class="w-[400px]">
        <h1 class="text-orange text-[36px] leading-10">INNOVATIVE, CREATIVE OUTDOOR FURNITURE</h1>
      </div>
      <div>
        <p class="font-light font-h3Font">
          Designer and manufacturer of exclusive outdoor furniture<br />
          with performance&nbsp;vibrant&nbsp;materials. Bespoke outdoor<br />
          contract furniture supplier for&nbsp;the&nbsp;commercial and&nbsp;residential clients.
        </p>
      </div>
    </div>
    <!--  video section -->
    <div class="flex w-[1200px] overflow-auto m-auto mt-14">
      <div class="w-3/5">
        <video autoplay="true" muted="true" loop="true" controls="" class="w-full h-full">
          <source src="https://lebello.com/wp-content/uploads/2023/05/Spring%20Collection%20Highlights.mp4"
            type="video/mp4" />
        </video>
      </div>
      <div class="w-2/5 ml-5">
        <div class="px-9 pt-10 bg-[rgb(220,214,205)]">
          <img class="max-w-[166px]" src="https://lebello.com/wp-content/uploads/2023/05/video-logo.png" />
          <h4 class="my-10 text-orange text-[36px] leading-10">“Spring Collection Highlights”</h4>
          <p class="text-h3Font text-2xl font-light">
            Watch our season collection and product highlights
          </p>
          <div class="mt-10 pb-7">
            <a class=" cursor-pointer border hover:bg-[#ce8d39] hover:text-white hover:border-0 border-black rounded-3xl pt-0 pb-1 px-4 text-center font-light"
              @click="handleModal" data-toggle="modal">see more</a>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL   -->
    <VideoModal :open="open" :handleClose="handleModal" />
  </div>
</template>

<script setup>
import VideoModal from './VideoModal.vue'

import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import SideMenu from './Side-Menu.vue';

const open = ref(false)
const handleModal = () => {
  open.value = !open.value
}
const isOpenSidebar = ref(false)
const handleSideMenu = () => {
  isOpenSidebar.value = !isOpenSidebar.value
}

const closeMenu = ref(null)
const closeSideMenu = () => {
  isOpenSidebar.value = false;
}
onClickOutside(closeMenu, closeSideMenu)

const products = ref([
  { name: 'Trixie Lounger', link: 'https://lebello.com/products/trixie-lounger/' },
  { name: '4L Pixie Arms Chair', link: 'https://lebello.com/products/4l-pixie-arms-chair/' },
  { name: 'Monyet Stool', link: 'https://lebello.com/products/monyet-stool/' },
  { name: 'Monyet Stool', link: 'https://lebello.com/products/monyet-stool/' },
  { name: 'Mogul Lounger', link: 'https://lebello.com/products/mogul_lounger/' },
  { name: 'Tubo Club', link: 'https://lebello.com/products/tubo-club-chair/' },
  { name: 'Mogul Puff Lounger', link: 'https://lebello.com/products/mogul-puff-lounger/' },
  { name: 'Mogul Puff Lounger', link: 'https://lebello.com/products/mogul-puff-lounger/' },
  { name: 'Tubo Chair', link: 'https://lebello.com/products/tubo-chair/' },
  { name: 'Monyet Stool', link: 'https://lebello.com/products/monyet-stool/' },
  { name: 'Mogul Lounger', link: 'https://lebello.com/products/mogul_lounger/' },
  { name: 'Tubo Club', link: 'https://lebello.com/products/tubo-club-chair/' },
  { name: 'Mogul Puff Lounger', link: 'https://lebello.com/products/mogul-puff-lounger/' },
  { name: 'Mogul Puff Lounger', link: 'https://lebello.com/products/mogul-puff-lounger/' },
  { name: 'Tubo Chair', link: 'https://lebello.com/products/tubo-chair/' },
]);

</script>

<style></style>
