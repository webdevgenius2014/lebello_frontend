<template>
  <div class=" overflow-hidden">
    <NavMainSlider :list="[
      {
        name: 'B Chair Series',
        link: 'https://lebello.com/products/trixie-lounger/',
      },
      {
        name: 'B Chair',
        link: 'https://lebello.com/products/4l-pixie-arms-chair/',
      },
    ]" :mainSlider="true" :showDropDown="false" :showHeading="false" :downDropdown="false" />
    <!-- menu button -->
    <div class="flex justify-between py-5">
      <div class="ml-16">
        <BreadcrumbSection :breadcrumbData="breadcrumbData" seprate="/" />
      </div>
      <div class="relative top-30 right-0 pr-3 " ref="closeMenu">
        <SideMenu key="firstKey" :list="list" :handleSideMenu="handleSideMenu" :isOpen="isOpenSidebarSlider"
          :mainSlider="false" :showDropDown="false" :showHeading="false" :downDropdown="true" />
      </div>
    </div>
    <!-- Featured Section  -->
    <section class="bg-[#f3f3f3]">
      <div class="grid grid-cols-2 gap-4">
        <div class="">
          <div class="">
            <div class="px-11 my-10">
              <h2 class="text-[27px] text-textColorBlack font-graphikLight mb-10 ml-12">
                B Chair 1/2 & Pixie
              </h2>
              <div class="">
                <p class="text-[16px] mx-12 font-graphikLight text-[#666 ]">
                  B Chair is now available in our exclusive timeless pixie weave design language. A
                  chair that provides functionality with its open frame design allowing access to a
                  self-storage compartment for personal belongings. The pixie design pattern
                  embodies our authentic superior woven craftsmanship through which clients can opt
                  for our LSO option. Lebello Special Operations provides enhanced bespoke design
                  customization solutions tailored towards your design requirements. The B Chair comes
                  in a low and high-back model.
                </p>
              </div>
              <div class="mt-10 flex hover:text-green" :class="{ 'text-green': addiVisible }"
                @click="HandleAdditionalInfo()" @mouseenter="setAddiColor('#4dc45c')"
                @mouseleave="setAddiColor('#333')">
                <span rel="off" class="ml-12 uppercase font-graphikMedium text-[13px]" v-scroll="0">Additional Product
                  info</span>
                <ArrowSvg class="mt-0 ml-3 self-center" size="15px" :fillColor="addiVisible ?'#4dc45c' :additArrowColor" ref="AdditionalInfo" />
              </div>
            </div>
          </div>
        </div>
        <div class="">

          <div class="relative h-full overflow-hidden">
            <img
              class="object-cover h-full w-full transition-transform duration-700 ease-in-out transform hover:scale-105"
              src="https://lebello.com/wp-content/uploads/2019/12/b_chair_slider_gallery.jpg" alt="B Chair" />
            <span v-scroll="isVisible ? arrowScroll : 0" class="absolute bottom-0 bg-green p-5">
              <ArrowSvg size="13px" fillColor="#ffffff" ref="arrowSvg" @click="rotate" />
            </span>
          </div>
        </div>
      </div>
      <!-- {{arrowScroll}} -->
    </section>
    <!--on button click   -->
    <transition>
      <div id="app" v-show="isVisible" :class="{ 'ease-in-out': isVisible }" class="container-fluid bg-[#d8d8d8] p-0">
        <div class="grid grid-cols-1 mt-[5px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    <transition>
      <div ref="scrollTOadditional" v-scroll="-400" v-show="addiVisible" :class="{
        'transition-opacity ease-in-out duration-300': addiVisible,
      }"
        class="container-fluid mt-1 h-[450px] bg-[url('https://lebello.com/wp-content/uploads/2019/12/Additional-Information-e1707234297556.jpg')] p-0">
        <div class="transition-opacity ease-in-out duration-300">
          <div class="py-10 m-0 relative px-14  w-1/2 font-light text-left text-white bg-green">
            <p id="directTO" class="font-graphikLight text-[27px] leading-9">
              Crafted from our exclusive Ropetek® materials and
              woven in one of our signature styles.
            </p>
            <div class="absolute right-3 top-3" @click="HandleAdditionalInfo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="#ffffff"
                  d="M12 10.586l4.293-4.293 1.414 1.414L13.414 12l4.293 4.293-1.414 1.414L12 13.414l-4.293 4.293-1.414-1.414L10.586 12 6.293 7.707l1.414-1.414L12 10.586z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- contact section -->
    <div class="flex justify-between uppercase py-4">
      <div class="ml-16 flex self-center">
        <ul class="flex font-graphikMedium text-[14px] text-green hover:text-blue"
          @mouseenter="setArrowFillColor('#3399ff')" @mouseleave="setArrowFillColor('#4dc45c')">
          <li class="mr-2">
            <a class="font-graphikMedium text-[14px]" href="https://www.lebello.com/product/">Enquire
            </a>
            <span class="mx-1">/</span>
          </li>
          <li class="active">Email</li>
          <span class="mx-3 self-center">
            <ArrowSvg size="11px" initialRotation="left" :fillColor="arrowFillColor" />
          </span>
        </ul>
        <ul class="flex font-medium text-green hover:text-blue" @mouseenter="setArrowFillColor2('#3399ff')"
          @mouseleave="setArrowFillColor2('#4dc45c')">
          <li class="mr-2 ml-2">
            <a class="underline font-graphikMedium text-[14px]" target="_blank"
              href="https://lebello.com/wp-content/uploads/2013/09/B-Chair_Cutsheet.pdf">
              Download Cut Sheet
            </a>
          </li>
          <span class="mx-1 self-center ">
            <ArrowSvg size="11px" initialRotation="left" :fillColor="arrowFillColor2" />
          </span>
        </ul>
        <!-- <BreadcrumbSection  /> -->
      </div>
      <!-- social links -->

      <ul class="flex justify-center space-x-1 pr-20">
        <li>
          <a href="https://www.facebook.com/share.php?u=https://lebello.com/products/b-chair-1-2/&title=B Chair"
            target="_blank" title="Facebook"
            class="flex items-center justify-center w-11 h-11 bg-gray-300 hover:bg-[#7bd923] rounded-full mx-3">
            <svg width="18px" height="18px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fcfcfc" stroke="#fcfcfc">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                        id="facebook-[#fcfcfc]"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.houzz.com/imageClipperUpload?link=https://lebello.com/products/b-chair-1-2/&source=button&hzid=8628&imageUrl=https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg&title=B Chair&ref=https://lebello.com/products/b-chair-1-2/"
            target="_blank" title="Houzz"
            class="flex items-center justify-center w-11 h-11 bg-gray-300 hover:bg-[#7bd923] rounded-full mx-3">
            <svg fill="#ffffff" width="18px" height="18px" viewBox="-5 0 24 24" xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="m6.926 15.991 6.927-3.991v7.995l-6.927 4.005zm-6.926-3.991v7.995l6.926-4.005zm6.926-12v7.995l-6.926 4.005v-7.995zm0 7.995 6.926-3.991v7.996z">
                </path>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://pinterest.com/pin/create/bookmarklet/?media=https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg&url=https://lebello.com/products/b-chair-1-2/&is_video=false&description=B Chair"
            target="_blank" title="Pinterest"
            class="flex items-center justify-center w-11 h-11 bg-gray-300 hover:bg-[#7bd923] rounded-full mx-3">
            <svg width="18px" height="18px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f5f5f5" stroke="#f5f5f5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>pinterest [#180]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7399.000000)" fill="#ffffff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M173.876,7239 C168.399,7239 164,7243.43481 164,7248.95866 C164,7253.05869 166.407,7256.48916 169.893,7258.07936 C169.893,7256.21186 169.88,7256.45286 171.303,7250.38046 C170.521,7248.80236 171.129,7246.19673 172.88,7246.19673 C175.31,7246.19673 173.659,7249.79964 173.378,7251.2174 C173.129,7252.30544 173.959,7253.14238 174.955,7253.14238 C176.864,7253.14238 178.108,7250.71524 178.108,7247.87063 C178.108,7245.69456 176.615,7244.10437 174.042,7244.10437 C169.467,7244.10437 168.307,7249.19966 169.893,7250.79893 C170.292,7251.40294 169.893,7251.43118 169.893,7252.22174 C169.616,7253.05768 167.403,7251.84259 167.403,7248.70757 C167.403,7245.86195 169.727,7242.51518 174.457,7242.51518 C178.191,7242.51518 180.681,7245.27609 180.681,7248.2054 C180.681,7252.13805 178.523,7254.98366 175.37,7254.98366 C174.291,7254.98366 173.295,7254.3978 172.963,7253.72824 C172.36,7256.07371 172.238,7257.26258 171.303,7258.58153 C172.216,7258.83261 173.129,7259 174.125,7259 C179.602,7259 184,7254.56519 184,7249.04235 C183.752,7243.43481 179.353,7239 173.876,7239"
                        id="pinterest-[#180]"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/intent/tweet?status=Discover Lebello - B Chair+https://lebello.com/products/b-chair-1-2/"
            target="_blank" title="Twitter"
            class="flex items-center justify-center w-11 h-11 bg-gray-300 hover:bg-[#7bd923] rounded-full mx-3">
            <img class="w-[18px] h-[18px]"
              src="https://lebello.com/wp-content/themes/lebello-ep/images/Lebello-twitterx-icon.svg"
              alt="Social Icon" />
          </a>
        </li>
      </ul>
      <div class="relative top-30 right-0 pr-3 self-center " ref="closeMenu2">
        <SideMenu key="firstKey" :list="list" :handleSideMenu="handleSideMenu2" :isOpen="isOpenSidebarSlider2"
          :mainSlider="false" :showDropDown="false" :showHeading="false" :downDropdown="true" />
      </div>
    </div>
    <AccordianSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavMainSlider from "@/components/frontend-components/Nav-MainSlider.vue";
