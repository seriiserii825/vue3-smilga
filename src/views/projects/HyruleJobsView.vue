<script lang="ts" setup>
import {ref} from "vue";
import IJobs from "./../../interfaces/IJobs";

const jobs = ref<IJobs[]>([
  {
    id: '1',
    title: "Hyrule Jobs",
    location: "Hyrule Kingdom - Hyrule Castle",
    salary: 1000,
  },
  {
    id: '2',
    title: "Zelda Jobs",
    location: "Tailando - Hyrule Castle",
    salary: 2000,
  }
]);
</script>
<template>
  <div class='hyrule-jobs'>
  </div>
</template>
<style lang="scss" scoped>

</style>