<template>
    <div>

        <table class=" w-full border border-[#c3c4c7] text-left p-4">
            <thead>
                <tr>
                    <th class="w-1 border-b" v-if="selectable">
                        <input type="checkbox" class="ml-2 rounded " v-model="selectAll" @change="selectAllRows" />
                    </th>
                    <th class="w-20 " v-for="(header, index) in headers" :key="index" :class="header?.width"
                        @click="header?.filter && sortBy(header?.text)">
                        <span class="text-[14px] px-2 font-thin flex items-center"
                            :class="{ 'text-textColor2': header.text === 'Title' || header.text === 'Date' }">
                            {{ header?.text }}
                            <svg v-if="header?.text === 'Title'" class="" width="30px" height="30px" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12.3237 9H7.67626C7.11302 9 6.79751 8.39719 7.14549 7.98592L9.46923 5.23956C9.73949 4.92015 10.2605 4.92015 10.5308 5.23956L12.8545 7.98592C13.2025 8.39719 12.887 9 12.3237 9Z"
                                        :fill="sortField === 'Title' ? (sortOrder === 'asc' ? 'text-gray-800' : 'text-gray-800') : 'text-gray-800'"
                                        :fill-opacity="sortField === 'Title' ? (sortOrder === 'asc' ? 1 : 0.5) : 1">
                                    </path>
                                    <path
                                        d="M7.67626 11H12.3237C12.887 11 13.2025 11.6028 12.8545 12.0141L10.5308 14.7604C10.2605 15.0799 9.73949 15.0799 9.46923 14.7604L7.14549 12.0141C6.79751 11.6028 7.11302 11 7.67626 11Z"
                                        :fill="sortField === 'Title' ? (sortOrder !== 'asc' ? 'text-gray-800' : 'text-gray-800') : 'text-gray-800'"
                                        :fill-opacity="sortField === 'Title' ? (sortOrder !== 'asc' ? 1 : 0.5) : 1">
                                    </path>
                                </g>
                            </svg>
                            <span v-if="header?.text === 'Date'" @click="sortByDate">                               
                                <svg v-if="header?.text === 'Date'" class="" width="30px" height="30px"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M12.3237 9H7.67626C7.11302 9 6.79751 8.39719 7.14549 7.98592L9.46923 5.23956C9.73949 4.92015 10.2605 4.92015 10.5308 5.23956L12.8545 7.98592C13.2025 8.39719 12.887 9 12.3237 9Z"
                                            :fill="sortField === 'Date' ? (sortOrder === 'asc' ? 'text-gray-800' : 'text-gray-800') : '#000000'"
                                            :fill-opacity="sortField === 'Date' ? (sortOrder === 'asc' ? 1 : 0.5) : 1">
                                        </path>
                                        <path
                                            d="M7.67626 11H12.3237C12.887 11 13.2025 11.6028 12.8545 12.0141L10.5308 14.7604C10.2605 15.0799 9.73949 15.0799 9.46923 14.7604L7.14549 12.0141C6.79751 11.6028 7.11302 11 7.67626 11Z"
                                            :fill="sortField === 'Date' ? (sortOrder !== 'asc' ? 'text-gray-800' : 'text-gray-800') : '#000000'"
                                            :fill-opacity="sortField === 'Date' ? (sortOrder !== 'asc' ? 1 : 0.5) : 1">
                                        </path>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in filteredData" :key="rowIndex" :class="{
                    'bg-gray-100': rowIndex % 2 === 0,
                    'bg-white': rowIndex % 2 !== 0,
                }">
                    <td class="" v-if="selectable">
                        <input type="checkbox" class="ml-2 rounded flex " v-model="selectedRows" :value="rowIndex" />
                    </td>
                    <td class=" px-2" v-for="(cell, cellIndex) in row" :key="cellIndex" @mouseenter="hoverd = rowIndex"
                        @mouseleave="hoverd = null">
                        <div v-if="
                            cell && (cell?.startsWith('http://') || cell?.startsWith('https://'))
                        " class="">
                            <img :src="cell" alt="img" />
                        </div>
                        <div v-else class="flex flex-col items-start min-h-16 pt-2">
                            <p class="" :class="{
                                ' font-light text-textColor2':
                                    cellIndex === 0,
                            }">
                                {{ cell }}
                            </p>
                            <p v-if="hoverd === rowIndex && cellIndex === 0" class="text-[12px] text-textColor2">
                                <a :href="route('edit.swatch', rowIndex)">
                                    Edit</a>
                                <span class="mx-1">|</span>
                                <a onclick="return confirm('Are you sure you want to delete?')"
                                    :href="route('delete.swatch', rowIndex)">trash</a>
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tr>
                <th class="w-1 border-b" v-if="selectable">
                    <input type="checkbox" class="ml-2 rounded " v-model="selectAll" @change="selectAllRows" />
                </th>
                <th class="w-20 " v-for="(header, index) in headers" :key="index" :class="header?.width"
                        @click="header?.filter && sortBy(header?.text)">
                        <span class="text-[14px] px-2 font-thin flex items-center"
                            :class="{ 'text-textColor2': header.text === 'Title' || header.text === 'Date' }">
                            {{ header?.text }}
                            <svg v-if="header?.text === 'Title'" class="" width="30px" height="30px" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12.3237 9H7.67626C7.11302 9 6.79751 8.39719 7.14549 7.98592L9.46923 5.23956C9.73949 4.92015 10.2605 4.92015 10.5308 5.23956L12.8545 7.98592C13.2025 8.39719 12.887 9 12.3237 9Z"
                                        :fill="sortField === 'Title' ? (sortOrder === 'asc' ? 'text-gray-800' : 'text-black') : '#000000'"
                                        :fill-opacity="sortField === 'Title' ? (sortOrder === 'asc' ? 1 : 0.5) : 1">
                                    </path>
                                    <path
                                        d="M7.67626 11H12.3237C12.887 11 13.2025 11.6028 12.8545 12.0141L10.5308 14.7604C10.2605 15.0799 9.73949 15.0799 9.46923 14.7604L7.14549 12.0141C6.79751 11.6028 7.11302 11 7.67626 11Z"
                                        :fill="sortField === 'Title' ? (sortOrder !== 'asc' ? 'text-gray-800' : 'text-black') : '#000000'"
                                        :fill-opacity="sortField === 'Title' ? (sortOrder !== 'asc' ? 1 : 0.5) : 1">
                                    </path>
                                </g>
                            </svg>
                            <span v-if="header?.text === 'Date'" @click="sortByDate">
                                <i v-if="sortField === 'Date' && sortOrder === 'asc'" class="fas fa-sort-up"></i>
                                <i v-else-if="sortField === 'Date' && sortOrder === 'desc'"
                                    class="fas fa-sort-down"></i>
                                <i v-else class="fas fa-sort"></i>
                                <svg v-if="header?.text === 'Date'" class="" width="30px" height="30px"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M12.3237 9H7.67626C7.11302 9 6.79751 8.39719 7.14549 7.98592L9.46923 5.23956C9.73949 4.92015 10.2605 4.92015 10.5308 5.23956L12.8545 7.98592C13.2025 8.39719 12.887 9 12.3237 9Z"
                                            :fill="sortField === 'Date' ? (sortOrder === 'asc' ? 'text-gray-800' : 'text-black') : '#000000'"
                                            :fill-opacity="sortField === 'Date' ? (sortOrder === 'asc' ? 1 : 0.5) : 1">
                                        </path>
                                        <path
                                            d="M7.67626 11H12.3237C12.887 11 13.2025 11.6028 12.8545 12.0141L10.5308 14.7604C10.2605 15.0799 9.73949 15.0799 9.46923 14.7604L7.14549 12.0141C6.79751 11.6028 7.11302 11 7.67626 11Z"
                                            :fill="sortField === 'Date' ? (sortOrder !== 'asc' ? 'text-gray-800' : 'text-black') : '#000000'"
                                            :fill-opacity="sortField === 'Date' ? (sortOrder !== 'asc' ? 1 : 0.5) : 1">
                                        </path>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </th>
            </tr>
        </table>
    </div>
    
