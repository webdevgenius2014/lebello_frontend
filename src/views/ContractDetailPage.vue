<template>
  <NavBar absolute="false" />
  <div class="grid grid-cols-5 mx-20">
    <div class="col-span-4 container pt-7">
      <div class="flex">
        <h1 class="uppercase text-[20px]">HOTELS & RESORTS</h1>
      </div>
      <BreadcrumbSection :breadcrumbData="breadcrumbData" seprate="/" />
    </div>
    <div class="uppercase pt-16 pl-10 font-medium text-green p-2">CONTRACT</div>
    <!-- image view -->
    <div class="col-span-4 container pb-10">
      <div class="bg-[#f7f7f7]" @click="toggleModal">
        <div id="carouselExampleControls" class="relative" data-twe-carousel-init data-twe-ride="carousel">
          <!--Carousel items-->
          <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <!--First item-->
            <div v-for="(item, index) in carouselItems" :key="index" :class="[
              'relative',
              'float-left',
              '-mr-[100%]',
              'w-full',
              'transition-transform',
              'duration-[600ms]',
              'ease-in-out',
              'motion-reduce:transition-none',
              { hidden: index !== activeIndex },
            ]">
              <img :src="item.src" class="block  h-96  " :alt="item.alt" />
            </div>
          </div>
          <div class="absolute bottom-14 left-10">
            <p class=" bg-[#ff9d0f] text-white text-2xl py-1 px-2 capitalize mb-3">Caliza Pool | Alys Beach</p>
            <span class="bg-white border text-black text-1xl py-2 px-3 capitalize mx-auto">Alys Beach, FL</span>
          </div>
          <!--Carousel controls - prev item-->
          <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" @click="prevSlide">
            <span class="inline-block h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
          </button>
          <!--Carousel controls - next item-->
          <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" @click="nextSlide">
            <span class="inline-block h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
          </button>
        </div>
        <!-- thumbnil -->
        <div class="flex justify-between">
          <div class="m-2 flex">
            <div v-for="(item, index) in carouselItems" :key="index">
              <img @click="handleClickOpen(index)" :src="item.src"
                class="block w-24 h-24 p-1 opacity-50 hover:opacity-100" :alt="item.alt" />
            </div>
          </div>
          <div class="m-2">
            <img src="https://lebello.com/wp-content/uploads/2014/03/CustomHotel_logo.jpg" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 my-2">
        <h3 class="text-2xl font-light text-green">Custom Hotel</h3>
        <div class=" ">sdfsd</div>
      </div>
      <p class="text-sm font-medium text-[#546453] pb-6 mb-6 border-b">
        A modern boutique hotel conveniently located 5 minutes from Los Angeles airport,
        and few minutes from the beach. Creative. Hip. Playful. Our rooms suit the modern
        traveler who appreciates design, art and comfort. Using the Marshmellow as side
        tables or foot stools. Simply functional and yet modern.
      </p>
      <div class="grid grid-cols-3 text-[20px] text-green">
        <div>
          <p>Designer</p>
        </div>
        <div>
          <p>Client</p>
          <p class="text-[#5f665fdb] text-[14px]">Joie De Vivre</p>
        </div>
        <div>
          <p>Product Featured:</p>
          <p class="text-[#5f665fdb] text-[14px]">Marshmallow M2 ></p>
        </div>
      </div>
    </div>

    <!-- listing right -->
    <div class="uppercase pl-10">
      <ul class="list-wid text-sm font-normal">
        <li class="border-b hover:text-green  cursor-pointer border-[rgba(122,120,120,0.37)]">
          Retail & Education
        </li>
        <li class="border-b hover:text-green  cursor-pointer border-[rgba(122,120,120,0.37)]">
          Communal Spaces
        </li>
        <li class="border-b hover:text-green  cursor-pointer border-[rgba(122,120,120,0.37)]">
          Restaurants & Hospitality
        </li>
        <li class="border-b hover:text-green  cursor-pointer border-[rgba(122,120,120,0.37)]">
          Hotels & Resorts
        </li>
        <li v-for="(item, ubIndex) in list" :key="ubIndex"
          class="border-b hover:text-green text-blue cursor-pointer border-[rgba(122,120,120,0.37)]">
          <a :href="item?.link">{{ item?.name }}</a>
        </li>
        <li class="border-b hover:text-green  cursor-pointer border-[rgba(122,120,120,0.37)]">
          Residential
        </li>
        <li class="border-b hover:text-green  cursor-pointer border-[rgba(122,120,120,0.37)]">
          Location
        </li>
      </ul>
    </div>
  </div>

  <div>
    <div v-show="isModalOpen"
      class="overflow-y-auto overflow-x-hidden fixed top-0 ml-auto z-50 justify-center items-center w-full max-h-full">
      <div class="justify-center items-center m-auto relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative top-0 bg-white rounded-lg shadow ease-in duration-300">
          <div class="bg-[#f7f7f7] p-3">
            <div id="carouselExampleControls" class="relative" data-twe-carousel-init data-twe-ride="carousel">
              <!--Carousel items-->
              <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <!--First item-->
                <div v-for="(item, index) in carouselItems" :key="index" :class="[
                  'relative',
                  'float-left',
                  '-mr-[100%]',
                  'w-full',
                  'object-cover',
                  'transition-transform',
                  'duration-[600ms]',
                  'ease-in-out',
                  'motion-reduce:transition-none',
                  { hidden: index !== modalactiveIndex },
                ]">
                  <img :src="item.src" :class="''"
                    class="block  object-cover fadeimg ease-in  max-w-800 max-h-300 overflow-y-hidden transition-max-height duration-700 linear"
                    :alt="item.alt" />

                  <div class="flex justify-between text-[#595b55]">
                    <p class="mt-1 pr-4 text-sm">{{ item?.alt }}</p>
                    <p class="mt-1 text-sm">
                      image {{ index + 1 }} of {{ carouselItems?.length }}
                      <span><img @click="toggleModal"
                          src="https://lebello.com/wp-content/themes/lebello-ep/images/chocolat/close2.gif" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <!--Carousel controls - prev item-->
              <!-- v-if="!modalactiveIndex <= 0" -->
              <button v-if="!modalactiveIndex <= 0"
                class="absolute left-0 top-0 z-[1] flex w-[50%] items-center m-auto pb-20 h-[90%] align-center transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] text-white hover:text-white hover:opacity-90 focus:text-white"
                type="button" @click="prevSlide">
                <span class="inline-block h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5"
                    stroke="currentColor" class="h-24 w-24">
                    <!-- Increased height and width by 40px -->
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </span>
                <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
              </button>
              <!--Carousel controls - next item-->
              <!-- v-if="modalactiveIndex >= carouselItems?.length -1" -->
              <button v-if="modalactiveIndex < carouselItems?.length - 1"
                class="absolute bottom-10 right-0 top-0 z-[1] flex w-[50%] justify-right content-right self-right pt-10 pl-auto h-[80%] align-center transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] text-white hover:text-white hover:opacity-90 focus:text-white"
                type="button" @click="nextSlide">
                <span class="inline-block self-center pb-10 ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5"
                    stroke="currentColor" class="h-24 w-24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>
