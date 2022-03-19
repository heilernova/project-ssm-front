import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CaseNewComponent } from '../components/case-new/case-new.component';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(
    private matDialog:MatDialog,
    private _http:HttpClient
  ) { }

  newCase(){
    return this.matDialog.open(CaseNewComponent, {disableClose:true, maxWidth: '1200px'});
  }

  onGetServices():Observable<{id:number, description:string}[]>{
    return this._http.get<{id:number, description:string}[]>(`attention-community/services`);
  }

  onGetPerson(document:string):Observable<any>{
    return this._http.get(`attention-community/users/${document}`);
  }
}
