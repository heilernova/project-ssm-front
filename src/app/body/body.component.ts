import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(
    private _user:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  isLoggout():boolean{
    return this._user.isLoggout();
  }

  cleseSession(){
    this._user.logout();
    this.router.navigate(['/login']);
  }

}
