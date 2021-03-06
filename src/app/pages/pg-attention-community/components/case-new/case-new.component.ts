import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NvMessageBoxService } from 'ng-nova';
import { ApiCasesService } from 'src/app/api/cases/api-cases.service';
import { ICaseUserGet } from 'src/app/api/cases/Interfaces/ICaseUserGet';
import { DlgPersonService } from 'src/app/components/dlg-person/dlg-person.service';
import { CasesService } from '../../services/cases.service';
import { CaseUser } from '../models/case-user';

@Component({
  selector: 'app-case-new',
  templateUrl: './case-new.component.html',
  styleUrls: ['./case-new.component.scss']
})
export class CaseNewComponent implements OnInit {
  servicesList:{id:number, description:string}[] = []

  client:CaseUser = new CaseUser();

  dni:string = '';
  formReq:FormGroup;
  constructor(
    private _cases:CasesService,
    private _apiCases:ApiCasesService,
    private _person:DlgPersonService,
    private _matDialogRef:MatDialogRef<CaseNewComponent>,
    private _messabeBox:NvMessageBoxService
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
      palenRaizal: new FormControl(false),
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

  clearClient(){
    this.client.clear();
    this.formReq.disable();
  }

  validDocument(){
    this._apiCases.getPerson(this.dni).subscribe({
      next: data => {
        console.log(data);
        this.client.setCaseUser(data);
        this.formReq.enable();
      },error: ()=>{
        this.client.clear();
        this.formReq.disable();
        this._person.show(this.dni).afterClosed().subscribe(
          res => {
            if (res){
              this.client.setInfoPerson(res);
              this.formReq.enable();
            }
          }
        );
      }
    })
  }


  sendForm(){
    let dataForm = this.formReq.value;
    dataForm.dni = this.client?.dni;
    dataForm.eps = this.client?.eps;
    dataForm.sisben = this.client?.sisben;
    dataForm.regime = this.client?.regime;

    this._apiCases.insert(dataForm).subscribe({
      next: data => {
        this._matDialogRef.close(data);
      },error:()=>{
        this._messabeBox.error("Error con el registro");
      }
    })
  }

}
