import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICaseGet } from './Interfaces/ICase';
import { ICaseUserGet } from './Interfaces/ICaseUserGet';
import { IRequestGet } from './Interfaces/IRequestGet';

@Injectable({
  providedIn: 'root'
})
export class ApiCasesService {

  constructor(
    private _http:HttpClient
  ) { }

  getAll():Observable<ICaseGet[]>{
    return this._http.get<ICaseGet[]>(`attention-community/cases`)
  }

  getPerson(dni:string):Observable<ICaseUserGet>{
    return this._http.get<ICaseUserGet>(`attention-community/users/${dni}`);
  }

  insert(data:any):Observable<any>{
    return this._http.post(`attention-community/cases`, JSON.stringify(data));
  }

  insertObservation(idCase:number, text:string):Observable<any>{
    return this._http.post(`attention-community/cases/${idCase}/observations`, JSON.stringify(text));
  }

  observationUpdate(id:number, text:string):Observable<any>{
    return this._http.put(`attention-community/cases/observations/${id}`, JSON.stringify(text));
  }

  observationDelete(id:number):Observable<any>{
    return this._http.delete(`attention-community/cases/observations/${id}`);
  }
}
