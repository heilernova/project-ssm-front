import { FormGroup } from "@angular/forms";
import { IQuestion } from "./Iquestions";

export interface ISurveyData{
    name:string,
    formGroup:FormGroup,
    introduction?:string
    salve:false,
    questions:IQuestion[]
}