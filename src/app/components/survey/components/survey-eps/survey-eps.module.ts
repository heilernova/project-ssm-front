import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyEpsComponent } from './survey-eps.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DlgPersonModule } from 'src/app/components/dlg-person/dlg-person.module';



@NgModule({
  declarations: [
    SurveyEpsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    ReactiveFormsModule,
    DlgPersonModule,
    FormsModule
  ],exports: [
    SurveyEpsComponent
  ]
})
export class SurveyEpsModule { }
