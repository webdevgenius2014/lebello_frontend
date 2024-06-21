<script setup>
import { ref, onMounted } from 'vue'
import SideMenu from './Side-Menu.vue';
import { onClickOutside } from '@vueuse/core'
import NavBar from './Nav-bar.vue';

const navColor = ref('')
const atBottom = ref(false)
const currentIndex = ref(0)
const closeMenu = ref(null)
const isOpenSidebarSlider = ref(false)
const closeSideMenu = () => {
  isOpenSidebarSlider.value = false;
}
onClickOutside(closeMenu, closeSideMenu)

defineProps({
  list: {
    type: Array,
    required: true,
  },
  mainSlider: {
    type: Boolean,
  },
  showHeading: {
    type: Boolean,
    default: true,
  },
  showDropDown: {
    type: Boolean,
  },
  downDropdown: {
    type: Boolean,
  },
});
const images = ref([
 
  {
    image: 'http://lebello.com/wp-content/uploads/2024/02/Lebello-Chair-8-Siider.jpg',
    alt: 'Tubo Club',
    navColor: 'black'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2021/09/lebello_4l-pixie_arms_chair.jpg',
    alt: 'Mogul Lounger',
    navColor: 'white'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2022/02/lebello_monyet_stools-outdoor.jpg',
    alt: 'Trixie Lounger Chair    ',
    navColor: 'white  '
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2024/02/Lebello-Twigs-XY-Slider.jpg',
    alt: 'Monyet Stools',
    navColor: 'white'
  },
  {
    image: 'http://lebello.com/wp-content/uploads/2021/05/lebello_tubo_club-outdoor.jpg',
    alt: 'Monyet Stools',
    navColor: 'white'
  },
  { image: 'http://lebello.com/wp-content/uploads/2021/11/Lebello-tubo-club.jpeg', 
    alt: 'Twiggy XY Chair',
    navColor: 'white' 
  }
])

const startAutoSwipe = () => {
  setInterval(() => {
    navColor.value=images.value[currentIndex.value].navColor;
    atBottom.value= !atBottom.value ;
    next()
  }, 5000)
}

const changeSlide = (index) => {
  currentIndex.value = index
  console.log(images.value[currentIndex.value].navColor);
}

const previous = () => {
  navColor.value=images.value[currentIndex.value].navColor;
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

const next = () => {
  navColor.value=images.value[currentIndex.value].navColor;
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

onMounted(startAutoSwipe)

const scrollToTarget = () => {
  const targetDiv = document.getElementById('sideText');
  const startPosition = window.pageYOffset;
  const targetPosition = targetDiv.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Duration of the scroll in milliseconds
  let startTime = null;

  const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const animateScroll = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed / duration) * distance + startPosition;
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animateScroll);
}
const handleSideMenu = () => {
  isOpenSidebarSlider.value = true;
}


</script>
  <template>
     <NavBar absolute="true" :navColor="navColor"/>
    <div id="default-carousel" class="relative" data-carousel="static">
      <div class="w-full h-full  mx-0">
        <div class="overflow-hidden  h-screen sm:h-screen xl:h-screen 2xl:h-screen">
          <div v-show="currentIndex === index" v-for="(slide, index) in images" :key="index"
            class="w-full duration-700 ease-in-out" data-carousel-item>
            <img :src="slide?.image"
              class="block  absolute top-1/2 left-1/2 w-full h-screen -translate-x-1/2 -translate-y-1/2 "
              :alt="slide.alt" />
              <button @click="previous" type="button"
          class="flex absolute left-10 z-30 justify-center items-center px-3 top-1/2 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" :stroke="navColor === 'white' ? '#ffffff' : '#000000'">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="next" type="button"
          class="flex absolute right-10 z-30 justify-center items-center px-4 top-1/2 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" :stroke="navColor === 'white' ? '#ffffff' : '#000000'">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
          </div>
        </div>
        <div class="flex absolute bottom-1/2 rotate-90 z-30 left-7 space-x-2 -translate-x-1/2">
          <button v-for="(slide, index) in images" :key="index" type="button"
            :class="{ 'bg-gray-700': currentIndex === index, 'bg-gray-400': currentIndex !== index }"
            class="w-2 h-2 rounded-full" aria-current="false" @click="changeSlide(index)"></button>
        </div>
       
      </div>
      <!-- lebellow icon right top -->
      <a href="#" class="absolute z-50 top-11 right-0 mx-auto">
        <img src="https://lebello.com/wp-content/themes/lebello-ep/images/logo2.png" />
      </a>
      <!-- text left bottom -->
      <div id="sideText" class="absolute bottom-6  mx-auto left-6 sm:left-14 md:left-20 "
      :class="['absolute transition-all duration-1000 ease-in-out', { 'bottom-0': atBottom, 'bottom-6': !atBottom }]" 

      >
        <div class=" capitalize opacity-80 text-white font-graphikLight sm:text-[20px] md2:text-[40px]  ">{{ images[currentIndex].alt }}</div>
      </div>
      <!-- down arrow -->
      <div class="absolute left-1/2 bottom-5 animate-bounce mx-auto">
        <div @click="scrollToTarget"
          class="text-5xl text-white font-sans hover:bg-[#0e0e0e89] bg-opacity-5 ease-in duration-300 px-3 py-1">
          <span href="#" class="transition  ease-out duration-1000	">
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1"
              xmlns="http://www.w3.org/2000/svg" fill="#fafafa" stroke="#fafafa" stroke-width="73.728">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <!-- menu item -->
      <slot name="header"></slot>
      <div class="absolute top-48 right-0 pr-3 " ref="closeMenu">
        <SideMenu key="firstKey" :list="list" :handleSideMenu="handleSideMenu" :isOpen="isOpenSidebarSlider"
          :mainSlider="mainSlider" :showDropDown="showDropDown" :showHeading="showHeading"
          :downDropdown="downDropdown" />

      </div>

    </div>
  </template>



<style scoped>
/* Add your scoped styles here */
</style>