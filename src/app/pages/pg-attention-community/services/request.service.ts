import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.get('eps');
  }

  onRegister(data:any):Observable<any>{
    return this.http.post('attention-community', data);
  }

  onGetHistory():Observable<any>{
    return this.http.get('attention-community');
  }
}
