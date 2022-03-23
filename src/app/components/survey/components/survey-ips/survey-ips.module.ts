import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyIpsComponent } from './survey-ips.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SurveysIpsHospitalizationModule } from './components/surveys-ips-hospitalization/surveys-ips-hospitalization.module';
import { MatRadioModule } from '@angular/material/radio';
import { SurveysIpsLaboratoryModule } from './components/surveys-ips-laboratory/surveys-ips-laboratory.module';
import { SurveysIpsFormModule } from './components/surveys-ips-form/surveys-ips-form.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    SurveyIpsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatRadioModule,
    SurveysIpsHospitalizationModule,
    SurveysIpsLaboratoryModule,
    SurveysIpsFormModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],exports:[
    SurveyIpsComponent
    
  ]
})
export class SurveyIpsModule { }
