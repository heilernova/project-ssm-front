import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlgCaseComponent } from './dlg-case.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DlgCaseObservationModule } from '../dlg-case-observation/dlg-case-observation.module';


@NgModule({
  declarations: [
    DlgCaseComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    PipesModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    DlgCaseObservationModule
  ]
})
export class DlgCaseModule { }
