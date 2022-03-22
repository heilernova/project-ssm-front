import { ICaseUserGet } from "src/app/api/cases/Interfaces/ICaseUserGet";
import { IRequestGet } from "src/app/api/cases/Interfaces/IRequestGet";
import { IPersonGet } from "src/app/api/persons/interfaces/IPersonGet";
import { Request } from "./request";

export class CaseUser{
    public dni:string = "";
    public dniType:string|null = null;
    public date:string = "";
    public name:string = "";
    public lastName:string = "";
    public sex:string|null = null;
    public birthDate:string|null = null;
    public age:number|null = null;
    public cellphone:string = "";
    public email:string|null = null;
    public eps:number = 0;
    public epsName:string = "";
    public sisben:number = 0;
    public regime:number = 0;
    public address:string = "";
    public lastRequest:IRequestGet | undefined | null = undefined;

    public clear() {
        this.dni = "";
        this.dniType = null;
        this.date = "";
        this.name = "";
        this.lastName = "",
        this.sex = null;
        this.birthDate = null;
        this.age = null;
        this.cellphone = "";
        this.email = null;
        this.eps = 0;
        this.epsName = "";
        this.sisben = 0;
        this.regime = 0;
        this.address = "";
    }

    public setInfoPerson(info:IPersonGet){
        this.dni = info.dni;
        this.dniType = info.dniType;
        this.date = info.date;
        this.name = info.name;
        this.lastName = info.lastName;
        this.sex = info.sex;
        this.birthDate = info.birthDate;
        this.age = info.age;
        this.cellphone = info.cellphone;
        this.email = info.email;
        this.eps = info.eps;
        this.epsName = "";
        this.sisben = info.sisben;
        this.regime = info.regime;
        this.address = info.address;
        this.lastRequest = undefined;
    }

    setCaseUser(info:ICaseUserGet){
        this.dni = info.dni;
        this.dniType = info.dniType;
        this.date = info.date;
        this.name = info.name;
        this.lastName = info.lastName;
        this.sex = info.sex;
        this.birthDate = info.birthDate;
        this.age = info.age;
        this.cellphone = info.cellphone;
        this.email = info.email;
        this.eps = info.eps;
        this.epsName = info.epsName;
        this.sisben = info.sisben;
        this.regime = info.regime;
        this.address = info.address;
        this.lastRequest = info.lastRequest;
    }
}