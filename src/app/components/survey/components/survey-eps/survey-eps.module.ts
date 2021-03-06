import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyEpsComponent } from './survey-eps.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DlgPersonModule } from 'src/app/components/dlg-person/dlg-person.module';
import { SurveysFormQuestionsModule } from '../surveys-form-questions/surveys-form-questions.module';



@NgModule({
  declarations: [
    SurveyEpsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    DlgPersonModule,
    FormsModule,
    SurveysFormQuestionsModule,
    ReactiveFormsModule
  ],exports: [
    SurveyEpsComponent
  ]
})
export class SurveyEpsModule { }
