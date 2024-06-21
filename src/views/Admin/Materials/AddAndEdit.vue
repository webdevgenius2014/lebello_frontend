<template>
    <form @submit.prevent="form.post(route('store.material'))" class="max-w-[800px]">
        <div class="grid grid-cols-1 mr-5">
            <div>
                <div>
                    <InputLabel for="Name" value="Name" />
                    <TextInput id=" " type="text" class="block w-full mr-2 h-[33px] w-[80%] w-[80%]" v-model="form.name"
                        placeholder="" label="" :message="form.errors.name" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The name is how it appears on your site.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Slug" value="Slug" />
                    <TextInput id=" " type="text" class="block w-full mr-2 h-[33px] w-[80%]" v-model="form.slug"
                        placeholder="" label="" :message="form.errors.slug" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The “slug” is the URL-friendly version of the name. It
                        is usually all lowercase and contains only letters,
                        numbers, and hyphens.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Parent Material" value="Parent Material" />
                    <Dropdown :options="categorie1" v-model="selectedValue" />
                    <p>Selected Value: {{ selectedValue }}</p>

                    <!-- <VueMultiselect v-model="Material" :options="categories" :multiple="true" group-values="options" group-label="name"
                      :group-select="true" track-by="name" label="name" placeholder="Parent Material" ><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                     </VueMultiselect> -->
                    <!-- <select id="parent-material" ref="parentMaterial" @change="updateSelectedValue">
                        <option value="">None</option>
                        <template v-for="category in categorie1" :key="category.id">
                            <option :value="category.id">{{ category.name }}</option>
                            <template v-if="category.options"  v-for="option in category.options" :key="option.value">
                                <option :value="option.id">
                                    <span style="margin-left: 10px;"> &nbsp;&nbsp;&nbsp;&nbsp;{{ option.name }}</span>
                                </option>
                            </template>
                        </template>
                    </select> -->
                   
                    <!-- <VueMultiselect v-model="Material" :options="props.options" :multiple="false" group-values="id" group-label="name"
                        :group-select="true" track-by="id" label="name" placeholder="Parent Material" ><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </VueMultiselect> -->

                    <!-- <select v-model="yellow_banner"
                        class="border border-borderColor rounded-md hover:text-textColor2 px-3 py-1 min-w-[12rem]">
                        <option value="-1">None</option>
                        <optgroup v-for="category in categories" :label="category.name" :key="category.id">
                            <option v-for="option in category.options" :value="option.name" :key="option.name">
                                {{ option.name }}
                            </option>
                        </optgroup>
                    </select> -->
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        Assign a parent term to create a hierarchy. The term
                        Jazz, for example, would be the parent of Bebop and Big
                        Band.
                    </p>
                    <InputError class="mt-2" :message="form.errors.parent_material" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Description" value="Description" />
                    <TextInput id=" " isTextarea="true" rows="4" type="text" class="block w-[180px] mr-2 h-[33px]"
                        v-model="form.description" placeholder="" label="" :message="form.errors.description"
                        autocomplete="current-description" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The description is not prominent by default; however,
                        some themes may show it.
                    </p>
                </div>

                <!-- <div class="mt-4">
                    <InputLabel for="Featured_image" value="Featured_image" />
                    <input id="featured_image" type="file" @input="form.featured_image = $event.target.files[0]" />
                    <InputError class="mt-2" :message="form.errors.featured_image" />
                </div> -->
                <div class="mt-3">
                    <InputLabel for="Material Price" value="Material Price" />
                    <TextInput id=" " type="number" class="block w-full mr-2 h-[33px] w-[80%]"
                        v-model="form.material_price" placeholder="" label="" :message="form.errors.material_price" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The “slug” is the URL-friendly version of the name. It
                        is usually all lowercase and contains only letters,
                        numbers, and hyphens.
                    </p>
                </div>
                <!-- <div class="mt-3">
                    <InputLabel for="Parent Material" value="Display in Material Options" />
                    <Dropdown :options="options" field='name' @optionSelected="handleOptionSelected" />
                    <InputError class="mt-2" :message="form.errors.material_option" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Parent Material" value="Yellow Banner Display On Material Images" />
                    <Dropdown :options="options" field='name' @optionSelected="handleOptionSelected" />
                    <InputError class="mt-2" :message="form.errors.yellow_banner" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Parent Material" value="Show New Badge" />
                    
                    <Dropdown :options="options" field='name' @optionSelected="handleOptionSelected" />
                    <InputError class="mt-2" :message="form.errors.new_badge" />
                </div> -->

                <div class="mt-3">
                    <InputLabel for="Display in Material Options" value="Display in Material Options" />
                    <VueMultiselect placeholder="Display in Material Options" v-model="display_banner"
                        :options="['No', 'Yes']">
                    </VueMultiselect>
                    <!-- <select class="border border-borderColor rounded-md hover:text-textColor2 px-3 py-1 min-w-[12rem]"
                        v-model="form.material_option">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select> -->

                    <InputError class="mt-2" :message="form.errors.material_option" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Yellow Banner Display On Material Images"
                        value="Yellow Banner Display On Material Images" />
                    <VueMultiselect v-model="yellow_banner" deselect-label="Can't remove this value" track-by="name"
                        label="name" placeholder="Yellow Banner Display On Material Images"
                        :options="[{ name: 'No', value: 0 }, { name: 'Yes', value: 1 }]" :searchable="false"
                        :allow-empty="false">
                    </VueMultiselect>

                    <!-- <VueMultiselect
                    placeholder="Yellow Banner Display On Material Images"
                    v-model="form.yellow_banner"
                :options="[{name:'No' , vlue:0},{name:'Yes',value:1}]">    
                     </VueMultiselect> -->
                    <!-- <select class="border border-borderColor rounded-md hover:text-textColor2 px-3 py-1 min-w-[12rem]"
                        v-model="form.yellow_banner">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select> -->

                    <InputError class="mt-2" :message="form.errors.yellow_banner" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Show New Badge" value="Show New Badge" />
                    <VueMultiselect placeholder="Show New Badge" v-model="new_badge1" :options="['No', 'Yes']">
                    </VueMultiselect>
                    <!-- <select class="border border-borderColor rounded-md hover:text-textColor2 px-3 py-1 min-w-[12rem]"
                        v-model="form.new_badge">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select> -->

                    <InputError class="mt-2" :message="form.errors.new_badge" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Label" value="Label" />
                    <TextInput id=" " type="text" class="block w-full mr-2 h-[33px] w-[80%]" v-model="form.label"
                        placeholder="" label="" :message="form.errors.label" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Material Code" value="Material Code" />
                    <TextInput id=" " type="text" class="block w-full mr-2 h-[33px] w-[80%]"
                        v-model="form.material_code" placeholder="" label="" :message="form.errors.material_code" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Group Name" value="Group Name" />
                    <TextInput id=" " type="text" class="block w-full mr-2 h-[33px] w-[80%]" v-model="form.group_name"
                        placeholder="" label="" :message="form.errors.group_name" />
                </div>

                <div class="mt-3">
                    <InputLabel for="Label Background Color" value="Label Background Color" />
                    <div class="flex">
                        <TextInput id=" " type="color" class="block w-full mr-2 h-[33px] w-[20%]"
                            v-model="form.bg_color" placeholder="" label="" />
                        <TextInput id=" " type="text" class="block w-full mr-2 h-[33px] w-[30%]" v-model="form.bg_color"
                            placeholder="" label="" :message="form.errors.bg_color" />
                    </div>
                </div>
                <div class="mt-3">
                    <InputLabel for="Trade Mark Label" value="Trade Mark Label" />
                    <TextInput id=" " type="text" class="block w-full mr-2 h-[33px] w-[80%]"
                        v-model="form.trade_mark_label" placeholder="" label=""
                        :message="form.errors.trade_mark_label" />
                </div>
                <div class="mt-4">
                    <InputLabel for="Featured_image" value="Featured_image" />
                    <!-- <ImageUpload2/> -->
                    <ImageUpload2 @file-selected="handleFileSelected"
                        :accepted-formats="['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx']" />

                    <!-- <input
                            id="featured_image"
                            type="file"
                            @input="
                                form.featured_image = $event.target.files[0]
                            "/> -->
                    <InputError class="mt-2" :message="form.errors.featured_image" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Single Color" value="Single Color" />

                    <!-- <select class="form-control" v-model="form.single_color">
                        <option v-for="color in data.multi_color"    :key="color">{{ color }}</option>
                 
                    </select> -->
                    <VueMultiselect placeholder="Select Single Color" v-model="form.single_color" :options="colors">
                    </VueMultiselect>
                    <InputError class="mt-2" :message="form.errors.single_color" />
                </div>
                <div class="mt-3 multiSelectContainet">
                    <InputLabel for="Multiple Color" value="Multiple Color" />
                    <VueMultiselect :multiple="true" :close-on-select="true" placeholder="Select Multiple Color"
                        v-model="form.multi_color" :options="data[0].multi_color">

                    </VueMultiselect>
                    <!-- <ejs-multiselect class="form-control" id="multiselect" v-model="form.multi_color"
                        :dataSource="data[0].multi_color" placeholder="Select Multi Color"></ejs-multiselect>
                    <InputError class="mt-2" :message="form.errors.multi_color" /> -->
                </div>
                <div class="mt-3">
                    <InputLabel for="Show New Badge 2021" value="Show New Badge 2021" />
                    <VueMultiselect placeholder="Select one" v-model="show_badge" :options="['No', 'Yes']">
                    </VueMultiselect>
                    <!-- <select class="border border-borderColor rounded-md hover:text-textColor2 px-3 py-1 min-w-[12rem]"
                        v-model="form.show_badge_2021">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select> -->
                    <InputError class="mt-2" :message="form.errors.show_badge_2021" />
                </div>
            </div>
        </div>

        <!-- <Button type="submit" @click="handleSubmit" class="ml-0 mt-3 bg-[#2271b1] px-3"> -->
        <!-- <div v-if="props.material.id !== null">
        <span  class="font-light text-[13px]">Update</span>
        </div> -->
        <!-- <div class="font-light  text-[13px]">Submit</div>
        </Button> -->
        <Button type="submit" bg_th_color="text-white bg-[#2271B1] hover:bg-[#0a4b78]"
            class="ml-2 text-sm ml-auto  mt-3 hover:text-white hover: hover:border-[#0a4b78] px-2 py-1">
            Submit</Button>
    </form>
