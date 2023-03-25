<script lang="ts" setup>
import {E_Button} from "../../enum/E_Button";
import Button from "../ui/Button.vue";
import {ref} from "@vue/reactivity";
import {useQuizStore} from "../../stores/quiz-store.js";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import {EQuizStore} from "../../enum/EQuizStore";
import useShuffle from "../../hooks/useShuffle";
import {IQuizQuestion} from "../../interfaces/IQuizQuestion";

const quiz_store = useQuizStore();
const {quiz_list, quiz_answers} = storeToRefs(quiz_store);

const percentage = ref<number>(0);
const right_answers = ref([]);

function onSubmit() {
  quiz_store[EQuizStore.setQuizIsStarted](false);
  quiz_store[EQuizStore.setCurrentQuestion](0);
  quiz_store[EQuizStore.setQuizList]([]);
  quiz_store[EQuizStore.resetQuizAnswers]();
  quiz_store[EQuizStore.setQuizIsFinished](false);
  useShuffle();
}

function viewResult() {
  quiz_store[EQuizStore.setQuizIsStarted](false);
  quiz_store[EQuizStore.setQuizIsFinished](false);
  quiz_store[EQuizStore.setResultStatus](true);
}

function getPercentage() {
  const total_questions = quiz_list.value.length;
  quiz_list.value.forEach((question: IQuizQuestion) => {
    const question_answer_id = question.answer;
    const user_answer = quiz_answers.value.find((answer) => answer.id === question.id);
    const user_answer_id = user_answer.answer_id;
    if (question_answer_id === user_answer_id) {
      right_answers.value.push(question_answer_id);
      quiz_store[EQuizStore.setRightAnswers](question_answer_id);
    }
  });
  percentage.value = (right_answers.value.length / total_questions) * 100;
  percentage.value = percentage.value.toFixed(0);
}

onMounted(() => {
  console.log('mounted finished')
  getPercentage();
});
</script>
<template>
  <div class='quiz-finished'>
    <h3 class="quiz-finished__title">Quiz Finished</h3>
    <p class="quiz-finished__subtitle">You answered for <strong>{{ percentage }}%</strong> of questions</p>
    <div class="quiz-finished__footer">
      <div class="quiz-finished__btn">
        <Button
            @click="onSubmit"
            class="quiz-finished__btn"
        >Start Again
        </Button>
      </div>
      <div class="quiz-finished__btn">
        <Button
            @click="viewResult"
            class="quiz-finished__btn"
            :color="E_Button.success"
        >View result
        </Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.quiz-finished {
  text-align: center;
  &__title {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
  &__subtitle {
    margin-bottom: 6rem;
    font-size: 2.2rem;
    strong {
      display: inline-block;
      padding: 0.5rem;
      color: white;
      background: var(--success);
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__btn {
    flex: 0 0 20rem;
  }
}
</style>