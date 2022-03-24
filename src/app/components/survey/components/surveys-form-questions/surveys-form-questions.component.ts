import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IQuestion } from '../interfaces/questions';

@Component({
  selector: 'app-surveys-form-questions',
  templateUrl: './surveys-form-questions.component.html',
  styleUrls: ['./surveys-form-questions.component.scss']
})
export class SurveysFormQuestionsComponent implements OnInit {
  @Input() questions:IQuestion[] = [];
  @Input() introductionText:string = '';
  form:FormGroup;

  askOthers:{control:string, value:string}[] = [];

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    let i = 0;
    
    this.questions.forEach(element=>{
      i++;
      let formControlName:string = `ask${i.toString().padStart(2, '0')}`;
      element.formControlName = formControlName;
      
      if (element.responseOptionOther){
        this.askOthers.push({control: element.formControlName, value: ''});
        this.form.addControl(formControlName, new FormControl(null, [Validators.required, Validators.pattern("[^'OTRO]")]));
        // this.form.addControl(formControlName, new FormControl(null, [Validators.required]));
      }else{
        
        this.form.addControl(formControlName, new FormControl(null, [Validators.required]));
      }

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

  formControlValid(name:string):boolean|undefined{
    return this.form.get(name)?.valid;
    // let control = this.form.get(name);

    // if (control){
    //   if (control.valid){

    //     if (control.value == "OTRO"){
    //       let otr = this.askOthers.find(x=>x.control = name);
          
    //       if (otr){
    //         return otr.value.length > 0;
    //       }else{
    //         return false;
    //       }
    //     }else{
          
    //       return true;
    //     }

    //   }else{

    //     return false;
    //   }
    // }else{
    //   return false;
    // }
  }
  formControlValue(name:string):string|undefined{
    return this.form.get(name)?.value;
  }


  hiddenOther(control:string):boolean{
    let controlForm = this.form.get(control);
    if (controlForm){
      return controlForm.value != "OTRO";
    }else{
      return false;
    }
  }

  changeOtherControl(formControl:string, event:Event){
    let value = (event.target as HTMLInputElement).value;
   
    let itme = this.askOthers.find(x=>x.control == formControl);
    if (itme){
      itme.value = value;
    }

    console.log('itme');
  }
  send(){
    // console.log(this.form.invalid);

    // this.askOthers.forEach(element=>{
    //   this.form.get(element.control)?.setValue(element.value.length > 0 ? element.value : null );
    // });

    console.log(this.form.valid);
    console.log(this.form.value);
    // console.log(this.askOthers);
  }

}
