<template>
  <nav>
    <div class=" mx-auto w-full  top-0 text-white bg-gray-600  ease-in duration-300  z-50 md:pt-4 sm:px-6 lg:px-8 "
      :class="{ 'absolute top-0 left-0 hover:bg-[#0e0e0e89] bg-opacity-5': absolute == 'true' }">
      <div class="relative flex h-16 items-center  justify-between ">
        <div class="absolute inset-y-0 left-0 flex  items-center sm:hidden ">
          <button type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute "></span>
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-10">
          <div class="col-span-2 flex justify-center">
            <img class="h-8 right-end text-right w-auto" src="/logo-header.png" alt="Your Company" />
          </div>
          <!-- nav links route -->
          <div class="col-span-5 flex text-white items-center z-50 ">
            <RouterLink v-for="(link, index) in links" :key="index" :to="link.to"
              class="text-gray-300 mr-10 text-[15px] flex  justify-between  font-medium  items-center">
              <div class="flex-inline text-[13px]  items-center group top-12">
                <button class="outline-none rounded-sm py-3  flex items-center min-w-32">
                  <span class="pr-4  font-semibold ">{{ link?.text }} </span>
                </button>

                <ul class="bg-[#0e0e0ec9] bg-opacity-5 mt-2  transform scale-0 group-hover:scale-100 
                        absolute transition duration-150 ease-in-out origin-top list-wid  ">
                  <!-- sublinks list  -->

                  <div v-for="(sublink, subIndex) in link.sublinks" :key="subIndex" class="px-4">
                    <li v-if="sublink?.submenu && sublink?.submenu.length > 0"
                      class=" relative  py-1 border-b hover:text-[#c9d8e8]  border-[rgba(208,208,208,0.16)] ">
                      <button class="w-full text-left flex items-center outline-none focus:outline-none">
                        <!-- submenu 1ist list  -->
                        <div class="p-1 flex justify-between   w-full	 hover:text-[#3385ff]">
                          <div class=""> {{ sublink?.text }}</div>
                          <div class="my-auto">
                            <svg class="fill-current h-3 w-3    transition duration-150 ease-in-out"
                              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      <ul
                        class="bg-[#0e0e0ec9]  bg-opacity-5 absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left list-wid">
                        <!-- <div>
                          <li v-if="sublink?.submenu" class="px-4 border-2 border-red-400 hover:text-[#3399ff]  border-[rgba(208,208,208,0.16)]">
                            {{ link.sublinks?.submenu?.text }}
                          </li>
                        </div> -->
                        <!-- submenu list -->
                        <div v-for="(submenu, ubIndex) in sublink?.submenu" :key="ubIndex"
                          class="mx-3  border-b border-[rgba(208,208,208,0.16)]">
                          <li v-if="submenu?.supermenu?.length > 0" class="my-1 ">
                            <button class="w-full text-left flex items-center outline-none focus:outline-none">
                              <!-- sublist menu 2nd list -->
                              <div class="p-1 flex justify-between   w-full	 hover:text-[#3385ff]">
                                <div class=""> {{ submenu?.text }}</div>
                                <div class="my-auto">
                                  <svg class="fill-current h-3 w-3    transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <ul
                              class="bg-[#0e0e0ec9] bg-opacity-5 absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left list-wid">
                              <!-- super menu -->
                              <!-- super menu list 3rd list -->
                              <li v-for="(supermenu, ubIndex) in submenu?.supermenu" :key="ubIndex"
                                class="px-4 py-1 border-b  hover:text-[#3399ff]  border-[rgba(208,208,208,0.16)]">
                                {{ supermenu?.text }}
                              </li>
                            </ul>
                          </li>
                          <!-- super text  second list -->
                          <li v-else class="px-1 border-b py-1 hover:text-[#3399ff]  border-[rgba(208,208,208,0.16)]">{{
                            submenu?.text }}</li>
                        </div>
                      </ul>
                    </li>
                    <!-- sub text  -->
                    <li v-else class="px-1 py-2 border-b max-h-20 hover:text-[#3399ff]  border-[rgba(208,208,208,0.16)]">{{
                      sublink.text }}</li>
                  </div>
                </ul>
              </div>
              <svg fill="#faf9f9" height="10px" width="10px" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330"
                xml:space="preserve" stroke="#faf9f9">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z">
                  </path>
                </g>
              </svg>
            </RouterLink>
            <div class="col-span-1">
              <div>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                      fill="#ffffff"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <RouterLink v-for="(link, index) in links" :key="index" :to="link.to"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{{
            link.text }}</RouterLink>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

const { absolute } = defineProps({
  absolute: Boolean,
});

