<script setup>
import ColorGeneratorItem from "./ColorGeneratorItem.vue";

const props = defineProps({
  colors: {
    type: Array,
    required: true
  }
});
</script>
<template>
  <div class='color-generator-body' v-if="props.colors.length">
    <ColorGeneratorItem v-for="(color, index) in props.colors" :key="index" :index="index + 1" :color="color"/>
  </div>
</template>
<style lang="scss" scoped>
.color-generator-body {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0;
}
</style>