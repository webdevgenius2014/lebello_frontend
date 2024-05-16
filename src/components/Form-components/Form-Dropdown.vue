<template>
    <Menu as="div" class="relative inline-block text-left ">
        <div class="hover:text-orange">
            <MenuButton @click="show"
                class="inline-flex w-[180px]  justify-between mt-2  border bg-white px-3 py-2 text-sm font-semibold text-gray-900  ring-0 "
                :class="{ 'border-b-0': selected }">
                Options
                <ChevronDownIcon class="mr-1 h-5 w-5  text-gray-400" aria-hidden="true" />
            </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class=" right-0 z-10 w-[180px]  border  bg-white  ring-0 ring-black ring-opacity-5 focus:outline-none"
                :class="{ 'border-t-0': selected }">
                <div class="py-1">
                    <template v-for="(menuItem, index)  in menuItems" :key="index">
                        <MenuItem v-slot="{ active }">
                        <a :href="menuItem?.link" class="border-b"
                            :class="[active ? 'text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{
                            menuItem?.label }}</a>
                        </MenuItem>
                    </template>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'

const selected = ref(false)
const menuItems = ref([
    { label: 'Account settings', link: '#' },
    { label: 'Support', link: '#' },
    { label: 'L', link: '#' }
])


function show() {
    selected.value = !selected.value
}
</script>