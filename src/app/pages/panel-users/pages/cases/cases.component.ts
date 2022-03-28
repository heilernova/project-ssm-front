import { Component, OnInit } from '@angular/core';
import { CasesService } from './services/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  constructor(
    private _cases:CasesService
  ) { }

  ngOnInit(): void {
  }

  newCase(){
    this._cases.new();
  }

}
