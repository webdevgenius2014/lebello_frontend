<template>
  <Head>
    <title>Matireal</title>
  </Head>
    <div>
      <h1 class="mr-3 text-[23px] text-[#1d2327] mb-7">Materials</h1>
      <div class="grid grid-cols-12">
        <div class="col-span-4 ...">
          <p class="text-[14.6px] font-mono font-[500] mt-10 mb-3">Add New Material</p>   
            <AddAndEdit :options = props.options />     
        </div>
        <div class="col-span-8 ...">
          <div class="flex content-center items-center float-right">
            <TextInput
              id="title"
              type="text"
              class="block w-74 h-[31px]"
              v-model="titleFilter"
              placeholder="Search Material"
              label=""
            />
            <Button @click="handleSubmit">Search Material</Button>
          </div>
          <br />
          <div class="flex mt-5 justify-between">
            <div class="flex items-center">
              <Select :options="bulkOption" showfield="text" valueField="value" label="select Action"
              v-model="selectedOption" />          
               <Button @click="handleSubmit" class="px-2">Apply</Button>
            </div>
            <!-- pagination -->
          </div>
          <div class="mt-2">
            <table class="w-full border border-[#c3c4c7] text-left p-4 bg-white">
              <thead>
                <tr>
                  <th class="w-1 border-b" v-if="selectable">
                    <input type="checkbox" class="ml-2 rounded" v-model="selectAll" @change="selectAllRows" />
                  </th>
                  <th
                    v-for="(header, index) in tableHeaders"
                    :key="index"
                    :class="header.width"
                    @click="header.filter && sortBy(header.text)"
                    class="cursor-pointer"
                  >
                    <span class="text-[14px] px-2 font-thin flex items-center text-textColor2">
                      {{ header.text }}
                      <svg
                        v-if="header.filter"
                        :class="{'rotate-180': sortField === header.text && sortOrder === 'desc'}"
                        class="ml-2 transform transition-transform duration-200"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, rowIndex) in filteredData"
                  :key="rowIndex"
                    class="h-28  "
                  :class="{
                    'bg-gray-100': rowIndex % 2 === 0,
                    'bg-white': rowIndex % 2 !== 0,
                    
                  }"
                  @mouseenter="hoverd = rowIndex"
                        @mouseleave="hoverd = null"
                >
                  <td v-if="selectable">
                  <div  class="flex flex-col items-start min-h-24 pt-2 mr-2">
                    <input type="checkbox" class="ml-2 rounded flex" v-model="selectedRows" :value="rowIndex" />
                  </div>
                  </td>
                  <td class="px-2" >
                    <div v-if="row.featured_image" class="flex flex-col items-start min-h-24 pt-2">
                      <img width="80%" height="80%" :src="`/${row.featured_image}`" />
                    </div>
                    <div v-else class="flex flex-col items-start min-h-24 pt-2" >
                      <!-- <img width="80%" height="80%" src="@/public/materials/default.png" /> -->
                    </div>
                  </td>
                  <td class="text-textColor2" >
                    <div  class="flex flex-col items-start min-h-24 " >
                  {{ row.name }}
                    <p v-if="hoverd === rowIndex " class="text-[12px] text-textColor2">
                        <router-link to="" href="route('edit.material', row.id)"> Edit</router-link>
                                <span class="mx-1">|</span>
                                <a class="text-[#b32d2e]" onclick="return confirm('Are you sure you want to delete?')"
                                href="route('delete.material', row.id)">Delete</a>
                            </p>
                  </div>
                  </td>
                  <td>
                  <div class="flex flex-col items-start min-h-24 pt-0 text-[#50575e] text-[13px] ">
                   {{ row.description }}
                  </div>
                   </td>
                  <td >
                  <div class="flex flex-col items-start min-h-24 pt-0 text-[#50575e] text-[13px]">
                  {{ row.slug }}
                  </div>
                  </td>
                  <td>
                 <div class="flex flex-col items-start min-h-24 pt-0 text-[#50575e] text-[13px]">
                  0
                 </div>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th class="w-1 border-b" v-if="selectable">
                    <input type="checkbox" class="ml-2 rounded" v-model="selectAll" @change="selectAllRows" />
                  </th>
                  <th
                    v-for="(header, index) in tableHeaders"
                    :key="index"
                    :class="header.width"
                    @click="header.filter && sortBy(header.text)"
                    class="cursor-pointer"
                  >
                    <span class="text-[14px] px-2 font-thin flex items-center text-textColor2">
                      {{ header.text }}
                      <svg
                        v-if="header.filter"
                        :class="{'rotate-180': sortField === header.text && sortOrder === 'desc'}"
                        class="ml-2 transform transition-transform duration-200"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="flex items-center mt-3">
            <Select :options="bulkOption" showfield="text" valueField="value"  label="select Action"
            v-model="selectedOption" /> 
            {{  selectedOption}}      
               <Button @click="handleSubmit" class="px-2">Apply</Button>
            </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script setup>

import LinkBtn from "@/components/Admin-components/Buttons/LinkBtn.vue";
import Button from "@/components/Admin-components/Buttons/Button.vue";
import Select from "@/components/Admin-components/form-components/Select.vue";
import TextInput from "@/components/Admin-components/form-components/TextInput.vue";
import AddAndEdit from "./AddAndEdit.vue";
import { ref, computed ,watch } from "vue";
import { bulkOption,tableHeaders } from "@/json/data";

const props = defineProps({
  materials: {
    type: Array,
    default: () => [],
  },
  options:{
    type: Array,
    default: () => [],
  }
});

const hoverd = ref(null);
const titleFilter = ref("");
const sortField = ref("Name");
const sortOrder = ref("asc");


const editClick =ref(false);
const editData = ref(null);
const HandleEdit=(data)=>{
    editData.value = {...data} 
    editClick.value = true;
    console.log({...editData.value})
}

const filteredData = computed(() => {
  return props.materials
    .filter((row) => {
      return titleFilter.value === "" || row.name.toLowerCase().includes(titleFilter.value.toLowerCase());
    })
    .sort((a, b) => {
      const sortKey = sortField.value.toLowerCase();
      if (sortOrder.value === "asc") {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    });
});

function handleSubmit() {
  console.log("run successfully");
}

const selectedOption = ref("");
const handleOptionSelected = (option) => {
  selectedOption.value = option;
  console.log(option);
};

const selectable = ref(true);
const selectedRows = ref([]);
const selectAll = ref(false);

function selectAllRows() {
  if (selectAll.value) {
    selectedRows.value = Array.from({ length: props.materials.length }, (_, i) => i);
  } else {
    selectedRows.value = [];
  }
}

const sortBy = (field) => {
  if (field === sortField.value) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortField.value = field;
    sortOrder.value = "asc";
  }
};
</script>
