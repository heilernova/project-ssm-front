import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICase } from '../interfaces/ICase';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(
    private http:HttpClient
  ) { }

  /**
   * Ejecuta un petición HTTP para obtener los casos activos.
   */
  onGetCases():Observable<ICase[]>{
    return this.http.get<ICase[]>('attention-community/cases');
  }

  /**
   * Ejecuta un petición HTTP obtener la información de un caso.
   */
  onGetCase(id:number):Observable<ICase>{
    return this.http.get<ICase>(`attention-community/cases/${id}`);
  }

  /**
   * Registra un caso
   */
  onRegiter(data:any):Observable<any>{
    return this.http.post(`attention-community/cases`, data);
  }

  /** Actualiza la información de un caso. */
  onUpdate(id:number, data:any):Observable<any>{
    return this.http.put(`attention-community/cases/${id}`, data);
  }

  /** Elimina un caso*/
  onRegisterCase(id:number):Observable<any>{
    return this.http.delete(`attention-community/cases/${id}`);
  }

  onRegisterObservation(idCase:number, content:string):Observable<any>{
    return this.http.post(`attention-community/cases/${idCase}/observations`, JSON.stringify(content));
  }
}
