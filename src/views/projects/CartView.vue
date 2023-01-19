<script setup>
import {onMounted, ref} from "vue";
import useBackground from "../../hooks/useBackground";
import CartTable from "../../components/projects/cart/CartTable.vue";

const bg_color = ref('#f5f5f5');

const cart_items = ref([
  {id: 1, title: "Samsung Galaxy S21", price: 1000, quantity: 1},
  {id: 2, title: "Samsung Galaxy S21 Ultra", price: 1200, quantity: 1},
  {id: 3, title: "Samsung Galaxy S21 Plus", price: 1100, quantity: 1},
  {id: 4, title: "Samsung Galaxy S21 FE", price: 900, quantity: 1},
  {id: 5, title: "Samsung Galaxy S21 5G", price: 800, quantity: 1},
]);

onMounted(() => {
  const use_bg = useBackground('cart', -40);
  bg_color.value = use_bg.color_from_file;
})
</script>
<template>
  <div class='cart-view' :style="{background: bg_color}">
    <section class="cart-view__panel">
      <div class="container">
        <div class="cart-view__wrap">
          <h2>Cart</h2>
          <div class="cart-view__cart">
            <font-awesome-icon icon="fa-cart-shopping"/>
            <span class="cart-view__count">9</span>
          </div>
        </div>
      </div>
    </section>
    <section class="cart-view__table">
<CartTable/>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.cart-view {
  min-height: 100vh;
  &__panel {
    padding: 2rem 0;
    color: white;
    background: var(--primary);
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__cart {
    position: relative;
  }
  &__count {
    position: absolute;
    top: -2rem;
    right: -2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.6rem;
    height: 2.6rem;
    color: white;
    background: var(--accent-hover);
    border-radius: 50%;
  }
}
</style>