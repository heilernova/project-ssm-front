import { FormGroup } from "@angular/forms";
import { IQuestion } from "../../../../assets/surveys/interfaces/Iquestions";

export interface ISurveyData{
    name:string,
    formGroup:FormGroup,
    introduction?:string
    salve:false,
    questions:IQuestion[]
}