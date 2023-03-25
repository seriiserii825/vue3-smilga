export interface IQuizQuestion {
    id: number;
    title: string;
    answers: IQuizAnswer[];
    right_answer: number;
}

export interface IQuizAnswer {
    id: number;
    title: string;
}