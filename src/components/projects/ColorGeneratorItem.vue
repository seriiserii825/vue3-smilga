<script setup>
import {ref} from "@vue/reactivity";

const props = defineProps({
  color: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});
const bcg = props.color.rgb.join(',');
const hex = `#${props.color.hex}`;
const clicked = ref(false);

function copyToClipboard() {
  navigator.clipboard.writeText(hex);
  clicked.value = true;
  setTimeout(() => {
    clicked.value = false;
  }, 1000);
}
</script>
<template>
  <div
      class='color-generator-item'
      :class="{'color-generator-item--light': index > 10}"
      :style="`background: rgb(${bcg})`">
    <div class="color-generator-item__body">
      <div class="color-generator-item__percent">{{ props.color.weight }}%</div>
      <div
          class="color-generator-item__title"
          title="Copy to clipboard"
          @click="copyToClipboard"
      >{{ hex }}
        <span v-if="clicked" class="color-generator-item__alert">Copied</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.color-generator-item {
  padding-bottom: 5%;
  &__body {
    padding: 3rem;
  }
  &__percent {
    margin-bottom: 2rem;
    font-weight: bold;
  }
  &__title {
    position: relative;
    padding-bottom: 4rem;
    font-weight: bold;
    cursor: pointer;
  }
  &__alert {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    margin-top: 1rem;
    padding: 0.4rem 0.6rem;
    color: white;
    background: #000;
    box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  }
  &--light {
    color: white;
  }
}
</style>