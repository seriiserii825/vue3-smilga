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

function changeInput(value) {
  color.value = value;
  error.value = false;
}

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
    <Input :value="color" @change="changeInput" :error="error ? `Wrong color, try again` : null"/>
    <Button label="Generate" color="primary" @click="generateColors"/>
  </div>
</template>
<style lang="scss" scoped>
.color-generator-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  &__title {
    margin-right: 1rem;
  }
  .input {
    margin-right: 1rem;
  }
}
</style>