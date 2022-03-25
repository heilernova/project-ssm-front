import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'survey-radio-button-mas',
  templateUrl: './radio-button-mas.component.html',
  styleUrls: ['./radio-button-mas.component.scss', '../../surveys.scss']
})
export class RadioButtonMasComponent implements OnInit, OnChanges {
  @Input() options:{code:string|number,text:string}[] = [];
  @Input() formControlQuestion:FormControl = new FormControl();
  @Input() disable:boolean = false;


  hiddenInputText:boolean = true;
  inputText = new FormControl('', Validators.required);
  inputRadio = new FormControl('', Validators.required);
  radioValue:string|number|undefined = undefined;

  constructor() { 

    this.inputText.valueChanges.subscribe(
      res=>{

        if (this.inputRadio.value == 0){
          this.formControlQuestion.setValue(res);
        }
      }
    )

    this.inputRadio.valueChanges.subscribe(
      res=>{
        
        if (res){
          if (res > 0){
            this.formControlQuestion.setValue(res);
            this.hiddenInputText = true;
          }else{
            this.formControlQuestion.setValue(this.inputText.value);
            this.hiddenInputText = false;
          }
        }else{
          this.hiddenInputText = true;
        }
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.disable){
      this.inputRadio.disable();
      this.inputText.disable();
    }else{
      this.inputRadio.enable();
      this.inputText.enable();
    }
  }


  ngOnInit(): void {
  }

  setValue(){
    
  }

}
