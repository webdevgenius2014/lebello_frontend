<template>
    <NavBar absolute="true" />
    <!-- main image section -->
    <div class="relative overflow-hidden">
        <img class="object-cover w-screen h-screen"
            src="https://lebello.com/wp-content/uploads/2020/01/boston_morning.jpg" />
        <!-- down arrow -->
        <div class="absolute left-1/2 bottom-5 animate-bounce mx-auto">
            <div class="text-5xl text-white font-sans hover:bg-[#0e0e0e89] bg-opacity-5 ease-in duration-300 px-3 py-1">
                <a href="#arrowto">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" fill="#fafafa" stroke="#fafafa" stroke-width="73.728">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>Down Arrow</title>
                            <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                                fill="#ffffff"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <!-- lebellow icon right top -->
    <div class="absolute top-24 right-0 mx-auto">
      <img src="https://lebello.com/wp-content/themes/lebello-ep/images/logo2.png" />
    </div>
      <!-- menu item -->
      <div class="absolute top-64 right-0 pr-3 h-96 z-50" ref="closeMenu">
  <v-card id="mySidenav" :dark="active" @click="active = true" :class="{ 'w-[230px]': isOpen, 'w-0': !isOpen }"
    class="sidenav bg-white z-50 h-full absolute top-0 right-0 transition-all duration-500 overflow-x-hidden">
    <div class="p-6 pt-4">
      <div>
        <h3 class="text-[14px] font-medium">
          <a href="https://www.lebello.com/product/" class="uppercase">Collection 2024</a>
        </h3>
      </div>
      <div>
        <div class="search">
          <form role="search" class="">
            <div class="relative">
              <input class="appearance-none border-none border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="username" type="text" placeholder="Search..." />
              <hr />
              <div class="absolute right-2 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>
        </div>
        <div>
          <h3 class="py-4 font-normal">Highlights</h3>
          <hr />
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
          <li class="mt-1">
            <a href="https://lebello.com/products/tubo-chair/">Tubo Chair</a>
          </li>
        </ul>
      </div>
    </div>
  </v-card>
  <span v-if="!active" @click="openNav" class="text-9xl text-white">
    <MenuSvg size="30px" />
  </span>
