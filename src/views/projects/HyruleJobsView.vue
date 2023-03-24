<script lang="ts" setup>
import {onMounted, ref} from "vue";
import IJobs from "./../../interfaces/IJobs";
import useBackground from "../../hooks/useBackground.js";
import JobsList from "../../components/hyrule/JobsList.vue";
import {TOrderHyruleTerms} from "../../types/OrderHyruleTerms";
import Button from "../../components/ui/Button.vue";
import {computed} from "@vue/runtime-core";

const bg_color = ref('green');
const order = ref<TOrderHyruleTerms>('title');

const jobs = ref<IJobs[]>([
  {
    id: '1',
    title: "A Link to the Past Jobs",
    location: "Hyrule Kingdom - Hyrule Castle",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi atque autem beatae consectetur consequatur corporis cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus ea eius enim eos error est et eum ex excepturi expedita explicabo facilis fuga fugiat harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus necessitatibus neque nesciunt nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta suscipit tempora temporibus tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptate voluptates voluptatibus voluptatum.",
    salary: 3500,
  },
  {
    id: '2',
    title: "Breath of the Wild Jobs",
    location: "Tailando - Hyrule Castle",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi atque autem beatae consectetur consequatur corporis cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus ea eius enim eos error est et eum ex excepturi expedita explicabo facilis fuga fugiat harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus necessitatibus neque nesciunt nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta suscipit tempora temporibus tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptate voluptates voluptatibus voluptatum.",
    salary: 2000,
  },
  {
    id: '3',
    title: "Ocarina of Time Jobs",
    location: "Panama - Hyrule Castle",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi atque autem beatae consectetur consequatur corporis cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus ea eius enim eos error est et eum ex excepturi expedita explicabo facilis fuga fugiat harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus necessitatibus neque nesciunt nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta suscipit tempora temporibus tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptate voluptates voluptatibus voluptatum.",
    salary: 1700,
  },
  {
    id: '4',
    title: "Majora's Mask Jobs",
    location: "New York - Hyrule Castle",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, alias, amet animi atque autem beatae consectetur consequatur corporis cumque cupiditate delectus deleniti deserunt dignissimos doloremque doloribus ea eius enim eos error est et eum ex excepturi expedita explicabo facilis fuga fugiat harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus necessitatibus neque nesciunt nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta suscipit tempora temporibus tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptate voluptates voluptatibus voluptatum.",
    salary: 800,
  },
]);

function handelClick(term: TOrderHyruleTerms): void {
  order.value = term;
}

const ordered_jobs = computed(() => {
  return jobs.value.sort(compareValues(order.value, 'asc'));
});

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
        (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

onMounted(() => {
  const use_bg = useBackground('hyrule', -40);
  bg_color.value = use_bg.color_from_file;
});
</script>
<template>
  <transition appear>
    <div class='hyrule-jobs' :style="{background: bg_color}">
      <div class="container">
        <header class="hyrule-jobs__header">
          <div class="hyrule-jobs__btn">
            <Button
                :class="{'btn--primary': order === 'title'}"
                @click="handelClick('title')">Title
            </Button>
          </div>
          <div class="hyrule-jobs__btn">
            <Button
                :class="{'btn--primary': order === 'location'}"
                @click="handelClick('location')">Location
            </Button>
          </div>
          <div class="hyrule-jobs__btn">
            <Button
                :class="{'btn--primary': order === 'salary'}"
                @click="handelClick('salary')">Salary
            </Button>
          </div>
        </header>
        <div class="hyrule-jobs__list">
          <JobsList :jobs="ordered_jobs" :order="order"/>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.hyrule-jobs {
  padding: 8rem 0;
  min-height: 100vh;
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.2rem;
  }
  &__btn {
    margin: 0 1.6rem;
  }
  &__list {
    margin: 0 auto;
    max-width: 80vw;
  }
}
</style>