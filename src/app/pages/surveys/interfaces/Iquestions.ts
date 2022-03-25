import { FormControl } from "@angular/forms"

export interface IQuestion {
    note?:string,
    question:string,
    formControlName?:string,
    formControl:FormControl,
    type?:QuestinoType,
    options:{code:string|number, text:string}[]
}

export enum QuestinoType { text, redioButton, redioButtonMas}