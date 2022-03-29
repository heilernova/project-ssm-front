import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseInfoComponent } from './case-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CaseInfoItemComponent } from '../../../panel-users/pages/cases/components/case-info/case-info-item/case-info-item.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { DlgTextBoxModule } from 'src/app/components/dlg-text-box/dlg-text-box.module';
import { DlgParagraphBoxModule } from 'src/app/components/dlg-paragraph-box/dlg-paragraph-box.module';



@NgModule({
  declarations: [
    CaseInfoComponent,
    // CaseInfoItemComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    PipesModule,
    MatIconModule,
    DlgTextBoxModule,
    DlgParagraphBoxModule
  ]
})
export class CaseInfoModule { }
