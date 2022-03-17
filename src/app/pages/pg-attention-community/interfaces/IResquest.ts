export interface IRequest{
    id:number,
    date:string,
    dni:string,
    name:string,
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