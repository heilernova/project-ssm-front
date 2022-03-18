import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtnCaseActivesComponent } from './ctn-case-actives.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    CtnCaseActivesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ]
})
export class CtnCaseActivesModule { }