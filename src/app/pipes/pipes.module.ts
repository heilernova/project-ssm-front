import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellphonePipe } from './cellphone.pipe';



@NgModule({
  declarations: [
    CellphonePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CellphonePipe
  ]
})
export class PipesModule { }
