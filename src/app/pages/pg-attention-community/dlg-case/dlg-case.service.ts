import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DlgCaseObservationComponent } from '../dlg-case-observation/dlg-case-observation.component';
import { ICase } from '../interfaces/ICase';
import { DlgCaseComponent } from './dlg-case.component';

@Injectable({
  providedIn: 'root'
})
export class DlgCaseService {

  constructor(
    private _matDialog:MatDialog
  ) { }
  
  show(data:ICase):MatDialogRef<DlgCaseComponent>{
    return this._matDialog.open(DlgCaseComponent, {data ,autoFocus:false, width: '100%', maxWidth:'900px'});
  }

  addComment(idCase:number):MatDialogRef<DlgCaseObservationComponent>{
    return this._matDialog.open(DlgCaseObservationComponent, {data:idCase, width: "100%", maxWidth: '550px', disableClose:true});
  }
}