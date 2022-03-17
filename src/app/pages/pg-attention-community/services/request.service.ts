import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequest } from '../interfaces/IResquest';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http:HttpClient
  ) { }

  onValidDNI(dni:string):Observable<any>{
    return this.http.get(`attention-community/users/${dni}`);
  }

  onGetServices():Observable<any>{
    return this.http.get('attention-community/services');
  }

  onGetEPS():Observable<any>{
    return this.http.get('eps/active');
  }

  /**
   * Registra un  sol
   */
  onRegister(data:any):Observable<any>{
    return this.http.post('attention-community', data);
  }

  onGetHistory():Observable<IRequest[]>{
    return this.http.get<IRequest[]>('attention-community');
  }

  onRegisterComment(id:number, comment:string):Observable<any>{
    return this.http.post(`attention-community/${id}/comments`, JSON.stringify(comment));
  }
}
