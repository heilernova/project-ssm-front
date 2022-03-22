import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ICaseGet } from 'src/app/api/cases/Interfaces/ICase';
import { CaseInfoComponent } from '../components/case-info/case-info.component';
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

  showCase(caseInfo:ICaseGet):MatDialogRef<CaseInfoComponent>{
    return this.matDialog.open(CaseInfoComponent, {data:caseInfo, autoFocus: false, width: '100%', maxWidth:'900px'});
  }

  onGetServices():Observable<{id:number, description:string}[]>{
    return this._http.get<{id:number, description:string}[]>(`attention-community/services`);
  }

  onGetPerson(document:string):Observable<any>{
    return this._http.get(`attention-community/users/${document}`);
  }

  onInsertPerson(data:any):Observable<any>{
    return this._http.post(`persons`, JSON.stringify(data));
  }
}
