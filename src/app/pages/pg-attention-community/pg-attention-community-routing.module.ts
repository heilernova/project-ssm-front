import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesActiveComponent } from './components/cases-active/cases-active.component';
import { PgAttentionCommunityComponent } from './pg-attention-community.component';

const routes: Routes = [
  {
    path: '', component:PgAttentionCommunityComponent,
    children: [
      { path: '', redirectTo: 'casos-activos', pathMatch:'full'},
      { path:'casos-activos', component:CasesActiveComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgAttentionCommunityRoutingModule { }
