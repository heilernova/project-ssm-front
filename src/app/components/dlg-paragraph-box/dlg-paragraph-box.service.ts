import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContentComponent } from './content/content.component';

@Injectable({
  providedIn: 'root'
})
export class DlgParagraphBoxService {

  constructor(private _matDialog:MatDialog) { }

  show(title:string, text:string = ''):MatDialogRef<ContentComponent, undefined|false|string>{
    return this._matDialog.open(ContentComponent, {data:{title, text}, maxWidth: '500px', width: '100%'});
  }
}
