import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysIpsFormComponent } from './surveys-ips-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SurveysIpsFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    SurveysIpsFormComponent
  ]
})
export class SurveysIpsFormModule { }
