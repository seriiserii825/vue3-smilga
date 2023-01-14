<script setup>
import {useCodePopupStore} from "../../stores/CodePopupStore";

const codePopupStore = useCodePopupStore();
const props = defineProps({
  use: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
});

function closePopup() {
  codePopupStore.hidePopup();
}

</script>
<template>
  <div class='code-popup'>
    <div class="code-popup__overlay" @click="closePopup"></div>
    <div class="code-popup__body">
      <div v-if="use">
        <h3 class="code-popup__title">How to use</h3>
        <div class="code-popup__info"><code>{{ use }}</code></div>
      </div>
      <div v-if="code">
        <h3 class="code-popup__title">Code:</h3>
        <div class="code-popup__value">
          <pre><code>{{ code }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.code-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0.8);
    z-index: 1;
  }
  &__body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    width: 80%;
    height: 80%;
    background: white;
    z-index: 2;
  }
  &__title {
    margin-bottom: 1rem;
  }
  pre {
    padding: 2rem;
    color: white;
    background: var(--dark-bg);
  }
}
</style>