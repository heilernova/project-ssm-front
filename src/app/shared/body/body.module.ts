import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { FooterModule } from '../footer/footer.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    AppRoutingModule
  ]
})
export class BodyModule { }
