import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IPersonGet } from 'src/app/api/persons/interfaces/IPersonGet';
import { DlgPersonContentComponent } from './dlg-person-content/dlg-person-content.component';

@Injectable({
  providedIn: 'root'
})
export class DlgPersonService {

  constructor(
    private _matDialog:MatDialog
  ) { }

  show(dni:string):MatDialogRef<DlgPersonContentComponent, false|undefined|IPersonGet>{
    return this._matDialog.open(DlgPersonContentComponent, { disableClose: true, data:{dni, insert:true} });
  }

  edit(dni:string):MatDialogRef<DlgPersonContentComponent, false|undefined|IPersonGet>{
    return this._matDialog.open(DlgPersonContentComponent, { disableClose: true, data:{dni, insert:false} });
  }
}
