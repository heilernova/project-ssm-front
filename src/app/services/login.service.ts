import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggout():boolean{
    return localStorage.getItem('ssm-token') ? true : false;
  }
}
