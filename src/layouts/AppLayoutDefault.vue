<script setup>
import {useColorStore} from "../stores/ColorStore";
import {storeToRefs} from "pinia";
import {ERoutes} from "../enum/ERoutes";

const colorStore = useColorStore();
const {color} = storeToRefs(colorStore);
</script>
<template>
  <header class="main-header" :style="{background: color}">
    <nav>
      <RouterLink :to="{name: ERoutes.HOME}">Home</RouterLink>
      <RouterLink :to="{name: ERoutes.MENU}">Menu</RouterLink>
      <RouterLink :to="{name: ERoutes.LOREM_IPSUM}">Lorem ipsum</RouterLink>
      <RouterLink :to="{name: ERoutes.COLOR_GENERATOR}">Color generator</RouterLink>
      <RouterLink :to="{name: ERoutes.GROCERY_BUD}">Grocery Bud</RouterLink>
      <RouterLink :to="{name: ERoutes.QUIZ}">Quiz</RouterLink>
      <RouterLink :to="{name: ERoutes.ADMIN}">Admin</RouterLink>
    </nav>
  </header>
  <div class="wrapper">
    <slot/>
  </div>
</template>
