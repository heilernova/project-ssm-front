import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(
    private _login:LoginService,
    private _router:Router
  ) {

    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });  
  }

  ngOnInit(): void {
  }

  sendForm(){
    this._login.onAuthenticate(this.form.value).subscribe({
      next:(data) =>{
        console.log(data);
        // this._login.login(data);
        // this._router.navigate(['']);
      }, error: e=>{
        console.log(e);
      }
    });
  }

}
