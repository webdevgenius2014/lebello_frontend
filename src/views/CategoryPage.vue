<template>
    <NavBar absolute="false" />
    <div class="py-5 mx-20 ">
        <div class="py-10">
            <div class="uppercase text-2xl text-gray-600"> VAUD SERIES </div>
            <p class="font-light text-sm">Lebello is an exclusive outdoor furniture manufacturer of innovative outdoor
                designs for home residential and commercial hospitality projects. The lebello range offers, sofas,
                tables,
                lounger and various timeless outdoor furnishings.</p>
            <div class="flex">
                <span>Sort By
                    <span class="relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
                        <!-- Trigger button -->
                        <h2 class="text-2xl font-bold">Hoverable Dropdown</h2>
                        <p class="text-lg">Move the mouse over the button to open the dropdown menu.</p>
                        <!-- list  -->
                        <div class="dropdown inline-block relative" @mouseenter="showDropdown"
                            @mouseleave="hideDropdown">
                            <button
                                class="dropbtn bg-green-600 text-white px-4 py-2 rounded-md text-base font-medium">Dropdown</button>
                            <div class="dropdown-content absolute bg-gray-100 rounded-md shadow-md z-10"
                                :class="{ 'hidden': !isDropdownVisible }">
                                <a href="#" class="block px-4 py-2 text-black">Link 1</a>
                                <a href="#" class="block px-4 py-2 text-black">Link 2</a>
                                <a href="#" class="block px-4 py-2 text-black">Link 3</a>
                            </div>
                        </div>
                    </span>

                </span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-0 ">
            <div v-for="(product, index) in products" :key="index" class=" ">
                <div class="prod_content overflow-hidden hover:bg-gray-100 " @mouseenter="toggleOverlay(index, true)"
                    @mouseleave="toggleOverlay(index, false)">
                    <div class="relative overflow-hidden">
                        <a :href="product?.link">
                            <img class=" opacity-60  transition-transform duration-700 ease-in-out transform hover:scale-105 hover:opacity-100 "
                                ref="element" :data-aos="animationType" :src="product?.image" :alt="product?.name">
                        </a>
                        <!-- <span class="absolute  bottom-0  px-3 py-2 hover:bg-[#0e0e0e89] text-white"
                        :class="{ 'bg-[#0e0e0e89]': isHovered }"
                        >Vaud Stool </span> -->
                        <div class="prod-overlay  " :class="{ 'show-overlay': isHovered[index] }">
                            <div class="overlay-content ">
                                <h1 class="hover:text-green">aaaaaaa</h1>
                            </div>
                        </div>
                    </div>
                    <p class="pl-5 mt-3 pb-4 font-thin">sdfsd </p>
                </div>
            </div>
        </div>
    </div>
    <LogoSection />
    <FooterSection />
</template>


<script setup>
import NavBar from '@/components/Nav-bar.vue';
import FooterSection from '@/components/Footer-section.vue';
import LogoSection from '@/components/Logo-section.vue';
import { ref } from 'vue'

const isHovered = ref([]);
const showDropdown = ref(false);

const toggleOverlay = (index, show) => {
    isHovered.value[index] = show;
};

const isDropdownVisible = ref(false);

// const  showDropdown1 =()=> {
//   isDropdownVisible.value = true;
// }

// function hideDropdown() {
//   isDropdownVisible.value = false;
// }

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


];
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
    bottom: -0;
    left: 0;
    text-align: center;
    color: white;
    background-color: #0e0e0e89;
    opacity: 1;
    z-index: 1;
    padding: 10px;
}
</style>x``