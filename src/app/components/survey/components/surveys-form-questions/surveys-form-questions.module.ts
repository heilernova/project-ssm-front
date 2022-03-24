import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysFormQuestionsComponent } from './surveys-form-questions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MyRadioComponent } from './my-radio/my-radio.component';



@NgModule({
  declarations: [
    SurveysFormQuestionsComponent,
    MyRadioComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule
  ],exports:[
    SurveysFormQuestionsComponent
  ]
})
export class SurveysFormQuestionsModule { }
