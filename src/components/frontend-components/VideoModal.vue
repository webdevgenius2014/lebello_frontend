<template>
  <div v-if="open" class="fixed z-[100]    ">
    <div class="flex items-end justify-center min-h-screen text-center sm:block">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-[rgb(220,214,205)] text-left  shadow-xl
         transform transition-all sm:align-middle  w-[96vw]    " role="dialog" aria-modal="true"
        aria-labelledby="modal-headline">
        <div class="hidden sm:block absolute top-4 right-4  ">
          <button @click="handleClose" type="button" data-behavior="cancel" class="rounded-md text-black-400 hover:text-gray-500 focus:outline-none
             focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  ">
            <span class="sr-only">Close</span>
            <svg fill="#000000" class="text-gray-500" width="20px" height="20px" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                  fill-rule="evenodd"></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="flex  m-auto ">
          <div class="w-3/5">
            <div class="w-full h-full" v-html="videoContainer"></div>
          </div>
          <div class="w-2/5 bg-[rgb(220,214,205)] px-10 ">
            <div class="text-lg pt-10 ">
              <h2 class="uppercase text-[28px] font-graphik text-[#606060] font-semibold pb-3">Product Video</h2>
            </div>
            <PerfectScrollbar class="max-h-full">
              <div class="flex pt-4" v-for="(vdo, index) in videos" :key="index"
                :class="{ 'border-b-2 pb-5 border-[#978b7a7d]': index === 0 }">
                <div>
                  <h4 :class="{ 'text-orange': currentVideo === vdo?.src }"
                    class=" text-[18px] font-graphikLight text-Black666">{{ vdo?.name }}</h4>
                </div>
                <div class="ml-auto">
                  <a class="text-h3Font cursor-pointer border text-Black666 border-Black666 hover:bg-orange hover:border-0 py-1 leading-6 ease-in-out hover:text-white rounded-3xl ml-auto px-4 py-auto font-light text-[13px]"
                    @click="setVideo(vdo?.src)" data-toggle="modal"> Watch</a>
                </div>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css';

const { open, handleClose } = defineProps({
  open: Boolean,
  handleClose: Function
});

const currentVideo = ref("https://lebello.com/wp-content/uploads/2023/05/Spring Collection Highlights.mp4");

const videos = [
  { name: 'Spring Collection Highlights', src: "https://lebello.com/wp-content/uploads/2023/05/Spring Collection Highlights.mp4" },
  { name: 'Lebello 2023 Forever Summer Collection', src: "https://lebello.com/wp-content/uploads/2023/05/Lebello 2022 Forever Summer Collection.mp4" },
  { name: 'Lebello Italian Rivera 2021', src: "https://lebello.com/wp-content/uploads/2023/05/Lebello Italian Rivera 2021.mp4" },
  { name: 'Strap Outdoor Teak Lounge Furniture', src: "https://lebello.com/wp-content/uploads/2023/05/Strap Outdoor Teak Lounge Furniture.mp4" },
  { name: 'Club 7 Sofa', src: "https://lebello.com/wp-content/uploads/2023/05/Club 7 Sofa.mp4" },
  { name: 'More Sofa', src: "https://lebello.com/wp-content/uploads/2023/05/More Sofa.mp4" },
];

const setVideo = (videoSrc) => {
  currentVideo.value = videoSrc;
  renderVideo(videoSrc);
};

const videoContainer = ref(null);

const renderVideo = (videoSrc) => {
  videoContainer.value = `<video  width="100%" class='md:h-[450px] lg:h-full'  autoplay="true" muted="true" loop="true" controls=""><source src="${videoSrc}" type="video/mp4" /></video>`;
};

onMounted(() => {
  renderVideo(currentVideo.value);
});
</script>


<style scoped>
/* Add your scoped styles here */
.ps {
  height: 70%;
}
</style>
