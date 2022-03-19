import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtnSacComponent } from './ctn-sac.component';
import { MatButtonModule } from '@angular/material/button';
import { DlgTextBoxModule } from 'src/app/components/dlg-text-box/dlg-text-box.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CtnSacComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    DlgTextBoxModule,
    MatIconModule
  ]
})
export class CtnSacModule { }