</template>

<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Checkbox from "@/Components/Checkbox.vue";
import VueMultiselect from 'vue-multiselect'
import Button from "@/Components/Buttons/Button.vue";
import TextInput from "@/Components/form-components/TextInput.vue";
import InputError from "src/components/Admin-components/InputError.vue";
import InputLabel from "@/Components/form-components/InputLabel.vue";
// import Dropdown from "@/Components/Dropdown.vue";
import Dropdown from "@/Components/form-components/Dropdown.vue";
import PrimaryButton from "src/components/Admin-components/PrimaryButton.vue";
import ImageUpload2 from "@/Components/form-components/ImageUpload2.vue";
// import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ref, computed } from "vue";

const parentMaterial = ref(null);
const selectedValue = ref('');

const handleFileSelected = (file) => {
    form.featured_image = file;
};

const colors = [
    'Beige',
    'Bronze',
    'Kona',
    'Grey',
    'Orange/Yellow',
    'Blues/Teals',
    'Curacao',
    'Green',
    'Peach',
    'Cream',
    'Titanium',
    'Platinum',
    'Tuscany',
    'Palm',
    'Florida Keys',
    'Mandarin',
    'Nautica Blue',
    'Portofino Blue',
    'Violet',
    'Sunburst'
]

const selectOptions = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' }
      ]

