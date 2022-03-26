import { FormGroup } from "@angular/forms"
import { IQuestion } from "./Iquestions"

export interface ISurveyData{ 
    name:string,
    nameTitle:string,
    icon:string
    database:string,
    introduction:string|string[],
    formGroup:FormGroup,
    salve:false,
    questions:IQuestion[]
}