import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPersonGet } from 'src/app/api/persons/interfaces/IPersonGet';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {

  title:string = "Nuevo registro";

  form:FormGroup;

  constructor(
    private matDialogRef:MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?:IPersonDialog
  ) {
    this.form = new FormGroup({
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
      sisben: new FormControl(null, Validators.required),
      population: new FormControl(null, Validators.required)
    }); 
    
    if (data){
      this.title = "Editar información";
    }else{

    }
  }

  ngOnInit(): void {
  }

}

interface IPersonDialog{
  dni?:string,
  name?:string,
  lastName?:string,
  sex?:string|null,
  birthDate?:string|null,
  cellphone?:string,
  email?:string|null,
  address?:string,
  eps?:number,
  sisben?:number,
  regime?:number
}