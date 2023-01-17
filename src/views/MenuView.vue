<template>
  <div class="menu-view" :style="{background: colors.menu }">
    <div class="container">
      <MenuFilter @filter="handleFilter" :categories="categories"/>
      <MenuItems :items="items"/>
    </div>
  </div>
</template>
<script setup>
import {ref} from '@vue/runtime-core';
import {onMounted} from "vue";
import {useColorStore} from "../stores/ColorStore";

const colorStore = useColorStore();
const {setColor} = colorStore;
import menu from '@/data/menu.js';
import colors from "@/data/colors";
import MenuFilter from '@/components/menu/MenuFilter.vue';
import MenuItems from '@/components/menu/MenuItems.vue';
import useBackground from "@/hooks/useBackground";

let categories = menu.map((item) => item.category);
categories = ['all', ...new Set(categories)];

let items = ref(menu);

function handleFilter(category) {
  if (category === 'all') {
    items.value = menu;
  } else {
    items.value = menu.filter((item) => {
      return item.category === category;
    });
  }
}

onMounted(() => {
  const {darken_bg} = useBackground(colors.menu, -40);
  setColor(darken_bg);
})
</script>

<style lang="scss">
.menu-view {
  padding: 8rem 0;
}
</style>