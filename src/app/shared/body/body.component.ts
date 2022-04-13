import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(
    public page:PageService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  home(){
    this._router.navigate(['']);
  }
}
