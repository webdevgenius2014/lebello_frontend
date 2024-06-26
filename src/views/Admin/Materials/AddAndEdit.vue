<template>
    <form @submit.prevent="handleSubmit" class="max-w-[800px]">
        <div class="grid grid-cols-1 mr-5">
            <div>
                <div>
                    <InputLabel for="Name" value="Name" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]" name="Name" v-model="form.name"
                        placeholder="" label="" :message="errors?.name" @update:model="clearError(errors, 'name')" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The name is how it appears on your site.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Slug" value="Slug" />
                    <TextInput  type="text" class="block  mr-2 h-[33px] w-[80%]" v-model="form.slug"
                        placeholder="" label="" :message="errors?.slug" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The “slug” is the URL-friendly version of the name. It is usually all lowercase and
                        contains only letters, numbers, and hyphens.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Parent Material" value="Parent Material" />
                    <Select :options="parentMaterial" showfield="name" valueField="value" label="Select an option"
                        v-model="form.parent_material" />
                        <p class="text-sm text-[#646970] text-[11.5px]">
                            Assign a parent term to create a hierarchy. The term Jazz, for example, would be the
                            parent of Bebop and Big Band.
                        </p>
                        <p>Selected Value: {{ form.parent_material }}</p>
                    <InputError class="mt-2" :message="errors?.parent_material" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Description" value="Description" />
                    <TextInput  :isTextarea="true" :rows="4" type="text" class="block w-[180px] mr-2 h-[33px]"
                        v-model="form.description" placeholder="" label="" :message="errors?.description"
                        autocomplete="current-description" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The description is not prominent by default; however, some themes may show it.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Material Price" value="Material Price" />
                    <TextInput  type="number" class="block mr-2 h-[33px] w-[80%]"
                        v-model="form.material_price" placeholder="" label="" :message="errors?.material_price" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The “slug” is the URL-friendly version of the name. It is usually all lowercase and
                        contains only letters, numbers, and hyphens.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Display in Material Options" value="Display in Material Options" />
                    <Select :options="trueFalse" showfield="name" valueField="value" 
                      label="Select an option" v-model="form.material_option" />
                    <InputError class="mt-2" :message="errors?.material_option" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Yellow Banner Display On Material Images"
                        value="Yellow Banner Display On Material Images" />
                    <Select :options="trueFalse" showfield="name" valueField="value" 
                      label="Select an option" v-model="form.yellow_banner" />
                    
                    <InputError class="mt-2" :message="errors?.yellow_banner" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Show New Badge" value="Show New Badge" />
                    <Select :options="trueFalse" showfield="name" valueField="value" 
                      label="Select an option" v-model="form.new_badge" />
                    <InputError class="mt-2" :message="errors?.new_badge" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Label" value="Label" />
                    <TextInput  type="text" class="block  mr-2 h-[33px] w-[80%]" v-model="form.label"
                        placeholder="" label="" :message="errors?.label" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Material Code" value="Material Code" />
                    <TextInput  type="text" class="block mr-2 h-[33px] w-[80%]"
                        v-model="form.material_code" placeholder="" label="" :message="errors?.material_code" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Group Name" value="Group Name" />
                    <TextInput  type="text" class="block mr-2 h-[33px] w-[80%]" v-model="form.group_name"
                        placeholder="" label="" :message="errors?.group_name" />
                </div>

                <div class="mt-3">
                    <InputLabel for="Label Background Color" value="Label Background Color" />
                    <div class="flex">
                        <TextInput  type="color" class="block  mr-2 h-[33px] w-[20%]"
                            v-model="form.bg_color" placeholder="" label="" :vlaue="form.bg_color"/>
                        <TextInput  type="text" class="block  mr-2 h-[33px] w-[30%]" v-model="form.bg_color" :vlaue="form.bg_color"
                            placeholder="" label="" :message="errors?.bg_color" />
                    </div>
                </div>
                <div class="mt-3">
                    <InputLabel for="Trade Mark Label" value="Trade Mark Label" />
                    <TextInput  type="text" class="block  mr-2 h-[33px] w-[80%]"
                        v-model="form.trade_mark_label" placeholder="" label="" :message="errors?.trade_mark_label" />
                </div>
                <div class="mt-4">
                    <InputLabel for="Featured_image" value="Featured_image" />
                    <!-- <ImageUpload2/> -->
                    <ImageUpload2 @file-selected="handleFileSelected" :accepted-formats="['jpg', 'jpeg', 'png']" />

                    <!-- <input
                            id="featured_image"
                            type="file"
                            @input="
                                form.featured_image = $event.target.files[0]
                            "/> -->
                    <InputError class="mt-2" :message="errors?.featured_image" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Single Color" value="Single Color" />
                    <Select :options="colors" showfield="name" valueField="value" 
                    label="Select an option" v-model="form.single_color" />
                    <InputError class="mt-2" :message="errors.single_color" />
                </div>
                <div class="mt-3 multiSelectContainet">
                    <InputLabel for="Multiple Color" value="Multiple Color" />
                    <Select :options="colors" showfield="name" valueField="value" isMultiSelect 
                    label="Select an option" v-model="form.single_color" />
                   
                    <InputError class="mt-2" :message="errors?.multi_color" /> 
                </div>
                <div class="mt-3">
                    <InputLabel for="Show New Badge 2021" value="Show New Badge 2021" />
                    <Select :options="trueFalse" showfield="name" valueField="value" 
                      label="Select an option" v-model="form.show_badge_2021" />
                    <InputError class="mt-2" :message="errors?.show_badge_2021" />
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
            class=" text-sm ml-auto mt-3 hover:text-white hover: hover:border-[#0a4b78] px-2 py-1">
            Submit</Button>
    </form>
    <!-- <multi-select
      label="Select Items:"
      :options="selectOptions"
      v-model="selectedItems"
    /> -->
    <!-- <multi-select
      :options="colors"
      showfield="name" 
      valueField="value" 
      label="Select an option"
      v-model="form.multi_color"
    ></multi-select> -->
