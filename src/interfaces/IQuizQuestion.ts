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