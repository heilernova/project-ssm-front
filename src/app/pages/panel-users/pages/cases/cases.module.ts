import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CaseNewModule } from './components/case-new/case-new.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CaseInfoModule } from './components/case-info/case-info.module';



@NgModule({
  declarations: [
    CasesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CaseNewModule,
    MatTableModule,
    ReactiveFormsModule,
    CaseInfoModule
  ]
})
export class CasesModule { }