</div>
        <!-- text details box  -->
        <div class="absolute bottom-9 p-1  text-white w-full  h-auto">
            <div class=" flex justify-between p-20 ">
                <div class="bg-darkTrasparent p-4 w-80 h-auto ">
                    <h3 class="  text-[18px] uppercase">{{ location }}</h3>
                    <div class=" text-[15px] font-light ">
                        <p>
                            <span class="decoration-2">{{ companyName }}</span><br>
                            <span>{{ address }}</span><br>
                            <span>{{ city }}, {{ state }} {{ zip }}</span><br>
                            <span>{{ phone1 }}</span><br>
                            <span>{{ phone2 }}</span><br>
                            <a :href="'mailto:' + email" target="_blank">{{ email }}</a>
                        </p>
                    </div>
                </div>
                <div class="bg-darkTrasparent  p-2 py-4">
                    <div class="w-64">
                        <ul class="grid grid-cols-3  ">
                            <li class="col-span-1  m-auto mb-2 ">
                                <svg fill="#ffffff" width="45px" height="45px" viewBox="0 0 32.00 32.00" id="Outlined"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00032">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>Outlined Circle</title>
                                        <g id="Fill">
                                            <path
                                                d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z">
                                            </path>
                                            <path d="M17,7H15v8.52a2,2,0,0,0,.75,1.56l4.63,3.7,1.24-1.56L17,15.52Z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </li>
                            <li class="col-span-2 pb-2 text-[18px]">
                                <span>Local Information</span>
                                <p class=" font-light text-[15px] ">{{ currentTime }} Boston</p>
                            </li>
                            <li class="col-span-1 mx-auto">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px"
                                    viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"
                                    fill="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Base" display="none"> </g>
                                        <g id="Dibujo">
                                            <g>
                                                <path
                                                    d="M72.556,42.187C73.501,40.271,74,38.166,74,36c0-7.72-6.28-14-14-14c-4.601,0-8.895,2.281-11.496,6.021 C48.336,28.016,48.17,28,48.001,28c-7.664,0-14.219,5.012-16.311,12.184C31.113,40.079,30.508,40,30.001,40 c-6.066,0-11,4.935-11,11s4.934,11,11,11h36c6.065,0,11-4.935,11-11C77.001,47.392,75.247,44.194,72.556,42.187z M60,26 c5.514,0,10,4.486,10,10c0,1.548-0.36,3.05-1.036,4.417C68.019,40.152,67.028,40,66.001,40c-0.508,0-1.112,0.079-1.69,0.184 c-1.608-5.511-5.854-9.735-11.21-11.401C54.939,27.03,57.397,26,60,26z M66.001,58h-36c-3.859,0-7-3.141-7-7s3.141-7,7-7 c0.277,0,0.723,0.068,1.193,0.162V46c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2v-3.219C36.267,36.528,41.63,32,48.001,32 c6.372,0,11.736,4.53,12.807,10.786V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837C65.279,44.069,65.727,44,66.001,44 c3.859,0,7,3.141,7,7S69.86,58,66.001,58z">
                                                </path>
                                                <path
                                                    d="M60,18c1.104,0,2-0.896,2-2v-4c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C58,17.104,58.895,18,60,18z">
                                                </path>
                                                <path
                                                    d="M84,34h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S85.104,34,84,34z">
                                                </path>
                                                <path
                                                    d="M74.143,23.857c0.512,0,1.023-0.195,1.414-0.586l2.828-2.828c0.781-0.781,0.781-2.047,0-2.828 c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828C73.119,23.662,73.631,23.857,74.143,23.857z">
                                                </path>
                                                <path
                                                    d="M44.443,23.271c0.391,0.391,0.902,0.586,1.414,0.586c0.512,0,1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828 l-2.828-2.828c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L44.443,23.271z">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <img :src="weatherIcon" :alt="weatherDescription">
                            </li>
                            <li class="col-span-2 text-semibold  text-[18px] ">
                                <span>Current Weather</span>
                                <p class="font-light text-[15px] pt-1">
                                    Thursday<br>
                                    Min {{ minTemperature }}°C - Max {{ maxTemperature }}°C <br />
                                    Humidity: {{ humidity }}%<br>
                                    Wind: {{ windSpeed }} km/h
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-12 left-20 text-white font-light text-[40px] opacity-80 font-GraphikLight">
            Boston</div>
    </div>
    <div class="py-5 px-20">
        <BreadcrumbSection :breadcrumbData="breadcrumbData" seprate="/" />
    </div>
    <!-- text and map section -->
    <div class="flex w-full overflow-hidden m-auto bg-[#f3f3f3]  font-GraphikLight ">
        <div class="w-1/2  pl-14 ">
            <div class="flex w-full flex-col ">
                <div class="w-full   p-6 rounded-lg">
                    <h2 class=" mb-2 text-[27px] font-light ">Agent Information</h2>
                    <div class="text-[#3399ff] text-[18px] font-normal pb-4">Perigold, Boston</div>
                    <img class="pb-4" src="https://lebello.com/wp-content/uploads/2020/01/Logo_Perigold.png">
                    <div class="font-light w-full">
                        <p>Please contact Perigold <br> for residential sales enquires in Boston and NE Customers.<br>
                            <br>
                            Tel : <a href="tel:+18447560804" class="text-blue-500">+1 844 756-0804</a><br>
                            Fax: <a href="tel:+16173914669" class="text-blue-500">+1 617 391-4669</a><br>
                            Website: <a href="https://www.perigold.com/" target="_blank"
                                class="text-blue-500">www.perigold.com</a>
                        </p>
                    </div>
                    <div class="underline uppercase  hover:text-green hover:no-underline mt-5 text-sm font-semibold">
                        <a href="https://maps.google.com/?q=42.351230,-71.067570" target="_blank">Send Directions to
                            your phone <i class="fa fa-angle-right"></i></a>
                    </div>

                    <div class="social-call mt-4">
                        <a href="mailto:ProductInfo@wayfair.com"
                            class="bg-green text-white pt-1 pb-2 px-3 leading-3 rounded-full mr-2 font-light">Send email</a>
                        <a href="tel:+18447560804"
                            class="bg-green text-white pt-1 pb-2 px-6 leading-3	 rounded-full font-light ">Call</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="w-1/2  ">
            <div class="google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755342.9117362631!2d-72.15293861816771!3d42.30929052085871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1714653422618!5m2!1sen!2sin"
                    width="700" height="470" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    <!-- logo section -->
    <LogoSection/>
    <!-- footer -->
    <Footer/>
</template>


<script setup>
import NavBar from '@/components/Nav-bar.vue';
import BreadcrumbSection from "@/components/BreadcrumbSection.vue";
import LogoSection from "@/components/Logo-section.vue";
import Footer from "@/components/Footer-section.vue";
import { ref } from 'vue'
import MenuSvg from '@/components/Svg/Menu-Svg.vue';
import { onClickOutside } from '@vueuse/core'



const location = "United States";
const companyName = "Perigold";
const address = "4 Copley Place, Floor 7";
const city = "Boston";
const state = "MA";
const zip = "02116";
const phone1 = "+1 844 756-0804";
const phone2 = "+1 617 391-4669";
const email = "ProductInfo@wayfair.com";
const currentTime = '02:07 AM';
const minTemperature = 6.75;
const maxTemperature = 10.06;
const weatherIcon = 'http://openweathermap.org/img/w/04n.png';
const weatherDescription = 'Clouds. overcast clouds';
const humidity = 84;
const windSpeed = 3.09;

const breadcrumbData = ref([
    { name: 'Contract Design', link: '/' },
    { name: 'Hotels & Resorts', link: '/products' },
    { name: 'Watt Plaza', link: '/products/electronics' }
]);

// side menu 
const closeMenu = ref(null)
onClickOutside(() => closeNav())

const isOpen = ref(false)
const active = ref(false)

const openNav = () => {
    
  active.value = true
  isOpen.value = true
}

const closeNav = () => {
  isOpen.value = false
  active.value = false
}
</script>