import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ]
})
export class BodyModule { }
