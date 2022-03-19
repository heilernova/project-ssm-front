import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgConfigEpsComponent } from './pg-config-eps.component';
import { MatButtonModule } from '@angular/material/button';
import { DlgEpsInfoComponent } from '../ctn-eps/dlg-eps-info/dlg-eps-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    PgConfigEpsComponent,
    DlgEpsInfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ]
})
export class PgConfigEpsModule { }
