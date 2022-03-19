import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpsService {

  constructor(
    private _http:HttpClient
  ) { }

  onGetEPS():Observable<any[]>{
    return this._http.get<any[]>('eps');
  }

  onRegisterEPS(name:string):Observable<any>{
    return this._http.post('eps', name);
  }

  onUpdateEPS(id:number, data:{name:string, disable:boolean}):Observable<boolean>{
    return this._http.put<boolean>(`eps/${id}`, data);
  }
}
