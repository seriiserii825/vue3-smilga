<script setup>
import {useCartStore} from "../../../stores/CartStore";
const cartStore = useCartStore();
const {setCart} = cartStore;
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class='cart-table-item prevent-select'>
    <div class="cart-table-item__img">
      <img :width="100" :src="`/images/cart/${item.image}`" alt="">
    </div>
    <div class="cart-table-item__content">
      <h3 class="cart-table-item__title">{{ item.title }}</h3>
      <p class="cart-table-item__price">Price: <strong>${{ item.price }}</strong></p>
      <span class="cart-table-item__remove">remove</span>
    </div>
    <div class="cart-table-item__quantity">
      <span class="cart-table-item__update cart-table-item__minus">
        <font-awesome-icon icon="fa-angle-up"/>
      </span>
      <span class="cart-table-item__count">{{ item.quantity }}</span>
      <span class="cart-table-item__update cart-table-item__plus">
        <font-awesome-icon icon="fa-angle-down"/>
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart-table-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  &__img {
    position: relative;
    flex: 0 0 10rem;
    margin-right: 4rem;
    height: 15rem;
    border-radius: 0.4rem;
    overflow: hidden;
    img {
       position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
  &__content {
    margin-right: auto;
  }
  &__title {
    margin-bottom: 1rem;
  }
  &__price {
    margin-bottom: 0.6rem;
    color: var(--primary-hover);
  }
  &__remove {
    color: var(--error);
  }
  &__quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &__update {
    color: var(--success);
    cursor: pointer;
  }
  &__count {
    font-weight: bold;
    color: var(--accent);
  }
}
</style>