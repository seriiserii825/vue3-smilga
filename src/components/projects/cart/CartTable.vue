<script setup>
import CartTableItem from "./CartTableItem.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class='cart-table'>
    <CartTableItem v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>
<style lang="scss" scoped>

</style>