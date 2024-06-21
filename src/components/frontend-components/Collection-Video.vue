<template>
  <div id="collection" class="h-full bg-[#e3dbcf] overflow-hidden pb-16 mx-0 transition duration-1000 ease-in">
    <!-- menu icon right  -->
    <div class="relative">
      <div class="absolute top-5 right-0 pr-3 bg-transparent" ref="closeMenu">
        <SideMenu key="firstKey1" :list="products" :handleSideMenu="handleSideMenu" :isOpen="isOpenSidebar"
          :showMediaIcon="true" :showDropDown="true" :dropdown="dropdown" />
      </div>
    </div>
    <!-- section video +text -->
    <div class=" flex-wrap ml-5 mt-10 sm:ml-10 md2:flex my-20 sm:pl-10 h-full m-auto ">
      <div class="max-w-[440px] ">
        <h1 class="text-orange font-graphik text-[26px] sm:text-[36px]  md:text-[37px]  leading-[46px] ">
          INNOVATIVE, CREATIVE OUTDOOR FURNITURE
        </h1>
      </div>
      <div class="">
        <p class=" md2:text-[18px]  max-w-[570px] text-textColorBlack leading-6 font-graphikLight  ">
          Designer and manufacturer of exclusive outdoor furniture
          with performance vibrant materials. Bespoke
          outdoor <br>
          contract furniture supplier for the commercial
          and residential clients.
        </p>
      </div>
    </div>
    <!--  video section -->
    <div class="w-full md2:flex w-[1200px] overflow-auto m-auto mt-14">
      <div class="px-7 md2:w-3/5 ">
        <video autoplay="true" muted="true" loop="true" controls="" class="w-full h-full">
          <source src="https://lebello.com/wp-content/uploads/2023/05/Spring%20Collection%20Highlights.mp4"
            type="video/mp4" />
        </video>
      </div>
      <div class=" mt-[20px] px-6 md2:w-2/5 lg: mt-0  xl:mt-0">
        <div class="h-full px-5 md2:px-9 pt-[20px] bg-[rgb(220,214,205)] lg:py-10 ">
          <img class="max-w-[166px]" src="https://lebello.com/wp-content/uploads/2023/05/video-logo.png" />
          <h4 class="my-10 md2:my-2 text-orange uppercase text-graphik text-[32px] leading-10 lg:my-10 ">
            “Spring Collection Highlights”
          </h4>
          <p class="font-graphikLight text-[21px] font-thin pr-20">
            Watch our season collection and product highlights
          </p>
          <div class="mt-10 md2:mt-1 pb-4 lg:mt-10 pb-16  ">
            <a class="cursor-pointer border hover:bg-[#ce8d39] hover:text-white hover:border-0 border-black rounded-3xl leading-none px-3 font-light py-1 text-[14px] m-auto text-center font-graphikLight"
              @click="handleModal" data-toggle="modal">see more</a>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL   -->
    <transition name="slide-down">
      <div v-if="open"
        class="fixed z-[100] top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <VideoModal :open="open" :handleClose="handleModal" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import VideoModal from "./VideoModal.vue";

import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import SideMenu from "./Side-Menu.vue";

const open = ref(false);
const handleModal = () => {
  open.value = !open.value;
};
const isOpenSidebar = ref(false);
const handleSideMenu = () => {
  isOpenSidebar.value = !isOpenSidebar.value;
};

const closeMenu = ref(null);
const closeSideMenu = () => {
  isOpenSidebar.value = false;
};
onClickOutside(closeMenu, closeSideMenu);

const dropdown = ref([
  {
    name: "Modular / Sofas",
    link: "https://lebello.com/product_type/modularsofas/",
  },
  {
    name: "Lounge Poufs",
    link: "https://lebello.com/product_type/lounge-poufs/",
  },
  { name: "Daybed", link: "https://lebello.com/product_type/daybed/" },
  { name: "Archives", link: "https://lebello.com/product_type/archives/" },
  {
    name: "Outdoor Carpets",
    link: "https://lebello.com/product_type/outdoor-carpets/",
  },
  {
    name: "Rocking Chair",
    link: "https://lebello.com/product_type/rocking-chair/",
  },
  {
    name: "Lounge Seating",
    link: "https://lebello.com/product_type/lounge-seating/",
  },
  { name: "Lighting", link: "https://lebello.com/product_type/lighting/" },
  {
    name: "Counter Tables",
    link: "https://lebello.com/product_type/counter-tables/",
  },
  { name: "Tables", link: "https://lebello.com/product_type/tables/" },
  {
    name: "Counter / Bar Stools",
    link: "https://lebello.com/product_type/counter-bar-stools/",
  },
  {
    name: "Accessories",
    link: "https://lebello.com/product_type/accessories/",
  },
  {
    name: "Stools / Poufs",
    link: "https://lebello.com/product_type/stools/",
  },
  {
    name: "Coffee / Side Table",
    link: "https://lebello.com/product_type/coffee-table/",
  },
  {
    name: "Club Chairs",
    link: "https://lebello.com/product_type/club-chairs/",
  },
  { name: "Planters", link: "https://lebello.com/product_type/planters/" },
  {
    name: "Lounge Chairs",
    link: "https://lebello.com/product_type/lounge-chairs/",
  },
  {
    name: "Chaise Loungers",
    link: "https://lebello.com/product_type/chaise-loungers/",
  },
  { name: "Chairs", link: "https://lebello.com/product_type/chairs/" },
  { name: "Benches", link: "https://lebello.com/product_type/benches/" },
  {
    name: "Container Bins",
    link: "https://lebello.com/product_type/container-bins/",
  },
]);

const products = ref([
  {
    name: "Trixie Lounger",
    link: "https://lebello.com/products/trixie-lounger/",
  },
  {
    name: "4L Pixie Arms Chair",
    link: "https://lebello.com/products/4l-pixie-arms-chair/",
  },
  {
    name: "Monyet Stool",
    link: "https://lebello.com/products/monyet-stool/",
  },
  {
    name: "Monyet Stool",
    link: "https://lebello.com/products/monyet-stool/",
  },
  {
    name: "Mogul Lounger",
    link: "https://lebello.com/products/mogul_lounger/",
  },
  {
    name: "Tubo Club",
    link: "https://lebello.com/products/tubo-club-chair/",
  },
  {
    name: "Mogul Puff Lounger",
    link: "https://lebello.com/products/mogul-puff-lounger/",
  },
  {
    name: "Mogul Puff Lounger",
    link: "https://lebello.com/products/mogul-puff-lounger/",
  },
  { name: "Tubo Chair", link: "https://lebello.com/products/tubo-chair/" },
  {
    name: "Monyet Stool",
    link: "https://lebello.com/products/monyet-stool/",
  },
  {
    name: "Mogul Lounger",
    link: "https://lebello.com/products/mogul_lounger/",
  },
  {
    name: "Tubo Club",
    link: "https://lebello.com/products/tubo-club-chair/",
  },
  {
    name: "Mogul Puff Lounger",
    link: "https://lebello.com/products/mogul-puff-lounger/",
  },
  {
    name: "Mogul Puff Lounger",
    link: "https://lebello.com/products/mogul-puff-lounger/",
  },
  { name: "Tubo Chair", link: "https://lebello.com/products/tubo-chair/" },
]);
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s ease;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}

/* .slide-down-enter-to, .slide-down-leave {
  transform: translateY(0);
} */
</style>
