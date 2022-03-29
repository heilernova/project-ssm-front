import { Injectable } from '@angular/core';
import { ApiCasesService } from 'src/app/api/cases/api-cases.service';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';

@Injectable({
  providedIn: 'root'
})
export class CasesDataService {

  private _eps:{id:number, name:string}[] = [{id:1, name:'NUEVA EPS'}];
  private _requredAttentions:{id:number, attention:string}[] = [{id:1, attention:'MOVILIDAD'}];
  constructor(
    private _apiCases:ApiCasesService
  ) { }

  getEPS():{id:number, name:string}[]{
    return this._eps;
  }

  load(){
    this._apiCases.getRequiredAttentions().subscribe({
      next: da =>{
        this._requredAttentions = da;
      }
    })
  }
  getRequiredAttentions():{id:number, attention:string}[]{
    return this._requredAttentions;
  }
}
