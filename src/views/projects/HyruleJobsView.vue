<script lang="ts" setup>
import {onMounted, ref} from "vue";
import IJobs from "./../../interfaces/IJobs";
import {useColorStore} from "../../stores/ColorStore.js";
import useBackground from "../../hooks/useBackground.js";
import JobsList from "../../components/hyrule/JobsList.vue";

const colorStore = useColorStore();
const bg_color = ref('green');

const jobs = ref<IJobs[]>([
  {
    id: '1',
    title: "Hyrule Jobs",
    location: "Hyrule Kingdom - Hyrule Castle",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi atque autem beatae consectetur consequatur corporis cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus ea eius enim eos error est et eum ex excepturi expedita explicabo facilis fuga fugiat harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus necessitatibus neque nesciunt nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta suscipit tempora temporibus tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptate voluptates voluptatibus voluptatum.",
    salary: 1000,
  },
  {
    id: '2',
    title: "Zelda Jobs",
    location: "Tailando - Hyrule Castle",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi atque autem beatae consectetur consequatur corporis cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus ea eius enim eos error est et eum ex excepturi expedita explicabo facilis fuga fugiat harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus necessitatibus neque nesciunt nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta suscipit tempora temporibus tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptate voluptates voluptatibus voluptatum.",
    salary: 2000,
  }
]);
onMounted(() => {
  const use_bg = useBackground('hyrule', -40);
  bg_color.value = use_bg.color_from_file;
});
</script>
<template>
  <transition appear>
    <div class='hyrule-jobs' :style="{background: bg_color}">
      <div class="hyrule-jobs__list">
        <JobsList :jobs="jobs"/>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.hyrule-jobs {
  padding: 8rem 0;
  min-height: 100vh;
  &__list {
    margin: 0 auto;
    max-width: 80vw;
  }
}
</style>