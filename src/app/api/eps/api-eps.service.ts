import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpsGet } from './IEpsGet';

@Injectable({
  providedIn: 'root',
})
export class ApiEpsService {

  constructor(
    private _http:HttpClient
  ) { }

  getAll():Observable<IEpsGet[]>{
    return this._http.get<IEpsGet[]>(`eps`);
  }
}