const categories = [
    {
        id: 1118,
        name: "Blue",
        options: [],
    },
    {
        id: 1121,
        name: "Bronze",
        options: [
            { name: "Pixie BR1", id: 1086 },
            { name: "Pixie BR2", id: 1087 },
            { name: "Pixie BR3", id: 1090 },
            { name: "Pixie BR4", id: 1093 },
            // Add other options for Bronze category here
        ],
    },
    // Add other categories here following the same structure
];

const data = [
    {
        multi_color: [
            "Beige",
            "Bronze",
            "Kona",
            "Grey",
            "Orange/Yellow",
            "Blues/Teals",
            "Curacao",
            "Green",
            "Peach",
            "Cream",
            "Titanium",
            "Platinum",
            "Tuscany",
            "Palm",
            "Florida_Keys",
            "Mandarin",
            "Nautica_Blue",
            "Portofino_Blue",
            "Violet",
            "Sunburst",
        ],
    },
];

const updateSelectedValue = () => {
    selectedValue.value = parentMaterial.value.value;
};

const props = defineProps({
    material: {
        type: Object,
        default: {
            parent_material: 0,
            material_option: null,
            yellow_banner: 0,
            new_badge: 0,
            bg_color: "#000",
            show_badge_2021: 0,
        },
    },
    options: {
        type: Object,
        default: () => { },
    },
});
const categorie1 = props.options;
console.log(categorie1);
if (props.material.multi_color) {
    var multi_color = props.material.multi_color.split(",");
}
const form = useForm({
    id: props.material.id,
    name: props.material.name,
    slug: props.material.slug,
    parent_material: props.material.parent_material,
    description: props.material.description,
    featured_image: [],
    material_price: props.material.price,
    material_option: props.material.material_option,
    yellow_banner: props.material.yellow_banner,
    new_badge: props.material.new_badge,
    label: props.material.label,
    material_code: props.material.material_code,
    group_name: props.material.group_name,
    bg_color: props.material.bg_color,
    trade_mark_label: props.material.trade_mark_label,
    single_color: props.material.single_color,
    multi_color: multi_color,
    show_badge_2021: props.material.show_badge_2021,
});

