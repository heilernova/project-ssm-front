import { IRequestGet } from "src/app/api/cases/Interfaces/IRequestGet";

export class Request implements IRequestGet{
    id: number = 0;
    date: string = "";
    status: boolean = false;
    user: number = 0;
    dni: string = "";
    service: number = 0;
    accompaniment: string = "";
    eps: number = 0;
    sisben: number = 0;
    regime: number = 0;
    olderAdult: boolean = false;
    disable: boolean = false;
    pregnant: boolean = false;
    womenHeadHousehold: boolean = false;
    afrodescendent: boolean = false;
    lgtbi: boolean = false;
    victim: boolean = false;
    displaced: boolean = false;
    demovilized: boolean = false;
    reinserted: boolean = false;
    planRaizal: boolean = false;
    roomGitano: boolean = false;
    nnaNunAccompanimentdAdult: boolean = false;
}