<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="form">
    <header class="form__header">{{ title }}</header>
    <div class="form__body">
      <slot/>
    </div>
  </div>
</template>
<style lang="scss">
.form {
  border-radius: 0.4rem;
  overflow: hidden;
  &__header,
  &__body {
    padding: 2rem;
  }
  &__header {
    color: white;
    background: var(--dark-bg);
  }
  &__body {
    padding: 4rem 2rem;
    background: white;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .form__group {
      width: 48%;
    }
  }
  &__group {
    margin-bottom: 2rem;
  }
}
</style>