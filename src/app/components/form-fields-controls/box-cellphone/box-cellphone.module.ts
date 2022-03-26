import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxCellphoneInput } from './box-cellphone.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BoxCellphoneInput
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    BoxCellphoneInput
  ]
})
export class BoxCellphoneModule { }
