<template>
    <AdminLayout>
      <h1 class="mr-3 text-[23px] text-[#1d2327] mb-7">Materials</h1>
      <div class="grid grid-cols-12">
        <div class="col-span-12 ...">
          <p class="text-[14.6px] font-semibold mt-10 mb-3">Edit New Material</p>
            <div>
          <template v-if="props.material !== null" >
            <AddAndEdit :material='props.material' :isEditClick="editClick"  />
          </template>  
            </div>
        </div>  
      </div>
    </AdminLayout>
  </template>
  
  <script setup>

import AdminLayout from "@/Layouts/AdminLayout.vue";
// import LinkBtn from "@/Components/Admin-components/Buttons/LinkBtn.vue";

import AddAndEdit from "./AddAndEdit.vue";
import { ref, computed } from "vue";

const props = defineProps({
  material: {
    type: Object,
    default: () => {},
  },
});


</script>
