import {useQuizStore} from "../stores/quiz-store";
import {EQuizStore} from "../enum/EQuizStore";
import {quiz_questions} from "../data/quiz/quiz-questions";
const quiz_store = useQuizStore();
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
const useShuffle = () => {
    const shuffled_questions = shuffle(quiz_questions);
    quiz_store[EQuizStore.setQuizList](shuffled_questions);
}
export default useShuffle;
