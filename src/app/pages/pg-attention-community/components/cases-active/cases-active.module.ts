import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesActiveComponent } from './cases-active.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    CasesActiveComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ]
})
export class CasesActiveModule { }
