import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxDateComponent } from './box-date.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    BoxDateComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule
  ],exports: [
    BoxDateComponent
  ]
})
export class BoxDateModule { }
