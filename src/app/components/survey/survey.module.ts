import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SurveyEpsModule } from './components/survey-eps/survey-eps.module';
import { SurveyIpsModule } from './components/survey-ips/survey-ips.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    SurveyEpsModule,
    SurveyIpsModule,
    MatIconModule,
    PipesModule
  ],exports: [
    SurveyComponent
  ]
})
export class SurveyModule { }
