export interface IQuizQuestion {
    id: number;
    title: string;
    answers: IQuizAnswer[];
    answer: number;
}

export interface IQuizAnswer {
    id: number;
    title: string;
}

export interface IQuizQuestionResult {
    id: number;
    title: string;
    answer: number;
    your_answer: number;
}
