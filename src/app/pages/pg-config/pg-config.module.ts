import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgConfigComponent } from './pg-config.component';
import { PgConfigRoutingModule } from './pg-config-routing.module';
import { PgConfigEpsModule } from './pg-config-eps/pg-config-eps.module';



@NgModule({
  declarations: [
    PgConfigComponent
  ],
  imports: [
    CommonModule,
    PgConfigRoutingModule,
    PgConfigEpsModule
  ]
})
export class PgConfigModule { }
