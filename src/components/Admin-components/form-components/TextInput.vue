<script setup>
import { onMounted, ref } from "vue";

const model = defineModel({
    type: String,
    required: true,
});

defineProps({
    label: {
        type: String,
    },
    message: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    isTextarea: {
        type: Boolean,
        default: false,
    },
    rows: {
        type: Number,
        default: 3,
    },
});

const inputRef = ref(null);

onMounted(() => {
    if (inputRef.value && inputRef.value.hasAttribute("autofocus")) {
        inputRef.value.focus();
    }
});

defineExpose({ focus: () => inputRef.value.focus() });
</script>

<template>
    <label v-if="label" class="block font-medium text-sm text-gray-700 mb-1">
        {{ label }}
    </label>

    <div v-if="isTextarea" class="max-w-sm space-y-3">
        <textarea
            class="py-3 px-4 block w-full border-gray-300 focus:border-none focus:ring-indigo-800 rounded-md shadow-sm"
            :rows="rows"
            :placeholder="placeholder"
            v-model="model"
             ref="inputRef"
        ></textarea>
    </div>
    <input
        v-else
        class="border-gray-300 focus:border-none focus:ring-indigo-800 rounded-md shadow-sm"
        v-model="model"
        ref="inputRef"
        :placeholder="placeholder"
        v-bind="$attrs"
    />
    <div v-show="message">
        <p class="text-sm text-red-600">
            {{ message }}
        </p>
    </div>
</template>
