import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtnProfileComponent } from './ctn-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CtnProfileComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CtnProfileModule { }
