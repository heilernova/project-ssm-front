import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SacService {

  constructor(
    private _http:HttpClient
  ) { }

  onGetServices():Observable<any>{
    return this._http.get(`attention-community/services`);
  }

  onInsertService(service:string):Observable<any>{
    return this._http.post(`attention-community/services`, JSON.stringify(service));
  }

  onUpdateService(id:number, service:string):Observable<any>{
    return this._http.put(`attention-community/services/${id}`, JSON.stringify(service));
  }
}
