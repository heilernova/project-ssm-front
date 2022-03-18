import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlgCaseObservationComponent } from './dlg-case-observation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DlgCaseObservationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class DlgCaseObservationModule { }
