  <template>
    <div class="w-full h-full mx-0">
      <div id="default-carousel" class="relative" data-carousel="static">
        <div class="overflow-hidden relative h-screen sm:h-screen xl:h-screen 2xl:h-screen">
          <div v-show="currentIndex === index" v-for="(slide, index) in images" :key="index"
            class="w-full duration-700 ease-in-out" data-carousel-item>
            <img :src="slide?.image"
              class="block absolute top-1/2 left-1/2 w-full h-screen -translate-x-1/2 -translate-y-1/2"
              :alt="slide.alt" />
          </div>
        </div>

        <div class="flex absolute bottom-1/2 rotate-90 z-30 left-7 space-x-2 -translate-x-1/2">
          <button v-for="(slide, index) in images" :key="index" type="button"
            :class="{ 'bg-gray-700': currentIndex === index, 'bg-gray-400': currentIndex !== index }"
            class="w-2 h-2 rounded-full" aria-current="false" @click="changeSlide(index)"></button>
        </div>

        <button @click="previous" type="button"
          class="flex absolute left-10 z-30 justify-center items-center px-3 top-1/2 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="next" type="button"
          class="flex absolute right-10 z-30 justify-center items-center px-4 top-1/2 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <!-- lebellow icon right top -->
      <div class="absolute top-11 right-0 mx-auto">
        <img src="https://lebello.com/wp-content/themes/lebello-ep/images/logo2.png" />
      </div>
      <!-- text left bottom -->
      <div class="absolute bottom-8 left-40 mx-auto">
        <div class="text-3xl font-normal text-white font-sans">hellow</div>
      </div>
      <!-- down arrow -->
      <div class="absolute left-1/2 bottom-5 animate-bounce mx-auto">
        <div class="text-5xl text-white font-sans hover:bg-[#0e0e0e89] bg-opacity-5 ease-in duration-300 px-3 py-1">
          <a href="#arrowto" class="transition  ease-out duration-1000	">
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1"
              xmlns="http://www.w3.org/2000/svg" fill="#fafafa" stroke="#fafafa" stroke-width="73.728">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <!-- menu item -->
      <div class="absolute top-48 right-0 pr-3 "  ref="closeMenu">
        <SideMenu key="firstKey" :list="products" :handleSideMenu="handleSideMenu" :isOpen="isOpenSidebarSlider"
          mainSlider="true" showDropDown="false" />
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue'
import SideMenu from './Side-Menu.vue';
import { onClickOutside } from '@vueuse/core'

const currentIndex = ref(0)
const closeMenu = ref(null)
const isOpenSidebarSlider = ref(false)
const images = ref([
  {
    image: 'http://lebello.com/wp-content/uploads/2022/06/Lebello_Trixie-Lounger-Chair.jpg',
    alt: 'Slide 1'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2024/02/Lebello-home-slider-Trixie-Lounger.jpg',
    alt: 'Slide 2'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2024/02/Lebello-Chair-8-Siider.jpg',
    alt: 'Slide 3'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2021/09/lebello_4l-pixie_arms_chair.jpg',
    alt: 'Slide 4'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2022/02/lebello_monyet_stools-outdoor.jpg',
    alt: 'Slide 5'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2024/02/Lebello-Twigs-XY-Slider.jpg',
    alt: 'Slide 6'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2021/05/lebello_tubo_club-outdoor.jpg',
    alt: 'Slide 7'
  },
  { image: 'http://lebello.com/wp-content/uploads/2021/11/Lebello-tubo-club.jpeg', alt: 'Slide 8' }
])

const startAutoSwipe = () => {
  setInterval(() => {
    next()
  }, 5000)
}

const changeSlide = (index) => {
  currentIndex.value = index
}

const previous = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

onMounted(startAutoSwipe)


const handleSideMenu = () => {
  isOpenSidebarSlider.value = 'true';
}
const handleCloseSide = () => {
  isOpenSidebarSlider.value = 'false';
  console.log(isOpenSidebarSlider.value)
}
onClickOutside(closeMenu, handleCloseSide)

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

<style scoped>
/* Add your scoped styles here */
</style>