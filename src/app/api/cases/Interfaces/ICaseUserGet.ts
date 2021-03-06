import { IRequestGet } from "./IRequestGet";

export interface ICaseUserGet{
    id:number,
    date:string,
    dni:string,
    dniType:string,
    name:string,
    lastName:string,
    sex:string|null,
    birthDate:string|null,
    cellphone:string|null,
    email:string|null,
    address:string,
    regime:string|null,
    siben:string|null,
    eps:string,
    requiredAttention:string,
    note:string,
    status:boolean
}