<script lang="ts" setup>
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";
import useBackground from "../../hooks/useBackground.js";
import {IQuizAnswer} from "../../interfaces/IQuizQuestion";
import QuizSetup from "../../components/quiz/QuizSetup.vue";
import {quiz_questions} from "../../data/quiz/quiz-questions.js";

const bg_color = ref('#f5f5f5');
const questions = ref<IQuizAnswer[]>([]);
const max_number_of_questions = ref(0);
onMounted(() => {
  const use_bg = useBackground('quiz', -40);
  bg_color.value = use_bg.color_from_file;
  questions.value = quiz_questions;
  max_number_of_questions.value = questions.value.length - 1;
})
</script>
<template>
  <div class='quiz' :style="{background: bg_color}">
    <div class="quiz__body">
      <QuizSetup
          :max_number_of_questions="max_number_of_questions"
      />
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
    max-width: 800px;
    padding: 2rem;
    background: white;
    border-radius: 0.5rem;
  }
}
</style>