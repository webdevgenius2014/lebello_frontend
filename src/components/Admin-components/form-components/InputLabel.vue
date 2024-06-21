<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    <label class="block font-medium text-sm text-[#1d2327] font-normal text-[12px] font-extralight">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
