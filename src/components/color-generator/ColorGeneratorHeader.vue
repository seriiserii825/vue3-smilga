<script setup>
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import Values from "values.js"
import {ref} from "@vue/reactivity";
const props = defineProps({
  color: {
    type: String,
    required: true
  }
});
const color = ref(props.color);
const error = ref(false);
const colors = ref([]);
const emits = defineEmits(['emit-colors']);
function generateColors() {
  try {
    colors.value = new Values(color.value).all(10);
    emits('emit-colors', colors.value);
  } catch (e) {
    error.value = true;
  }
}
</script>
<template>
  <div class='color-generator-header'>
    <h2 class="color-generator-header__title">Color generator</h2>
    <div class="color-generator-header__wrap">
      <Input v-model:value="color" :error="error ? `Wrong color, try again` : null"/>
      <div class="color-generator-header__btn">
        <Button label="Generate" color="primary" @click="generateColors">Generate</Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.color-generator-header {
  margin-bottom: 6rem;
  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    margin-bottom: 3.2rem;
  }
  .input {
    margin-right: 1rem;
    width: 80%;
  }
  &__btn {
    width: 20%;
  }
}
</style>