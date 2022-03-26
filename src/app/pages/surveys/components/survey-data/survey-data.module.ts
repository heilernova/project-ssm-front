import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDataComponent } from './survey-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RadioButtonMasModule } from './components/radio-button-mas/radio-button-mas.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SurveyDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    RadioButtonMasModule,
    MatRadioModule,
    MatButtonModule
  ],exports:[
    SurveyDataComponent
  ]
})
export class SurveyDataModule { }
