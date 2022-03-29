import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hiddenPassword:boolean = true;
  form:FormGroup;
  constructor(
    private _login:LoginService,
    private _dialogRef:MatDialogRef<AuthComponent>
  ) { 
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  send(){
    this._login.onAuthenticate(this.form.value).subscribe({
      next: res =>{
        this._login.login(res);
        this._dialogRef.close(false);
      }
    })
  }

}
