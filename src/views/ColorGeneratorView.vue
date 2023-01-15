<script setup="">
import ColorGeneratorHeader from "../components/color-generator/ColorGeneratorHeader.vue";
import ColorGeneratorBody from "../components/color-generator/ColorGeneratorBody.vue";
import {ref} from "@vue/reactivity";
import Preloader from "../components/ui/Preloader.vue";

const loading = ref(false);

const colors = ref([]);
const color = ref('#f15025');

function emitColors(value) {
  loading.value = true;
  colors.value = value;
  setTimeout(() => {
    loading.value = false;
  }, 500);
}
</script>
<template>
  <div class='color-generator'>
    <div class="container">
      <ColorGeneratorHeader :color="color" @emitColors="emitColors"/>
      <Preloader v-if="loading === true"/>
      <ColorGeneratorBody v-else :colors="colors"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.color-generator {
  padding: 8rem 0;
  min-height: 100vh;
  background: #b8c4f3;
}
</style>