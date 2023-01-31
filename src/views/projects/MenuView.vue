<template>
  <transition appear>
  <div class="menu-view" :style="{background: bg_color }">
    <div class="container">
      <MenuFilter @filter="handleFilter" :categories="categories"/>
      <MenuItems :items="items"/>
    </div>
  </div>
  </transition>
</template>
<script setup>
import {ref} from '@vue/runtime-core';
import {onMounted} from "vue";
import menu from '@/data/menu.js';
import MenuFilter from '@/components/menu/MenuFilter.vue';
import MenuItems from '@/components/menu/MenuItems.vue';
import useBackground from "@/hooks/useBackground";

const bg_color = ref('#f5f5f5');

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
  const use_bg = useBackground('menu', -50);
  bg_color.value = use_bg.color_from_file;
})
</script>

<style lang="scss">
.menu-view {
  padding: 8rem 0;
}
</style>