<script setup>
import NavBar from "@/components/Nav-bar.vue";
import FooterSection from "@/components/Footer-section.vue";
import { ref } from "vue";
import BreadcrumbSection from "@/components/BreadcrumbSection.vue";


const breadcrumbData = ref([
  { name: 'Contract Design', link: '/' },
  { name: 'Hotels & Resorts', link: '/products' },
  { name: 'Watt Plaza', link: '/products/electronics' }
]);

const carouselItems = ref([
  {
    src: "https://lebello.com/wp-content/uploads/2014/07/AlysBeach-CalizaPool1.jpg",
    alt: "Wild Landscape",
    height: "500px",
    width: "800px",
  },
  {
    src: "https://lebello.com/wp-content/uploads/2014/07/AlysBeach-CalizaPool.jpg",
    alt: "Camera",
    height: "500px",
    width: "800px",
  },
  {
    src: "https://lebello.com/wp-content/uploads/2014/07/AlysBeach-CalizaPool3.jpg",
    alt: "Hollow side table for storing towels or book. Caliza Pool | Alys Beach Hotel",
    height: "500px",
    width: "800px",
  },
]);
const list = ref([
  { name: 'Sandbar Jax Bch | Springhill Suites By Marriott', link: 'https://lebello.com/contract_design/springhill-suites/' },
  { name: 'Watt Plaza', link: 'https://lebello.com/contract_design/watt-plaza/' },
  { name: 'Ebbdunedin', link: 'https://lebello.com/contract_design/ebbdunedin/' },
  { name: 'The Summit Hotel', link: 'https://lebello.com/contract_design/the-summit-hotel/' },
  { name: 'Hilton Garden Inn Chihuahua Mexico', link: 'https://lebello.com/contract_design/hilton-garden-inn-chihuahua-mexico/' },
  { name: 'HILTON GARDEN INN', link: 'https://lebello.com/contract_design/hilton-garden-inn/' },
  { name: 'Blaze Pizza', link: 'https://lebello.com/contract_design/blaze-pizza/' },
  { name: 'Embassy Suites by Hilton New York', link: 'https://lebello.com/contract_design/embassy-suites/' },
  { name: 'Blue Sea Beach Hotel', link: 'https://lebello.com/contract_design/blue-sea/' },
  { name: 'Xport Bar & lounge The Porter – Hilton Curio', link: 'https://lebello.com/contract_design/xport-bar-lounge-the-porter-hilton-curio/' },
  { name: 'Canopy by Hilton Dallas Uptown', link: 'https://lebello.com/contract_design/canopy-by-hilton-dallas-uptown/' },
  { name: 'Four Seasons Hotels & Resorts', link: 'https://lebello.com/contract_design/four-seasons-resort/' },
  { name: 'Palmera Park | Alys Beach', link: 'https://lebello.com/contract_design/palmera-park-alys-beach/' },
  { name: 'Caliza Pool | Alys Beach', link: 'https://lebello.com/contract_design/caliza-pool-alys-beach/' },
  { name: 'Long Beach Hotel & Resort', link: 'https://lebello.com/contract_design/long-beach-resort/' },
  { name: 'Sunscape Resorts & Spa', link: 'https://lebello.com/contract_design/sunscape-resorts-spa/' },
  { name: 'Arrow Swim Club', link: 'https://lebello.com/contract_design/arrow-swim-club/' },
  { name: 'Press Lounge Rooftop Bar, Ink48 Hotel', link: 'https://lebello.com/contract_design/press-lounge-rooftop-bar-ink48-hotel/' },
  { name: 'Custom Hotel', link: 'https://lebello.com/contract_design/custom-hotel/' },
  { name: 'The Ritz Carlton', link: 'https://lebello.com/contract_design/ritz-carlton/' },
  { name: 'Anahita Resort', link: 'https://lebello.com/contract_design/anahita-resort/' },
  { name: 'Parc 55 Hotel', link: 'https://lebello.com/contract_design/parc-55-hotel/' },
  { name: 'Ravel Hotel', link: 'https://lebello.com/contract_design/ravel-hotel/' },
  { name: 'Grandville Island Hotel', link: 'https://lebello.com/contract_design/grandville-island-hotel/' },
  { name: 'Green Valley Ranch Resort & Spa', link: 'https://lebello.com/contract_design/green-valley-ranch-resort-spa/' },
  { name: 'Hyatt Regency', link: 'https://lebello.com/contract_design/hyatt-regency/' },
  { name: 'Andaz Hyatt Hotel', link: 'https://lebello.com/contract_design/andaz-hyatt-hotel/' },
  { name: 'Westchester Marriott Hotel', link: 'https://lebello.com/contract_design/marriot-hotel/' },
  { name: 'Palms Casino', link: 'https://lebello.com/contract_design/palms-casino/' },
  { name: 'Mount Cinnamon', link: 'https://lebello.com/contract_design/mount-cinnamon/' },
  { name: 'Condado Plaza Hotel & Casino', link: 'https://lebello.com/contract_design/condado-plaza-hotel-casino/' },
  { name: 'Allegria Hotel & Spa', link: 'https://lebello.com/contract_design/allegria-hotel-spa/' },
  { name: 'W Hotel', link: 'https://lebello.com/contract_design/w-sandiego/' },
  { name: 'GreyStone Apartment', link: 'https://lebello.com/contract_design/greystone-apartment/' }
]);
const activeIndex = ref(0);
const modalactiveIndex = ref(0);

const nextSlide = () => {
  modalactiveIndex.value = (modalactiveIndex.value + 1) % carouselItems.value.length;
};

const prevSlide = () => {
  modalactiveIndex.value =
    (modalactiveIndex.value - 1 + carouselItems.value.length) %
    carouselItems.value.length;
};
const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
const handleClickOpen = (index) => {
  modalactiveIndex.value = index;
};
</script>
<style scoped>
.fadeimg {
  animation: fadeInAnimation ease 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
