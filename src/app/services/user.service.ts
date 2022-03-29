import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthComponent } from '../components/auth/auth.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _matDialog:MatDialog
  ) { }


  auth():MatDialogRef<AuthComponent>{
    return this._matDialog.open(AuthComponent, { backdropClass: 'backdrop-login', disableClose:true });
  }

  verify(){
    
  }
}
