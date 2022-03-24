export interface IQuestion {
    formControlName?:string,
    note?:string;
    question:string;
    response:IQuestionResponse[];
    responseOptionOther?:boolean,
    subquestions?:IQuestion[]
}

export interface IQuestionResponse{
    code:string|number,
    text:string
}

export const RES_BUENO_MALO_REGUAR:IQuestionResponse[] = [
    {code: 1, text:'Bueno'},
    {code: 2, text:'Regular'},
    {code: 3, text:'Malo'}
];

export const RES_SI_NO:IQuestionResponse[] = [
    {code: 1, text:'Bueno'},
    {code: 2, text:'Regular'},
    {code: 3, text:'Malo'}
];
export const RES_SCORE:IQuestionResponse[] = [
    {code: 1, text:'1'},
    {code: 2, text:'2'},
    {code: 3, text:'3'},
    {code: 4, text:'4'},
    {code: 5, text:'5'}
];