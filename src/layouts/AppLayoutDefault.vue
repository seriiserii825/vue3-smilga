<script setup>
import {useColorStore} from "../stores/ColorStore";
import {storeToRefs} from "pinia";

const colorStore = useColorStore();
const {color} = storeToRefs(colorStore);
</script>
<template>
  <header class="main-header" :style="{background: color}">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/menu">Menu</RouterLink>
      <RouterLink to="/lorem-ipsum">Lorem ipsum</RouterLink>
      <RouterLink to="/color-generator">Color generator</RouterLink>
      <RouterLink to="/grocery-bud">Grocery Bud</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>
  </header>
  <div class="wrapper">
    <slot/>
  </div>
</template>
