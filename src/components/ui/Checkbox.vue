<script setup>
import {ref} from '@vue/reactivity';

const props = defineProps({
  label: {
    type: String,
    default: 'Checkbox'
  },
  value: {
    type: String,
    required: true
  },
  default: {
    type: Boolean,
    required: false
  },
})
const emits = defineEmits(['checkboxHandler']);
const checked = ref(props.default ? props.default : false);

function toggleCheckbox() {
  emits('checkboxHandler', checked.value);
}

</script>
<template>
  <div class='checkbox prevent-select'>
    <input type="checkbox" :id="value" v-model="checked" @change="toggleCheckbox">
    <label :for="value">{{ label }}</label>
  </div>
</template>
<style lang="scss">
.checkbox {
  position: relative;
  z-index: 1;
  display: block;
  margin-bottom: 1rem;
  min-height: 1.5rem;
  input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.25rem;
    opacity: 0;
    &:checked + label {
      &::after {
        opacity: 1;
      }
    }
  }
  label {
    position: relative;
    margin-bottom: 0;
    padding-left: 2rem;
    vertical-align: top;
    font-weight: bold;
    overflow: hidden;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 1.3rem;
      height: 1.3rem;
      pointer-events: none;
      background-color: #dee2e6;
      border: #adb5bd solid 1px;
      border-radius: 0.2rem;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
      display: block;
      width: 1.3rem;
      height: 1.3rem;
      background: var(--primary) url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0;
    }
  }
}
</style>