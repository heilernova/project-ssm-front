import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private matDialog:MatDialog
  ) { }

  show():MatDialogRef<PersonDialogComponent>{
    return this.matDialog.open(PersonDialogComponent);
  }
}
