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

  getAll():Observable<any[]>{
    return this._http.get<any[]>(`attention-community/cases`)
  }

  getPerson(dni:string):Observable<{person:any, lastCase?:any}>{
    return this._http.get<{person:any, lastCase?:any}>(`attention-community/users/${dni}`);
  }
  getRequiredAttentions():Observable<any[]>{
    return this._http.get<any[]>(`attention-community/required-attentions`);
  }

  insert(data:any):Observable<any>{
    return this._http.post(`attention-community/cases`, JSON.stringify(data));
  }

  closeCase(id:number):Observable<boolean>{
    return this._http.patch<boolean>(`attention-community/cases/${id}/close`, undefined);
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
