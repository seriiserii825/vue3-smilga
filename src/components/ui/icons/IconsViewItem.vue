<script setup>
import {computed} from "@vue/runtime-core";
import {ref} from "@vue/reactivity";

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
})

const code = `<font-awesome-icon icon="${props.className}"/>`;
const code_class = ref('');
function copyToBuffer(){
  navigator.clipboard.writeText(code);
  code_class.value = 'copied';
}
</script>
<template>
<div class='icons-view-item'>
  <div class="icons-view__wrap">
    <div class="icons-view__icon">
      <font-awesome-icon :icon="className"/>
    </div>
    <div
        class="icons-view__code"
        @click="copyToBuffer"
    >{{ code_class === 'copied' ? 'copied' : code }}</div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.icons-view-item {
  padding: 2rem 0;
  border-bottom: 1px solid #aaa;
}
.icons-view__wrap {
  display: flex;
  align-items: center;
}
.icons-view__icon {
  margin-right: 3rem;
}
.icons-view__code {
  cursor: pointer;
}
</style>