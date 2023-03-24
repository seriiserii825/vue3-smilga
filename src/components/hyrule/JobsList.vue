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
        <h3 class="jobs-list__title">{{ job.title }}</h3>
        <div class="jobs-list__price"><strong>Price:</strong> {{ job.salary }}$</div>
        <div class="jobs-list__location"><strong>Location: </strong>{{ job.location }}</div>
        <div class="jobs-list__description">{{ job.description }}</div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.jobs-list {
  li {
    margin-bottom: 3.2rem;
    padding: 3.2rem;
    background: #f4f4f4;
  }
  &__title {
    margin-bottom: 1.6rem;
    font-size: 3rem;
  }
  &__price {
    margin-bottom: 1.6rem;
    font-size: 2.2rem;
    color: var(--accent);
    border-bottom: 1px solid var(--accent);
  }
  &__location {
    margin-bottom: 1.6rem;
    font-size: 2.2rem;
    color: var(--success);
  }
  &__description {
    padding: 1.6rem;
    font-size: 2rem;
    line-height: 1.5;
    background: #e5e5e5;
  }
}
</style>