import FooterSection from "@/components/frontend-components/Footer-section.vue";
import { ref } from "vue";
import ArrowSvg from "@/components/frontend-components/Svg/Arrow-Svg.vue";
import AccordianSection from "@/components/frontend-components/Accordian-Section.vue";
import { onClickOutside } from "@vueuse/core";
import BreadcrumbSection from "@/components/frontend-components/BreadcrumbSection.vue";
import SideMenu from "@/components/frontend-components/Side-Menu.vue";

const scrollTOadditional = ref(null)
const closeMenu = ref(null);
const closeMenu2 = ref(null);
const isOpenSidebarSlider2 = ref(null);
const handleSideMenu2 = () => {
  isOpenSidebarSlider2.value = true;
};
const closeSideMenu2 = () => {
  isOpenSidebarSlider2.value = false;
};
onClickOutside(closeMenu2, closeSideMenu2);

const isOpenSidebarSlider = ref(null);
const closeSideMenu = () => {
  isOpenSidebarSlider.value = false;
};
onClickOutside(closeMenu, closeSideMenu);

const handleSideMenu = () => {
  isOpenSidebarSlider.value = true;
};
const products = ref([
  {
    title: "Set of B Chair, B Chair 2 and Dot Table.",
    description: "Set of B Chair, B Chair 2 and Dot Table.",
    image: "https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg",
    thumbnail:
      "http://lebello.com/wp-content/uploads/thumbs/b-chair-slider-gallery-302X202.png",
    alt: "B Chair Piie Low & High Lounger Chair",
  },
  {
    title: "B Chair and B Chair 2 finished in Pixie Weaving Pattern.",
    description: "B Chair and B Chair 2 finished in Pixie Weaving Pattern.",
    image: "https://lebello.com/wp-content/uploads/2019/12/b_chair_slider_gallery.jpg",
    thumbnail:
      "http://lebello.com/wp-content/uploads/thumbs/b_chair_slider_gallery-302X202.png",
    alt: "B Chair Pixie Low & High Lounger Chair",
  },
  {
    title: "Set of B Chair, B Chair 2 and Dot Table.",
    description: "Set of B Chair, B Chair 2 and Dot Table.",
    image: "https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg",
    thumbnail:
      "http://lebello.com/wp-content/uploads/thumbs/b-chair-slider-gallery-302X202.png",
    alt: "B Chair Pixie Low & High Lounger Chair",
  },
  {
    title: "B Chair and B Chair 2 finished in Pixie Weaving Pattern.",
    description: "B Chair and B Chair 2 finished in Pixie Weaving Pattern.",
    image: "https://lebello.com/wp-content/uploads/2019/12/b_chair_slider_gallery.jpg",
    thumbnail:
      "http://lebello.com/wp-content/uploads/thumbs/b_chair_slider_gallery-302X202.png",
    alt: "B Chair Pixie Low & High Lounger Chair",
  },
  {
    title: "Set of B Chair, B Chair 2 and Dot Table.",
    description: "Set of B Chair, B Chair 2 and Dot Table.",
    image: "https://lebello.com/wp-content/uploads/2019/12/b-chair-slider-gallery.jpg",
    thumbnail:
      "http://lebello.com/wp-content/uploads/thumbs/b-chair-slider-gallery-302X202.png",
    alt: "B Chair Pixie Low & High Lounger Chair",
  },
]);

