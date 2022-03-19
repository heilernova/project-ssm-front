import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtnEpsComponent } from './ctn-eps/ctn-eps.component';
import { CtnProfileComponent } from './ctn-profile/ctn-profile.component';
import { CtnSacComponent } from './ctn-sac/ctn-sac.component';
import { PgConfigEpsComponent } from './pg-config-eps/pg-config-eps.component';
import { PgConfigServicesComponent } from './pg-config-services/pg-config-services.component';
import { PgConfigComponent } from './pg-config.component';
const routes: Routes = [
  {
    path: '', component: PgConfigComponent,
    children: [
      { path: 'perfil', component:CtnProfileComponent },
      { path: 'eps', component:CtnEpsComponent },
      { path: 'servico-de-actencion-a-la-comunidad', component:CtnSacComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgConfigRoutingModule { }
