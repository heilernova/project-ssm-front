import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { BodyComponent } from './shared/body/body.component';

const routes: Routes = [
  {
    path: '', component:BodyComponent,
    children: [
      { path: 'encuesta-de-satisfaccion', loadChildren:()=>import('./pages/surveys/surveys.module').then(c=>c.SurveysModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
