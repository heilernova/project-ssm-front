import { IQuestion } from "../../../../assets/surveys/interfaces/Iquestions"

export interface ISurvey{
    introduction?:string
    questions:IQuestion[]
}