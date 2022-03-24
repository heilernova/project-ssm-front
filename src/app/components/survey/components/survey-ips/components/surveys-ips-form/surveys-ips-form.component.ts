import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IQuestion } from '../../../interfaces/questions';

@Component({
  selector: 'app-surveys-ips-form',
  templateUrl: './surveys-ips-form.component.html',
  styleUrls: ['./surveys-ips-form.component.scss']
})
export class SurveysIpsFormComponent implements OnInit {

  @Input() questions:IQuestion[] = [];
  @Input() title:string = '[]';

  form:FormGroup;
  constructor() { 
    this.form = new FormGroup({});
    
  }

  ngOnInit(): void {
    let i = 0;
    // console.log(this.questions.length);
    this.questions.forEach(element=>{
      i++;
     let formControlName:string = `ask${i.toString().padStart(2, '0')}`;
     element.formControlName = formControlName;
      this.form.addControl(formControlName, new FormControl(null, [Validators.required]));
    });

  }

  formControlValid(name:string):boolean|undefined{
    return this.form.get(name)?.valid;
  }

  send(){
    console.log(this.form.invalid);
  }

}
