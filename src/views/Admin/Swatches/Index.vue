<template>
  <AdminLayout>
    <div class="px-3">
      <div class="flex mb-1">
        <h1 class="mr-3 text-[23px] text-[#1d2327]">Material Options</h1>
        <span>
          <LinkBtn click="route('add.swatches')" :buttonText="'Add New Swatches'" />
        </span>
      </div>
      <form>
        <div class="flex justify-between mt-4">
          <ul class="flex text-[13px] text-textColor2">
            <li>
              <a href="#" aria-current="page">All <span class="count">(8)</span></a>
            </li>
            <li class="mx-1">|</li>
            <li>
              <a href="#">Published <span class="count">(8)</span></a>
            </li>
          </ul>
          <div class="flex content-center items-center">
            <TextInput
              id="title"
              type="text"
              class="block w-74 mr-2 h-[31px]"
              v-model="username"
              placeholder="Search Swatches"
              lable=""
            />
            <Button @click="handleSubmit"class="ml-0 px-2"> Search Swatches </Button>
          </div>
        </div>
      </form>
      <div class="flex justify-between">
        <div class="flex">
          <div class="flex items-center mr-5 gap-2">
            <Dropdown
              :options="bulkOption"
              field="text"
              @optionSelected="handleOptionSelected"
            />
            <Button @click="handleSubmit" class="ml-0 px-2">Apply</Button>
          </div>
          <div class="flex items-center">
            <Dropdown
              :options="menuItems"
              field="text"
              @optionSelected="handleOptionSelected"
            />
            <Button @click="handleSubmit" class=" px-2">Filter</Button>
          </div>
        </div>
        <p class="inline-flex items-center justify-between text-gray-800 text-sm">
          2 items
        </p>
      </div>
      <div class="mt-2">
        <table class="w-full border border-[#c3c4c7] text-left p-4 bg-white">
          <thead>
            <tr>
              <th class="w-1 border-b" v-if="selectable">
                <input
                  type="checkbox"
                  class="ml-2 rounded"
                  v-model="selectAll"
                  @change="selectAllRows"
                />
              </th>
              <th
                v-for="(header, index) in tableHeaders"
                :key="index"
                :class="header.width"
                @click="header.filter && sortBy(header.text)"
                class="cursor-pointer"
              >
                <span
                  class="text-[14px] px-2 font-thin flex items-center text-textColor2"
                >
                  {{ header.text }}
                  <svg
                    v-if="header.filter"
                    :class="{
                      'rotate-180': sortField === header.text && sortOrder === 'desc',
                    }"
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
              v-for="(row, rowIndex) in formattedDates"
              :key="rowIndex"
              class="h-28"
              :class="{
                'bg-gray-100': rowIndex % 2 === 0,
                'bg-white': rowIndex % 2 !== 0,
              }"
              @mouseenter="hoverd = rowIndex"
              @mouseleave="hoverd = null"
            >
              <td v-if="selectable">
              <div class="flex flex-col items-start min-h-20 mt-2">
                <input
                  type="checkbox"
                  class="ml-2 rounded flex"
                  v-model="selectedRows"
                  :value="rowIndex"
                />
              </div>
              </td>

              <td class="text-textColor2">
                <div class="flex flex-col items-start min-h-20">
                  {{ row.title }}
                  <p v-if="hoverd === rowIndex" class="text-[12px] text-textColor2">
                    <a :href="route('edit.swatch', row.id)"> Edit</a>
                    <span class="mx-1">|</span>
                    <a class="text-[#b32d2e]"
                      onclick="return confirm('Are you sure you want to permanently delete?')"
                      :href="route('delete.swatch', row.id)"
                      >Delete</a
                    >
                  </p>
                </div>
              </td>
              <td>
                <div
                  class="flex flex-col items-start min-h-20 pt-0 text-[#50575e] text-[13px]"
                >
                  {{ row.formattedDate }}
                </div>
              </td>
              <td>
                <div v-if="row.featured_image" class="flex flex-col items-start min-h-20">
                  <img width="70px" height="70px" :src="`/${row.featured_image}`" />
                </div>
                <div v-else class="flex flex-col items-start min-h-20 pt-2">
                  <img width="70px" height="70px" src="../../../../public/logo-header4.png" />
                </div>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th class="w-1 border-b" v-if="selectable">
                <input
                  type="checkbox"
                  class="ml-2 rounded"
                  v-model="selectAll"
                  @change="selectAllRows"
                />
              </th>
              <th
                v-for="(header, index) in tableHeaders"
                :key="index"
                :class="header.width"
                @click="header.filter && sortBy(header.text)"
                class="cursor-pointer"
              >
                <span
                  class="text-[14px] px-2 font-thin flex items-center text-textColor2"
                >
                  {{ header.text }}
                  <svg
                    v-if="header.filter"
                    :class="{
                      'rotate-180': sortField === header.text && sortOrder === 'desc',
                    }"
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
      <!-- <div class="mt-2">  
        <TableComponent :headers="tableHeaders" :data="tableData" :selectable="true" >
        </TableComponent>
      </div> -->
      <div class="flex items-center mr-5  mt-3">
        <Dropdown
          :options="bulkOption"
          field="text"
          @optionSelected="handleOptionSelected"
        />
        <Button @click="handleSubmit" class="px-2"> Apply </Button>
      </div>
    </div>

    <!-- <table class="min-w-full">
            <thead>
                <tr>
                    <th scope="col">S no.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Thumbs</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="bg-white text-center">
                <tr v-for="(swatch, key) in swatches">
                    <td scope="col">{{ key + 1 }}</td>
                    <td scope="col">{{ swatch.title }}</td>
                    <td scope="col">{{ swatch.created_at }}</td>
                    <td scope="col">
                        <img
                            width="20%"
                            height="20%"
                            :src="`/${swatch.featured_image}`"
                        />
                    </td>
                    <td scope="col">
                        <a :href="route('edit.swatch', swatch.id)"> Edit</a>
                        <a
                            onclick="return confirm('Are you sure you want to delete?')"
                            :href="route('delete.swatch', swatch.id)"
                        >
                            Delete</a
                        >
                    </td>
                </tr>
            </tbody>
        </table> -->
  </AdminLayout>
