import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { NvMessageBoxService } from 'ng-nova';
import { IQuestion } from '../interfaces/questions';

@Component({
  selector: 'app-surveys-form-questions',
  templateUrl: './surveys-form-questions.component.html',
  styleUrls: ['./surveys-form-questions.component.scss']
})
export class SurveysFormQuestionsComponent implements OnInit, AfterViewInit {
  @Input() questions:IQuestion[] = [];
  @Input() introductionText:string = '';

  @ViewChild('tempoInput') tempoInput!:HTMLInputElement
  form:FormGroup;


  inputRadio = new FormControl(null);
  inputText = new FormControl('');

  constructor(
    private _messabe:NvMessageBoxService
  ) {
    this.form = new FormGroup({});
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    let i = 0;
    
    this.questions.forEach(element=>{
      i++;
      let formControlName:string = `ask${i.toString().padStart(2, '0')}`;
      element.formControlName = formControlName;

      this.form.addControl(formControlName, new FormControl(null, [Validators.required]));

      if (element.subquestions){
        element.subquestions.forEach(element=>{
          i++;
          let formControlName:string = `ask${i.toString().padStart(2, '0')}`;
          element.formControlName = formControlName;
          this.form.addControl(formControlName, new FormControl(null, [Validators.required]));
        });
      }
    });

  }

  addControlOther(control:string){

  }

  setValue(control:string, value:string|number){
    this.form.get(control)?.setValue(value);
  }


  formControlValid(name:string):boolean|undefined{
    return this.form.get(name)?.valid;
  }

  send(){
    console.log(this.form.value);
    // console.log(this.inputRadio.valid);
    // if (this.form.valid){

    // }else{
    //   this._messabe.alert('Faltan preguntas por responder');
    // }
  }

}
