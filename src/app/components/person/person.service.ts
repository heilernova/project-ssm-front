import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IPersonDialog } from './person-dialog/interfaces/Iperson-dialog';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private matDialog:MatDialog
  ) { }

  show(data?:string|IPersonDialog):MatDialogRef<PersonDialogComponent>{
    return this.matDialog.open(PersonDialogComponent, { data });
  }
}