</template>

<script setup>
// import LinkBtn from "@/Components/Admin-components/Buttons/LinkBtn.vue";
import Button from "@/components/Admin-components/Buttons/Button.vue";
import Dropdown from "@/components/Admin-components/form-components/Dropdown.vue";
import TextInput from "@/components/Admin-components/form-components/TextInput.vue";
// import TableComponent from "@/components/Admin-components/TableComponent.vue";
import { ref, computed } from "vue";

const username = ref("");

const bulkOption = [
  { text: "Bulk Action", value: "dashboard" },
  { text: "Edit", value: "settings" },
  { text: "Move to trash", value: "earnings" },
];
const menuItems = [
  { text: "All Dates", v9alue: "dashboard" },
  { text: "May 2023", v9alue: "dashboard" },
    { text: "July 2016", value: "settings" },
    { text: "March 2014", value: "signout" },
];

const tableHeaders = [
  { text: "Title", width: "w-64", filter: true },
  { text: "Date", width: "w-[20px]", filter: true },
  { text: "Thumbs", width: "w-64", filter: false },
];
const tableData = [
  {
    Title: "Surface Tex",
    Date: "2016/07/10",
    Thumbs:
      "http://fur.lebello.com/wp-content/uploads/2016/07/Surface-Tex-Color-05-50x50.png",
  },
  {
    Title: "RopeTek",
    Date: "2024/02/10",
    Thumbs:
      "http://fur.lebello.com/wp-content/uploads/2016/02/Ropetek-Lebello-1-50x50.png",
  },
  {
    Title: "RopeTek",
    Date: "2012/02/10",
    Thumbs:
      "http://fur.lebello.com/wp-content/uploads/2016/02/Ropetek-Lebello-1-50x50.png",
  },
];

const selectedOption = ref("");
const handleOptionSelected = (option) => {
  selectedOption.value = option;
  console.log(option);
};

// defineLayout(Layout)
const props = defineProps({
  swatches: {
    type: Object,
    default: {},
  },
});

// table component
const hoverd = ref(null);
const titleFilter = ref("");
const sortField = ref("Name");
const sortOrder = ref("asc");

const editClick = ref(false);
const editData = ref(null);
const HandleEdit = (data) => {
  editData.value = { ...data };
  editClick.value = true;
  console.log({ ...editData.value });
};

const filteredData = computed(() => {
  return tableData
    .filter((row) => {
      return (
        titleFilter.value === "" ||
        row.name.toLowerCase().includes(titleFilter.value.toLowerCase())
      );
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

const selectable = ref(true);
const selectedRows = ref([]);
const selectAll = ref(false);

function selectAllRows() {
  if (selectAll.value) {
    selectedRows.value = Array.from({ length: props.swatches.length }, (_, i) => i);
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

const formattedDates = computed(() =>
filteredData.value.map((item) => {

    if (!item.updated_at) return { ...item, formattedDate: 'Invalid date' };

    // Parse the ISO string into a Date object
    const date = new Date(item.updated_at);

    if (isNaN(date.getTime())) return { ...item, formattedDate: 'Invalid date' };

    // Get the parts of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;

    // Construct the formatted string
    const formattedDate = `Published ${year}/${month}/${day} at ${formattedHours}:${minutes} ${ampm}`;

    return { ...item, formattedDate };
  })
);
</script>
