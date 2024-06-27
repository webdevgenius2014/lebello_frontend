<template>
  <div :id="id" class="mx-auto">
    <div class="tabs w-full">
      <div class="flex font-semibold text-gray-700 bg-gray-300">
        <div v-for="(tab, index) in tabs" :key="index" class="tab flex-1 text-center cursor-pointer" :class="{
          'bg-white': selectedTab === index,
          'bg-gray-100 hover:bg-AliceBlue': selectedTab !== index,
        }" @click="selectTab(index)">
          <span>{{ tab.header }}</span>
        </div>
      </div>
      <div v-if=" tabs[selectedTab].header === 'Most Use'" class="bg-white w-full ">
        <div v-for="(tab, index) in tabs" :key="index" class="mx-2">
        <CheckBox v-if=" tab.header === 'Most Use'" v-for="(tab, index) in tab.content" :checked="isChecked" @update:checked="updateChecked"
        :label="tab.name" v-model="isChecked" class="" />
        </div>
        {{tabs.content}}
      </div>
      <div v-if=" tabs[selectedTab].header === 'All Material'" class="bg-white w-full ">
        <div v-for="(tab, index) in tabs" :key="index">
        <div v-for="(item, i) in tab.content" :key="i" class="">
        <Accordion v-if="tab.header === 'All Material'" open="false" header="Description" :checkBox="true">
        <div class="px-8" >
        <CheckBox v-if="item.subList" v-for="(subItem, j) in item.subList" :key="j" :checked="isChecked" @update:checked="updateChecked"
        :label="subItem.name" v-model="isChecked" class="" />
        </div>
        </Accordion>
        </div>
        </div>
        {{tabs.content}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Accordion from "@/components/Admin-components/Accordion.vue";
import CheckBox from "@/components/Admin-components/form-components/CheckBox.vue";

const props = defineProps({
  id: String,
  initialTabs: Array,
});

const tabs = ref(props.initialTabs);

const selectedTab = ref(0);

const selectTab = (index) => {
  selectedTab.value = index;
};
</script>

<style scoped></style>
