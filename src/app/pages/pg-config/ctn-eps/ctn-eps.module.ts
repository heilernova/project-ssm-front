import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtnEpsComponent } from './ctn-eps.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DlgEpsInfoComponent } from './dlg-eps-info/dlg-eps-info.component';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    CtnEpsComponent,
    DlgEpsInfoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule
  ]
})
export class CtnEpsModule { }