</template>

<script setup>
import MultiSelect from '@/components/Admin-components/form-components/MultiSelect.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Checkbox from '@/components/Admin-components/form-components/CheckBox.vue'
// import VueMultiselect from 'vue-multiselect'
import Button from '@/components/Admin-components/Buttons/Button.vue'
import TextInput from '@/components/Admin-components/form-components/TextInput.vue'
import InputError from '@/components/Admin-components/InputError.vue'
import InputLabel from '@/components/Admin-components/form-components/InputLabel.vue'
import Select from '@/components/Admin-components/form-components/Select.vue'
import PrimaryButton from '@/components/Admin-components/Buttons/PrimaryButton.vue'
import ImageUpload2 from '@/components/Admin-components/form-components/ImageUpload2.vue'
import { useRoute } from 'vue-router'
import { ref, computed, watch ,watchEffect } from 'vue'
import {trueFalse,colors,parentMaterial} from '@/json/data'
// const selectOptions = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ];
const selectedItems = ref([]);

// Example usage of selectedItems value
watchEffect(() => {
  console.log('Selected items:', selectedItems.value);
});

const selectedValue = ref('')
const route = useRoute()
const swatchId = ref(route.params.id)
const errors = ref({})
watch(
    () => route.params.id,
    (newId) => {
        swatchId.value = newId
    }
)

const handleFileSelected = (file) => {
    form.featured_image = file
}
const SelectOptions = ref([
    { id: 1, name: 'Option 1', parent_material: 1, value: '1' },
    { id: 2, name: 'Option 2', parent_material: 0, value: '2' },
    { id: 3, name: 'Option 3', parent_material: 1, value: '3' }
])

// const selectOptions = [
//     { value: '1', label: 'Option 1' },
//     { value: '2', label: 'Option 2' },
//     { value: '3', label: 'Option 3' }
// ]
const categories = [
    {
        id: 1118,
        name: 'Blue',
        options: []
    },
    {
        id: 1121,
        name: 'Bronze',
        options: [
            { name: 'Pixie BR1', id: 1086 },
            { name: 'Pixie BR2', id: 1087 },
            { name: 'Pixie BR3', id: 1090 },
            { name: 'Pixie BR4', id: 1093 }
            // Add other options for Bronze category here
        ]
    }
    // Add other categories here following the same structure
]

const data = [
    {
        multi_color: [
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
            'Florida_Keys',
            'Mandarin',
            'Nautica_Blue',
            'Portofino_Blue',
            'Violet',
            'Sunburst'
        ]
    }
]

// const parentMaterial = ref(null)
const updateSelectedValue = () => {
    selectedValue.value = parentMaterial.value.value
}

const props = defineProps({
    material: {
        type: Object,
        default: {
            parent_material: 0,
            material_option: null,
            yellow_banner: 0,
            new_badge: 0,
            bg_color: '#000',
            show_badge_2021: 0
        }
    },
    options: {
        type: Object,
        default: () => { }
    }
})
const categorie1 = props.options
console.log(categorie1)
if (props.material.multi_color) {
    var multi_color = props.material.multi_color.split(',')
}
const material = {}
const form = ref({
    id: material?.id || '',
    name: material?.name || '',
    slug: material?.slug || '',
    parent_material: material?.parent_material || '',
    description: material?.description || '',
    featured_image: [],
    material_price: material?.price || '',
    material_option: material?.material_option || '',
    yellow_banner: material?.yellow_banner || '',
    new_badge: material?.new_badge || '',
    label: material?.label || '',
    material_code: material?.material_code || '',
    group_name: material?.group_name || '',
    bg_color: material?.bg_color || '',
    trade_mark_label: material?.trade_mark_label || '',
    single_color: material?.single_color || '',
    multi_color: material?.multi_color || '',
    show_badge_2021: material?.show_badge_2021 || '',
})

const yellow_banner = ref('')
const display_banner = ref('')
const Material = ref('')
const new_badge1 = ref('')
const show_badge = ref('')

form.display_banner = computed(() => display_banner.value.language)
form.yellow_banner = computed(() => yellow_banner.value.language)

console.log(form.yellow_banner)

const validateForm = () => {
    let isValid = true
    errors.value = {}

    if (!form.value.email) {
        errors.value.email = 'Email is required'
        isValid = false
    }

    if (!form.value.password) {
        errors.value.password = 'Password is required'
        isValid = false
    }

    return isValid
}

const handleSubmit = async () => {
    try {
        if (validateForm()) {
            processing.value = true
            const res = await axios.post('/login', {})
            const user = { ...form.value }
            router.push('/admin')
        }
    } catch (e) {
        console.error('Error material add edit in:', e)
    } finally {
        processing.value = false
    }
}
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
    background-color: #c1c1c1;
}

.multiSelectContainet .multiselect .multiselect__tags .multiselect__tags-wrap .multiselect__tag .multiselect__tag-icon::after {
    background-color: #c1c1c1;
    color: rgb(255, 255, 255);
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
}
</style>
