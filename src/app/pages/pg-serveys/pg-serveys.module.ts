import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgServeysComponent } from './pg-serveys.component';
import { SurveyModule } from 'src/app/components/survey/survey.module';
import { PgServeysRoutingModule } from './pg-serveys-routing.module';



@NgModule({
  declarations: [
    PgServeysComponent
  ],
  imports: [
    CommonModule,
    PgServeysRoutingModule,
    SurveyModule
  ]
})
export class PgServeysModule { }
