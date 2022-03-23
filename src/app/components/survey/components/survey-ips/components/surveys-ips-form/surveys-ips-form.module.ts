import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysIpsFormComponent } from './surveys-ips-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    SurveysIpsFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports: [
    SurveysIpsFormComponent
  ]
})
export class SurveysIpsFormModule { }
