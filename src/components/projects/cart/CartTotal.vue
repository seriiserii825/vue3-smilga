<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
});
</script>
<template>
  <div class='cart-total'>
    <div class="cart-total__wrap">
      <h3 class="cart-total__title">Total</h3>
      <div class="cart-total__price">${{ total }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart-total {
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 60rem;
  border-top: 1px solid black;
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
}
</style>