import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDataComponent } from './survey-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RadioButtonMasModule } from './components/radio-button-mas/radio-button-mas.module';



@NgModule({
  declarations: [
    SurveyDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    RadioButtonMasModule
  ],exports:[
    SurveyDataComponent
  ]
})
export class SurveyDataModule { }
