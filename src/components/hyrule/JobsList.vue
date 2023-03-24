<script lang="ts" setup>
import IJobs from "../../interfaces/IJobs";
import {PropType} from "vue";

const props = defineProps({
  jobs: {
    type: Array as PropType<IJobs[]>,
    required: true,
  },
});
</script>
<template>
  <div class='jobs-list'>
    <ul>
      <li
          v-for="job in jobs"
          :key="job.id"
      >
        <span>{{ job.title }}</span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>

</style>