import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DlgPersonContentComponent } from './dlg-person-content/dlg-person-content.component';

@Injectable({
  providedIn: 'root'
})
export class DlgPersonService {

  constructor(
    private _matDialog:MatDialog
  ) { }

  show():MatDialogRef<DlgPersonContentComponent>{
    return this._matDialog.open(DlgPersonContentComponent);
  }
}
