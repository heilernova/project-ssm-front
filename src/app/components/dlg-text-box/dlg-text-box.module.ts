import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlgTextBoxContentComponent } from './dlg-text-box-content/dlg-text-box-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DlgTextBoxContentComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class DlgTextBoxModule { }
