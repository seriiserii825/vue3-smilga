<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
})
</script>
<template>
  <div class='info-widget'>
    <div class="info-widget__content">
      <h3 class="info-widget__title">{{ title }}</h3>
      <p>{{ subtitle }}</p>
      <router-link :to="url">More info</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.info-widget {
}
</style>