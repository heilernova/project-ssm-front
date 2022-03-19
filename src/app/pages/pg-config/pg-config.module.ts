import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgConfigComponent } from './pg-config.component';
import { PgConfigRoutingModule } from './pg-config-routing.module';
import { PgConfigServicesModule } from './pg-config-services/pg-config-services.module';
import { CellphonePipe } from 'src/app/pipes/cellphone.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CtnProfileModule } from './ctn-profile/ctn-profile.module';
import { CtnEpsModule } from './ctn-eps/ctn-eps.module';



@NgModule({
  declarations: [
    PgConfigComponent
  ],
  imports: [
    CommonModule,
    PgConfigRoutingModule,
    PipesModule,
    CtnProfileModule,
    CtnEpsModule
  ]
})
export class PgConfigModule { }
