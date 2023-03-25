<script lang="ts" setup>
import Input from "../ui/Input.vue";
import {ref} from "@vue/reactivity";
import Button from "../ui/Button.vue";
import {useQuizStore} from "../../stores/quiz-store.js";
import {storeToRefs} from "pinia";
import {EQuizStore} from "../../enum/EQuizStore";

const quiz_store = useQuizStore();
const {quiz_list} = storeToRefs(quiz_store);

const number_of_questions = ref('');

const props = defineProps({
  max_number_of_questions: {
    type: Number,
    required: true,
  }
});
function onSubmit(){
  quiz_store[EQuizStore.setQuizList](quiz_list.value.slice(0, +number_of_questions.value));
  quiz_store[EQuizStore.setQuizIsStarted](true);
}
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
    </div>
    <footer class="quiz-setup__footer">
      <div class="quiz-setup__btn">
        <Button
            @click="onSubmit"
        >Start</Button>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.quiz-setup {
  &__title {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
  &__input {
    margin-bottom: 4rem;
  }
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__btn {
    width: 20rem;
  }
}
</style>