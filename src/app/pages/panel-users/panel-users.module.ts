import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelUsersRoutingModule } from './panel-users-routing.module';
import { PanelUsersComponent } from './panel-users.component';
import { MatIconModule } from '@angular/material/icon';
import { CasesModule } from './pages/cases/cases.module';
import { SurveysModule } from './pages/surveys/surveys.module';


@NgModule({
  declarations: [
    PanelUsersComponent
  ],
  imports: [
    CommonModule,
    PanelUsersRoutingModule,
    MatIconModule,
    CasesModule,
    SurveysModule
  ]
})
export class PanelUsersModule { }
