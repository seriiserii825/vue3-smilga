<script setup>
import SectionHeader from "../components/globals/SectionHeader.vue";
import SelectComponent from "../components/ui/SelectComponent.vue";
import {ref} from "@vue/reactivity";

const options = [
  {id: 1, title: "BMW"},
  {id: 2, title: "Mercedes"},
  {id: 3, title: "Audi"},
  {id: 4, title: "Volkswagen"},
  {id: 5, title: "Porsche"},
]

const selected = ref(options[0]);
</script>
<template>
  <div class='select-view'>
    <SectionHeader title="Select"/>
    <div :style="{'max-width': '40rem'}">
    <SelectComponent
        label="Select a car"
        :tabindex="1"
        :options="options"
        v-model:value="selected"
    /></div>
  </div>
</template>
<style lang="scss" scoped>

</style>