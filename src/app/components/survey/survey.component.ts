import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiEpsService } from 'src/app/api/eps/api-eps.service';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';
import { CellphonePipe } from 'src/app/pipes/cellphone.pipe';
import { DlgPersonService } from '../dlg-person/dlg-person.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  scores:string[] = ['1', '2', '3', '4', '5'];
  dni:string = '';
  formEPS:FormGroup;
  listEPS:any[] = [];
  listSurveyors:{id:number, name:string}[] = [];

  ask2Other = new FormControl('');

  userName:string = "";
  userCellphone:string = "";
  userAddress:string = "";

  constructor(
    private _apiEPS:ApiEpsService,
    private _apiPersons:ApiPersonsService,
    private _person:DlgPersonService,
    private _apiSurveys:ApiSurveysService,
   
  ) {
    this.formEPS = new FormGroup({
      eps: new FormControl(null,Validators.required),
      ask1: new FormControl(null, Validators.required),
      ask2: new FormControl(null, Validators.required),
      ask3: new FormControl(null, Validators.required),
      ask4: new FormControl(null, Validators.required),
      ask5: new FormControl(null, Validators.required),
      ask6: new FormControl(null, Validators.required),
      ask7: new FormControl(null, Validators.required),
      ask8: new FormControl(null, Validators.required),
      ask9: new FormControl(null, Validators.required),
      ask10: new FormControl(null, Validators.required),
      ask11: new FormControl(null, Validators.required),
      ask12: new FormControl(null, Validators.required),
      ask13: new FormControl(null, Validators.required)
    })
    this._apiEPS.getAll().subscribe({
      next: data =>{
        this.listEPS = data;
      }
    })

    this._apiSurveys.getSurveyors().subscribe({
      next: data =>{
        this.listSurveyors = data;
      }
    })
  }

  ngOnInit(): void {
  }

  claerResponse(id:number){
    this.formEPS.get(`ask${id}`)?.setValue(null);
  }
  validDocument(){
    if (this.dni != ""){

      this._apiPersons.get(this.dni).subscribe({
        next: data => {
          this.userName = `${data.name} ${data.lastName}`;
          // this.userCellphone = data.cellphone ;
          this.userCellphone = new CellphonePipe().transform(data.cellphone);
          this.userAddress = data.address;
        },error: ()=>{
          this._person.show(this.dni).afterClosed().subscribe(res=>{
            if (res){
              this.userName = `${res.name} ${res.lastName}`;
            }
          })
        }
      })
    }
  }

  clearUser(){
    this.userCellphone = "";
    this.userAddress = "";
    this.userName = "";
  }

  send(){
    let data:{user:string, surveyor:number, surveys:{ eps?:any}} = {
      user: this.dni,
      surveyor: 1,
      surveys:{
        eps: null
      }
    };

    if (this.formEPS.valid){
      let result = this.formEPS.value;
      if (result.ask2 == '4'){ 
        result.ask2 = this.ask2Other.value
      }
      data.surveys.eps = result;
    }


    console.log(data);
  }
}
