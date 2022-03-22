import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NvMessageBoxService } from 'ng-nova';
import { ApiCasesService } from 'src/app/api/cases/api-cases.service';
import { ApiEpsService } from 'src/app/api/eps/api-eps.service';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { CasesService } from 'src/app/pages/pg-attention-community/services/cases.service';

@Component({
  selector: 'app-dlg-person-content',
  templateUrl: './dlg-person-content.component.html',
  styleUrls: ['./dlg-person-content.component.scss']
})
export class DlgPersonContentComponent implements OnInit {
  listEPS:any[] = [];
  formUser:FormGroup;
  constructor(
    private _cases:CasesService,
    private _matDialogRef:MatDialogRef<DlgPersonContentComponent>,
    private _messageBox:NvMessageBoxService,
    private _apiEps:ApiEpsService,
    private _apiPersons:ApiPersonsService,
    @Inject(MAT_DIALOG_DATA) public data:{dni:string, insert:boolean}
  ) { 
    this.formUser = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      dniType: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      birthDate: new FormControl(null),
      cellphone: new FormControl('', Validators.required),
      email: new FormControl(null),
      address: new FormControl('', Validators.required),
      eps: new FormControl('', Validators.required),
      regime: new FormControl('', Validators.required),
      sisben: new FormControl(null, Validators.required)
    });

    this.formUser.get('dni')?.setValue(this.data.dni);

    this._apiEps.getAll().subscribe({
      next: data =>{
        this.listEPS = data;
      }
    })

    if (!this.data.insert){
      this.formUser.get('dni')?.disable();
    }
  }

  ngOnInit(): void {
  }

  close(){
    if (this.formUser.touched){
      this._messageBox.alert("", '¿Salir sin guardar?',{ confirm:true, disableClose:true })
      .afterClosed().subscribe(
        res=>{
          if (res){
            this._matDialogRef.close();
          }
        }
      );
    }else{
      this._matDialogRef.close();
    }
  }

  send(){
    let data = this.formUser.value;
    let birthDate:null|Date = data.birthDate;

    if (birthDate){
      data.birthDate = `${birthDate.getFullYear()}/${birthDate.getMonth() + 1}/${birthDate.getDate()}`;
    }
    if (data.email == ""){
      data.email = null;
    }

    if (data.sex = ""){
      data.sex = null;
    }

    this._cases.onInsertPerson(data).subscribe({
      next: data =>{
        this._matDialogRef.close(data);
      },error: ()=>{
        this._messageBox.alert("No se pudo realizar el registro", "");
      }
    })
  }

}
