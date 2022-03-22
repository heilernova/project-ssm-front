import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonGet } from './interfaces/IPersonGet';
import { IPersonPost } from './interfaces/IPersonPost';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonsService {

  constructor(
    private _http:HttpClient
  ) { }

  get(dni:string):Observable<IPersonGet>{
    return this._http.get<IPersonGet>(`persons/${dni}`);
  }

  insert(data:IPersonPost):Observable<IPersonGet>{
    return this._http.post<IPersonGet>(`persons`, JSON.stringify(data));
  }

  update(data:IPersonGet):Observable<any>{
    return this._http.put(`persons`, JSON.stringify(data));
  }
}
