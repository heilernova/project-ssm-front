import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysIpsLaboratoryComponent } from './surveys-ips-laboratory.component';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    SurveysIpsLaboratoryComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule
  ],exports: [
    SurveysIpsLaboratoryComponent
  ]
})
export class SurveysIpsLaboratoryModule { }
