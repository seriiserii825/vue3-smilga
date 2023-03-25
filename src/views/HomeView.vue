<script setup>
import InfoWidget from "../components/ui/InfoWidget.vue";
import colors from "../data/colors";

import {shadeColor} from "../utilities/color-converters";
import {onMounted} from "vue";
import {useColorStore} from "../stores/ColorStore";
import {ERoutes} from "../enum/ERoutes";

const colorStore = useColorStore();
const {setColor} = colorStore;

const menu_items = [
  {id: 1, title: 'Menu', subtitle: 'Filter and order', url: ERoutes.MENU, color: colors.menu},
  {id: 2, title: 'Lorem ipsum', subtitle: 'Generator for title and text', url: ERoutes.LOREM_IPSUM, color: colors.lorem},
  {id: 3, title: 'Color generator', subtitle: 'Generator for color', url: ERoutes.COLOR_GENERATOR, color: colors.color},
  {id: 4, title: 'Grocery Bud', subtitle: 'Todo like app', url: ERoutes.GROCERY_BUD, color: colors.grocery},
  {id: 5, title: 'Cart', subtitle: 'Complex cart single', url: ERoutes.CART, color: colors.cart},
  {id: 6, title: 'Quiz', subtitle: 'Answer to the lot of questions', url: ERoutes.QUIZ, color: colors.cart},
  {id: 7, title: 'Hyrule Jobs', subtitle: 'Beautiful filter on typescript', url: ERoutes.HYRULE_JOBS, color: colors.hyrule}
];

onMounted(() => {
  const darken_bg = shadeColor(colors.home, -40);
  setColor(darken_bg);
})
</script>
<template>
  <main>
    <transition appear>
      <div class="home">
        <div class="container">
          <div class="home__grid">
            <InfoWidget
                v-for="item in menu_items"
                :key="item.id"
                :title="item.title"
                :subtitle="item.subtitle"
                :url="item.url"
                :color="item.color"
            />
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>
<style lang="scss" scoped>
.home {
  padding: 8rem 0;
  min-height: 100vh;
  background: lightgray;
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
  }
}
</style>
