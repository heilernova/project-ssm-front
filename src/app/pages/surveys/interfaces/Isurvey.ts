import { IQuestion } from "./Iquestions"

export interface ISurvey{
    introduction?:string
    questions:IQuestion[]
}