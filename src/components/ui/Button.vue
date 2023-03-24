<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'accent'
  },
  icon: {
    type: String,
    required: false
  }
});
</script>
<template>
  <button :class="['btn', { 'btn--outline': outline }, `btn--${color}`, {'btn--icon': icon}]">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 4.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background: var(--accent);
  border: 1px solid var(--accent);
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    background: var(--accent-hover);
  }
  &.btn--contrast {
    color: white;
    background: var(--contrast);
    border: 1px solid var(--contrast);
    &:hover {
      background: var(--contrast-hover);
      border: 1px solid var(--contrast);
    }
    &.btn--outline {
      background: transparent;
      color: black;
      border: 1px solid var(--contrast);
      &:hover {
        color: white;
        background: var(--contrast-hover);
        border-color: var(--contrast);
      }
    }
  }
  &.btn--primary {
    color: white;
    background: var(--primary);
    border: 1px solid var(--primary);
    &:hover {
      background: var(--primary-hover);
      border: 1px solid var(--primary);
    }
    &.btn--outline {
      background: transparent;
      color: black;
      border: 1px solid var(--primary);
      &:hover {
        color: white;
        background: var(--primary-hover);
        border-color: var(--primary);
      }
    }
  }
  &.btn--success {
    color: white;
    background: var(--success);
    border: 1px solid var(--success);
    &:hover {
      background: var(--success-hover);
      border: 1px solid var(--primary);
    }
    &.btn--outline {
      background: transparent;
      color: black;
      border: 1px solid var(--success);
      &:hover {
        color: white;
        background: var(--success-hover);
        border-color: var(--success);
      }
    }
  }
  &.btn--error {
    color: white;
    background: var(--error);
    border: 1px solid var(--error);
    &:hover {
      background: var(--error-hover);
      border: 1px solid var(--primary);
    }
    &.btn--outline {
      background: transparent;
      color: black;
      border: 1px solid var(--error);
      &:hover {
        color: white;
        background: var(--error-hover);
        border-color: var(--error);
      }
    }
  }
  &.btn--outline {
    background: transparent;
    color: black;
    border: 1px solid black;
    &:hover {
      color: white;
      background: var(--accent);
      border-color: var(--accent);
    }
  }
  &.btn--icon {
    padding: 0;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
  }
}
</style>
