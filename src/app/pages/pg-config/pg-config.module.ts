import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgConfigComponent } from './pg-config.component';
import { PgConfigRoutingModule } from './pg-config-routing.module';



@NgModule({
  declarations: [
    PgConfigComponent
  ],
  imports: [
    CommonModule,
    PgConfigRoutingModule
  ]
})
export class PgConfigModule { }
