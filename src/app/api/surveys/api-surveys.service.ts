import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSurveysService {

  constructor(
    private _http:HttpClient
  ) { }

  getSurveyors():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>('surveys/surveyors');
  }

  // insert()


  getEPS():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>(`surveys/eps`);
  }

  getIPS():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>(`surveys/ips`);
  }

  postEPS(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/eps', JSON.stringify(data));
  }
}
