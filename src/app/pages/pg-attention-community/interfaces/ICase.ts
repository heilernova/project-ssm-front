export interface ICase{
    id:number,
    date:string,
    dni:string,
    name:string,
    birthDate:string,
    edad:number,
    cellphone:string,
    email:string,
    address:string,
    eps:string,
    regime:number,
    sisben:number,
    service:string,
    accompaniment:string,
    status:boolean,
    observations:{ id:number, date:string, content:string }[]
}