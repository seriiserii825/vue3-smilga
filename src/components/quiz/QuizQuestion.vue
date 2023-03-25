<script lang="ts" setup>
import {PropType} from "vue";
import {IQuizQuestion} from "../../interfaces/IQuizQuestion";
import Button from "../ui/Button.vue";
import {ref} from "@vue/reactivity";
import {EQuizStore} from "../../enum/EQuizStore";
import {useQuizStore} from "../../stores/quiz-store.js";
import {storeToRefs} from "pinia";
import {watch} from "@vue/runtime-core";

const quiz_store = useQuizStore();
const {current_question} = storeToRefs(quiz_store);
const loading = ref(false);


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
  quiz_store[EQuizStore.setQuizAnswers]({id: props.question.id, answer_id: active_answer.value});
  active_answer.value = null;
  if (props.max_number_of_questions === current_question.value + 1) {
    quiz_store[EQuizStore.setQuizIsStarted](false);
    quiz_store[EQuizStore.setQuizIsFinished](true);
  }
  quiz_store[EQuizStore.setCurrentQuestion](current_question.value + 1);
}

watch(current_question, (count, prevCount) => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 300);
})
</script>
<template>
  <div class='quiz-question'>
    <header class="quiz-question__header">
      <div class="quiz-question__info">Current Question {{ current_question + 1 }}/{{ max_number_of_questions }}</div>
    </header>
    <Transition name="fade-left">
      <h2 v-if="!loading" class="quiz-question__title">{{ question.title }}</h2>
    </Transition>
    <Transition name="nested">
      <ul v-if="!loading" class="quiz-question__list">
        <li
            v-for="item in question.answers"
            :key="item.id"
            @click="toggleAnswer(item.id)"
            :class="{'active': active_answer === item.id}"
        >
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </Transition>
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
.nested-enter-active,
.nested-leave-active {
  transition: opacity 0.5s ease;
}
.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}
.fade-left-enter-active,
.fade-left-leave-active {
  transition: opacity 0.5s ease;
}
.fade-left-enter-from {
  opacity: 0;
}
.fade-left-leave-to {
  opacity: 0;
}
/* rules that target nested elements */
.nested-enter-active li,
.nested-leave-active li {
  transition: all 1s ease-in-out;
}
.nested-enter-from li {
  transform: rotateX(90deg);
  opacity: 0;
  background: var(--success);
}
.nested-leave-to li {
  transform: rotateX(0);
  background: transparent;
  opacity: 0;
}
.nested-enter-active li {
  &:nth-of-type(2) {
    transition-delay: 0.3s;
  }
  &:nth-of-type(3) {
    transition-delay: 0.6s;
  }
  &:nth-of-type(4) {
    transition-delay: 0.9s;
  }
  &:nth-of-type(5) {
    transition-delay: 1.2s;
  }
  &:nth-of-type(6) {
    transition-delay: 1.5s;
  }
}
</style>