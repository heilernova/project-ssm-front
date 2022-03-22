import { IRequestGet } from "./IRequestGet";

export interface ICaseUserGet{
    dni:string;
    dniType:string;
    date:string;
    name:string;
    lastName:string;
    sex:string;
    birthDate:string|null;
    age:number|null;
    cellphone:string;
    email:string|null;
    eps:number;
    epsName:string;
    sisben:number;
    regime:number;
    address:string
    lastRequest:IRequestGet;
}