import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DlgTextBoxContentComponent } from './dlg-text-box-content/dlg-text-box-content.component';

@Injectable({
  providedIn: 'root'
})
export class DlgTextBoxService {

  constructor(
    private _matDialog:MatDialog
  ) { }

  show(title:string, text:string = ''):MatDialogRef<DlgTextBoxContentComponent, undefined|false|string>{
    return this._matDialog.open(DlgTextBoxContentComponent, {data:{title, text}, width: '400px'});
  }
}
