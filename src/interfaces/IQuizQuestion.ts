export interface IQuizAnswer {
    id: number;
    title: string;
    questions: IQuizQuestion[];
}

export interface IQuizQuestion {
    id: number;
    title: string;
}