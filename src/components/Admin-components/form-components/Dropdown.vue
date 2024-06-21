<template>
    <select v-model="selectedOption" @change="handleChange">
      <option v-for="(option, index) in options" :key="index" :value="option.id">
        <span v-if="option.parent_material === 1">{{ option.name }}</span>
        <span v-else> {{ option.name }}</span>
    </option>
    </select>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      value: {
        type: String 
      }
    },
    data() {
      return {
        selectedOption: this.value || 'select'
      };
    },
    methods: {
      handleChange(event) {
        this.$emit('input', event.target.value);
      }
    }
  }
  </script>
  