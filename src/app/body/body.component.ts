import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(
    private _user:LoginService
  ) { }

  ngOnInit(): void {
  }

  isLoggout():boolean{
    return this._user.isLoggout();
  }

}
