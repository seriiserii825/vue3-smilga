<script lang="ts" setup>
import {ref} from "@vue/reactivity";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import useBackground from "../../hooks/useBackground.js";
import QuizSetup from "../../components/quiz/QuizSetup.vue";
//store
import QuizQuestion from "../../components/quiz/QuizQuestion.vue";
import {useQuizStore} from "../../stores/quiz-store.js";
import {computed} from "@vue/runtime-core";
import QuizFinished from "../../components/quiz/QuizFinished.vue";
import useShuffle from "../../hooks/useShuffle.js";
import QuizResult from "../../components/quiz/QuizResult.vue";

const quiz_store = useQuizStore();

const {
  current_question,
  quiz_started_status,
  quiz_list,
  quiz_is_finished,
  result_status
} = storeToRefs(quiz_store);

const bg_color = ref('#f5f5f5');

const max_number_of_questions = computed(() => {
  return quiz_list.value ? quiz_list.value.length : 0;
});

function init() {
  useShuffle();
}

onMounted(() => {
  const use_bg = useBackground('quiz', -40);
  bg_color.value = use_bg.color_from_file;
  init();
})
</script>
<template>
  <div class='quiz' :style="{background: bg_color}">
    <TransitionGroup name="up">
      <div
          v-if="quiz_started_status === false && !quiz_is_finished && !result_status"
          class="quiz__body">
        <QuizSetup :max_number_of_questions="max_number_of_questions"/>
      </div>
      <div
          v-if="quiz_started_status && !result_status"
          class="quiz__body">
        <QuizQuestion
            :question="quiz_list[current_question]"
            :max_number_of_questions="max_number_of_questions"
            :current_question="current_question + 1"
        />
      </div>
      <div
          v-if="!quiz_started_status && quiz_is_finished"
          class="quiz__body">
        <QuizFinished/>
      </div>
      <div
          v-if="result_status"
          class="quiz__body">
        <QuizResult/>
      </div>
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
.quiz {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
  min-height: 100vh;
  &__body {
    width: 100%;
    max-width: 800px;
    padding: 3.2rem;
    background: white;
    border-radius: 0.5rem;
  }
}
.up-move,
.up-enter-active,
.up-leave-active {
  transition: all 0.5s ease;
}
.up-enter-from {
  opacity: 0;
  transform: translateX(-1030px);
}
.up-leave-to {
  opacity: 0;
  transform: translateX(1030px);
}
.up-leave-active {
  position: absolute;
}
</style>