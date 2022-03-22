import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from 'src/app/components/survey/survey.component';
import { PgServeysComponent } from './pg-serveys.component';
const routes: Routes = [
  {
    path: '', component: PgServeysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgServeysRoutingModule { }
