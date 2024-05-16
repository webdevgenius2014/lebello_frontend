<template>
  <NavMainSlider />
  <!-- menu button -->
  <div class="flex justify-between py-5">
    <div class="ml-16">
      <!-- <ul class="flex">
        <li class="mr-2 text-green hover:text-blue-700">
          <a class=" " href="https://www.lebello.com/product/">Collection </a>
          <span class="mx-1 hover:text-blue-700">/</span>
        </li>
        <li class="active text-[#656464]">B Chair</li>
      </ul> -->
      <BreadcrumbSection :breadcrumbData="breadcrumbData" seprate="/" />
    </div>
    <div class="mr-8">
      <span v-if="!active" @click="openNav" class="text-9xl text-white">
        <MenuSvg size="30px" />
      </span>
      <div class="relative" ref="closeMenu">
        <div class="absolute top-4 right-3 ">
          <v-card id="mySidenav" :dark="active" @click="active = true" :class="{ 'w-[230px]': isOpen, 'w-0': !isOpen }"
            class="sidenav bg-white z-50 h-auto fixed pb-5  top-4 right-0 transition-all duration-500 overflow-x-hidden">
            <div class=" ">
              <div class="flex border border-gray-400 items-center">
                <div class=" p-3 border-r mr-4 border-gray-400">
                  <MenuSvg size="20px" />
                </div>
                <div>
                  <h3 class="text-[14px] font-medium">
                    <a href="https://www.lebello.com/product/" class="uppercase">Collection 2024</a>
                  </h3>
                </div>
              </div>
              <div class="px-7">
                <div class="search">
                  <form role="search" class="">
                  </form>
                </div>
                <ul class="font-light text-[13px] mt-2">
                  <li class="mt-1">
                    <div class="relative">
                      <input
                        class="appearance-none border-none border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                        id="username" type="text" placeholder="Search..." />
                      <hr />
                      <div class="absolute  right-2 inset-y-0 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                      </div>


                    </div>
                  </li>
                  <li class="mt-1 ">
                    <a href="https://lebello.com/products/trixie-lounger/">Trixie Lounger</a>
                    <hr />
                  </li>
                  <li class="mt-1">
                    <a href="https://lebello.com/products/4l-pixie-arms-chair/">4L Pixie Arms Chair</a>
                    <hr />
                  </li>
                  <li class="mt-1">
                    <a href="https://lebello.com/products/4l-pixie-arms-chair/">4L Pixie Arms Chair</a>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
  <!-- Featured Section  -->
  <section class="bg-[#f3f3f3]">
    <div class="grid grid-cols-2 gap-4">
      <div class="">
        <div class="">
          <div class="px-11 my-10">
            <h2 class="text-3xl font-thin mb-10 ml-12">B Chair 1/2 & Pixie</h2>
            <div class="">
              <p class="text-lg mx-12 font-thin">
                B Chair is now available in our exclusive timeless pixie weave design language. A
                chair that provides functionality with its open frame design allowing access to a
                self-storage compartment for personal belongings. The pixie design pattern embodies
                our authentic superior woven craftsmanship through which clients can opt for our LSO
                option. Lebello Special Operations provides enhanced bespoke design customization
                solutions tailored towards your design requirements. The B Chair comes in a low and
                high-back model.
              </p>
            </div>
            <div class="mt-10 flex" :class="{ 'text-green': addiVisible }" @click="HandleAdditionalInfo"
              @mouseenter="setAddiColor('#3399ff')" @mouseleave="setAddiColor('#4dc45c')">
              <span rel="off" class="ml-12">Additional Product info</span>
              <ArrowSvg class="mt-1 ml-3 self-center" size="20px" fillColor="additArrowColor" ref="AdditionalInfo" />
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="relative h-full overflow-hidden">
          <img
            class="object-cover h-full w-full transition-transform duration-700 ease-in-out transform hover:scale-105"
            src="https://lebello.com/wp-content/uploads/2019/12/b_chair_slider_gallery.jpg" alt="B Chair" />
          <span class="absolute bottom-0 bg-green p-5">
            <ArrowSvg size="13px" fillColor="#ffffff" ref="arrowSvg" @click="rotate" />
          </span>
        </div>
      </div>
    </div>
  </section>
  <!--on button click   -->
  <transition name="fade">
    <div id="app" v-show="isVisible" :class="{ 'ease-in-out': isVisible }" class="container-fluid bg-[#d8d8d8] p-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="product-item p-0" v-for="(product, index) in products" :key="index">
          <div class="product_img overflow-hidden">
            <a :title="product.title" class="group1" :href="product?.image" :data-desc="product?.description"
              rel="pro-gallery">
              <img
                class="w-full h-auto opacity-55 hover:opacity-100 transition-transform duration-700 ease-in-out transform hover:scale-125"
                :src="product?.thumbnail" :alt="product?.alt" :title="product?.title" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- on Additonal info click -->
  <transition name="fade">
    <div id="app" v-show="addiVisible" :class="{ 'ease-in-out': addiVisible }"
      class="container-fluid h-[450px] bg-[url('https://lebello.com/wp-content/uploads/2019/12/Additional-Information-e1707234297556.jpg')] p-0">
      <div class="py-10 m-0 relative px-24 border w-1/2 font-light text-left text-white text-2xl bg-green">
        <p>
          Crafted from our exclusive Ropetek® materials and woven in one of our signature styles.
        </p>
        <div class="absolute right-3 top-3" @click="addiVisibility">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="#ffffff"
              d="M12 10.586l4.293-4.293 1.414 1.414L13.414 12l4.293 4.293-1.414 1.414L12 13.414l-4.293 4.293-1.414-1.414L10.586 12 6.293 7.707l1.414-1.414L12 10.586z" />
          </svg>
        </div>
      </div>
    </div>
  </transition>
  <!-- contact section -->
  <div class="flex justify-between uppercase py-4">
    <div class="ml-16 flex self-center">
      <ul class="flex font-medium text-green hover:text-[#3399ff]" @mouseenter="setArrowFillColor('#3399ff')"
        @mouseleave="setArrowFillColor('#4dc45c')">
        <li class="mr-2">
          <a class=" " href="https://www.lebello.com/product/">Enquire </a>
          <span class="mx-1">/</span>
        </li>
        <li class="active">Email</li>
        <span class="mx-3 self-center">
          <ArrowSvg size="11px" initialRotation="left" :fillColor="arrowFillColor" />
        </span>
      </ul>
      <ul class="flex font-medium text-green hover:text-[#3399ff]" @mouseenter="setArrowFillColor2('#3399ff')"
        @mouseleave="setArrowFillColor2('#4dc45c')">
        <li class="mr-2">
          <a class="underline" target="_blank"
            href="https://lebello.com/wp-content/uploads/2013/09/B-Chair_Cutsheet.pdf">
            Download Cut Sheet
          </a>
        </li>
        <span class="mx-3 self-center">
          <ArrowSvg size="11px" initialRotation="left" :fillColor="arrowFillColor2" />
        </span>
      </ul>
      <BreadcrumbSection />
    </div>
    <!-- social links -->
    <div class=" mr-28">
      <ul class="social-link flex  ">
        <li v-for="(link, index) in socialLinks" :key="index">
          <a :href="link.url" target="_blank" :title="link.title">
            <i v-if="link.icon" :class="link.icon" class="text-2xl   rounded-full  mx-3 p-3 bg-slate-600 "></i>
            <img v-else :src="link?.iconClass" alt="Social Icon"
              class="text-5xl  text-gray-300 mx-3 bg-slate-600 rounded-full p-2">

          </a>
        </li>
      </ul>
    </div>
    <div class="mr-8 self-center">
      <MenuSvg />
    </div>
  </div>
  <AccordianSection />
  <FooterSection />
