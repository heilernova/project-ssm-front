import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISurveyData } from 'src/app/pages/surveys/interfaces/Isurvey';

@Injectable({
  providedIn: 'root'
})
export class ApiSurveysService {

  constructor(
    private _http:HttpClient
  ) { }

  getSurveyors():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>('surveys/pollsters');
  }
  getPollsters():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>('surveys/pollsters');
  }

  getTotals(pollster:number, dateStart:string, dateEnd:string):Observable<any>{
    return this._http.get(`surveys/totals/${pollster}/${dateStart}/${dateEnd}`);
  }

  getExcel(pollster:number, dateStart:string, dateEnd:string):Observable<any>{
    return this._http.get(`surveys/export/${pollster}/${dateStart}/${dateEnd}`, {responseType:'blob' as 'json'});
  }
  getEPS():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>(`surveys/eps`);
  }

  getIPS():Observable<{id:number, name:string}[]>{
    return this._http.get<{id:number, name:string}[]>(`surveys/ips`);
  }

  salveSurvey(survey:ISurveyData):Observable<boolean>{
    const data = {
      database: survey.database,
      params: survey.formGroup.value
    };
    return this._http.post<boolean>('surveys', JSON.stringify(data));
  }
}
