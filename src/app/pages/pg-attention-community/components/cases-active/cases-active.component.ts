import { Component, OnInit } from '@angular/core';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-cases-active',
  templateUrl: './cases-active.component.html',
  styleUrls: ['./cases-active.component.scss']
})
export class CasesActiveComponent implements OnInit {

  constructor(
    private _cases:CasesService
  ) { }

  ngOnInit(): void {
  }

  newCase(){
    this._cases.newCase()
  }
}