const yellow_banner = ref("");
const display_banner = ref("");
const Material = ref("");
const new_badge1 = ref("");
const show_badge = ref("");

form.display_banner = computed(() => display_banner.value.language)
form.yellow_banner = computed(() => yellow_banner.value.language)

console.log(form.yellow_banner)
</script>

<style>
.e-ddl.e-input-group.e-control-wrapper .e-input {
    font-size: 20px;
    font-family: emoji;
    color: #ab3243;
    background: #000505;
}

.e-ddl.e-input-group.e-control-wrapper .e-input {
    font-size: 20px;
    font-family: emoji;
    color: #ab3243;
    background: #32a5ab;
}

.custom-file-upload {
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
}

.custom-file-upload:hover {
    background-color: #e2e2e2;
}

.multiSelectContainet .multiselect .multiselect__tags .multiselect__tags-wrap .multiselect__tag {
    background-color: #c1c1c1
}

.multiSelectContainet .multiselect .multiselect__tags .multiselect__tags-wrap .multiselect__tag .multiselect__tag-icon::after {
    background-color: #c1c1c1;
    color: rgb(255, 255, 255);
}

/* .multiSelectContainet .multiselect .multiselect__content-wrapper .multiselect__content .multiselect__element
 .multiselect__option--highlight

 {
 background-color: white;
    color: black;
} */
/* .multiSelectContainet .multiselect .multiselect__content-wrapper .multiselect__content .multiselect__element
.multiselect__option--selected
 {
 background-color: white;
    color: black;
}
.multiSelectContainet .multiselect .multiselect__content-wrapper .multiselect__content .multiselect__element
 .multiselect__option--highlight ::after

 {
 background-color: white;
    color: black;
} */

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
.multiselect__option--highlight
