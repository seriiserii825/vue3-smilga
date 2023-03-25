<script lang="ts" setup>
import {useQuizStore} from "../../stores/quiz-store.js";
import {storeToRefs} from "pinia";
import {computed, onMounted} from "vue";
import Button from "../ui/Button.vue";
import {EQuizStore} from "../../enum/EQuizStore";
import useShuffle from "../../hooks/useShuffle.js";

const quiz_store = useQuizStore();
const {quiz_list, quiz_answers} = storeToRefs(quiz_store);

const quiz_result = computed(() => {
  if (quiz_list.value && quiz_list.value.length > 0) {
    return quiz_list.value.map((item, index) => {
      if (quiz_answers.value[index]) {
        item.your_answer = quiz_answers.value[index].answer_id
      }
      return item;
    })
  }
  return [];
})

function onSubmit() {
  quiz_store[EQuizStore.setQuizIsStarted](false);
  quiz_store[EQuizStore.setCurrentQuestion](0);
  quiz_store[EQuizStore.setQuizList]([]);
  quiz_store[EQuizStore.resetQuizAnswers]();
  quiz_store[EQuizStore.setQuizIsFinished](false);
  quiz_store[EQuizStore.setResultStatus](false);
  useShuffle();
}
</script>
<template>
  <div class='quiz-result'>
    <h3 class="quiz-result__title">Quiz result</h3>
    <table v-if="quiz_result && quiz_result.length">
      <thead>
      <tr>
        <th>Question</th>
        <th>Right answer id</th>
        <th>Your answer</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in quiz_result"
          :key="item.id"
      >
        <td>{{ item.title }}</td>
        <td>{{ item.answer }}</td>
        <td :class="{'active': item.answer === item.your_answer}">{{ item.your_answer }}</td>
      </tr>
      </tbody>
    </table>
    <footer class="quiz-result__footer">
      <div class="quiz-result__btn">
        <Button @click="onSubmit">Start again</Button>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.quiz-result {
  &__title {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      padding: 2rem 2rem;
      border: 1px solid var(--border);
    }
  }
  thead {
    th {
      background: var(--dark-bg);
      color: white;
    }
  }
  td {
    &.active {
      color: white;
      background: var(--success);
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
  }
  &__btn {
    max-width: 20rem;
  }
}
</style>