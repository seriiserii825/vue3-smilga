<script setup>
import Input from "../components/ui/Input.vue";
import Checkbox from "../components/ui/Checkbox.vue";
import {items} from "../data/lorem-ipsum";
import {computed} from "@vue/runtime-core";
import {ref} from "@vue/reactivity";

const count = ref(1);

const filtered = computed(() => {
  const result = items.slice(0, count.value);
  return result;
})

function changeCount(value) {
  count.value = value;
}

</script>
<template>
  <div class='lorem-ipsum'>
    <div class="container">
      <h1 class="title">Lorem ipsum generator</h1>
      <header class="lorem-ipsum__header">
        <span>Paragraphs: </span>
        <Input type="number" :value="1" @change="changeCount"/>
      </header>
      <div class="lorem-ipsum__filter">
        <Checkbox label="Use title" value="title"/>
        <Checkbox label="Use subtitle" value="subtitle"/>
        <Checkbox label="Use text" value="text"/>
        <Checkbox label="Use footer" value="footer"/>
      </div>
      <ul class="lorem-ipsum__list" v-if="filtered.length">
        <li v-for="({id, title, subtitle, text, date}) in filtered" :key="id">
          <h2>{{ title }}</h2>
          <h3>{{ subtitle }}</h3>
          <p>{{ text }}</p>
          <footer>Date: ({{ date }})</footer>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.lorem-ipsum {
  padding-top: 8rem;
  min-height: 100vh;
  background: lightgray;
  .title {
    margin-bottom: 3rem;
    text-align: center;
  }
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    .input {
      margin-left: 1rem;
    }
  }
  &__filter {
    margin: 0 auto 6rem;
    max-width: 40rem;
  }
  &__list {
    border-top: 1px solid #999;
  }
  li {
    position: relative;
    padding: 2rem 0;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #999;
    }
  }
  h2 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
}
</style>