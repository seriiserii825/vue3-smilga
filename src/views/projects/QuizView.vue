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

const quiz_store = useQuizStore();

const {
  current_question,
  quiz_started_status,
  quiz_list,
  quiz_is_finished
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
    <div class="quiz__body">
      <QuizSetup
          v-if="quiz_started_status === false && !quiz_is_finished"
          :max_number_of_questions="max_number_of_questions"
      />
      <QuizQuestion
          v-if="quiz_started_status"
          :question="quiz_list[current_question]"
          :max_number_of_questions="max_number_of_questions"
          :current_question="current_question + 1"
      />
      <QuizFinished
          v-if="!quiz_started_status && quiz_is_finished"
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
    max-width: 600px;
    padding: 3.2rem;
    background: white;
    border-radius: 0.5rem;
  }
}
</style>