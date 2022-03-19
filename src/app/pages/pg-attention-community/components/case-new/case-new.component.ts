import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DlgPersonService } from 'src/app/components/dlg-person/dlg-person.service';
import { ICasePerson } from '../../interfaces/ICasePerson';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-case-new',
  templateUrl: './case-new.component.html',
  styleUrls: ['./case-new.component.scss']
})
export class CaseNewComponent implements OnInit {
  servicesList:{id:number, description:string}[] = []

  client:ICasePerson|undefined = undefined;

  dni:string = '';
  formReq:FormGroup;
  constructor(
    private _cases:CasesService,
    private _person:DlgPersonService
  ) { 

    this.formReq = new FormGroup({
      service: new FormControl('', Validators.required),
      accompaniment: new FormControl('', Validators.required),
      olderAdult: new FormControl(false),
      disabled: new FormControl(false),
      pregnant: new FormControl(false),
      womenHeadHousehold: new FormControl(false),
      afrodescendent: new FormControl(false),
      lgtbi: new FormControl(false),
      victim: new FormControl(false),
      displaced: new FormControl(false),
      demobilized: new FormControl(false),
      reinserted: new FormControl(false),
      palenRaizan: new FormControl(false),
      roomGintano: new FormControl(false),
      nnaNunaccompaniedAdult: new FormControl(false)
    });
    this.formReq.disable();
  }

  ngOnInit(): void {
    this._cases.onGetServices().subscribe({
      next: data =>{
        this.servicesList = data;
        
      }
    })
  }

  validDocument(){
    this._cases.onGetPerson(this.dni).subscribe({
      next: data => {
        console.log(data);
        this.client = data;
        this.formReq.enable();
      },error: ()=>{
        this._person.show();
      }
    })
  }

}
