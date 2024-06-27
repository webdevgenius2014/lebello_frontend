<template>
    <form @submit.prevent="handleSubmit" class="max-w-[800px]">
        <div class="grid grid-cols-1 mr-5">
            <div>
                <div>
                    <InputLabel for="Name" value="Name" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.name }" placeholder="" v-model="form.name"
                        :errMessage="errors.name" @update:model="clearError(errors, 'name')" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The name is how it appears on your site.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Slug" value="Slug" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.slug }" placeholder="" v-model="form.slug"
                        :errMessage="errors.slug" @update:model="clearError(errors, 'slug')" />
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
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.description }" placeholder="" :isTextarea="true" :rows="4"
                        v-model="form.description" :errMessage="errors.description"
                        @update:model="clearError(errors, 'description')" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The description is not prominent by default; however, some themes may show it.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Material Price" value="Material Price" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.material_price }" placeholder=""
                        v-model="form.material_price" :errMessage="errors.material_price"
                        @update:model="clearError(errors, 'material_price')" />
                    <p class="text-sm text-[#646970] text-[11.5px]">
                        The “slug” is the URL-friendly version of the name. It is usually all lowercase and
                        contains only letters, numbers, and hyphens.
                    </p>
                </div>
                <div class="mt-3">
                    <InputLabel for="Display in Material Options" value="Display in Material Options" />
                    <Select :options="trueFalse" showfield="name" valueField="value" label="Select an option"
                        v-model="form.material_option" />
                    <InputError class="mt-2" :message="errors?.material_option" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Yellow Banner Display On Material Images"
                        value="Yellow Banner Display On Material Images" />
                    <Select :options="trueFalse" showfield="name" valueField="value" label="Select an option"
                        v-model="form.yellow_banner" />

                    <InputError class="mt-2" :message="errors?.yellow_banner" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Show New Badge" value="Show New Badge" />
                    <Select :options="trueFalse" showfield="name" valueField="value" label="Select an option"
                        v-model="form.new_badge" />
                    <InputError class="mt-2" :message="errors?.new_badge" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Label" value="Label" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.label }" placeholder="" v-model="form.label"
                        :errMessage="errors.label" @update:model="clearError(errors, 'label')" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Material Code" value="Material Code" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.material_code }" placeholder="" v-model="form.material_code"
                        :errMessage="errors.material_code" @update:model="clearError(errors, 'material_code')" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Group Name" value="Group Name" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.group_name }" placeholder="" v-model="form.group_name"
                        :errMessage="errors.group_name" @update:model="clearError(errors, 'group_name')" />
                </div>

                <div class="mt-3">
                    <InputLabel for="Label Background Color" value="Label Background Color" />
                    <div class="flex">
                        <TextInput type="color" class="block mr-2 h-[33px] w-[20%]"
                            :class="{ 'border-red-500': errors.bg_color }" placeholder="" v-model="form.bg_color"
                            :errMessage="errors.bg_color" @update:model="clearError(errors, 'bg_color')" />

                        <TextInput type="text" class="block mr-2 h-[33px] w-[30%]"
                            :class="{ 'border-red-500': errors.bg_color }" placeholder="" v-model="form.bg_color"
                            @update:model="clearError(errors, 'bg_color')" />
                    </div>
                </div>
                <div class="mt-3">
                    <InputLabel for="Trade Mark Label" value="Trade Mark Label" />
                    <TextInput type="text" class="block mr-2 h-[33px] w-[80%]"
                        :class="{ 'border-red-500': errors.trade_mark_label }" placeholder=""
                        v-model="form.trade_mark_label" :errMessage="errors.trade_mark_label"
                        @update:model="clearError(errors, 'trade_mark_label')" />
                </div>
                <div class="mt-4">
                    <InputLabel for="Featured_image" value="Featured_image" />
                    <ImageUpload2 @file-selected="form.featured_image = $event"
                        :accepted-formats="['jpg', 'jpeg', 'png']" />
                    <InputError class="mt-2" :message="errors?.featured_image" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Single Color" value="Single Color" />
                    <Select :options="colors" showfield="name" valueField="value" label="Select an option"
                        v-model="form.single_color" />
                    <InputError class="mt-2" :message="errors.single_color" />
                </div>
                <div class="mt-3 multiSelectContainet">
                    <InputLabel for="Multiple Color" value="Multiple Color" />
                    <MultiSelect v-model="form.multi_color" :options="colors" placeHolder="Select multiple color" />
                    <InputError class="mt-2" :message="errors?.multi_color" />
                </div>
                <div class="mt-3">
                    <InputLabel for="Show New Badge 2021" value="Show New Badge 2021" />
                    <Select :options="trueFalse" showfield="name" valueField="value" label="Select an option"
                        v-model="form.show_badge_2021" />
                    <InputError class="mt-2" :message="errors?.show_badge_2021" />
                </div>
            </div>
        </div>
        <Button type="submit" bg_th_color="text-white bg-[#2271B1] hover:bg-[#0a4b78]"
            class=" text-sm ml-auto mt-3 hover:text-white hover: hover:border-[#0a4b78] px-2 py-1">
            Submit</Button>
    </form>
</template>

<script setup>
import MultiSelect from '@/components/Admin-components/form-components/MultiSelect.vue'
import Button from '@/components/Admin-components/Buttons/Button.vue'
import TextInput from '@/components/Admin-components/form-components/TextInput.vue'
import InputError from '@/components/Admin-components/form-components/InputError.vue'
import InputLabel from '@/components/Admin-components/form-components/InputLabel.vue'
import Select from '@/components/Admin-components/form-components/Select.vue'
import ImageUpload2 from "@/components/Admin-components/form-components/ImageUpload2.vue"
import { useRoute } from 'vue-router'
import { clearError } from '@/helper/functions'
import { ref, watch, watchEffect } from 'vue'
import { trueFalse, colors, parentMaterial } from '@/json/data'

const route = useRoute()
const swatchId = ref(route.params.id)
const errors = ref({})
watch(
    () => route.params.id,
    (newId) => {
        swatchId.value = newId
    }
)
defineProps({
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
const material = {}
const form = ref({
    id: material?.id || '',
    name: material?.name || '',
    slug: material?.slug || '',
    parent_material: material?.parent_material || '',
    description: material?.description || '',
    featured_image: [],
    material_price: material?.material_price || '',
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

const validateForm = () => {
    let isValid = true
    errors.value = {}

    if (!form.value.name) {
        errors.value.name = 'Name is required'
        isValid = false
    }

    // if (!form.value.slug) {
    //     errors.value.slug = 'Slug is required'
    //     isValid = false
    // }
    // if (!form.value.parent_material) {
    //     errors.value.parent_material = 'parent_material is required'
    //     isValid = false
    // }
    // if (!form.value.description) {
    //     errors.value.description = 'description is required'
    //     isValid = false
    // }
    // if (!form.value.material_price) {
    //     errors.value.material_price = 'price is required'
    //     isValid = false
    // }

    return isValid
}

const handleSubmit = async () => {
    console.log("run submit")
    try {
        if (validateForm()) {
            // processing.value = true
            // const res = await axios.post('/login', {})
            // const user = { ...form.value }
            // router.push('/admin')
        }
    } catch (e) {
        console.error('Error material add edit in:', e)
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
