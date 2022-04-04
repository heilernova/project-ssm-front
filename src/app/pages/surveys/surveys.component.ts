import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { IPersonGet } from 'src/app/api/persons/interfaces/IPersonGet';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';
import { PersonService } from 'src/app/components/person/person.service';
import { CellphonePipe } from 'src/app/pipes/cellphone.pipe';
import { PageService } from 'src/app/services/page.service';

import { suerveyList } from 'src/assets/surveys/surveys-list';
import { ISurveyData } from './interfaces/Isurvey';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {

  inputDocument:FormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]);
  inputPollster:FormControl = new FormControl('', [Validators.required]);


  surveys = suerveyList;
  surveyTitle:string = this.surveys[0].nameTitle;
  surveyIndex:number = 0;

  pollsters:{id:number, name:string}[] = [];

  dni:FormControl = new FormControl('', [Validators.pattern('[0-9]+'), Validators.required]);
  disableInpustUserData:boolean = false;
  loading:boolean = false;

  userDataView:IPersonGet = {
    name: '', cellphone: '', address: '',
    dni: '',
    dniType: '',
    date: '',
    lastName: '',
    sex: '',
    birthDate: null,
    age: null,
    email: '',
    eps: 0,
    sisben: 0,
    regime: 0
  };

  constructor(
    public page:PageService,
    private _apiSurveys:ApiSurveysService,
    private _apiPersons:ApiPersonsService,
    private _person:PersonService
  ) { 
    this.page.pageSection = "Encuesta de sactisfacción";
    this._apiSurveys.getPollsters().subscribe({
      next: res =>{
        this.pollsters = res;
      }
    })

    this.dni.valueChanges.subscribe(res=>{
      this.clearClient();
    })
    
    this.surveys[0].formGroup.addControl('user', this.inputPollster);
    // this.surveys[0].salve = true;
    this.surveys[0].formGroup.addControl('dni', this.inputDocument);
  }

  ngOnInit(): void {
  }

  resetForm(){
    let pollster = this.inputPollster.value;
    this.dni.setValue('');
    this.surveys.forEach(survey=>{
      survey.formGroup.reset();
      survey.salve = false;
    });

    this.inputPollster.setValue(pollster);
  }
  searchDocument(){
    if (this.dni.valid){
      
      if (this.dni.value != this.inputDocument.value){
        this.dni.disable();
        this.loading = true;
  
        this._apiPersons.get(this.dni.value).subscribe({
          next: person=>{
            this.loading = false;
            this.dni.enable();
            this.inputDocument.setValue(person.dni);
            this.userDataView = person;
            this.userDataView = person;
          },error: ()=>{
            this.loading = false;
            this.dni.enable();
            this._person.show(this.dni.value).afterClosed().subscribe(person=>{
              if (person){
                this.inputDocument.setValue(person.dni);
                this.userDataView = person;
              }
            });
          }
        });
      }else{
        console.log(this.inputDocument.value);
        this._person.show(this.inputDocument.value.toString()).afterClosed().subscribe(person=>{
          if (person){
            this.inputDocument.setValue(person.dni);
            this.userDataView = person;
          }
        });
      }
    }else{
      
    }
  }

  clearClient(){
    if (this.inputDocument.value){

      this.inputDocument.setValue('');
      this.userDataView.address = "";
      this.userDataView.cellphone = "";
      this.userDataView.name = "";
    }else{
    }
  }

  clientGetName():string{
    return `${this.userDataView.name} ${this.userDataView.lastName}`; 
  }

  clientGetCellphone():string{
    return new CellphonePipe().transform(this.userDataView.cellphone);
  }

  dniKeyUp(event:KeyboardEvent ){
    if (event.key == 'Enter'){
      this.searchDocument();
    }else{
      let value = (event.target as HTMLInputElement).value;
      // console.log(value);
    }

  }

  selectSurvey(index:number, survey:ISurveyData){
    this.surveyTitle = survey.nameTitle;
    this.surveyIndex = index;
    
    // Borramos los controlles
    this.surveys.forEach(survey=>{
      survey.formGroup.removeControl('user');
      survey.formGroup.removeControl('dni');
    });
    
    if (survey.formGroup.enabled){

      survey.formGroup.addControl('user', this.inputPollster);
      survey.formGroup.addControl('dni', this.inputDocument);
    }
    // this.surveys[index].formGroup.removeControl('user');
  }

  getValidClass(formControl:FormControl):string{
    return formControl.disabled ? 'b' : (formControl.valid ? 's' : 'n');
  }
  getValidIcon(formControl:FormControl):string{
    return formControl.disabled ? 'block' : (formControl.valid ? 'check' : 'close');
  }

  sendSurvey(data:ISurveyData){
    this._apiSurveys.salveSurvey(data).subscribe({
      next: res =>{
        data.formGroup.removeControl('user');
        data.formGroup.removeControl('dni');
        data.formGroup.disable();
        data.salve = true;
      }
    })
  }

}