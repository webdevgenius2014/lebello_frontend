<script setup>
import Editor from '@tinymce/tinymce-vue'
import { ref } from "vue";

const key = import.meta.env.TINY_MCE
console.log("key",key)
const model = defineModel({
    type: String,
    required: true,
});
const content = ref('')

</script>

<template>
  <main id="sample">
    <Editor
      :api-key='fowfxcasisk39tpnmykuzkpek6kmuj7hxeywh8hof0v1xm4z'
      :init="{
        plugins: 'lists link image table code help wordcount'
      }"
      v-model="model"
    />
  </main>
  {{ content }}
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    /* place-items: center; */
    width: 100%;
  }
}
</style>