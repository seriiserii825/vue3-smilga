<script setup>
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import GroceryBudItem from "@/components/grocery-bud/GroceryBudItem.vue";
import {ref} from "@vue/reactivity";
import {computed} from "@vue/runtime-core";

const search = ref('');
const message = ref('');
const message_type = ref('');
const items = ref([]);

function searchHandler(value) {
  search.value = value;
}

function onSubmit() {
  if (search.value.length) {
    const id = Date.now();
    if (items.value.length) {
      const idx = items.value.findIndex(item => item.title === search.value);
      if (idx !== -1) {
        errorMessage();
      } else {
        items.value.push({id: id, title: search.value});
        successMessage();
        search.value = '';
      }
    } else {
      items.value.push({id: id, title: search.value});
      successMessage();
      search.value = '';
    }
  } else {
    emptyMessage();
  }
}

function clearMessage() {
  setTimeout(() => {
    message.value = '';
    message_type.value = '';
  }, 1000);
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

</script>
<template>
  <div class='grocery-bud'>
    <div class="container">
      <div class="grocery-bud__body">
        <div v-if="message" :class="`grocery-bud__info ${messageClass}`">{{ message }}</div>
        <h2 class="grocery-bud__title">Grocery Bud</h2>
        <div class="grocery-bud__form">
          <Input @change="searchHandler" placeholder="e.g. eggs"/>
          <Button label="Submit" @click="onSubmit"/>
        </div>
        <ul v-if="items.length" class="grocery-bud__list">
          <GroceryBudItem v-for="(item) in items" :key="item.id" :item="item"/>
        </ul>
        <footer class="grocery-bud__footer">
          <Button label="Clear Items" :outline="true" color="error"/>
        </footer>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grocery-bud {
  padding: 8rem 0;
  &__body {
    margin: 0 auto;
    padding: 4rem 2rem;
    max-width: 60rem;
    background: #fff;
    border-radius: 0.4rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  }
  &__info {
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