import { FormControl } from "@angular/forms"

export interface IQuestion {
    note?:string,
    question:string,
    formControlName?:string,
    formControl:FormControl,
    type?:QuestinoType,
    inputFormat?:{textTransform:'capitalize'|'uppercase'|'lowercase'},
    options:{code:string|number, text:string}[],
    subQuestions?:IQuestion[]
}

export enum QuestinoType { text, radioButton, radioButtonMas}

export const options_yes_no:{code:string|number, text:string}[] = [
    { code: 1, text: 'Si'},
    { code: 2, text: 'No'}
]

export const options_okay_regular_bad = [
    { code: 3, text: 'Bueno'},
    { code: 2, text: 'Regular'},
    { code: 1, text: 'Malo'}
]
 
export const options_score_1_to_5 = [
    { code: 1, text: '1'},
    { code: 2, text: '2'},
    { code: 3, text: '3'},
    { code: 4, text: '4'},
    { code: 5, text: '5'},
]