import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICaseGet } from './Interfaces/ICase';

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

  insert(data:any):Observable<any>{
    return this._http.post(`attention-community/cases`, JSON.stringify(data));
  }
}
