import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseInfoComponent } from './case-info.component';
import { CaseInfoItemComponent } from './case-info-item/case-info-item.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { DlgParagraphBoxModule } from 'src/app/components/dlg-paragraph-box/dlg-paragraph-box.module';
import { MatIconModule } from '@angular/material/icon';
import { PersonService } from 'src/app/components/person/person.service';
import { PersonModule } from 'src/app/components/person/person.module';



@NgModule({
  declarations: [
    CaseInfoComponent,
    CaseInfoItemComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatButtonModule,
    DlgParagraphBoxModule,
    MatIconModule,
    PersonModule
  ],
  exports: [
    CaseInfoComponent
  ]
})
export class CaseInfoModule { }
