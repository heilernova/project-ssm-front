import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './pages/cases/cases.component';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { PanelUsersComponent } from './panel-users.component';

const routes: Routes = [
  {
    path: '', component: PanelUsersComponent,
    children: [
      { path: '', redirectTo: 'servicio-de-atencion-a-la-comunidad', pathMatch: 'full' },
      { path: 'servicio-de-atencion-a-la-comunidad', component:CasesComponent },
      { path: 'encuestas', component:SurveysComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelUsersRoutingModule { }
