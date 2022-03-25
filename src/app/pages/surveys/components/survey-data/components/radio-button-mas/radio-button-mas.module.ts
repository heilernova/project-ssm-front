import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonMasComponent } from './radio-button-mas.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RadioButtonMasComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    RadioButtonMasComponent
  ]
})
export class RadioButtonMasModule { }
