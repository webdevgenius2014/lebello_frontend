<template>
  <div>
    <v-card :class="{ 'w-[230px]': isOpen, 'w-0': !isOpen }"
      class="sidenav bg-white pb-2 z-50 absolute top-7 right-0 transition-all duration-500 overflow-hidden">
      <div>
        <div v-if="mainSlider" class="h-auto mb-2 mx-7 mt-4">
          <h3 class="text-[14px] font-medium">
            <a href="https://www.lebello.com/listItem/" class="uppercase">Collection 2024</a>
          </h3>
        </div>
        <div v-else class="flex border border-gray-400 items-center">
          <div class="sticky top-3 p-4 border-r mr-4 border-gray-400">
            <MenuSvg size="15px" fillColor="black" />
          </div>
          <div class="h-auto">
            <h3 class="text-[14px] font-medium">
              <a href="https://www.lebello.com/listItem/" class="uppercase">Collection 2024</a>
            </h3>
          </div>
        </div>

        <div class="px-7">
          <div class="search">
            <form role="search">
              <div v-if="showDropDown">
                <FormDropdown />
              </div>
              <div class="relative">
                <input
                  class="appearance-none mt-2 border-none border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 text-gray-800 ring-0 leading-tight focus:outline-none focus:ring-0 focus:border-0 focus:shadow-outline"
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
          <ul class="font-light text-[13px] mt-2 overflow-auto h-52">
            <li class="mt-1" v-for="(listItem, index) in list" :key="index">
              <a :href="listItem?.link">{{ listItem?.name }}</a>
            </li>
          </ul>
          <div v-if="showMediaIcon === 'true'">
            <hr />
            <ul class="flex space-x-4 my-2 overflow-auto">
              <li v-for="(social, index) in socialLinks" :key="index">
                <a :href="social?.url" :title="social?.title" class="text-gray-700 hover:text-blue-500">
                  <i :class="social?.iconClasses"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-card>
    <span v-if="!isOpen" @click="handleSideMenu" class="text-9xl text-white sticky top-5">
      <MenuSvg size="30px" />
    </span>
  </div>
</template>

<script setup>
import MenuSvg from './Svg/Menu-Svg.vue';
import FormDropdown from './Form-components/Form-Dropdown.vue';
const { handleSideMenu, list, isOpen, mainSlider = false, showMediaIcon = 'true', showDropDown = 'false' } = defineProps(['handleSideMenu', "showMediaIcon", 'list', 'showDropDown', 'isOpen', 'mainSlider']);

const socialLinks = [
  {
    url: "https://www.facebook.com/Modern.Outdoor.Living/",
    title: "Facebook",
    iconClasses: "fab fa-facebook text-3xl"
  },
  {
    url: "https://www.houzz.com/userQuestions/user/lebello",
    title: "Houzz",
    iconClasses: "fab fa-houzz text-3xl"
  },
  {
    url: "https://www.pinterest.com/search/pins/?q=lebello.com&amp;term_meta%5B%5D=lebello.com%7Ctyped",
    title: "Pinterest",
    iconClasses: "fab fa-pinterest text-3xl"
  },
  {
    url: "https://www.instagram.com/lebello_furniture/",
    title: "Instagram",
    iconClasses: "fab fa-instagram text-3xl"
  }
];
</script>
