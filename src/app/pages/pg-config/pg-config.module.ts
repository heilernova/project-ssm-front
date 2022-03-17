import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgConfigComponent } from './pg-config.component';
import { PgConfigRoutingModule } from './pg-config-routing.module';
import { PgConfigEpsModule } from './pg-config-eps/pg-config-eps.module';
import { PgConfigServicesModule } from './pg-config-services/pg-config-services.module';
import { CellphonePipe } from 'src/app/pipes/cellphone.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    PgConfigComponent
  ],
  imports: [
    CommonModule,
    PgConfigRoutingModule,
    PgConfigEpsModule,
    PgConfigServicesModule,
    PipesModule
  ]
})
export class PgConfigModule { }
