<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
const emits = defineEmits(['removeEmit', 'editEmit']);

function editItem(id) {
  emits('editEmit', id);
}

function deleteItem(id) {
  emits('removeEmit', id);
}
</script>
<template>
  <li class='grocery-bud-item'>
    <span class="grocery-bud-item__text">{{ item.title }}</span>
    <div class="grocery-bud-item__actions">
      <font-awesome-icon @click="editItem(item.id)" class="grocery-bud-item__edit" icon="fa-solid fa-pen-to-square"/>
      <font-awesome-icon @click="deleteItem(item.id)" class="grocery-bud-item__delete" icon="fa-solid fa-trash-can"/>
    </div>
  </li>
</template>
<style lang="scss" scoped>
.grocery-bud-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem 0.6rem;
  background: #f1f1f1;
  &__text {
    margin-right: auto;
  }
  &__edit {
    color: var(--success);
    cursor: pointer;
  }
  &__delete {
    margin-left: 1rem;
    color: var(--error);
    cursor: pointer;
  }
}
</style>