</template>

<script setup>
import NavMainSlider from '@/components/Nav-MainSlider.vue'
import MenuSvg from '@/components/Svg/Menu-Svg.vue'
import FooterSection from '@/components/Footer-section.vue'
import { ref } from 'vue'
import ArrowSvg from '@/components/Svg/Arrow-Svg.vue'
import AccordianSection from '@/components/Accordian-Section.vue'
import { onClickOutside } from '@vueuse/core'
import BreadcrumbSection from '@/components/BreadcrumbSection.vue'

const products = ref([
  {
    title: 'Set of B Chair, B Chair 2 and Dot Table.',
    description: 'Set of B Chair, B Chair 2 and Dot Table.',
    image: 'https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg',
    thumbnail: 'http://lebello.com/wp-content/uploads/thumbs/b-chair-slider-gallery-302X202.png',
    alt: 'B Chair Piie Low & High Lounger Chair'
  },
  {
    title: 'B Chair and B Chair 2 finished in Pixie Weaving Pattern.',
    description: 'B Chair and B Chair 2 finished in Pixie Weaving Pattern.',
    image: 'https://lebello.com/wp-content/uploads/2019/12/b_chair_slider_gallery.jpg',
    thumbnail: 'http://lebello.com/wp-content/uploads/thumbs/b_chair_slider_gallery-302X202.png',
    alt: 'B Chair Pixie Low & High Lounger Chair'
  },
  {
    title: 'Set of B Chair, B Chair 2 and Dot Table.',
    description: 'Set of B Chair, B Chair 2 and Dot Table.',
    image: 'https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg',
    thumbnail: 'http://lebello.com/wp-content/uploads/thumbs/b-chair-slider-gallery-302X202.png',
    alt: 'B Chair Pixie Low & High Lounger Chair'
  },
  {
    title: 'B Chair and B Chair 2 finished in Pixie Weaving Pattern.',
    description: 'B Chair and B Chair 2 finished in Pixie Weaving Pattern.',
    image: 'https://lebello.com/wp-content/uploads/2019/12/b_chair_slider_gallery.jpg',
    thumbnail: 'http://lebello.com/wp-content/uploads/thumbs/b_chair_slider_gallery-302X202.png',
    alt: 'B Chair Pixie Low & High Lounger Chair'
  },
  {
    title: 'Set of B Chair, B Chair 2 and Dot Table.',
    description: 'Set of B Chair, B Chair 2 and Dot Table.',
    image: 'https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg',
    thumbnail: 'http://lebello.com/wp-content/uploads/thumbs/b-chair-slider-gallery-302X202.png',
    alt: 'B Chair Pixie Low & High Lounger Chair'
  }
])
const arrowSvg = ref(null)
const isVisible = ref(false)
const arrowRotation = ref('down')

