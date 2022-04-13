import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { IPersonGet } from 'src/app/api/persons/interfaces/IPersonGet';
import { IPersonDialog } from './interfaces/Iperson-dialog';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {

  title:string = "Nuevo registro";
  dni:string = "";
  edit:boolean = false;
  form:FormGroup;

  constructor(
    private _http:HttpClient,
    private _bottomSheet: MatBottomSheet,
    private _apiPersons:ApiPersonsService,
    private matDialogRef:MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?:IPersonDialog|string
  ) {
    this.form = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      dniType: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      sex: new FormControl(''),
      birthDate: new FormControl(null),
      cellphone: new FormControl('', Validators.required),
      email: new FormControl(null),
      address: new FormControl(''),
      eps: new FormControl(null),
      regime: new FormControl(''),
      sisben: new FormControl(null),
      population: new FormControl(null)
    }); 
    
    
    if (data){
      if (typeof data == 'string'){
        this.dni = data;
        this.form.get('dni')?.setValue(data);

        this._apiPersons.get(data).subscribe({
          next: p =>{
            let pv:any = p;
            delete pv.date;
            delete pv.age;
            console.log(p);
            this.form.setValue(p);
            this.edit = true;
          }
        })

      }else{
        this.title = "Editar información";
        let formData:IFormDataPeron = {
          dni: data.dni,
          dniType: data.dniType,
          name: data.name,
          lastName: data.lastName,
          sex: data.sex,
          birthDate: data.birthDate,
          cellphone: data.cellphone,
          email: data.email,
          address: data.address,
          eps: data.eps,
          regime: data.regime,
          sisben: data.sisben,
          population: data.population
        }

        this.form.setValue(formData);
        this.dni = data.dni;
      }
    }else{

    }
  }

  ngOnInit(): void {
  }

  send(){
    this.form.markAllAsTouched();
    if (this.form.valid){
      
      if (this.edit){
        
        this._apiPersons.update(this.dni, this.form.value).subscribe({
          next: p=>{
            this.matDialogRef.close(p);
          }
        });
      }else{

        this._apiPersons.insert(this.form.value).subscribe({
          next:  p=>{
            this.matDialogRef.close(p);
          }
        })
      }
    }else{
      this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `

<!-- <mat-nav-list>
  <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Keep</span>
    <span mat-line>Add to a note</span>
  </a>

  <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Docs</span>
    <span mat-line>Embed in a document</span>
  </a>

  <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Plus</span>
    <span mat-line>Share with your friends</span>
  </a>

  <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Hangouts</span>
    <span mat-line>Show to your coworkers</span>
  </a>
</mat-nav-list> -->
  <div class="bottom-sheet">
    <h2>No se pudo guardar</h2>
    <p>Falta valores por ingresar en el formulario</p>
  <div>`, 
  styleUrls: ['./person-dialog.component.scss']
})

export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

interface IFormDataPeron{
  dni: string,
  dniType: string | undefined,
  name: string | undefined,
  lastName: string | undefined,
  sex: string | undefined | null,
  birthDate: string | undefined | null,
  cellphone: string| undefined | null,
  email: string | undefined | null,
  address: string | undefined | null,
  eps: number | undefined | null,
  regime: number | undefined | null,
  sisben: number | undefined | null,
  population: number | undefined | null
}