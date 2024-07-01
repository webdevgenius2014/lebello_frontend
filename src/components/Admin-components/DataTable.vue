<template>
    <div class="flex justify-between px-1 mb-2">
      <div v-if="bulkOption" class="flex">
        <Select
          cusClass="h-[38px] border-boxdark"
          :options="bulkOption"
          showfield="text"
          valueField="value"
          label="Bulk Options"
          v-model="actionSelected"
        />
        <Button class="px-2 py-2 m-auto" @click="applyBulkAction">Apply</Button>
      </div>
      <div class="flex ml-auto">
        <TextInput
          v-if="isSearchAble"
          type="text"
          class="block bg-white mr-2 h-[40px] w-full"
          placeholder="Search"
          v-model="search"
        />
        <Button @click="openModal" class="px-2 py-2">Add Materials</Button>
      </div>
    </div>
    <div class="bg-white">
      <Vue3Datatable
        skin="bh-table-striped bh-table-hover"
        :hasCheckbox="hasCheckbox"
        :loading="loading"
        :rows="filteredRows"
        :columns="cols"
        :paginationInfo="paginationInfo"
        :showNumbersCount="3"
        class="next-prev-pagination"
        :cloneHeaderInFooter="true"
        rowClass=""
        :search="search"
      >
        <template v-for="col in cols" v-if="col?.slot" v-slot:[col.field]="{ row }">
          <slot :name="col.field" :row="row" />
        </template>
      </Vue3Datatable>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Vue3Datatable from '@bhplugin/vue3-datatable';
  import { materialsData } from '@/json/data.js';
  import TextInput from '@/components/Admin-components/form-components/TextInput.vue';
  import Select from '@/components/Admin-components/form-components/Select.vue';
  import Button from '@/components/Admin-components/Buttons/Button.vue';
  
  const bulkOption = ref([]);
  const isSearchAble = ref(false);
  const loading = ref(false);
  const hasCheckbox = ref(false);
  const search = ref('');
  const actionSelected = ref('');
  const cols = ref([
    { field: 'image', title: 'Image' },
    { field: 'name', title: 'Name', filter: true },
    { field: 'description', title: 'Description' },
    { field: 'slug', title: 'Slug' },
    { field: 'count', title: 'Count' },
    { field: 'actions', title: 'Actions' },
  ]);
  const rows = ref(materialsData);
  const actionsFlag = ref(null);
  const modalIsOpen = ref(false);
  
  const openModal = () => {
    modalIsOpen.value = true;
  };
  
  const applyBulkAction = () => {
    // Implement your logic for bulk action here
  };
  
  const handleMouseEnter = (data) => {
    actionsFlag.value = data.value.name;
  };
  
  const handleMouseLeave = () => {
    actionsFlag.value = null;
  };
  
  const isRowHovered = (value) => {
    return actionsFlag.value === value.name;
  };
  </script>
  
  <style scoped>
  .bh-pagesize {
    width: 72px !important;
  }
  </style>
  