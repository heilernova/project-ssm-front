import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyIpsComponent } from './survey-ips.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SurveysFormQuestionsModule } from '../surveys-form-questions/surveys-form-questions.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    SurveyIpsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    SurveysFormQuestionsModule
  ],exports:[
    SurveyIpsComponent
    
  ]
})
export class SurveyIpsModule { }
