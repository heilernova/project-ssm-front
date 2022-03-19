import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlgPersonContentComponent } from './dlg-person-content/dlg-person-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    DlgPersonContentComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class DlgPersonModule { }