const list = ref([
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
]);
const arrowSvg = ref(null);
const isVisible = ref(false);
const arrowRotation = ref("down");
const arrowScroll = ref(0);
const AdditionalInfo = ref(null);
const addiVisible = ref(false);
const additRotation = ref("down");
const additArrowColor = ref("#000000");

const arrowFillColor = ref("#4dc45c");
const arrowFillColor2 = ref("#333");

const breadcrumbData = ref([
  { name: "Collection", link: "/" },
  { name: "B Chair", link: "/" },
]);

const setArrowFillColor = (color) => {
  arrowFillColor.value = color;
};

const setArrowFillColor2 = (color) => {
  arrowFillColor2.value = color;
};

const setAddiColor = (color) => {
  additArrowColor.value = color;
};

const toggleVisibility = () => {

  isVisible.value = !isVisible.value;
  addiVisible.value = false;
  if (isVisible.value)
    arrowScroll.value = -400
  else
    arrowScroll.value = 0
};

function addiVisibility() {
  addiVisible.value = !addiVisible.value;
  isVisible.value = false;
}

const rotate = () => {
  if (arrowSvg?.value && arrowSvg?.value?.rotate) {
    arrowSvg.value.rotate(arrowRotation.value);
    arrowRotation.value = arrowRotation.value === "up" ? "down" : "up";
    toggleVisibility();
  }
};

const HandleAdditionalInfo = () => {
  if (AdditionalInfo?.value && AdditionalInfo?.value?.rotate) {
    AdditionalInfo.value.rotate(additRotation.value);
    additRotation.value = additRotation.value === "up" ? "down" : "up";
    addiVisibility();
    if (addiVisible.value) scrollToTarget();
  }
};

const scrollToTarget = () => {
  const targetDiv = document.getElementById("scrollTOadditional.value");
  const startPosition = window.pageYOffset;
  const targetPosition =
    targetDiv.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Duration of the scroll in milliseconds
  let startTime = null;
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  const animateScroll = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run =
      easeInOutQuad(timeElapsed / duration) * distance + startPosition;
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animateScroll);
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