const AdditionalInfo = ref(null)
const addiVisible = ref(false)
const additRotation = ref('down')
const additArrowColor = ref('#000000')

const arrowFillColor = ref('#4dc45c')
const arrowFillColor2 = ref('#4dc45c')

const breadcrumbData = ref([
  { name: 'Collection', link: '/' },
  { name: 'B Chair', link: '/' },
]);

const setArrowFillColor = (color) => {
  arrowFillColor.value = color
}
const setArrowFillColor2 = (color) => {
  arrowFillColor2.value = color
}
const setAddiColor = (color) => {
  additArrowColor.value = color
}

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
const addiVisibility = () => {
  addiVisible.value = !addiVisible.value
}
const rotate = () => {
  if (arrowSvg?.value && arrowSvg?.value?.rotate) {
    arrowSvg.value.rotate(arrowRotation.value)
    arrowRotation.value = arrowRotation.value === 'up' ? 'down' : 'up'
    toggleVisibility()
  }
}
const HandleAdditionalInfo = () => {
  if (AdditionalInfo?.value && AdditionalInfo?.value?.rotate) {
    AdditionalInfo.value.rotate(additRotation.value)
    additRotation.value = additRotation.value === 'up' ? 'down' : 'up'
    addiVisibility()
  }
}

const closeMenu = ref(null)
onClickOutside(() => closeNav())
const active = ref(false)
const isOpen = ref(false)

const openNav = () => {
  active.value = true
  isOpen.value = true
}

const closeNav = () => {
  isOpen.value = false
  active.value = false
}


const socialLinks = [
  {
    url: 'https://www.facebook.com/share.php?u=https://lebello.com/products/b-chair-1-2/&title=B Chair',
    title: 'Facebook',
    icon: 'fab fa-facebook'
  },
  {
    url: 'https://www.houzz.com/imageClipperUpload?link=https://lebello.com/products/b-chair-1-2/&source=button&hzid=8628&imageUrl=https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg&title=B Chair&ref=https://lebello.com/products/b-chair-1-2/',
    title: 'Houzz',
    icon: 'fab fa-houzz'
  },
  {
    url: 'https://pinterest.com/pin/create/bookmarklet/?media=https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg&url=https://lebello.com/products/b-chair-1-2/&is_video=false&description=B Chair',
    title: 'Pinterest',
    icon: 'fab fa-pinterest'
  },
  {
    url: 'https://twitter.com/intent/tweet?status=Discover Lebello - B Chair+https://lebello.com/products/b-chair-1-2/',
    title: 'Twitter',
    iconClass: 'https://lebello.com/wp-content/themes/lebello-ep/images/Lebello-twitterx-icon.svg'
  }
]
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
