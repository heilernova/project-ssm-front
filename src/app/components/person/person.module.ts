import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BottomSheetOverviewExampleSheet, PersonDialogComponent } from './person-dialog/person-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BoxDateModule } from './person-dialog/components/box-date/box-date.module';
import { BoxCellphoneModule } from '../form-fields-controls/box-cellphone/box-cellphone.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    PersonDialogComponent,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    BoxDateModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatListModule
    // BoxCellphoneModule
  ]
})
export class PersonModule { }
