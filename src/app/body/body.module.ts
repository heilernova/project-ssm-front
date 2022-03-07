import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class BodyModule { }