const links = [
  {
    to: '#',
    text: 'NEddddW',
    sublinks: [
      { to: '#', text: 'B Chair' },
      { to: '#', text: 'Chair 8' },
      { to: '#', text: 'Director Chair' },
      { to: '#', text: 'Trixie Chair' },
      { to: '#', text: 'Trixie Wing Chair' },
      { to: '#', text: 'Trixie Lounger' },
      { to: '#', text: 'Twiggy XY Chair ' },
      { to: '#', text: '4L Pixie Arm Chair' },
      { to: '#', text: 'Mogul Lounger' },
      { to: '#', text: 'Mini Mogul' },

    ]
  },
  {
    to: '#a',
    text: 'COLLECTION24',
    sublinks: [
      {
        to: '#',
        text: '4L Series',
        submenu: [
          {
            to: '#',
            text: ' 4L Lounger ',
            supermenu: [
              { to: '#', text: '4L Lounger' },
              { to: '#', text: '4L Lounger Clasic' }
            ]
          },
          {
            to: '#',
            text: ' 4L Pixie  ',
            supermenu: [
              { to: '#', text: ' 4L Pixie Chair ' },
              { to: '#', text: ' 4L Pixie Arms Chair ' },
              { to: '#', text: ' 4L Arrow Chair ' }
            ]
          },
          {
            to: '#',
            text: ' 4L Stools   ',
            supermenu: [
              { to: '#', text: '  4L Stool  ' },
              { to: '#', text: '  4L Backrest Stool  ' },
              { to: '#', text: ' 4L Teak Stool ' }
            ]
          },
          {
            to: '#',
            text: '4L X Series',
            supermenu: [
              { to: '#', text: '4L X Chair ' },
              { to: '#', text: ' 4L X Lounger Chasie ' },
              { to: '#', text: ' 4L X Lounger Single  ' },
              { to: '#', text: '4L X Lounger Double' }
            ]
          },
          { to: '#', text: ' 4L Sungita Chair ' },
          { to: '#', text: '4L Arms' },
          { to: '#', text: ' 4L Chair' },
          { to: '#', text: '4L Criss W ' },
          { to: '#', text: '4L Net Chair' }
        ]
      }
    ]
  },
  {
    to: '#b',
    text: 'CATEGORY',
    sublinks: [

      { to: '#', text: 'sdss', submenu: [{ to: '#', text: 'contractsub' }] },
      { to: '#', text: 'NEWsdss', submenu: [{ to: '#', text: 'contractsub' }] },
      { to: '#', text: 'NEWsdss', submenu: [{ to: '#', text: 'contractsub' }] },
    ]
  },
  {
    to: '/conDetails',
    text: 'CONTRACT',
    sublinks: [
      { text: "Hotels Restaurants", to: "/conDetails" },
      { text: "Residential", to: "/conDetails" },
      { text: "Retail & Education", to: "/conDetails" },
      { text: "Communal Spaces", to: "/conDetails" },
      { text: "Restaurants & Hospitality", to: "/conDetails" },
      {
        to: '#', text: 'location',
        submenu: [
          { text: "United States", to: "/conDetails" },
          { text: "Australia", to: "/conDetails" },
          { text: "Canada", to: "/conDetails" },
          { text: "Africa", to: "/conDetails" },
          { text: "China", to: "/conDetails" },
          { text: "Caribbean", to: "/conDetails" },
          { text: "Mexico", to: "/conDetails" },
          { text: "Costa Rica", to: "/conDetails" },
          { text: "Bahrain", to: "/conDetails" }

        ]
      },

    ]
  },
  {
    to: '#d',
    text: 'COMPANY',
    sublinks: [
      { to: '#', text: 'COMPANY' },
      { to: '#', text: 'COMPANY', submenu: [{ to: '#', text: 'contractsub' }] }
    ]
  },
  {
    to: '#e',
    text: 'STORE',
    sublinks: [
      { to: '#', text: 'Mogul Puff Lounger' },
      { to: '#', text: 'M2 Pop' },
      { to: '#', text: 'M2 Bench / Island Pop' },
      { to: '#', text: 'M2 Spinner Pop' },
      { to: '#', text: 'Tubo Chair' },
      { to: '#', text: 'Tubo Club' },
      { to: '#', text: 'Tubo Sofa' },
      { to: '#', text: 'Club 4/8 Puff' },
      { to: '#', text: 'Chair 6 Classic' },
      { to: '#', text: 'Dot Table' },
      { to: '#', text: 'Dotti Table' },
      { to: '#', text: 'Sunny N2' },
      { to: '#', text: 'Plank Table' }
    ]
  }
]
</script>

<style>
li>ul {
  transform: translatex(105%) scale(0);
}

li:hover>ul {
  transform: translatex(100%) scale(1);
}

li>button svg {
  transform: rotate(-90deg);
}

.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}

.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}

.scale-0 {
  transform: scale(0);
}

.min-w-32 {
  min-width: 1.6rem;
}

.list-wid {
  width: 200px;
}
</style>
