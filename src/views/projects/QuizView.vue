<script setup>
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";
import useBackground from "../../hooks/useBackground";

const bg_color = ref('#f5f5f5');
onMounted(() => {
  const use_bg = useBackground('quiz', -40);
  bg_color.value = use_bg.color_from_file;
})
</script>
<template>
  <div class='quiz' :style="{background: bg_color}">
  </div>
</template>
<style lang="scss" scoped>
.quiz {
  min-height: 100vh;
}
</style>