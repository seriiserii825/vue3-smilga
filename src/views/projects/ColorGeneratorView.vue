<script setup="">
import ColorGeneratorHeader from "../../components/color-generator/ColorGeneratorHeader.vue";
import ColorGeneratorBody from "../../components/color-generator/ColorGeneratorBody.vue";
import {ref} from "@vue/reactivity";
import Preloader from "../../components/ui/Preloader.vue";
import {onMounted} from "vue";
import useBackground from "@/hooks/useBackground";

const loading = ref(false);
const bg_color = ref('#f5f5f5');
const colors = ref([]);
const color = ref('#f15025');

function emitColors(value) {
  loading.value = true;
  colors.value = value;
  setTimeout(() => {
    loading.value = false;
  }, 500);
}

onMounted(() => {
  const use_bg = useBackground('color', -50);
  bg_color.value = use_bg.color_from_file;
})
</script>
<template>
  <transition appear>
    <div class='color-generator' :style="{background: bg_color}">
      <div class="container">
        <ColorGeneratorHeader :color="color" @emitColors="emitColors"/>
        <Preloader v-if="loading === true"/>
        <ColorGeneratorBody v-else :colors="colors"/>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.color-generator {
  padding: 8rem 0;
  min-height: 100vh;
  background: #b8c4f3;
}
</style>