<script lang="ts" setup>
import {PropType} from "vue";
import {IQuizQuestion} from "../../interfaces/IQuizQuestion";
import Button from "../ui/Button.vue";
import {ref} from "@vue/reactivity";
import {EQuizStore} from "../../enum/EQuizStore";
import {useQuizStore} from "../../stores/quiz-store.js";
import {storeToRefs} from "pinia";

const quiz_store = useQuizStore();
const {current_question} = storeToRefs(quiz_store);


const props = defineProps({
  question: {
    type: Object as PropType<IQuizQuestion>,
    required: true,
  },
  max_number_of_questions: {
    type: Number,
    required: true,
  },
  current_question: {
    type: Number,
    required: true,
  },
});
const active_answer = ref(null);

function toggleAnswer(id: number) {
  active_answer.value = id;
}

function onSubmit() {
  quiz_store[EQuizStore.SET_CURRENT_QUESTION](current_question.value + 1);
}
</script>
<template>
  <div class='quiz-question'>
    <header class="quiz-question__header">
      <div class="quiz-question__info">Current Question {{ current_question }}/{{ max_number_of_questions }}</div>
    </header>
    <h2 class="quiz-question__title">Question title</h2>
    <ul class="quiz-question__list">
      <li
          v-for="item in question.answers"
          :key="item.id"
          @click="toggleAnswer(item.id)"
          :class="{'active': active_answer === item.id}"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <footer class="quiz-question__footer">
      <div class="quiz-question__btn">
        <Button
            :disabled="!active_answer"
            @click="onSubmit"
        >Next question
        </Button>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.quiz-question {
  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--success);
  }
  &__title {
    margin-bottom: 4rem;
  }
  &__list {
    margin-bottom: 4rem;
    li {
      margin-bottom: 2rem;
      padding: 1rem;
      font-size: 1.6rem;
      font-weight: bold;
      border: 1px solid var(--border);
      transition: all 0.1s ease-out;
      &.active,
      &:hover {
        color: white;
        background: var(--success);
        border-color: var(--success);
        cursor: pointer;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__btn {
    width: 20rem;
  }
}
</style>