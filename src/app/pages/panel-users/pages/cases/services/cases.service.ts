import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiCasesService } from 'src/app/api/cases/api-cases.service';
import { ICaseGet } from 'src/app/api/cases/Interfaces/ICase';
import { ICaseUserGet } from 'src/app/api/cases/Interfaces/ICaseUserGet';
import { CaseNewComponent } from '../components/case-new/case-new.component';
import { ICaseData } from '../interfaces/Icase';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(
    private _matDialog:MatDialog,
    private _apiCasese:ApiCasesService
  ) { }

  new():MatDialogRef<CaseNewComponent>{
    return this._matDialog.open(CaseNewComponent, { width: '100%', maxWidth:'900px', autoFocus: false});
  }

  getCases():Observable<ICaseData[]>{
    return this._apiCasese.getAll();
  }
  getInforUser(dni:string):Observable<{person:any, lastCase?:any}>{
    return this._apiCasese.getPerson(dni);
  }

  insert(data:any):Observable<any>{
    return this._apiCasese.insert(data);
  }
  
}
