import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtnCaseActivesComponent } from './ctn-case-actives/ctn-case-actives.component';
import { PgAttentionCommunityHistoryComponent } from './pg-attention-community-history/pg-attention-community-history.component';
import { PgAttentionCommunityNewComponent } from './pg-attention-community-new/pg-attention-community-new.component';
import { PgAttentionCommunityComponent } from './pg-attention-community.component';

const routes: Routes = [
  {
    path: '', component: PgAttentionCommunityComponent,
    children: [
      { path: '', redirectTo: 'casos-activos', pathMatch: 'full' },
      { path: 'casos-activos', component: CtnCaseActivesComponent },
      { path: 'nuevo-registro', component: PgAttentionCommunityNewComponent },
      { path: 'historial', component: PgAttentionCommunityHistoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgAttentionCommunityRoutingModule { }
