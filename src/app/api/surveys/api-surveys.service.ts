import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSurveysService {

  constructor(
    private _http:HttpClient
  ) { }

  getSurveyors():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>('surveys/surveyors');
  }
  getPollsters():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>('surveys/surveyors');
  }

  // insert()


  getEPS():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>(`surveys/eps`);
  }

  getIPS():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>(`surveys/ips`);
  }

  salveEPS(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/eps', JSON.stringify(data));
  }

  salveIPS(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/ips', JSON.stringify(data));
  }
  salveIpsHospitalization(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/ips/hospitalization', JSON.stringify(data));
  }
  
  salveIpsLaboratory(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/ips/laboratory', JSON.stringify(data));
  }
  salveIpsPharmacy(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/ips/pharmacy', JSON.stringify(data));
  }
  salveIpsMedicine(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/ips/medicine', JSON.stringify(data));
  }
  salveIpsOdontology(data:any):Observable<boolean>{
    return this._http.post<boolean>('surveys/ips/odontology', JSON.stringify(data));
  }
}
