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
];


const selected = ref(options[0]);

const fruits = [
  {id: 1, title: "Apple"},
  {id: 2, title: "Orange"},
  {id: 3, title: "Banana"},
  {id: 4, title: "Pineapple"},
  {id: 5, title: "Mango"}
];
const selected_fruits = ref([1, 2]);
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
      />
    </div>
    <br><br>
    <SectionHeader title="Select multiselect"/>
    <div :style="{'max-width': '40rem'}">
      <SelectComponent
          label="Select a car multiselect"
          :tabindex="2"
          :options="fruits"
          v-model:values="selected_fruits"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>