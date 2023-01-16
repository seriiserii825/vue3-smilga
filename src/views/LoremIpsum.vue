<script setup>
import Input from "../components/ui/Input.vue";
import Checkbox from "../components/ui/Checkbox.vue";
import {items} from "../data/lorem-ipsum";
import {computed, watch} from "@vue/runtime-core";
import {ref} from "@vue/reactivity";
import Preloader from "../components/ui/Preloader.vue";
import colors from "../data/colors";

const count = ref(3);
const max_count = items.length;
const filter_title = ref(true);
const filter_subtitle = ref(true);
const filter_text = ref(false);
const filter_footer = ref(false);
const loading = ref(false);

let filtered = computed(() => {
  loading.value = true;
  let result = items.slice(0, count.value);
  setTimeout(() => {
    loading.value = false;
  }, 500);
  return result;
})


function filterTitleHandler(value) {
  filter_title.value = value;
}

function filterSubtitleHandler(value) {
  filter_subtitle.value = value;
}

function filterTextHandler(value) {
  filter_text.value = value;
}

function filterFooterHandler(value) {
  filter_footer.value = value;
}

watch(count, () => {
  if (count.value < 1) {
    count.value = 1;
  }
  if (count.value > max_count) {
    count.value = max_count;
  }
});
</script>
<template>
  <div class='lorem-ipsum' :style="{background: colors.lorem}">
    <div class="container">
      <section class="lorem-ipsum__wrap">
        <aside class="lorem-ipsum__sidebar">
          <h1 class="title">Lorem ipsum generator</h1>
          <header class="lorem-ipsum__header">
            <p>Paragraphs: </p>
            <Input type="number" v-model:value="count" :max="max_count" :min="1"/>
          </header>
          <div class="lorem-ipsum__filter">
            <Checkbox @checkbox-handler="filterTitleHandler" label="Use title" value="title" :default="true"/>
            <Checkbox @checkbox-handler="filterSubtitleHandler" label="Use subtitle" value="subtitle" :default="true"/>
            <Checkbox @checkbox-handler="filterTextHandler" label="Use text" value="text"/>
            <Checkbox @checkbox-handler="filterFooterHandler" label="Use footer" value="footer"/>
          </div>
        </aside>
        <main class="lorem-ipsum__content">
          <Preloader v-if="loading"/>
          <div v-else>
            <ul class="lorem-ipsum__list" v-if="filtered && filtered.length">
              <li v-for="({id, title, subtitle, text, date}) in filtered" :key="id">
                <h2 v-if="filter_title !== false">{{ title }}</h2>
                <h3 v-if="filter_subtitle !== false">{{ subtitle }}</h3>
                <p v-if="filter_text !== false">{{ text }}</p>
                <footer v-if="filter_footer !== false">Date: <strong>({{ date }})</strong></footer>
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