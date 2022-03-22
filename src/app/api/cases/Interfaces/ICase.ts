export interface ICaseGet{
    id:number,
    date:string,
    dni:string,
    dniType:string,
    name:string,
    birthDate:string|null,
    years:string|null,
    cellphone:string,
    email:string|null,
    address:string|null,
    eps:string,
    regime:number,
    siben:number,
    service:string,
    accompaniment:string,
    status:boolean,
    observations:{id:number, date:string, content:string}[]
}