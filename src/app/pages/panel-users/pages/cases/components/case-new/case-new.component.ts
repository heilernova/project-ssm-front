import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { CasesDataService } from '../../services/cases-data.service';

@Component({
  selector: 'app-case-new',
  templateUrl: './case-new.component.html',
  styleUrls: ['./case-new.component.scss']
})
export class CaseNewComponent implements OnInit {

  inputDocument:FormControl = new FormControl('');
  constructor(
    public _casesData:CasesDataService
  ) { 

  }
  
  ngOnInit(): void {
    // this.inputDocument.valueChanges.pipe(
    //   startWith(""),
    //   map(value => {
    //     console.log("ToFilterValue =>>", value);
    //     return typeof value === "string"
    //       ? '1'
    //       : '2';
    //   })
    // ).subscribe();
  
    // this.inputDocument.valueChanges.subscribe(
    //   res=>{
    //     console.log(res);
    //   }
    // );
  }

  seardDocument(){

  }
}
