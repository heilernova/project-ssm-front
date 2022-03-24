import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysFormQuestionsComponent } from './surveys-form-questions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SurveysFormQuestionsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule
  ],exports:[
    SurveysFormQuestionsComponent
  ]
})
export class SurveysFormQuestionsModule { }
