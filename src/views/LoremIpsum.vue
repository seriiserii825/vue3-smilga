<script setup>
import Input from "../components/ui/Input.vue";
import {items} from "../data/lorem-ipsum";
import {computed, watch} from "@vue/runtime-core";
import {ref} from "@vue/reactivity";
import Preloader from "../components/ui/Preloader.vue";
import {onMounted} from "vue";
import {useColorStore} from "../stores/ColorStore";
import CheckboxGroup from "../components/ui/CheckboxGroup.vue";
import useBackground from "../hooks/useBackground";

const colorStore = useColorStore();

const bg_color = ref('#f5f5f5');

const count = ref(3);
const max_count = items.length;
const loading = ref(false);

const checkbox_items = ref([
  {id: 1, title: "Use title"},
  {id: 2, title: "Use subtitle"},
  {id: 3, title: "Use text"},
  {id: 4, title: "Use footer"},
]);

const selected_checkbox_items = ref([1, 2]);

const filterByCheckbox = (title) => {
  const id = checkbox_items.value.find((item) => item.title === title).id;
  return selected_checkbox_items.value.includes(id);
};

let filtered = computed(() => {
  loading.value = true;
  let result = items.slice(0, count.value);
  setTimeout(() => {
    loading.value = false;
  }, 500);
  return result;
})


watch(count, () => {
  if (count.value < 1) {
    count.value = 1;
  }
  if (count.value > max_count) {
    count.value = max_count;
  }
});

onMounted(() => {
  const use_bg = useBackground('lorem', -40);
  bg_color.value = use_bg.color_from_file;
})
</script>
<template>
  <div class='lorem-ipsum' :style="{background: bg_color}">
    <div class="container">
      <section class="lorem-ipsum__wrap">
        <aside class="lorem-ipsum__sidebar">
          <h1 class="title">Lorem ipsum generator</h1>
          <header class="lorem-ipsum__header">
            <p>Paragraphs: </p>
            <Input type="number" v-model:value="count" :max="max_count" :min="1"/>
          </header>
          <div class="lorem-ipsum__filter">
            <div>{{ selected_checkbox_items }}</div>
            <CheckboxGroup
                :options="checkbox_items"
                name="checkbox"
                v-model:value="selected_checkbox_items"
            />
          </div>
        </aside>
        <main class="lorem-ipsum__content">
          <Preloader v-if="loading"/>
          <div v-else>
            <ul class="lorem-ipsum__list" v-if="filtered && filtered.length">
              <li v-for="({id, title, subtitle, text, date}) in filtered" :key="id">
                <h2 v-if="filterByCheckbox('Use title')">{{ title }}</h2>
                <h3 v-if="filterByCheckbox('Use subtitle')">{{ subtitle }}</h3>
                <p v-if="filterByCheckbox('Use text')">{{ text }}</p>
                <footer v-if="filterByCheckbox('Use footer')">Date: <strong>({{ date }})</strong></footer>
              </li>
            </ul>
          </div>
        </main>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.lorem-ipsum {
  padding-top: 8rem;
  min-height: 100vh;
  background: lightgray;
  &__wrap {
    display: flex;
    justify-content: space-between;
  }
  &__sidebar {
    flex: 0 0 30rem;
  }
  &__content {
    flex: 1;
    padding-left: 6rem;
    padding-bottom: 12rem;
  }
  .title {
    margin-bottom: 3rem;
  }
  &__header {
    margin-bottom: 3rem;
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