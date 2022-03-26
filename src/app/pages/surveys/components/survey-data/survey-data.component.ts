import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISurveyData } from 'src/assets/surveys/interfaces/Isurvey';

@Component({
  selector: 'survey-data',
  templateUrl: './survey-data.component.html',
  styleUrls: ['./survey-data.component.scss', './surveys.scss']
})
export class SurveyDataComponent implements OnInit {

  @Input() surveyData:ISurveyData = {
    questions: [],
    name: '',
    formGroup: new FormGroup({}),
    salve: false,
    nameTitle: '',
    icon: '',
    database: '',
    introduction: ''
  };

  indexQuest:number = 0;

  constructor() {




  }

  ngOnInit(): void {
      
      let i:number = 0;
      this.surveyData.questions.forEach(item=>{
      let name:string = "";
      if (item.formControlName){
        name = item.formControlName;
      }else{
        i++;
        name = `ask${i.toString().padStart(2, '0')}`;
      }
      
      this.surveyData.formGroup.addControl(name, item.formControl);
      
      let ii:number = 0;
      item.subQuestions?.forEach(element=>{
        this.surveyData.formGroup.addControl('', element.formControl);
      });
    });
  }



  sendForm(){
    console.log(this.surveyData.formGroup.value);
    this.surveyData.formGroup.disable();
  }

}
