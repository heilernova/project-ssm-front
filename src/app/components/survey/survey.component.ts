import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiEpsService } from 'src/app/api/eps/api-eps.service';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { IPersonGet } from 'src/app/api/persons/interfaces/IPersonGet';
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

  client:IPersonGet|undefined = undefined; 

  listSurveyors:{id:number, name:string}[] = [];
  userName:string = "";
  userCellphone:string = "";
  userAddress:string = "";

  surveys:IServerValid = {
    eps	: { answered: false, salve: false, form: new FormGroup({})}
  }

  constructor(
    private _apiEPS:ApiEpsService,
    private _apiPersons:ApiPersonsService,
    private _person:DlgPersonService,
    private _apiSurveys:ApiSurveysService,
   
  ) {
    this._apiSurveys.getSurveyors().subscribe({next: data=>{ this.listSurveyors = data;}})
  }

  ngOnInit(): void {
  }


  validDocument(){
    if (this.dni != ""){

      this._apiPersons.get(this.dni).subscribe({
        next: data => {

          // Si el cliente exite
          this.userName = `${data.name} ${data.lastName}`;
          this.userCellphone = new CellphonePipe().transform(data.cellphone);
          this.userAddress = data.address;

          this.client = data;
        },error: ()=>{

          // Si no existe lo regitramos.
          this._person.show(this.dni).afterClosed().subscribe(res=>{
            if (res){

              this.client = res;
              this.userName = `${res.name} ${res.lastName}`;
            }
          })
        }
      })
    }
  }

  disableSurveys():boolean{
    return this.client == undefined;
  }

  clearUser(){
    this.client = undefined;
    this.userCellphone = "";
    this.userAddress = "";
    this.userName = "";
  }

  send(){
    console.log();
  }
  sendEPS(data:any){
    console.log(data);
    this.surveys.eps.salve = true;
    this.surveys.eps.form.disable();
    // this._apiSurveys.postEPS(data).subscribe({
    //   next: data =>{
    //     this.surveys.eps.answered = true;
    //     this.surveys.eps.salve = true;
    //   }
    // })
  }
}


interface IServerValid{
  eps:{answered: boolean;salve: boolean, form:FormGroup}
}