import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgConfigEpsComponent } from './pg-config-eps.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PgConfigEpsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class PgConfigEpsModule { }
