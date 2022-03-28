import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasesDataService {

  private _eps:{id:number, name:string}[] = [{id:1, name:'NUEVA EPS'}];
  private _requredAttentions:{id:number, attention:string}[] = [{id:1, attention:'MOVILIDAD'}];
  constructor() { }

  getEPS():{id:number, name:string}[]{
    return this._eps;
  }

  getRequiredAttentions():{id:number, attention:string}[]{
    return this._requredAttentions;
  }
}
