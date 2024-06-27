<template>
  <div class="multi-select" ref="multiSelectRef">
    <div @click="toggleDropdown" class="multi-select-input">
      <span v-if="selectedOptions.length === 0">{{ placeHolder }}</span>
      <span v-else>{{ selectedOptions.join(', ') }}</span>
      <button v-if="selectedOptions.length>0" @click="clearAll" class="clear-button">
        <svg width="20px" height="18px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path> </g></svg>
      </button>
      <span v-if="selectedOptions.length === 0" class="clear-button"><svg fill="#5c5c5c" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.996 491.996" xml:space="preserve" stroke="#5c5c5c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z"></path> </g> </g> </g></svg> </span>
    </div>
    <div v-if="isOpen" class="multi-select-dropdown">
      <div
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option.value)"
        class="multi-select-option"
        :class="{ selected: selectedOptions.includes(option.value) }"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'MultiSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    placeHolder:{
      type: String,
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const selectedOptions = ref([...props.modelValue]);
    const isOpen = ref(false);
    const multiSelectRef = ref(null);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectOption = (option) => {
      if (selectedOptions.value.includes(option)) {
        selectedOptions.value = selectedOptions.value.filter((o) => o !== option);
      } else {
        selectedOptions.value.push(option);
      }
      emit('update:modelValue', selectedOptions.value);
    };

    const clearAll = () => {
      selectedOptions.value = [];
      emit('update:modelValue', selectedOptions.value);
    };

    const handleClickOutside = (event) => {
      if (multiSelectRef.value && !multiSelectRef.value.contains(event.target)) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      selectedOptions,
      isOpen,
      toggleDropdown,
      selectOption,
      clearAll,
      multiSelectRef
    };
  }
};
</script>

<style scoped>
.multi-select {
  position: relative;
  width: 200px;
  background-color: white;
}

.multi-select-input {
  border: 1px solid #707070;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.clear-button {
  margin-left: auto;
  padding: 4px 8px;
  color: white;
  border: none;
  cursor: pointer;
}



.multi-select-dropdown {
  position: absolute;
  border: 1px solid #868484;
  width: 100%;
  max-height: 100px; 
  overflow-y: auto; 
  background: white;
  z-index: 1000;
}

.multi-select-option {
  padding-left: 8px;
  cursor: pointer;
  height: 30px; 
  margin: auto 0;
  line-height: 30px; 
}

.multi-select-option.selected {
  background-color: #007bff;
  color: white;
}
</style>
