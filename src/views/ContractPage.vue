<template>
  <div class="relative pb-20">
    <NavBar absolute="false" />
    <div class="border-b-2 border-green-400 mx-20"></div>
    <div class="absolute top-11 right-0 mx-auto">
      <img src="https://lebello.com/wp-content/themes/lebello-ep/images/logo2.png" />
    </div>
    <!-- menu icon  -->
    <div class="relative" ref="closeMenu">
  <div class=" absolute top-24 right-0  " >
      <v-card id="mySidenav" :dark="active" @click="active = true" :class="{ 'w-[230px] ': isOpen, 'w-0': !isOpen }"
        class="sidenav bg-white pb-2 z-50 absolute top-7 right-0 transition-all duration-500 overflow-hidden ">
        <div class=" ">
          <div class="flex border border-gray-400 items-center">
          <div class=" sticky top-3 p-4 border-r  border-gray-400">
            <MenuSvg size="15px" fillColor="black" />
          </div>  
          <div class="h-auto"> 
            <h3 class="text-[14px] font-medium">
              <a href="https://www.lebello.com/product/" class="uppercase">Collection 2024</a>
            </h3>
          </div>
          </div>
          <div class="px-7">
            <div class="search">
              <form role="search" class="">
                <div class="relative">
                  <input
                    class="appearance-none border-none border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                    id="username" type="text" placeholder="Search..." />
                    <hr/>
                  <div class="absolute  right-2 inset-y-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
            <div class="">
              <h3 class="py-4 font-normal">Highlights</h3>
              <hr/>
            </div>
            <ul class="font-light text-[13px] mt-2">
              <li class="mt-1">
                <a href="https://lebello.com/products/trixie-lounger/">Trixie Lounger</a>
              </li>
              <li class="mt-1">
                <a href="https://lebello.com/products/4l-pixie-arms-chair/">4L Pixie Arms Chair</a>
              </li>
              <li class="mt-1">
                <a href="https://lebello.com/products/monyet-stool/">Monyet Stool</a>
              </li>
              <li class="mt-1">
                <a href="https://lebello.com/products/monyet-stool/">Monyet Stool</a>
              </li>
              <li class="mt-1">
                <a href="https://lebello.com/products/mogul_lounger/">Mogul Lounger</a>
              </li>
              <li class="mt-1">
                <a href="https://lebello.com/products/tubo-club-chair/">Tubo Club</a>
              </li>
              <li class="mt-1">
                <a href="https://lebello.com/products/mogul-puff-lounger/">Mogul Puff Lounger</a>
              </li>
              <li class="mt-1">
                <a href="https://lebello.com/products/mogul-puff-lounger/">Mogul Puff Lounger</a>
              </li>
              <li class="mt-1 pb-2">
                <a href="https://lebello.com/products/tubo-chair/">Tubo Chair</a>
              </li>
             <hr>
             <ul class="flex space-x-4 my-3">
    <li>
        <a href="https://www.facebook.com/Modern.Outdoor.Living/" target="_blank" title="Facebook" class="text-gray-700 hover:text-blue-500 w-2  ">
            <i class="fab fa-facebook text-3xl "></i>
        </a>
    </li>
    <li>
        <a href="https://www.houzz.com/userQuestions/user/lebello" target="_blank" title="Houzz" class="text-gray-700 hover:text-blue-500">
            <i class="fab fa-houzz text-3xl"></i>
        </a>
    </li>
    <li>
        <a href="https://www.pinterest.com/search/pins/?q=lebello.com&amp;term_meta%5B%5D=lebello.com%7Ctyped" target="_blank" title="Pinterest" class="text-gray-700 hover:text-red-500">
            <i class="fab fa-pinterest text-3xl"></i>
        </a>
    </li>
    <li>
        <a href="https://www.instagram.com/lebello_furniture/" target="_blank" title="Instagram" class="text-gray-700 hover:text-purple-500">
            <i class="fab fa-instagram text-3xl"></i>
        </a>
    </li>
