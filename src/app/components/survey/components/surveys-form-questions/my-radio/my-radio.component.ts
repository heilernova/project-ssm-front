import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-radio',
  templateUrl: './my-radio.component.html',
  styleUrls: ['./my-radio.component.scss']
})
export class MyRadioComponent implements OnInit {
  @Input() options:{code:string|number,text:string}[] = [];
  @Input() disable:boolean = false;
  @Output() emitValue = new EventEmitter<string|number>();


  selectOption:string = "";
  hiddenInput:boolean = true;

  inputText:string = "";
  constructor() { }
 
  ngOnInit(): void {
    
  }

  emit(text:string|number){
    this.emitValue.emit(text);
  }

  change(){
    this.emit(this.inputText);
  }
  clickOther(){
    this.emit(this.inputText)
  
  }

}