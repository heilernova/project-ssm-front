import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgConfigEpsComponent } from './pg-config-eps/pg-config-eps.component';
import { PgConfigComponent } from './pg-config.component';
const routes: Routes = [
  {
    path: '', component: PgConfigComponent,
    children: [
      {path: 'eps', component:PgConfigEpsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgConfigRoutingModule { }
