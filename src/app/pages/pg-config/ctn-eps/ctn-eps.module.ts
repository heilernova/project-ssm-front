import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtnEpsComponent } from './ctn-eps.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CtnEpsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class CtnEpsModule { }
