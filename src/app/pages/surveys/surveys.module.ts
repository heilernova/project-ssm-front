import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from './surveys.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { SurveysRoutingModule } from './surveys-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SurveyDataModule } from './components/survey-data/survey-data.module';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    SurveysComponent
  ],
  imports: [
    CommonModule,
    SurveysRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    PipesModule,
    SurveyDataModule,
    MatTabsModule
  ]
})
export class SurveysModule { }
