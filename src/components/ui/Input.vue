<script setup>
import {computed} from "@vue/runtime-core";

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  behaviour: {
    type: String,
    required: false,
  },
  error: {
    type: String,
    required: false,
  },
  max: {
    type: Number,
    required: false
  },
  min: {
    type: Number,
    required: false
  },
  value: {
    type: [String, Number],
    required: false
  }
});

const propsValue = computed(() => {
  return props.value;
});

const emits = defineEmits(['update:value']);

function changeHandler(e) {
  let value = e.target.value;
  emits('update:value', value);
}
</script>
<template>
  <div class="input">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :placeholder="placeholder !== undefined ? placeholder : null"
        :class="[
				{ 'input--success': behaviour === 'success' },
				{ 'input--error': behaviour === 'error' },
			]"
        :max="max ? max : null"
        :min="min ? min : null"
        :value="propsValue"
        @change="changeHandler"
    />
    <p v-if="error" class="input__message input__message--error">
      {{ error }}
    </p>
  </div>
</template>
<style lang="scss">
.input {
  position: relative;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.6rem;
    font-weight: bold;
  }
  input {
    display: block;
    width: 100%;
    height: 4.5rem;
    padding: 0.375rem 0.75rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    box-shadow: inset 0 0 0 transparent;
    transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
    &.input--success {
      border-color: var(--success);
    }
    &.input--error {
      border-color: var(--error);
    }
  }
  &__message {
    position: absolute;
    bottom: -2rem;
    left: 0;
    font-size: 1.2rem;
    color: var(--error);
  }
}
</style>
