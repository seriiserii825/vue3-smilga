import {defineStore} from 'pinia'
import {ref} from "vue";
export const useQuizStore = defineStore('quiz', () => {
    const current_question = ref(0);
    const quiz_list = ref();
    const quiz_started_status = ref(false);
    const quiz_answers = ref([]);
    const quiz_is_finished = ref(false);
    const right_answers = ref([]);
    function setCurrentQuestion(value) {
        current_question.value = value;
    }
    const setQuizList = (value) => {
        quiz_list.value = value;
    }
    const setQuizIsStarted = (value) => {
        console.log(value, 'value')
        quiz_started_status.value = value;
    }
    const setQuizAnswers = (value) => {
        quiz_answers.value.push(value);
    }
    const resetQuizAnswers = () => {
        quiz_answers.value = [];
    }
    const setQuizIsFinished = (value) => {
        quiz_is_finished.value = value;
    }
    const setRightAnswers = (value) => {
        right_answers.value.push(value);
    }
    return {
        current_question,
        setCurrentQuestion,
        quiz_list,
        setQuizList,
        quiz_started_status,
        setQuizIsStarted,
        setQuizAnswers,
        quiz_answers,
        setQuizIsFinished,
        quiz_is_finished,
        right_answers,
        setRightAnswers,
        resetQuizAnswers
    }
})
