import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Input() salve:boolean = false; 
  @Input() form:FormGroup = new FormGroup({});
  @Input() formControls:{name:string, control:FormControl}[] = [];
  @Output() formData = new EventEmitter<any>()

  @ViewChild('tempoInput') tempoInput!:HTMLInputElement;
  


  inputRadio = new FormControl(null);
  inputText = new FormControl('');

  constructor(
    private _messabe:NvMessageBoxService
  ) {

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

    this.formControls.forEach(control=>{
      this.form.addControl(control.name, control.control);
    })

  }

  addControlOther(control:string){

  }

  setValue(control:string, value:string|number){
    this.form.get(control)?.setValue(value);
  }


  formControlValidIcon(name:string):string{
    if (this.form.disabled){
      return 'block';
    }else{
      let fc = this.form.get(name)?.valid;
      return fc ? 'check' : 'close';
    }
  }
  formControlValidClass(name:string):string{
    if (this.form.disabled){
      return 'b';
    }else{
      let fc = this.form.get(name)?.valid;
      return fc ? 's' : 'n';
    }
  }

  send(){
    this.formData.emit(this.form.value);
  }

}
