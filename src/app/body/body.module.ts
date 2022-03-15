import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule
  ]
})
export class BodyModule { }
