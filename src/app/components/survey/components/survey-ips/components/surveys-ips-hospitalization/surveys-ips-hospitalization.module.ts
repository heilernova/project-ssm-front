import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysIpsHospitalizationComponent } from './surveys-ips-hospitalization.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SurveysIpsHospitalizationComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule
  ],exports: [
    SurveysIpsHospitalizationComponent
    
  ]
})
export class SurveysIpsHospitalizationModule { }
