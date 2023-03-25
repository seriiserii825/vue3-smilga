import {defineStore} from 'pinia'
import {ref} from "@vue/reactivity";

export const useQuizStore = defineStore('quiz', () => {
    const current_question = ref(0);

    function setCurrentQuestion(value) {
        current_question.value = value;
    }

    const quiz_list = ref();

    const setQuizList = (value) => {
        quiz_list.value = value;
    }

    return {current_question, setCurrentQuestion, quiz_list, setQuizList}
})
