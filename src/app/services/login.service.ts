import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http:HttpClient
  ) { }

  isLoggout():boolean{
    return localStorage.getItem('ssm-token') ? true : false;
  }

  login(data:any){
    localStorage.setItem('ssm-token', JSON.stringify(data));
  }

  onAuthenticate(data:{username:string, password:string}):Observable<any>{
    return this._http.post('auth', data);
  }

  logout(){
    localStorage.removeItem('ssm-token');
  }
}
