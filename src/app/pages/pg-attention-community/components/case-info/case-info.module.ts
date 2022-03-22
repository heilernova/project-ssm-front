import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseInfoComponent } from './case-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CaseInfoItemComponent } from './case-info-item/case-info-item.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CaseInfoComponent,
    CaseInfoItemComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    PipesModule,
    MatIconModule
  ]
})
export class CaseInfoModule { }
