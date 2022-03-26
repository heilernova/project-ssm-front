import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiPersonsService } from 'src/app/api/persons/api-persons.service';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';
import { PersonService } from 'src/app/components/person/person.service';
import { CellphonePipe } from 'src/app/pipes/cellphone.pipe';
import { PageService } from 'src/app/services/page.service';
import { ISurveyData } from 'src/assets/surveys/interfaces/Isurvey';
import { suerveyList } from 'src/assets/surveys/surveys-list';

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

  userDataView:{name:string, cellphone:string, address:string} = { name: '', cellphone: '', address: '' };

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

    console.log(this.surveys);
  }

  ngOnInit(): void {
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
            this.userDataView.name = `${person.name} ${person.lastName}`;
            this.userDataView.address = person.address;
            this.userDataView.cellphone = new CellphonePipe().transform(person.cellphone);
  
          },error: ()=>{
            this.loading = false;
            this.dni.enable();
            this._person.show();
          }
        });
      }
    }else{

    }
  }

  clearClient(){
    this.inputDocument.setValue('');
    this.userDataView.address = "";
    this.userDataView.cellphone = "";
    this.userDataView.name = "";
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
  }

  getValidClass(formControl:FormControl):string{
    return formControl.disabled ? 'b' : (formControl.valid ? 's' : 'n');
  }
  getValidIcon(formControl:FormControl):string{
    return formControl.disabled ? 'block' : (formControl.valid ? 'check' : 'close');
  }

}


// const SURVEYS_MENU:{index:number, text:string, icon:string}[] = [
//   {index: 0, text:'EPS', icon:'apartment'},
//   {index: 1, text:'Evaluación a la IPS primaria', icon: 'business'},
//   {index: 2, text:'Hospitalización', icon: 'local_hospital'},
//   {index: 3, text:'Laboratorio', icon: 'vaccines'},
//   {index: 4, text:'Farmacia', icon: 'local_pharmacy'},
//   {index: 5, text:'Medicina', icon: 'medication'},
//   {index: 6, text:'Odontología', icon: 'medication'},
// ]