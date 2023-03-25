<script lang="ts" setup>
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";
import useBackground from "../../hooks/useBackground.js";
import {IQuizQuestion} from "../../interfaces/IQuizQuestion";
import QuizSetup from "../../components/quiz/QuizSetup.vue";
import {quiz_questions} from "../../data/quiz/quiz-questions.js";
import QuizQuestion from "../../components/quiz/QuizQuestion.vue";
import Preloader from "../../components/ui/Preloader.vue";

const bg_color = ref('#f5f5f5');
const loading = ref(false);
const questions = ref<IQuizQuestion[]>([]);
const current_question = ref(0);
const max_number_of_questions = ref(0);
const is_quiz_started = ref(true);
const is_quiz_finished = ref(false);

function init() {
  loading.value = true;
  questions.value = quiz_questions;
  max_number_of_questions.value = questions.value.length - 1;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
}

onMounted(() => {
  const use_bg = useBackground('quiz', -40);
  bg_color.value = use_bg.color_from_file;
  init();
})
</script>
<template>
  <div class='quiz' :style="{background: bg_color}">
    <div class="quiz__body">
      <QuizSetup
          v-if="!is_quiz_started && !is_quiz_finished"
          :max_number_of_questions="max_number_of_questions"
      />
      <QuizQuestion
          v-if="!loading && is_quiz_started && !is_quiz_finished && questions[current_question] && current_question <= max_number_of_questions"
          :question="questions[current_question]"
          :max_number_of_questions="max_number_of_questions"
          :current_question="current_question + 1"
          @emit_next_question="current_question++"
      />
      <Preloader v-else/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.quiz {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  &__body {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    background: white;
    border-radius: 0.5rem;
  }
}
</style>