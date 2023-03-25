import {defineStore} from 'pinia'
import {ref} from "@vue/reactivity";
export const useQuizStore = defineStore('quiz', () => {
    const current_question = ref(0);
    function setCurrentQuestion(value) {
        current_question.value = value;
    }
    return {current_question, setCurrentQuestion}
})
