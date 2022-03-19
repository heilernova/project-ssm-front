import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseNewComponent } from './case-new.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DlgPersonModule } from 'src/app/components/dlg-person/dlg-person.module';


@NgModule({
  declarations: [
    CaseNewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    MatDialogModule,
    DlgPersonModule
  ]
})
export class CaseNewModule { }