</ul>

            </ul>
          </div>
        </div>
      </v-card>
      <span v-if="!active" @click="openNav" class="text-9xl text-white">
        <MenuSvg size="35px" class=" p-2 bg-[#9ce163]"/>
      </span>
    </div>
  </div>

    <div class="container pl-20 pt-7 pb-5">
      <!-- Page Header -->
      <div class="flex ">
        <h1 class="uppercase text-[20px] ">HOTELS & RESORTS</h1>
      </div>
      <div class="">
        <ul class="flex">
          <li class="text-green-500 hover:text-blue text-green"><a 
              href="https://lebello.com/contract-design/">Contract Design</a><span class="ml-3 mr-1">/</span></li>
          <li class="hover:text-blue"><a class="overview-jumper_s"
              href="https://lebello.com/contract-design/">Contract Design</a></li>
        </ul>
      </div>
    </div>

    <!-- images -->
    <div class="mx-20 relative  grid grid-cols-1 md:grid-cols-4 gap-0 ">
      <!-- Loop through products -->
      <div v-for="(product, index) in products" :key="index" class=" ">
        <div class="prod_content overflow-hidden " >
          <div class="product_img holder relative "  :class="{'transition-transform duration-9000 ease-in-out transform scale-105':isHovered[index]}"  @mouseenter="toggleOverlay(index, true)" @mouseleave="toggleOverlay(index, false)">
            <a :href="product.link">
              <img class=" aos-item " ref="element" :data-aos="animationType"
              :data-aos-duration="getAnimationDuration(index)" :src="product?.image" :alt="product?.name"
              > 
               <div class="prod-overlay  " :class="{ 'show-overlay': isHovered[index] }">
                  <div class="overlay-content " >
                    <h1 class="text-sm px-3">{{ product?.name }}</h1>
                    <h2 class="font-light text-md">{{ product?.location }}</h2>
                  </div>
                </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection/>
</template>

<script setup>
import NavBar from '@/components/Nav-bar.vue';
import MenuSvg from '@/components/Svg/Menu-Svg.vue';
import { ref, onMounted, onUnmounted,computed } from 'vue';
import { onClickOutside } from '@vueuse/core'
import FooterSection from '@/components/Footer-section.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const element = ref(null);
const animationType = 'fade-up';
const active = ref(false);
const isOpen = ref(false);
const isHovered = ref([]);
const closeMenu = ref(null)
onClickOutside(() => closeNav())

const products = [
  {
    id: 1,
    name: 'Sandbar Jax Bch | Springhill Suites By Marriott',
    location: 'Jacksonville Beach, FL',
    link: 'https://lebello.com/contract_design/springhill-suites/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/SpringhillSuites-JacksonvilleFL-350X234.png'
  },
  {
    id: 2,
    name: 'Watt Plaza',
    location: 'Los Angeles, CA',
    link: 'https://lebello.com/contract_design/watt-plaza/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/watt-plaza-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
  {
    id: 2,
    name: 'Watt Plaza',
    location: 'Los Angeles, CA',
    link: 'https://lebello.com/contract_design/watt-plaza/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/watt-plaza-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
  {
    id: 2,
    name: 'Watt Plaza',
    location: 'Los Angeles, CA',
    link: 'https://lebello.com/contract_design/watt-plaza/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/watt-plaza-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
  {
    id: 2,
    name: 'Watt Plaza',
    location: 'Los Angeles, CA',
    link: 'https://lebello.com/contract_design/watt-plaza/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/watt-plaza-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
  {
    id: 2,
    name: 'Watt Plaza',
    location: 'Los Angeles, CA',
    link: 'https://lebello.com/contract_design/watt-plaza/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/watt-plaza-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
  {
    id: 1,
    name: 'Sandbar Jax Bch | Springhill Suites By Marriott',
    location: 'Jacksonville Beach, FL',
    link: 'https://lebello.com/contract_design/springhill-suites/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/SpringhillSuites-JacksonvilleFL-350X234.png'
  },
  {
    id: 2,
    name: 'Watt Plaza',
    location: 'Los Angeles, CA',
    link: 'https://lebello.com/contract_design/watt-plaza/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/watt-plaza-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
  {
    id: 3,
    name: 'Ebbdunedin',
    location: 'EBB Bunded In , New Zealand',
    link: 'https://lebello.com/contract_design/ebbdunedin/',
    image: 'http://lebello.com/wp-content/uploads/thumbs/lebello-ebbdunedin-350X234.png'
  },
];

const toggleOverlay = (index, show) => {
  isHovered.value[index] = show;
};
onMounted(() => {
  AOS.init({});
  AOS.refresh();

  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    offset: 170,
    delay: 1,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  }, element.value);

  products.value = [ ];
  isHovered.value = new Array(products.value.length).fill(false);
});

onUnmounted(() => {
  AOS.refreshHard();
});

const getAnimationDuration = computed(() => {
  return (index) => {
    const positionInRow = index % 4; 
    switch (positionInRow) {
      case 0:
        return 500; 
      case 1:
        return 1000; 
      case 2:
        return 1500; 
      case 3:
        return 2000; 
      default:
        return 500; 
    }
  };
});

const openNav = () => {
  active.value = true;
  isOpen.value = true;
};

const closeNav = () => {
  isOpen.value = false;
  active.value = false;
};


</script>
<style scoped>
.prod-overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.prod-overlay.show-overlay {
  opacity: 1;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;   
  width:100%;
  background-color: #0e0e0e89;
  opacity: 1;
  z-index: 1;
}
</style>