</template>

<script setup>
import { ref, computed } from "vue";

const hoverd = ref(null);
const props = defineProps({
    headers: Array,
    data: Array,
    selectable: {
        type: Boolean,
        default: false,
    },
});

const selectedRows = ref([]);
const selectAll = ref(false);

const rows = computed(() => {
    return props.data.map((item) => Object.values(item));
});

function selectAllRows() {
    if (selectAll.value) {
        selectedRows.value = Array.from(
            { length: props.data.length },
            (_, i) => i
        );
    } else {
        selectedRows.value = [];
    }
}

const titleFilter = ref('');
const dateFilter = ref(null);

const sortField = ref('Title');
const sortOrder = ref('asc');

const filteredData = computed(() => {
    return rows.value.filter(row => {
        return (
            (titleFilter.value === '' || row[0].toLowerCase().includes(titleFilter.value.toLowerCase()))
        );
    }).sort((a, b) => {
        const index = props.headers.findIndex(header => header.text === sortField.value);
        if (sortOrder.value === 'asc') {
            return a[index] > b[index] ? 1 : -1;
        } else {
            return a[index] < b[index] ? 1 : -1;
        }
    });
});

const sortBy = (field) => {
    if (field === sortField.value) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortField.value = field;
        sortOrder.value = 'asc';
    }
};

const sortByDate = () => {
    if (sortField.value === 'Date') {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortField.value = 'Date';
        sortOrder.value = 'asc';
    }
};
</script>

<style scoped>
</style>
