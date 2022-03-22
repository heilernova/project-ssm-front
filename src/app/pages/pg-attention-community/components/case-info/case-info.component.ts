import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICaseGet } from 'src/app/api/cases/Interfaces/ICase';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.scss']
})
export class CaseInfoComponent implements OnInit {

  constructor(
    private _matDialogRef:MatDialogRef<CaseInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public caseInfo:ICaseGet
  ) { 
    console.log(caseInfo);
  }

  ngOnInit(): void {
  }

}
