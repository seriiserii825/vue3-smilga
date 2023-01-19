<script setup>
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import GroceryBudItem from "@/components/grocery-bud/GroceryBudItem.vue";
import {ref} from "@vue/reactivity";
import {computed} from "@vue/runtime-core";
import colors from "../../data/colors";

import {useColorStore} from "../../stores/ColorStore";
import {onMounted} from "vue";
import {shadeColor} from "../../utilities/color-converters";
import useBackground from "../../hooks/useBackground";
const colorStore = useColorStore();
const {setColor} = colorStore;

const mode_submit = ref(true);
const search = ref('');
const message = ref('');
const message_type = ref('');
const items = ref([]);
const item_edited_id = ref(null);
const bg_color = ref('#f5f5f5');


function onSubmit() {
  if (search.value.length) {
    if (item_edited_id.value) {
      const idx = items.value.findIndex(item => item.id === item_edited_id.value);
      console.log(idx, 'idx')
      items.value[idx].title = search.value;
      search.value = '';
      item_edited_id.value = null;
      mode_submit.value = true;
    } else {
      const id = Date.now();
      if (items.value.length) {
        const idx = items.value.findIndex(item => item.title === search.value);
        if (idx !== -1) {
          errorMessage();
        } else {
          items.value.push({id: id, title: search.value});
          successMessage();
          resetInput();
        }
      } else {
        items.value.push({id: id, title: search.value});
        successMessage();
        resetInput();
      }
    }
  } else {
    emptyMessage();
  }
}

function removeItem(id) {
  items.value = items.value.filter(item => item.id !== id);
}

function editItem(id) {
  item_edited_id.value = id;
  mode_submit.value = false;
  const item = items.value.filter(item => item.id === id);
  search.value = item[0].title;
}

function clearItems() {
  items.value = [];
}

function resetInput() {
  search.value = '';
}


function clearMessage() {
  setTimeout(() => {
    message.value = '';
    message_type.value = '';
  }, 3000);
}

function successMessage() {
  message.value = 'Item was added!!!';
  message_type.value = 'success';
  clearMessage();
}

function errorMessage() {
  message.value = 'Item was already added!!!';
  message_type.value = 'error';
  clearMessage();
}

function emptyMessage() {
  message.value = 'Search is empty';
  message_type.value = 'error';
  clearMessage();
}

const messageClass = computed(() => {
  if (message_type.value === 'error') {
    return 'error';
  } else if (message_type.value === 'success') {
    return 'success';
  }
});

onMounted(() => {
  const use_bg = useBackground('grocery', -50);
  bg_color.value = use_bg.color_from_file;
})
</script>
<template>
  <div class='grocery-bud' :style="{background: bg_color}">
    <div class="container">
      <div class="grocery-bud__body">
        <div v-if="message" :class="`grocery-bud__info ${messageClass}`">{{ message }}</div>
        <h2 class="grocery-bud__title">Grocery Bud</h2>
        <div class="grocery-bud__form">
          <Input v-model:value="search" placeholder="e.g. eggs"/>
          <Button
              :label="mode_submit ? 'Submit' : 'Edit'"
              @click="onSubmit"
          />
        </div>
        <ul v-if="items.length" class="grocery-bud__list">
          <GroceryBudItem
              v-for="(item) in items"
              :key="item.id" :item="item"
              @remove-emit="removeItem"
              @edit-emit="editItem"
          />
        </ul>
        <footer class="grocery-bud__footer">
          <Button @click="clearItems" label="Clear Items" :outline="true" color="error"/>
        </footer>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grocery-bud {
  padding: 16rem 0;
  min-height: 100vh;
  background: #fadafa;
  &__body {
    position: relative;
    margin: 0 auto;
    padding: 6rem 2rem;
    max-width: 60rem;
    background: #fff;
    border-radius: 0.4rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  }
  &__info {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 2rem;
    padding: 0.4rem;
    text-align: center;
    background: var(--success-light);
    &.error {
      color: white;
      background: var(--error);
    }
    &.success {
      color: white;
      background: var(--success);
    }
  }
  &__title {
    margin-bottom: 3rem;
    text-align: center;
  }
  &__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    .input {
      flex: 1;
    }
  }
  &__list {
    padding: 3rem 0;
  }
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>