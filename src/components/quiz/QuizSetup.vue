<script lang="ts" setup>
import Input from "../ui/Input.vue";
import {ref} from "@vue/reactivity";
import Button from "../ui/Button.vue";

const number_of_questions = ref('');

const props = defineProps({
  max_number_of_questions: {
    type: Number,
    required: true,
  }
});
</script>
<template>
  <div class='quiz-setup'>
    <div class="quiz-setup__body">
      <h3 class="quiz-setup__title">Setup Quiz</h3>
      <div class="quiz-setup__input">
        <Input
            label="Number of questions"
            id="number-of-questions"
            type="number"
            :max="max_number_of_questions"
            v-model:value="number_of_questions"
        />
      </div>
      <Button>Start</Button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.quiz-setup {
  &__title {
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  &__input {
    margin-bottom: 2rem;
  }
}
</style>